import logging
from typing import Any, Dict, List, Tuple

import pandas as pd
from config import Configuracion
from exportador_json import exportar_a_json
from exportador_xml import exportar_a_xml
from validadores import ErrorValidacion, validar_ip, validar_ruta_script

logger = logging.getLogger(__name__)


def validar_fila(
    row: pd.Series, config: Dict[str, Any]
) -> Tuple[bool, List[ErrorValidacion]]:
    """
    Valida una fila completa del DataFrame.

    Args:
        row: La fila a validar
        config: Configuración de validaciones

    Returns:
        Tuple[bool, List[ErrorValidacion]]: (es_válida, lista_errores)
    """
    errores = []
    ip_valida, mensaje_ip = validar_ip(row["ip"], config["ip"])
    ruta_valida, mensaje_ruta = validar_ruta_script(
        row["ruta_script"], config["ruta_script"]
    )

    if not ip_valida:
        errores.append(
            ErrorValidacion(
                fila=row.name + 1, campo="ip", valor=row["ip"], mensaje=mensaje_ip
            )
        )

    if not ruta_valida:
        errores.append(
            ErrorValidacion(
                fila=row.name + 1,
                campo="ruta_script",
                valor=row["ruta_script"],
                mensaje=mensaje_ruta,
            )
        )

    return len(errores) == 0, errores


def procesar_archivo(
    config: Configuracion,
) -> Tuple[pd.DataFrame, pd.DataFrame, List[ErrorValidacion]]:
    """
    Procesa un archivo CSV y separa los datos válidos de los inválidos.

    Args:
        config: Configuración de la aplicación

    Returns:
        Tuple[pd.DataFrame, pd.DataFrame, List[ErrorValidacion]]:
            (df_validos, df_invalidos, errores)
    """
    logger.info(f"Procesando archivo: {config.archivo_entrada}")
    df = pd.read_csv(config.archivo_entrada)
    logger.info(f"Archivo cargado: {len(df)} filas")

    errores_totales: List[ErrorValidacion] = []
    filas_validas = []
    filas_invalidas = []

    for index, row in df.iterrows():
        es_valida, errores = validar_fila(row, config.validaciones)
        errores_totales.extend(errores)

        if es_valida:
            filas_validas.append(row)
        else:
            filas_invalidas.append(row)

    df_validos = pd.DataFrame(filas_validas)
    df_invalidos = pd.DataFrame(filas_invalidas)

    logger.info(
        f"Procesamiento completado: {len(df_validos)} válidas, "
        f"{len(df_invalidos)} inválidas"
    )
    return df_validos, df_invalidos, errores_totales


def exportar_resultados(
    df_validos: pd.DataFrame, df_invalidos: pd.DataFrame, config: Configuracion
) -> None:
    """
    Exporta los resultados a archivos CSV, XML y JSON.

    Args:
        df_validos: DataFrame con datos válidos
        df_invalidos: DataFrame con datos inválidos
        config: Configuración de la aplicación
    """
    # Exportar a CSV
    if not df_validos.empty:
        df_validos.to_csv(config.archivo_validos, index=False)
        logger.info(f"Datos válidos guardados en '{config.archivo_validos}'")

    if not df_invalidos.empty:
        df_invalidos.to_csv(config.archivo_invalidos, index=False)
        logger.info(f"Datos inválidos guardados en '{config.archivo_invalidos}'")

    # Exportar a XML si está habilitado
    if config.exportacion.get("xml", {}).get("habilitada", False):
        try:
            exportar_a_xml(
                df_validos, config.archivo_xml_validos, config.exportacion["xml"]
            )
            exportar_a_xml(
                df_invalidos, config.archivo_xml_invalidos, config.exportacion["xml"]
            )
        except Exception as e:
            logger.error(f"Error al exportar a XML: {e}")
            raise

    # Exportar a JSON si está habilitado
    if config.exportacion.get("json", {}).get("habilitada", False):
        try:
            exportar_a_json(
                df_validos,
                config.archivo_json_validos,
                config.exportacion["json"],
                "validos",
            )
            exportar_a_json(
                df_invalidos,
                config.archivo_json_invalidos,
                config.exportacion["json"],
                "invalidos",
            )
        except Exception as e:
            logger.error(f"Error al exportar a JSON: {e}")
            raise
