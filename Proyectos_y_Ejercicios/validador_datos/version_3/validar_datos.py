import pandas as pd
import ipaddress
import os

def validar_ip(ip):
    try:
        ipaddress.IPv4Address(ip)
        return True
    except ipaddress.AddressValueError:
        return False

def validar_ruta_script(ruta):
    # Verificar que termine en .sh
    return ruta.endswith('.sh')

def main():
    try:
        df = pd.read_csv('../datos.csv')
        print("Datos cargados exitosamente:")
        print(df)

        # Validar IPs y rutas de script
        print("\nValidando datos...")
        for index, row in df.iterrows():
            ip_valida = validar_ip(row['ip'])
            ruta_valida = validar_ruta_script(row['ruta_script'])

            print(f"\nFila {index + 1}:")
            print(f"IP: {row['ip']} - {'Válida' if ip_valida else 'Inválida'}")
            print(f"Ruta: {row['ruta_script']} - {'Válida' if ruta_valida else 'Inválida'}")

    except Exception as e:
        print(f"Error al leer el archivo: {e}")

if __name__ == "__main__":
    main()
