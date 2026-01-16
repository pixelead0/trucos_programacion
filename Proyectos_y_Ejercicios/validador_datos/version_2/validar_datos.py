import pandas as pd
import ipaddress

def validar_ip(ip):
    try:
        # Intentar crear un objeto IPv4Address
        ipaddress.IPv4Address(ip)
        return True
    except ipaddress.AddressValueError:
        return False

def main():
    # Leer el archivo CSV
    try:
        df = pd.read_csv('../datos.csv')
        print("Datos cargados exitosamente:")
        print(df)

        # Validar IPs
        print("\nValidando IPs...")
        for index, row in df.iterrows():
            if validar_ip(row['ip']):
                print(f"IP válida: {row['ip']}")
            else:
                print(f"IP inválida: {row['ip']}")

    except Exception as e:
        print(f"Error al leer el archivo: {e}")

if __name__ == "__main__":
    main()
