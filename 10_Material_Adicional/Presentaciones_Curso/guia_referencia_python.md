# Guía Rápida de Python en Español

Esta guía rápida es una referencia esencial para programar en **Python 3**, pensada para profesionales de IT que están aprendiendo a programar scripts robustos y mantenibles. ¡Vamos al grano!

## Introducción a Python

* Sitio oficial: [python.org](https://www.python.org)
* Aprende rápido: [learnxinyminutes.com](https://learnxinyminutes.com)
* Expresiones regulares: [quickref.me](https://quickref.me/regex)

```python
print("Hola, mundo!")
```

## Variables y Tipos de Datos

```python
edad = 18
nombre = "Juan"
```

**Tipos básicos:**

* `str` – texto
* `int`, `float`, `complex` – números
* `list`, `tuple`, `range` – secuencias
* `dict` – mapeo clave-valor
* `set`, `frozenset` – conjuntos
* `bool` – booleanos
* `bytes`, `bytearray`, `memoryview` – binarios

## Slicing de Strings

```python
msg = "Hola mundo"
print(msg[2:5])  # 'la '
```

## Listas

```python
mi_lista = []
mi_lista.append(1)
mi_lista.append(2)
for item in mi_lista:
    print(item)
```

## Control de Flujo

```python
num = 200
if num > 0:
    print("num es mayor a 0")
else:
    print("num no es mayor a 0")
```

## Bucles

```python
for i in range(6):
    if i == 3:
        break
    print(i)
else:
    print("¡Terminamos!")
```

## Funciones

```python
def mi_funcion():
    print("Hola desde la función")

mi_funcion()
```

## Manejo de Archivos

```python
with open("archivo.txt", "r", encoding='utf8') as archivo:
    for linea in archivo:
        print(linea)
```

## Operadores Aritméticos

```python
10 + 5   # Suma
10 - 5   # Resta
10 * 5   # Multiplicación
10 / 3   # División (float)
10 // 3  # División entera
10 % 3   # Módulo
2 ** 3   # Potencia
```

## Operadores Abreviados

```python
contador = 0
contador += 10
```

## f-Strings (Desde Python 3.6)

```python
nombre = "Ana"
print(f"Hola, {nombre}")
```

## Conversión de Tipos

```python
int("3")     # => 3
float("3.5") # => 3.5
str(10)      # => '10'
```

## Tipos Avanzados

### Heaps

```python
import heapq
lista = [3, 1, 4]
heapq.heapify(lista)
heapq.heappush(lista, 2)
heapq.heappop(lista)
```

### Deques (Pilas y Colas)

```python
from collections import deque
cola = deque([1, 2, 3])
cola.append(4)
cola.appendleft(0)
cola.pop()
cola.popleft()
```

## Strings

```python
s = "python"
s[0]      # 'p'
s[-1]     # 'n'
s[:3]     # 'pyt'
s[::-1]   # 'nohtyp'
```

### Métodos comunes

```python
len(s)
s.upper()
s.lower()
s.replace("py", "PY")
"py" in s
```

## Listas

```python
lista = [1, 2, 3]
lista.append(4)
lista[1:3]
del lista[0]
lista.count(3)
```

## Control de Flujo

```python
if x > 10:
    ...
elif x == 10:
    ...
else:
    ...

r = "a" if x > y else "b"
```

## Loops

```python
for i in range(3):
    print(i)

while i < 3:
    i += 1
```

## Funciones

```python
def suma(a, b=0):
    return a + b

(lambda x: x*2)(5)
```

## Módulos

```python
import math
from math import pi
from math import *
import math as m
```

## Archivos

```python
with open("f.txt", "w") as f:
    f.write("hola")

with open("f.txt") as f:
    print(f.read())
```

## Clases

```python
class Animal:
    def __init__(self, sonido):
        self.sonido = sonido

    def hablar(self):
        print(self.sonido)
```

## Excepciones

```python
try:
    1 / 0
except ZeroDivisionError:
    print("No se puede dividir por cero")
finally:
    print("Siempre se ejecuta")
```

## Generadores

```python
def dobles(it):
    for i in it:
        yield i * 2
```

## Limpio, mantenible y profesional

* Aplica **Zen de Python**: `import this`
* Sigue **principios SOLID, DRY y KISS**
* Usa control de versiones: `git`
* Organiza tu código en funciones y módulos
* Usa entornos virtuales: `python -m venv .venv`
* Administra dependencias: `requirements.txt`

---

**Sigue aprendiendo en tu camino hacia automatizar como profesional.**

---

> Esta guía es parte del curso *Automatiza en 3,2,1... con Python*
> por [@pixelead0](https://github.com/pixelead0)
