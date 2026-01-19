---
title: Optimización de Rendimiento en Python
description: Técnicas y herramientas para optimizar el rendimiento de código Python
---

import LessonMeta from '@site/src/components/LessonMeta';
import LessonMap from '@site/src/components/LessonMap';
import Checkpoint from '@site/src/components/Checkpoint';
import NextStep from '@site/src/components/NextStep';
import TryIt from '@site/src/components/TryIt';
import ExpectedOutput from '@site/src/components/ExpectedOutput';
import ProgressIndicator from '@site/src/components/ProgressIndicator';

<LessonMeta
  level="advanced"
  time="1.5 horas"
  prereqs={['Generadores e Iteradores', 'Funciones']}
/>

<ProgressIndicator
  module="Módulo 07: Conceptos Avanzados"
  lesson={4}
  total={4}
/>

# Optimización de Rendimiento en Python

<LessonMap
  objectives={[
    "Medir rendimiento con profiling (cProfile, line_profiler)",
    "Entender complejidad temporal y espacial",
    "Elegir estructuras de datos eficientes",
    "Aplicar técnicas de optimización",
    "Usar paralelización cuando es apropiado"
  ]}
  useCases={[
    "Código que es demasiado lento para el uso real",
    "Procesar grandes volúmenes de datos",
    "Aplicaciones que requieren alta performance",
    "Optimizar cuellos de botella identificados",
    "Mejorar tiempo de respuesta de APIs",
    "Procesamiento científico o numérico intensivo"
  ]}
  time="1.5 horas"
  level="advanced"
/>

## 🎯 ¿Por qué aprender optimización de rendimiento?

No todos los programas necesitan optimización, pero cuando lo necesitan, saber cómo optimizar es crucial. La optimización puede hacer la diferencia entre una aplicación que funciona y una que es realmente útil.

La optimización es importante porque:
- Mejora experiencia del usuario: aplicaciones más rápidas
- Reduce costos: menos recursos de servidor necesarios
- Escalabilidad: código que puede manejar más carga
- Profesionalismo: diferencia entre código amateur y profesional
- Eficiencia: mejor uso de recursos computacionales

## 🌍 Casos reales donde se usa

La optimización es crucial en muchos contextos:

- **Código lento**: Cuando el código es demasiado lento para el uso real
- **Grandes volúmenes de datos**: Procesar datasets grandes eficientemente
- **Aplicaciones de alto rendimiento**: APIs, servicios web, procesamiento en tiempo real
- **Cuellos de botella**: Optimizar partes críticas del código
- **Procesamiento científico**: Cálculos numéricos intensivos
- **Servicios escalables**: Aplicaciones que necesitan manejar mucha carga

**Ejemplo real**: Una API que tarda 5 segundos en responder puede optimizarse a 0.1 segundos, mejorando dramáticamente la experiencia del usuario.

## 💡 Concepto base

**Regla de oro:** No optimices prematuramente. Primero haz que funcione, luego mide, y solo entonces optimiza lo que realmente es lento.

La optimización efectiva sigue estos pasos:
1. **Mide primero**: Usa profiling para encontrar cuellos de botella reales
2. **Optimiza lo importante**: Solo optimiza las partes que realmente son lentas
3. **Verifica mejoras**: Mide de nuevo para confirmar que mejoró

**Lo genial de Python:** Hay herramientas excelentes como `cProfile` y `line_profiler` que te muestran exactamente dónde está el problema.

```python
import cProfile

def funcion_lenta():
    total = 0
    for i in range(1000000):
        total += i * 2
    return total

# Medir rendimiento
profiler = cProfile.Profile()
profiler.enable()
resultado = funcion_lenta()
profiler.disable()
profiler.print_stats()
```

<ExpectedOutput>
```
         3 function calls in 0.150 seconds
   Ordered by: standard name
   ncalls  tottime  percall  cumtime  percall filename:lineno(function)
        1    0.150    0.150    0.150    0.150 <stdin>:1(funcion_lenta)
```
</ExpectedOutput>

:::tip 🌮 Analogía culinaria
Optimizar el rendimiento es como mejorar la eficiencia de una cocina. Primero asegúrate de que la receta funcione (el código funciona), luego mide cuánto tiempo toma preparar cada plato (profiling), y finalmente optimiza solo los pasos que realmente son lentos. No tiene sentido optimizar cómo cortas las tortillas si el cuello de botella real es el tiempo de cocción del pastor. Mide primero, optimiza después. No optimices lo que no es un problema.
:::

