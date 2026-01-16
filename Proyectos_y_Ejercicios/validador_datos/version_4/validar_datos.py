import pandas as pd
import ipaddress
import os
from dataclasses import dataclass
from typing import List, Dict

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

def main():
    try:
        df = pd.read_csv('../datos.csv')
        print("Datos cargados exitosamente:")
        print(df)

        errores: List[ErrorValidacion] = []

        # Validar IPs y rutas de script
        print("\nValidando datos...")
        for index, row in df.iterrows():
            ip_valida, mensaje_ip = validar_ip(row['ip'])
            ruta_valida, mensaje_ruta = validar_ruta_script(row['ruta_script'])

            if not ip_valida:
                errores.append(ErrorValidacion(
                    fila=index + 1,
                    campo='ip',
                    valor=row['ip'],
                    mensaje=mensaje_ip
                ))

            if not ruta_valida:
                errores.append(ErrorValidacion(
                    fila=index + 1,
                    campo='ruta_script',
                    valor=row['ruta_script'],
                    mensaje=mensaje_ruta
                ))

        # Mostrar errores
        if errores:
            print("\nErrores encontrados:")
            for error in errores:
                print(f"\nFila {error.fila}:")
                print(f"Campo: {error.campo}")
                print(f"Valor: {error.valor}")
                print(f"Error: {error.mensaje}")
        else:
            print("\nNo se encontraron errores en los datos.")

    except Exception as e:
        print(f"Error al leer el archivo: {e}")

if __name__ == "__main__":
    main()
