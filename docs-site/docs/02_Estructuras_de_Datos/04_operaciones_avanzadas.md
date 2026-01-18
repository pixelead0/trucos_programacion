---
title: Operaciones Avanzadas con Estructuras de Datos
description: List comprehensions, dict comprehensions, slicing avanzado y técnicas profesionales
---

import LessonMeta from '@site/src/components/LessonMeta';
import LessonMap from '@site/src/components/LessonMap';
import Checkpoint from '@site/src/components/Checkpoint';
import NextStep from '@site/src/components/NextStep';
import TryIt from '@site/src/components/TryIt';
import ExpectedOutput from '@site/src/components/ExpectedOutput';
import LevelTabs from '@site/src/components/LevelTabs';
import ProgressIndicator from '@site/src/components/ProgressIndicator';

<LessonMeta
  level="intermediate"
  time="1 hora"
  prereqs={['Listas', 'Tuplas', 'Diccionarios y Sets']}
/>

<ProgressIndicator
  module="Módulo 02: Estructuras de Datos"
  lesson={4}
  total={4}
/>

# Operaciones Avanzadas con Estructuras de Datos

<LessonMap
  objectives={[
    "Usar list comprehensions para crear listas de forma elegante",
    "Aplicar dict comprehensions y set comprehensions",
    "Dominar slicing avanzado con pasos y negativos",
    "Usar zip() y enumerate() eficientemente",
    "Aplicar técnicas profesionales de manipulación de datos"
  ]}
  useCases={[
    "Transformar datos de forma eficiente y legible",
    "Filtrar y mapear colecciones en una línea",
    "Procesar datos de APIs y bases de datos",
    "Crear estructuras de datos complejas de forma concisa",
    "Optimizar código para mejor rendimiento"
  ]}
  time="1 hora"
  level="intermediate"
/>

## 🌍 Casos reales donde se usa

Estas técnicas avanzadas son fundamentales en código profesional. Las verás en:

- **Procesamiento de datos**: Transformar listas de una API en formato específico
- **Filtrado y mapeo**: Aplicar transformaciones a colecciones completas
- **Análisis de datos**: Crear estructuras de datos derivadas eficientemente
- **Código funcional**: Estilo de programación más declarativo
- **Optimización**: Código más rápido y legible que loops tradicionales

**Ejemplo real**: Cuando procesas una lista de usuarios de una API, puedes usar list comprehensions para extraer solo los emails activos en una línea: `[u['email'] for u in usuarios if u['activo']]`

## 💡 Concepto base

Las comprehensions son una forma elegante y eficiente de crear estructuras de datos en Python. En lugar de usar loops tradicionales, puedes crear listas, diccionarios y sets en una sola línea.

**Lo genial de Python:** Las comprehensions no solo son más legibles, sino que también suelen ser más rápidas que los loops equivalentes.

```python
# En lugar de esto:
cuadrados = []
for x in range(10):
    cuadrados.append(x**2)

# Puedes hacer esto:
cuadrados = [x**2 for x in range(10)]
```

:::info Para principiantes
Las comprehensions pueden parecer complicadas al principio, pero una vez que las entiendes, hacen tu código mucho más limpio y fácil de leer. Empieza con ejemplos simples y avanza gradualmente.
:::

## 📚 Paso a paso

### 1. List Comprehensions Básicas

```python
# Crear lista de cuadrados
cuadrados = [x**2 for x in range(10)]
print(cuadrados)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Crear lista de strings
nombres = ["ana", "carlos", "juan"]
nombres_mayusculas = [nombre.upper() for nombre in nombres]
print(nombres_mayusculas)  # ["ANA", "CARLOS", "JUAN"]

# Crear lista con condición
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
pares = [x for x in numeros if x % 2 == 0]
print(pares)  # [2, 4, 6, 8, 10]
```

**Estructura**: `[expresion for item in iterable if condicion]`

### 2. List Comprehensions con Condiciones

