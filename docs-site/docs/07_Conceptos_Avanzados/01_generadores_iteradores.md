---
title: Generadores e Iteradores en Python
description: Trabaja con secuencias de datos eficientemente en memoria
---

import LessonMeta from '@site/src/components/LessonMeta';
import LessonMap from '@site/src/components/LessonMap';
import Checkpoint from '@site/src/components/Checkpoint';
import NextStep from '@site/src/components/NextStep';
import TryIt from '@site/src/components/TryIt';
import ProgressIndicator from '@site/src/components/ProgressIndicator';

<LessonMeta
  level="advanced"
  time="1.5 horas"
  prereqs={['Bucles', 'Funciones', 'Listas']}
/>

<ProgressIndicator
  module="Módulo 07: Conceptos Avanzados"
  lesson={1}
  total={4}
/>

# Generadores e Iteradores en Python

<LessonMap
  objectives={[
    "Crear generadores con yield",
    "Entender la diferencia entre return y yield",
    "Usar generadores para eficiencia en memoria",
    "Crear iteradores personalizados",
    "Aplicar generadores en procesamiento de datos grandes"
  ]}
  useCases={[
    "Procesar archivos grandes sin cargar todo en memoria",
    "Generar secuencias infinitas (números, datos)",
    "Pipelines de procesamiento de datos",
    "Lazy evaluation: calcular valores solo cuando se necesitan",
    "APIs: generar respuestas bajo demanda",
    "Análisis de datos: procesar datasets grandes eficientemente"
  ]}
  time="1.5 horas"
  level="advanced"
/>

## 💡 Introducción

Los generadores e iteradores son características poderosas de Python que permiten trabajar con secuencias de datos de manera eficiente en memoria. Los generadores son especialmente útiles cuando trabajas con grandes volúmenes de datos o secuencias infinitas.

## ¿Qué son los Generadores?

Los generadores son funciones especiales que utilizan `yield` en lugar de `return`. A diferencia de las funciones normales, los generadores pueden pausar su ejecución y retomar desde donde se quedaron, lo que los hace extremadamente eficientes en memoria.

### Diferencia entre `return` y `yield`

```python
# Función normal con return
def numeros_pares_lista(limite):
    """Crea una lista con todos los números pares"""
    resultado = []
    for i in range(limite):
        if i % 2 == 0:
            resultado.append(i)
    return resultado  # Retorna toda la lista de una vez

# Generador con yield
def numeros_pares_generador(limite):
    """Genera números pares uno a uno"""
    for i in range(limite):
        if i % 2 == 0:
            yield i  # Pausa y retorna un valor, luego continúa
```

### Ventajas de los Generadores

1. **Eficiencia en memoria**: No almacenan todos los valores en memoria
2. **Lazy evaluation**: Calculan valores solo cuando se necesitan
3. **Pueden ser infinitos**: Pueden generar secuencias sin fin

## Uso Básico de Generadores

### Generador Simple

```python
def contar_hasta(n):
    """Genera números del 1 al n"""
    for i in range(1, n + 1):
        yield i

# Usar el generador
for numero in contar_hasta(5):
    print(numero)  # 1, 2, 3, 4, 5
```

### Generador Infinito

```python
def numeros_fibonacci():
    """Genera la secuencia de Fibonacci infinitamente"""
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Usar con límite
fib = numeros_fibonacci()
for _ in range(10):
    print(next(fib))  # 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
```

## Expresiones Generadoras

Similar a las listas por comprensión, pero más eficientes:

```python
# Lista por comprensión (almacena todo en memoria)
cuadrados_lista = [x**2 for x in range(1000000)]

# Expresión generadora (eficiente en memoria)
cuadrados_gen = (x**2 for x in range(1000000))

# Usar el generador
for cuadrado in cuadrados_gen:
    if cuadrado > 100:
        break
    print(cuadrado)
```

## Iteradores

Los iteradores son objetos que implementan el protocolo de iteración. Todos los generadores son iteradores, pero no todos los iteradores son generadores.

### Crear un Iterador Personalizado

```python
class Contador:
    """Iterador personalizado que cuenta hasta un límite"""
    def __init__(self, limite):
        self.limite = limite
        self.actual = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.actual < self.limite:
            self.actual += 1
            return self.actual
        else:
            raise StopIteration

# Usar el iterador
for numero in Contador(5):
    print(numero)  # 1, 2, 3, 4, 5
```

## Ejemplos Prácticos

### Procesar Archivo Grande

```python
def leer_lineas_archivo(ruta):
    """Generador que lee un archivo línea por línea"""
    with open(ruta, 'r', encoding='utf-8') as archivo:
        for linea in archivo:
            yield linea.strip()

# Procesar archivo sin cargar todo en memoria
for linea in leer_lineas_archivo('datos.txt'):
    if 'error' in linea.lower():
        print(f"Error encontrado: {linea}")
```

### Generador de Datos en Lotes

```python
def procesar_en_lotes(datos, tamano_lote=100):
    """Procesa datos en lotes de tamaño fijo"""
    for i in range(0, len(datos), tamano_lote):
        yield datos[i:i + tamano_lote]

# Usar
datos = list(range(1000))
for lote in procesar_en_lotes(datos, tamano_lote=100):
    print(f"Procesando lote de {len(lote)} elementos")
```

## Buenas Prácticas

1. **Usa generadores para grandes volúmenes de datos**
2. **Combina generadores con `itertools` para operaciones complejas**
3. **Documenta cuando una función es un generador**
4. **Considera el rendimiento vs. legibilidad**

## Recursos Adicionales

### Documentación Oficial
- [Documentación oficial de Generadores](https://docs.python.org/3/tutorial/classes.html#generators)
- [itertools - Funciones para iteradores](https://docs.python.org/3/library/itertools.html)
- [PEP 255 - Simple Generators](https://peps.python.org/pep-0255/)
- [PEP 342 - Coroutines via Enhanced Generators](https://peps.python.org/pep-0342/)
- [Generadores en Python (Alvaro Hurtado)](https://alvarohurtado.es/2013/08/31/generadores-en-python/)
- [Introduction to Python Generators (Real Python)](https://realpython.com/introduction-to-python-generators/)

### Bibliografía Recomendada
- **Fluent Python** (Luciano Ramalho) - Capítulo 14: Iterables, Iterators, and Generators
- **Effective Python** (Brett Slatkin) - Items sobre generadores e iteración
- **Python Tricks** (Dan Bader) - Capítulo sobre generadores
- **Python Cookbook, 3rd Ed** (Beazley & Jones) - Recetas sobre generadores e iteradores

### Conceptos Relacionados
- [Bucles](../01_Introduccion_y_Fundamentos/04_bucles.md) - Base para iteración
- [Decoradores](./02_decorators.md) - Pueden crear generadores
- [Performance](./04_performance.md) - Generadores mejoran rendimiento

## Siguiente paso

<NextStep
  to="/Conceptos_Avanzados/decorators"
  label="Siguiente: Decoradores →"
/>
