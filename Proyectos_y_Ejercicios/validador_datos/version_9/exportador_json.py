import json
import pandas as pd
import logging
from typing import Dict, Any
from datetime import datetime


logger = logging.getLogger(__name__)


def dataframe_a_json(
    df: pd.DataFrame,
    config: Dict[str, Any],
    tipo_datos: str = "validos"
) -> Dict[str, Any]:
    """
    Convierte un DataFrame a estructura JSON.

    Args:
        df: DataFrame a convertir
        config: Configuración de exportación JSON
        tipo_datos: Tipo de datos ("validos" o "invalidos")

    Returns:
        Dict[str, Any]: Estructura JSON
    """
    # Convertir DataFrame a lista de diccionarios
    datos = df.to_dict('records')

    # Crear estructura base
    estructura = {
        "datos": datos,
        "total_registros": len(datos),
        "tipo": tipo_datos
    }

    # Agregar metadatos si está habilitado
    if config.get('incluir_metadatos', True):
        estructura["metadatos"] = {
            "fecha_exportacion": datetime.now().strftime(
                config.get('formato_fecha', '%Y-%m-%d %H:%M:%S')
            ),
            "columnas": list(df.columns),
            "configuracion": {
                "indentacion": config.get('indentacion', 2),
                "formato_fecha": config.get('formato_fecha', '%Y-%m-%d %H:%M:%S')
            }
        }

    return estructura


def exportar_a_json(
    df: pd.DataFrame,
    archivo_salida: str,
    config: Dict[str, Any],
    tipo_datos: str = "validos"
) -> None:
    """
    Exporta un DataFrame a archivo JSON.

    Args:
        df: DataFrame a exportar
        archivo_salida: Ruta del archivo de salida
        config: Configuración de exportación JSON
        tipo_datos: Tipo de datos ("validos" o "invalidos")

    Raises:
        Exception: Si hay error al escribir el archivo
    """
    try:
        if df.empty:
            logger.warning(f"No hay datos para exportar a {archivo_salida}")
            return

        # Crear estructura JSON
        estructura = dataframe_a_json(df, config, tipo_datos)

        # Configurar indentación
        indentacion = config.get('indentacion', 2)

        # Escribir archivo
        with open(archivo_salida, 'w', encoding='utf-8') as archivo:
            json.dump(
                estructura,
                archivo,
                indent=indentacion,
                ensure_ascii=False
            )

        logger.info(f"Datos exportados a JSON: {archivo_salida}")

    except Exception as e:
        logger.error(f"Error al exportar a JSON: {e}")
        raise