```python
# Filtrar y transformar
precios = [10.00, 25.50, 5.00, 100.00, 15.75]

# Precios con impuesto (solo si > 10)
precios_con_impuesto = [p * 1.16 for p in precios if p > 10]
print(precios_con_impuesto)  # [29.58, 116.0, 18.27]

# Clasificar productos
productos = [
    {"nombre": "Laptop", "precio": 800},
    {"nombre": "Mouse", "precio": 25},
    {"nombre": "Teclado", "precio": 50}
]

# Productos caros (> 100)
caros = [p["nombre"] for p in productos if p["precio"] > 100]
print(caros)  # ["Laptop"]
```

### 3. List Comprehensions Anidadas

```python
# Producto cartesiano
colores = ["rojo", "azul"]
tallas = ["S", "M", "L"]

combinaciones = [(c, t) for c in colores for t in tallas]
print(combinaciones)
# [("rojo", "S"), ("rojo", "M"), ("rojo", "L"), ("azul", "S"), ...]

# Matriz transpuesta
matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
transpuesta = [[fila[i] for fila in matriz] for i in range(3)]
print(transpuesta)  # [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

### 4. Dict Comprehensions

```python
# Crear diccionario desde lista
nombres = ["Ana", "Carlos", "Juan"]
longitudes = {nombre: len(nombre) for nombre in nombres}
print(longitudes)  # {"Ana": 3, "Carlos": 6, "Juan": 4}

# Invertir diccionario
precios = {"laptop": 800, "mouse": 25, "teclado": 50}
precios_invertidos = {precio: producto for producto, precio in precios.items()}
print(precios_invertidos)  # {800: "laptop", 25: "mouse", 50: "teclado"}

# Filtrar diccionario
productos = {
    "laptop": 800,
    "mouse": 25,
    "teclado": 50,
    "monitor": 200
}

# Solo productos caros
caros = {k: v for k, v in productos.items() if v > 100}
print(caros)  # {"laptop": 800, "monitor": 200}
```

### 5. Set Comprehensions

```python
# Crear set desde lista (elimina duplicados automáticamente)
numeros = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unicos = {x for x in numeros}
print(unicos)  # {1, 2, 3, 4}

# Set de longitudes únicas
nombres = ["Ana", "Carlos", "Juan", "María"]
longitudes_unicas = {len(nombre) for nombre in nombres}
print(longitudes_unicas)  # {3, 4, 6}
```

### 6. Slicing Avanzado

```python
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Slicing con pasos
print(numeros[::2])    # [0, 2, 4, 6, 8] - cada 2 elementos
print(numeros[1::2])   # [1, 3, 5, 7, 9] - impares
print(numeros[::-1])   # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] - reverso

# Slicing con inicio, fin y paso
print(numeros[2:8:2])  # [2, 4, 6] - del 2 al 7, cada 2

# Revertir string o lista
texto = "Python"
texto_reverso = texto[::-1]
print(texto_reverso)  # "nohtyP"
```

### 7. zip() y enumerate()

```python
# zip() - combinar iterables
nombres = ["Ana", "Carlos", "Juan"]
edades = [28, 32, 25]

# Crear lista de tuplas
personas = list(zip(nombres, edades))
print(personas)  # [("Ana", 28), ("Carlos", 32), ("Juan", 25)]

# Desempaquetar con zip
for nombre, edad in zip(nombres, edades):
    print(f"{nombre} tiene {edad} años")

# enumerate() - obtener índice y valor
nombres = ["Ana", "Carlos", "Juan"]
for indice, nombre in enumerate(nombres):
    print(f"{indice}: {nombre}")

# enumerate() con inicio personalizado
for indice, nombre in enumerate(nombres, start=1):
    print(f"{indice}. {nombre}")
