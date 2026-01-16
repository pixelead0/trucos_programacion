import pandas as pd
import ipaddress
import os
from dataclasses import dataclass
from typing import List, Dict, Tuple

@dataclass
class ErrorValidacion:
    fila: int
    campo: str
    valor: str
    mensaje: str

def validar_ip(ip):
    try:
        ipaddress.IPv4Address(ip)
        return True, None
    except ipaddress.AddressValueError:
        return False, "IP inválida: debe ser una dirección IPv4 válida"

def validar_ruta_script(ruta):
    if not ruta.endswith('.sh'):
        return False, "La ruta debe terminar en .sh"
    return True, None

def validar_fila(row: pd.Series) -> Tuple[bool, List[ErrorValidacion]]:
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

def main():
    try:
        df = pd.read_csv('../datos.csv')
        print("Datos cargados exitosamente:")
        print(df)

        errores_totales: List[ErrorValidacion] = []
        filas_validas = []
        filas_invalidas = []

        # Validar cada fila
        print("\nValidando datos...")
        for index, row in df.iterrows():
            es_valida, errores = validar_fila(row)
            errores_totales.extend(errores)

            if es_valida:
                filas_validas.append(row)
            else:
                filas_invalidas.append(row)

        # Crear DataFrames separados
        df_validos = pd.DataFrame(filas_validas)
        df_invalidos = pd.DataFrame(filas_invalidas)

        # Mostrar resultados
        print("\nResultados de la validación:")
        print(f"Total de filas: {len(df)}")
        print(f"Filas válidas: {len(df_validos)}")
        print(f"Filas inválidas: {len(df_invalidos)}")

        if errores_totales:
            print("\nErrores encontrados:")
            for error in errores_totales:
                print(f"\nFila {error.fila}:")
                print(f"Campo: {error.campo}")
                print(f"Valor: {error.valor}")
                print(f"Error: {error.mensaje}")

        # Guardar resultados
        if not df_validos.empty:
            df_validos.to_csv('datos_validos.csv', index=False)
            print("\nDatos válidos guardados en 'datos_validos.csv'")

        if not df_invalidos.empty:
            df_invalidos.to_csv('datos_invalidos.csv', index=False)
            print("Datos inválidos guardados en 'datos_invalidos.csv'")

    except Exception as e:
        print(f"Error al leer el archivo: {e}")

if __name__ == "__main__":
    main()
