# Pandas Básico

## ¿Qué es Pandas?
Pandas es una biblioteca de Python para manipulación y análisis de datos. Es especialmente útil para trabajar con datos tabulares, como los que encontramos en archivos CSV.

## Conceptos Básicos

### DataFrame
Un DataFrame es la estructura de datos principal en Pandas. Es como una tabla con filas y columnas.

```python
import pandas as pd

# Crear un DataFrame desde un archivo CSV
df = pd.read_csv('datos.csv')

# Ver las primeras filas
print(df.head())

# Ver información del DataFrame
print(df.info())
```

### Columnas y Filas
- Las columnas son series de datos
- Las filas son registros individuales

```python
# Acceder a una columna
columna = df['nombre_columna']

# Acceder a una fila
fila = df.iloc[0]  # Primera fila
```

### Operaciones Básicas
```python
# Ver dimensiones
print(df.shape)  # (filas, columnas)

# Ver nombres de columnas
print(df.columns)

# Ver tipos de datos
print(df.dtypes)
```

## Ejemplo Práctico
```python
# Leer un archivo CSV
df = pd.read_csv('datos.csv')

# Mostrar las primeras 5 filas
print("Primeras 5 filas:")
print(df.head())

# Mostrar información básica
print("\nInformación del DataFrame:")
print(df.info())
```

## Consejos
1. Siempre verifica los datos después de cargarlos
2. Usa `head()` para ver una muestra de los datos
3. Usa `info()` para entender la estructura de los datos

## Recursos Adicionales
- [Documentación oficial de Pandas](https://pandas.pydata.org/docs/)
- [Tutorial de Pandas](https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html)
- [Cheat Sheet de Pandas](https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf)