```

<LevelTabs>
  <div label="🟢 Principiante">
    **Conceptos básicos:**
    - Usa list comprehensions simples para crear listas
    - Aprende a filtrar con `if` en comprehensions
    - Practica con ejemplos sencillos primero

    ```python
    # Ejemplo simple
    cuadrados = [x**2 for x in range(5)]
    print(cuadrados)  # [0, 1, 4, 9, 16]

    # Con filtro
    pares = [x for x in range(10) if x % 2 == 0]
    print(pares)  # [0, 2, 4, 6, 8]
    ```
  </div>
  <div label="🟡 Intermedio">
    **Técnicas intermedias:**
    - Dict comprehensions y set comprehensions
    - Comprehensions anidadas
    - zip() y enumerate() en comprehensions

    ```python
    # Dict comprehension
    precios = {"laptop": 800, "mouse": 25}
    precios_con_impuesto = {k: v * 1.16 for k, v in precios.items()}

    # Con zip y enumerate
    nombres = ["Ana", "Carlos"]
    indices_nombres = {i: nombre for i, nombre in enumerate(nombres)}
    ```
  </div>
  <div label="🔵 Avanzado">
    **Optimizaciones y técnicas avanzadas:**
    - Comprehensions con múltiples condiciones
    - Generadores vs list comprehensions (memoria)
    - Walrus operator (:=) en comprehensions (Python 3.8+)

    ```python
    # Múltiples condiciones
    numeros = [x for x in range(20) if x % 2 == 0 if x > 10]

    # Generador (más eficiente en memoria)
    cuadrados_gen = (x**2 for x in range(1000000))

    # Walrus operator (Python 3.8+)
    datos = [y for x in range(10) if (y := x**2) > 25]
    ```
  </div>
</LevelTabs>

## 🎓 Ejemplo Práctico Completo: Procesador de Datos

```python
# Procesador de datos usando comprehensions
usuarios_raw = [
    {"nombre": "Ana García", "edad": 28, "activo": True, "puntos": 150},
    {"nombre": "Carlos Ruiz", "edad": 32, "activo": False, "puntos": 80},
    {"nombre": "Juan López", "edad": 25, "activo": True, "puntos": 200},
    {"nombre": "María Díaz", "edad": 30, "activo": True, "puntos": 120}
]

# Usuarios activos con más de 100 puntos
usuarios_premium = [
    u["nombre"]
    for u in usuarios_raw
    if u["activo"] and u["puntos"] > 100
]
print(f"Usuarios premium: {usuarios_premium}")

# Diccionario de edad promedio por estado
usuarios_activos = [u for u in usuarios_raw if u["activo"]]
usuarios_inactivos = [u for u in usuarios_raw if not u["activo"]]

promedios = {
    "activos": sum(u["edad"] for u in usuarios_activos) / len(usuarios_activos) if usuarios_activos else 0,
    "inactivos": sum(u["edad"] for u in usuarios_inactivos) / len(usuarios_inactivos) if usuarios_inactivos else 0
}
print(f"Edad promedio: {promedios}")

# Top 3 usuarios por puntos
top_usuarios = sorted(
    [(u["nombre"], u["puntos"]) for u in usuarios_raw],
    key=lambda x: x[1],
    reverse=True
)[:3]
print(f"Top 3: {top_usuarios}")
```

<ExpectedOutput>
```
Usuarios premium: ['Ana García', 'Juan López', 'María Díaz']
Edad promedio: {'activos': 27.67, 'inactivos': 32.0}
Top 3: [('Juan López', 200), ('Ana García', 150), ('María Díaz', 120)]
```
</ExpectedOutput>

## ⚠️ Errores comunes

### 1. Comprehensions demasiado complejas

```python
# ❌ Demasiado complejo (difícil de leer)
resultado = [[[x*y*z for z in range(3)] for y in range(3)] for x in range(3)]

# ✅ Mejor: dividir en pasos o usar loops
# O al menos agregar comentarios
```

:::warning Error típico
**Comprehensions demasiado complejas**: Si una comprehension tiene más de 2-3 niveles de anidamiento, considera usar loops tradicionales para mejor legibilidad.
:::

### 2. Olvidar que comprehensions crean nuevas estructuras

```python
# ❌ Confusión común
lista_original = [1, 2, 3]
lista_nueva = [x * 2 for x in lista_original]
# lista_original NO se modifica
print(lista_original)  # [1, 2, 3] - sin cambios
```

### 3. Usar list comprehension cuando un generador es mejor

```python
# ❌ Para grandes cantidades de datos
cuadrados = [x**2 for x in range(1000000)]  # Crea lista completa en memoria