:::info Para principiantes
**¿Cuándo NO optimizar?**
- Si el código funciona bien y es rápido suficiente
- Si no has medido primero (no optimices a ciegas)
- Si la optimización hace el código mucho más difícil de leer

**Antes de continuar**: Asegúrate de entender [Generadores e Iteradores](./01_generadores_iteradores.md) y [Funciones](../03_Funciones_y_Modulos/01_funciones.md). La optimización es un tema avanzado que requiere entender bien cómo funciona tu código.
:::
- Si la optimización hace el código ilegible
- Si no has medido primero (puedes optimizar lo incorrecto)

**Proceso de optimización:**
1. **Mide** (profiling) - encuentra dónde está el cuello de botella
2. **Optimiza** - mejora solo lo que es lento
3. **Mide de nuevo** - verifica que mejoró

> **Antes de continuar**: Asegúrate de entender [Generadores](./01_generadores_iteradores.md) y tener experiencia con [Funciones](../03_Funciones_y_Modulos/01_funciones.md).

## Profiling: Encontrar Dónde Está el Problema

Antes de optimizar, necesitas saber **qué** es lento. El profiling te muestra exactamente dónde tu código pasa más tiempo.

### cProfile (Incluido en Python)

`cProfile` es el profiler incluido en Python. Te muestra qué funciones se llaman y cuánto tiempo toman:

```python
import cProfile
import pstats

def perfil_funcion():
    profiler = cProfile.Profile()
    profiler.enable()  # Empieza a medir

    # Código a perfilar - esto es lo que quieres medir
    mi_funcion()

    profiler.disable()  # Deja de medir
    stats = pstats.Stats(profiler)
    stats.sort_stats('cumulative')  # Ordena por tiempo acumulado
    stats.print_stats()  # Muestra los resultados

# Uso
perfil_funcion()
```

**Salida típica:**
```
         1000 function calls in 0.123 seconds

   Ordered by: cumulative time

   ncalls  tottime  percall  cumtime  percall filename:lineno(function)
        1    0.000    0.000    0.123    0.123 script.py:1(mi_funcion)
      500    0.100    0.000    0.100    0.000 script.py:5(funcion_lenta)
      499    0.023    0.000    0.023    0.000 script.py:8(funcion_rapida)
```

**¿Qué significa?**
- `ncalls`: Cuántas veces se llamó la función
- `tottime`: Tiempo total en esa función (sin incluir funciones llamadas)
- `cumtime`: Tiempo acumulado (incluyendo funciones llamadas)
- La función con más `cumtime` es tu cuello de botella

**En la práctica:** Ejecutas esto, ves qué función es lenta, y optimizas esa función específica.

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

### Documentación Oficial
- [Python Performance Tips](https://wiki.python.org/moin/PythonSpeed/PerformanceTips)
- [cProfile Documentation](https://docs.python.org/3/library/profile.html)
- [line_profiler Documentation](https://github.com/pyutils/line_profiler)
- [multiprocessing Documentation](https://docs.python.org/3/library/multiprocessing.html)
- [timeit Documentation](https://docs.python.org/3/library/timeit.html)

### Bibliografía Recomendada
- **High Performance Python** (Micha Gorelick & Ian Ozsvald) - Guía completa de optimización
- **Effective Python** (Brett Slatkin) - Items sobre performance
- **Python Tricks** (Dan Bader) - Capítulo sobre optimización
- **Python Cookbook, 3rd Ed** (Beazley & Jones) - Recetas sobre performance
- **Fluent Python** (Luciano Ramalho) - Capítulos sobre eficiencia

### Conceptos Relacionados
- [Generadores e Iteradores](./01_generadores_iteradores.md) - Eficiencia en memoria
- [Testing](../08_Herramientas_Profesionales/03_testing.md) - Mide performance con tests
- [Context Managers](./03_context_managers.md) - Gestión eficiente de recursos

---

## Siguiente paso
Ahora que conoces técnicas de optimización, explora otros conceptos avanzados o revisa las [Herramientas Profesionales](../08_Herramientas_Profesionales/01_virtual_envs.md) para llevar tu código a producción.
