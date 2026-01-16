import pandas as pd
from typing import List, Tuple
from validadores import ErrorValidacion, validar_ip, validar_ruta_script

def validar_fila(row: pd.Series) -> Tuple[bool, List[ErrorValidacion]]:
    """
    Valida una fila completa del DataFrame.

    Args:
        row: La fila a validar

    Returns:
        Tuple[bool, List[ErrorValidacion]]: (es_válida, lista_errores)
    """
    errores = []
    ip_valida, mensaje_ip = validar_ip(row['ip'])
    ruta_valida, mensaje_ruta = validar_ruta_script(row['ruta_script'])

    if not ip_valida:
        errores.append(ErrorValidacion(
            fila=row.name + 1,
            campo='ip',
            valor=row['ip'],
            mensaje=mensaje_ip
        ))

    if not ruta_valida:
        errores.append(ErrorValidacion(
            fila=row.name + 1,
            campo='ruta_script',
            valor=row['ruta_script'],
            mensaje=mensaje_ruta
        ))

    return len(errores) == 0, errores

def procesar_archivo(ruta_archivo: str) -> Tuple[pd.DataFrame, pd.DataFrame, List[ErrorValidacion]]:
    """
    Procesa un archivo CSV y separa los datos válidos de los inválidos.

    Args:
        ruta_archivo: Ruta al archivo CSV a procesar

    Returns:
        Tuple[pd.DataFrame, pd.DataFrame, List[ErrorValidacion]]:
            (df_validos, df_invalidos, errores)
    """
    df = pd.read_csv(ruta_archivo)
    errores_totales: List[ErrorValidacion] = []
    filas_validas = []
    filas_invalidas = []

    for index, row in df.iterrows():
        es_valida, errores = validar_fila(row)
        errores_totales.extend(errores)

        if es_valida:
            filas_validas.append(row)
        else:
            filas_invalidas.append(row)

    df_validos = pd.DataFrame(filas_validas)
    df_invalidos = pd.DataFrame(filas_invalidas)

    return df_validos, df_invalidos, errores_totales
