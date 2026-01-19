---
title: Pandas Básico
description: Introducción a análisis de datos con Pandas
---

import LessonMeta from '@site/src/components/LessonMeta';
import LessonMap from '@site/src/components/LessonMap';
import Checkpoint from '@site/src/components/Checkpoint';
import NextStep from '@site/src/components/NextStep';
import TryIt from '@site/src/components/TryIt';
import ExpectedOutput from '@site/src/components/ExpectedOutput';
import ProgressIndicator from '@site/src/components/ProgressIndicator';

<LessonMeta
  level="intermediate"
  time="2 horas"
  prereqs={['Diccionarios y Sets', 'Funciones', 'Pathlib']}
/>

<ProgressIndicator
  module="Módulo 09: Ciencia de Datos Básica"
  lesson={1}
  total={1}
/>

# Pandas Básico

<LessonMap
  objectives={[
    "Crear y manipular DataFrames",
    "Leer y escribir archivos CSV, Excel",
    "Filtrar y seleccionar datos",
    "Agrupar y agregar datos",
    "Realizar operaciones básicas de análisis"
  ]}
  useCases={[
    "Analizar ventas y métricas de negocio",
    "Procesar logs y datos de servidores",
    "Limpiar y transformar datos antes de análisis",
    "Generar reportes automáticos",
    "Preparar datos para machine learning",
    "Análisis exploratorio de datos (EDA)"
  ]}
  time="2 horas"
  level="intermediate"
/>

## 🎯 ¿Por qué aprender Pandas?

Trabajas con datos en Excel o CSV. Necesitas filtrar, agrupar, calcular promedios, unir tablas. Podrías hacerlo manualmente, pero eso es lento y propenso a errores.

Pandas es esencial porque:
- Potente: maneja millones de filas fácilmente
- Flexible: filtra, agrupa, transforma datos con pocas líneas
- Integración: funciona con CSV, Excel, bases de datos, APIs
- Eficiente: optimizado para velocidad con datos grandes
- Estándar de la industria: usado en ciencia de datos, análisis, machine learning

Sin Pandas, analizar datos grandes sería muy lento y difícil.

## 🌍 Casos reales donde se usa

Pandas está en prácticamente todos los proyectos de análisis de datos:

- **Analizar ventas**: Métricas de negocio y reportes
- **Procesar logs**: Datos de servidores y aplicaciones
- **Limpiar datos**: Transformar datos antes de análisis
- **Generar reportes**: Automatizar reportes y visualizaciones
- **Preparar datos**: Para machine learning y análisis avanzado
- **Análisis exploratorio**: EDA (Exploratory Data Analysis)

**Ejemplo real**: Un analista de datos usa Pandas para procesar 100,000 registros de ventas, calcular promedios por región, identificar tendencias, y generar reportes automáticos en segundos.

## 💡 Concepto base

Pandas es como Excel pero programático. Puedes manipular, analizar y transformar datos tabulares con código Python.

**Lo genial de Python:** Pandas trabaja con **DataFrames** (tablas) y **Series** (columnas), haciendo que trabajar con datos sea muy intuitivo.

```python
import pandas as pd

# Crear un DataFrame
datos = {
    'producto': ['Chilaquiles', 'Tacos', 'Quesadillas'],
    'precio': [85.50, 45.00, 60.00],
    'ventas': [120, 200, 80]
}

df = pd.DataFrame(datos)
print(df)
print(f"\nPromedio de precios: ${df['precio'].mean():.2f}")
```

<ExpectedOutput>
```
     producto  precio  ventas
0  Chilaquiles    85.5     120
1       Tacos    45.0     200
2  Quesadillas    60.0      80

Promedio de precios: $63.50
```
</ExpectedOutput>

:::tip 🌮 Analogía culinaria
Pandas es como tener un asistente de cocina súper organizado que puede manejar miles de recetas (filas de datos) a la vez. En lugar de revisar manualmente cada receta en tu libro de cocina para encontrar cuántas veces usaste chiles, Pandas puede buscar, filtrar, agrupar y analizar todas las recetas instantáneamente. Es como tener un sistema de inventario inteligente que puede decirte "cuántos platos usan queso", "cuál es el promedio de tiempo de preparación", o "qué ingredientes son más comunes", todo en segundos.
:::

:::info Para principiantes
**Antes de continuar**: Asegúrate de entender [Diccionarios y Sets](../02_Estructuras_de_Datos/03_diccionarios_sets.md), [Funciones](../03_Funciones_y_Modulos/01_funciones.md) y [Pathlib](../06_Manejo_de_Archivos_y_Formatos/01_pathlib.md).

**Concepto clave:** Pandas trabaja con **DataFrames** (tablas) y **Series** (columnas). Es como trabajar con Excel pero con código. Si sabes usar Excel, Pandas será familiar.
:::

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
- [Diccionarios y Sets](../02_Estructuras_de_Datos/03_diccionarios_sets.md) - Base para entender DataFrames
- [JSON](../06_Manejo_de_Archivos_y_Formatos/03_json.md) - Trabaja con datos estructurados
- [YAML](../06_Manejo_de_Archivos_y_Formatos/04_yaml.md) - Otro formato de datos

---

## Siguiente paso
Este es solo una introducción básica a Pandas. Para profundizar, consulta la documentación oficial o continúa con otros temas del curso como [Herramientas Profesionales](../08_Herramientas_Profesionales/01_virtual_envs.md)
