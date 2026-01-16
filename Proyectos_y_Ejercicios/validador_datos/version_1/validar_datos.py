import pandas as pd

def main():
    # Leer el archivo CSV
    try:
        df = pd.read_csv('../datos.csv')
        print("Datos cargados exitosamente:")
        print(df)
    except Exception as e:
        print(f"Error al leer el archivo: {e}")

if __name__ == "__main__":
    main()
