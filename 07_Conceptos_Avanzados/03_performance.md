# Optimización de Rendimiento en Python

## ¿Qué es la Optimización de Rendimiento?
La optimización de rendimiento es el proceso de mejorar la eficiencia y velocidad del código. En Python, esto incluye técnicas como profiling, optimización de algoritmos y uso eficiente de estructuras de datos.

## Profiling

### cProfile
```python
import cProfile
import pstats

def perfil_funcion():
    profiler = cProfile.Profile()
    profiler.enable()

    # Código a perfilar
    mi_funcion()

    profiler.disable()
    stats = pstats.Stats(profiler)
    stats.sort_stats('cumulative')
    stats.print_stats()

# Uso
perfil_funcion()
```

### line_profiler
```python
from line_profiler import LineProfiler

def perfil_linea():
    profiler = LineProfiler()
    profiler.add_function(mi_funcion)
    profiler.enable()

    # Código a perfilar
    mi_funcion()

    profiler.disable()
    profiler.print_stats()
```

## Optimización de Algoritmos

### Complejidad Temporal
```python
# ❌ O(n²)
def buscar_duplicados(lista):
    duplicados = []
    for i in range(len(lista)):
        for j in range(i + 1, len(lista)):
            if lista[i] == lista[j]:
                duplicados.append(lista[i])
    return duplicados

# ✅ O(n)
def buscar_duplicados_optimizado(lista):
    return list(set([x for x in lista if lista.count(x) > 1]))
```

### Memoria
```python
# ❌ Usa mucha memoria
def procesar_archivo_grande(ruta):
    with open(ruta, 'r') as f:
        lineas = f.readlines()
    return [procesar_linea(linea) for linea in lineas]

# ✅ Usa generadores
def procesar_archivo_grande_optimizado(ruta):
    with open(ruta, 'r') as f:
        for linea in f:
            yield procesar_linea(linea)
```

## Estructuras de Datos Eficientes

### Listas vs Sets
```python
# ❌ O(n) para búsqueda
def buscar_en_lista(lista, valor):
    return valor in lista

# ✅ O(1) para búsqueda
def buscar_en_set(conjunto, valor):
    return valor in conjunto
```

### Diccionarios
```python
# ❌ Múltiples búsquedas
def procesar_datos(lista):
    resultados = []
    for item in lista:
        if item in diccionario:
            resultados.append(diccionario[item])
    return resultados

# ✅ Una sola búsqueda
def procesar_datos_optimizado(lista):
    return [diccionario[item] for item in lista if item in diccionario]
```

## Paralelización

### multiprocessing
```python
from multiprocessing import Pool

def procesar_paralelo(datos):
    with Pool() as pool:
        resultados = pool.map(procesar_item, datos)
    return resultados

# Uso
datos = [1, 2, 3, 4, 5]
resultados = procesar_paralelo(datos)
```

### threading
```python
import threading
from queue import Queue

def procesar_con_threads(datos):
    resultados = Queue()
    threads = []

    for item in datos:
        thread = threading.Thread(
            target=procesar_item,
            args=(item, resultados)
        )
        threads.append(thread)
        thread.start()

    for thread in threads:
        thread.join()

    return list(resultados.queue)
```

## Optimización de Memoria

### Generadores
```python
# ❌ Carga todo en memoria
def leer_archivo(ruta):
    with open(ruta, 'r') as f:
        return f.readlines()

# ✅ Procesa línea por línea
def leer_archivo_optimizado(ruta):
    with open(ruta, 'r') as f:
        for linea in f:
            yield linea.strip()
```

### __slots__
```python
# ❌ Usa diccionario para atributos
class Usuario:
    def __init__(self, nombre, email):
        self.nombre = nombre
        self.email = email

# ✅ Usa slots para atributos
class UsuarioOptimizado:
    __slots__ = ['nombre', 'email']

    def __init__(self, nombre, email):
        self.nombre = nombre
        self.email = email
```

## Ejemplos Avanzados

### Caché con functools
```python
from functools import lru_cache

@lru_cache(maxsize=128)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

### Optimización de Strings
```python
# ❌ Concatenación ineficiente
def construir_mensaje(partes):
    mensaje = ""
    for parte in partes:
        mensaje += parte
    return mensaje

# ✅ Uso de join
def construir_mensaje_optimizado(partes):
    return "".join(partes)
```

### Optimización de Bucles
```python
# ❌ Bucle ineficiente
def filtrar_datos(lista):
    resultado = []
    for item in lista:
        if condicion(item):
            resultado.append(procesar(item))
    return resultado

# ✅ List comprehension
def filtrar_datos_optimizado(lista):
    return [procesar(item) for item in lista if condicion(item)]
```

## Consejos
1. Mide antes de optimizar
2. Usa estructuras de datos apropiadas
3. Considera la paralelización
4. Optimiza los bucles críticos
5. Usa generadores para grandes conjuntos de datos

## Recursos Adicionales
- [Python Performance Tips](https://wiki.python.org/moin/PythonSpeed/PerformanceTips)
- [cProfile Documentation](https://docs.python.org/3/library/profile.html)
- [line_profiler Documentation](https://github.com/pyutils/line_profiler)
- [multiprocessing Documentation](https://docs.python.org/3/library/multiprocessing.html)
