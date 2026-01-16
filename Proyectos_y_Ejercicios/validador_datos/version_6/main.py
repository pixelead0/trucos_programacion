import os
from procesador import procesar_archivo

def main():
    try:
        # Procesar el archivo
        ruta_archivo = '../datos.csv'
        df_validos, df_invalidos, errores = procesar_archivo(ruta_archivo)

        # Mostrar resultados
        print("\nResultados de la validación:")
        print(f"Total de filas: {len(df_validos) + len(df_invalidos)}")
        print(f"Filas válidas: {len(df_validos)}")
        print(f"Filas inválidas: {len(df_invalidos)}")

        if errores:
            print("\nErrores encontrados:")
            for error in errores:
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
        print(f"Error al procesar el archivo: {e}")

if __name__ == "__main__":
    main()