# ✅ Mejor: usar generador
cuadrados_gen = (x**2 for x in range(1000000))  # Genera bajo demanda
```

## ✅ Buenas Prácticas

### 1. Comprehensions para transformaciones simples

```python
# ✅ Comprehensions para transformaciones claras
cuadrados = [x**2 for x in range(10)]
nombres_upper = [n.upper() for n in nombres]

# ❌ Comprehensions para lógica compleja
# Mejor usar loops tradicionales si la lógica es compleja
```

### 2. Usar nombres descriptivos en comprehensions

```python
# ✅ Nombres descriptivos
usuarios_activos = [u for u in usuarios if u["activo"]]
precios_con_impuesto = [p * 1.16 for p in precios]

# ❌ Nombres genéricos
resultado = [x for x in y if z]
```

### 3. Combinar comprehensions con funciones útiles

```python
# ✅ Combinar con funciones built-in
suma_cuadrados = sum(x**2 for x in range(10))
max_puntos = max(u["puntos"] for u in usuarios if u["activo"])
```

## 🧪 Ejercicios Prácticos

<TryIt>
### Ejercicio 1: Transformar Datos con Comprehensions

Transforma una lista de productos usando comprehensions:

```python
productos = [
    {"nombre": "Laptop", "precio": 800, "stock": 10},
    {"nombre": "Mouse", "precio": 25, "stock": 50},
    {"nombre": "Teclado", "precio": 50, "stock": 30}
]

# Precios con impuesto del 16%
precios_finales = {p["nombre"]: p["precio"] * 1.16 for p in productos}
print(f"Precios con impuesto: {precios_finales}")

# Productos con stock bajo (< 40)
stock_bajo = [p["nombre"] for p in productos if p["stock"] < 40]
print(f"Productos con stock bajo: {stock_bajo}")
```
</TryIt>

<TryIt>
### Ejercicio 2: Análisis de Texto con Comprehensions

Analiza un texto usando comprehensions:

```python
texto = "Python es un lenguaje de programación poderoso y versátil"

# Palabras que empiezan con vocal
palabras = texto.split()
vocales = [p for p in palabras if p[0].lower() in "aeiou"]
print(f"Palabras que empiezan con vocal: {vocales}")

# Diccionario de longitudes
longitudes = {palabra: len(palabra) for palabra in palabras}
print(f"Longitudes: {longitudes}")

# Palabras únicas (set)
palabras_unicas = {p.lower() for p in palabras}
print(f"Palabras únicas: {palabras_unicas}")
```
</TryIt>

## 🎯 Checkpoint

<Checkpoint
  items={[
    "Puedes crear list comprehensions básicas y con condiciones",
    "Sabes usar dict comprehensions y set comprehensions",
    "Entiendes slicing avanzado con pasos",
    "Puedes usar zip() y enumerate() eficientemente",
    "Sabes cuándo usar comprehensions vs loops tradicionales",
    "Puedes crear estructuras de datos complejas de forma concisa",
    "Estás listo para organizar código con funciones"
  ]}
/>

## 📚 Recursos Adicionales

### Documentación Oficial
- [List Comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)
- [Dictionary Comprehensions](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)
- [Built-in Functions: zip, enumerate](https://docs.python.org/3/library/functions.html)

### Conceptos Relacionados
- [Listas](./01_listas.md) - Base para list comprehensions
- [Diccionarios y Sets](./03_diccionarios_sets.md) - Base para dict/set comprehensions
- [Funciones](../03_Funciones_y_Modulos/01_funciones.md) - Organiza código que usa comprehensions
- [Generadores e Iteradores](../07_Conceptos_Avanzados/01_generadores_iteradores.md) - Comprehensions vs generadores

## 🚀 Siguiente paso

<NextStep
  to="/Funciones_y_Modulos/funciones"
  label="Siguiente: Funciones →"
/>
