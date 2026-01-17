# Pandas Básico

## ¿Qué es Pandas y por qué es tan popular?

Trabajas con datos en Excel o CSV. Necesitas filtrar, agrupar, calcular promedios, unir tablas. Podrías hacerlo manualmente, pero eso es lento y propenso a errores.

**Pandas resuelve esto:** Es como Excel pero programático. Puedes manipular, analizar y transformar datos tabulares con código Python.

**¿Por qué Pandas es tan popular?**
- **Potente**: Maneja millones de filas fácilmente
- **Flexible**: Filtra, agrupa, transforma datos con pocas líneas
- **Integración**: Funciona con archivos CSV, Excel, bases de datos, APIs
- **Eficiente**: Optimizado para velocidad con datos grandes

**Casos reales:**
- Analizar ventas de una empresa
- Procesar logs de servidores
- Limpiar y transformar datos antes de análisis
- Generar reportes automáticos
- Preparar datos para machine learning

**Concepto clave:** Pandas trabaja con **DataFrames** (tablas) y **Series** (columnas). Es como trabajar con Excel pero con código.

> **Antes de continuar**: Asegúrate de entender [Diccionarios](../02_Estructuras_de_Datos/01_listas_tuplas_diccionarios.md), [Funciones](../03_Funciones_y_Modulos/01_funciones.md) y [Pathlib](../06_Manejo_de_Archivos_y_Formatos/01_pathlib.md).

## Conceptos Básicos

### DataFrame: La Estructura Principal

Un **DataFrame** es como una tabla de Excel: tiene filas (registros) y columnas (atributos). Es la estructura principal de Pandas.

```python
import pandas as pd

# Crear un DataFrame desde un archivo CSV
df = pd.read_csv('datos.csv')
# df ahora contiene todos los datos del CSV como una tabla

# Ver las primeras 5 filas (útil para explorar datos)
print(df.head())
# Salida: Muestra las primeras 5 filas con todas las columnas

# Ver información del DataFrame (tipos, memoria, etc.)
print(df.info())
# Salida: Lista columnas, tipos de datos, valores no nulos, uso de memoria
```

**¿Qué está pasando?**
- `pd.read_csv()` lee el archivo CSV y lo convierte en un DataFrame
- `df.head()` muestra una muestra de los datos (útil para verificar que se cargaron bien)
- `df.info()` te da un resumen técnico del DataFrame

### Acceder a Columnas y Filas

**Columnas (Series):** Cada columna es una "Series" (lista con nombre)

```python
# Acceder a una columna por nombre
columna = df['nombre_columna']  # Devuelve una Series
print(columna)  # Muestra todos los valores de esa columna

# También puedes usar notación de punto (si el nombre no tiene espacios)
columna = df.nombre_columna  # Equivalente a df['nombre_columna']
```

**Filas:** Puedes acceder a filas específicas

```python
# Acceder a una fila por índice (posición)
fila = df.iloc[0]  # Primera fila (índice 0)
print(fila)  # Muestra todos los valores de esa fila como una Series
```

**¿Cuándo usar cada uno?**
- **Columnas**: Cuando quieres analizar un atributo específico (ej: todas las edades)
- **Filas**: Cuando quieres ver un registro completo (ej: todos los datos de una persona)

### Operaciones Básicas de Exploración

Antes de analizar, explora tus datos:

```python
# Ver dimensiones (cuántas filas y columnas)
print(df.shape)  # (1000, 5) = 1000 filas, 5 columnas

# Ver nombres de todas las columnas
print(df.columns)
# Salida: Index(['nombre', 'edad', 'ciudad', 'salario', 'departamento'], dtype='object')

# Ver tipos de datos de cada columna
print(df.dtypes)
# Salida: nombre: object, edad: int64, ciudad: object, salario: float64, ...
```

**¿Por qué esto es útil?**
- `shape`: Sabes cuántos datos tienes
- `columns`: Verificas que las columnas se cargaron correctamente
- `dtypes`: Entiendes qué tipo de datos tienes (importante para operaciones matemáticas)

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

### Documentación Oficial
- [Documentación oficial de Pandas](https://pandas.pydata.org/docs/)
- [Tutorial de Pandas](https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html)
- [Cheat Sheet de Pandas](https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf)
- [10 Minutes to pandas](https://pandas.pydata.org/docs/user_guide/10min.html)

### Bibliografía Recomendada
- **Python for Data Analysis** (Wes McKinney) - Creador de Pandas, guía completa
- **Pandas in Action** (Boris Paskhaver) - Guía práctica de Pandas
- **Effective Pandas** (Matt Harrison) - Mejores prácticas con Pandas
- **Data Science from Scratch** (Joel Grus) - Fundamentos de ciencia de datos
- **Python Data Science Handbook** (Jake VanderPlas) - Guía completa de herramientas de datos

### Conceptos Relacionados
- [Estructuras de Datos](../02_Estructuras_de_Datos/01_listas_tuplas_diccionarios.md) - Base para entender DataFrames
- [CSV](../06_Manejo_de_Archivos_y_Formatos/03_csv.md) - Lee y escribe CSV con Pandas
- [NumPy](../09_Ciencia_de_Datos_Basica/02_numpy_basico.md) - Base de Pandas

---

## Siguiente paso
Este es solo una introducción básica a Pandas. Para profundizar, consulta la documentación oficial o continúa con otros temas del curso como [Herramientas Profesionales](../08_Herramientas_Profesionales/01_virtual_envs.md)
