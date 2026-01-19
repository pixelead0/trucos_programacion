---
title: Decoradores en Python
description: Aprende a usar decoradores para extender funcionalidad sin modificar código
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
  prereqs={['Funciones', 'Clases y Objetos']}
/>

<ProgressIndicator
  module="Módulo 07: Conceptos Avanzados"
  lesson={2}
  total={4}
/>

# Decoradores en Python

<LessonMap
  objectives={[
    "Entender qué son los decoradores y cómo funcionan",
    "Crear decoradores simples y con parámetros",
    "Usar @wraps para preservar metadatos",
    "Aplicar decoradores a funciones y clases",
    "Implementar decoradores útiles (timing, cache, retry)"
  ]}
  useCases={[
    "Medir tiempo de ejecución de funciones",
    "Agregar logging automático",
    "Validar argumentos de funciones",
    "Cachear resultados de funciones costosas",
    "Controlar acceso (autenticación/autorización)",
    "Reintentar operaciones que pueden fallar"
  ]}
  time="1.5 horas"
  level="advanced"
/>

## 🎯 ¿Por qué aprender decoradores?

Imagina que tienes 10 funciones y quieres medir cuánto tiempo tarda cada una en ejecutarse. Podrías agregar código de medición en cada función, pero eso es repetitivo y hace el código más difícil de leer.

Los decoradores te permiten:
- Agregar funcionalidad sin modificar código original
- Reutilizar código: escribes una vez, aplicas a muchas funciones
- Separar preocupaciones: la función hace su trabajo, el decorador agrega extras
- Código más limpio: funcionalidad adicional en un solo lugar
- Patrón común: usado extensivamente en frameworks como Flask, Django

## 🌍 Casos reales donde se usa

Los decoradores están en todos los frameworks y proyectos profesionales:

- **Medir tiempo de ejecución**: Profiling y optimización
- **Agregar logging automático**: Registrar llamadas a funciones
- **Validar argumentos**: Verificar tipos y valores antes de ejecutar
- **Cachear resultados**: Almacenar resultados de funciones costosas
- **Controlar acceso**: Autenticación y autorización en APIs
- **Reintentar operaciones**: Manejar fallos temporales automáticamente

**Ejemplo real**: En Flask, `@app.route('/ruta')` es un decorador que registra una función como endpoint. En Django, `@login_required` es un decorador que verifica autenticación.

## 💡 Concepto base

Los decoradores te permiten "envolver" funciones para agregar funcionalidad sin modificar su código original. Es como poner una función dentro de otra que le agrega superpoderes.

**Lo genial de Python:** La sintaxis `@decorador` hace que los decoradores sean muy legibles y fáciles de usar.

```python
# Decorador simple
def medir_tiempo(func):
    def wrapper(*args, **kwargs):
        import time
        inicio = time.time()
        resultado = func(*args, **kwargs)
        fin = time.time()
        print(f"{func.__name__} tardó {fin - inicio:.2f} segundos")
        return resultado
    return wrapper

# Usar el decorador
@medir_tiempo
def preparar_chilaquiles():
    time.sleep(1)  # Simular trabajo
    return "Chilaquiles listos"

preparar_chilaquiles()
```

<ExpectedOutput>
```
preparar_chilaquiles tardó 1.00 segundos
Chilaquiles listos
```
</ExpectedOutput>

:::tip 🌮 Analogía culinaria
Los decoradores son como los aderezos y toppings que agregas a los chilaquiles al pastor sin cambiar la receta base. Puedes agregar crema, cebolla, cilantro o aguacate usando decoradores: `@agregar_crema`, `@agregar_cebolla`. La receta de los chilaquiles sigue siendo la misma, pero cada decorador le agrega algo extra. De la misma forma, puedes decorar una función con `@medir_tiempo` o `@cachear` sin modificar la función original. La función hace su trabajo, el decorador agrega el "topping".
:::

:::info Para principiantes
**Antes de continuar**: Asegúrate de entender bien [Funciones](../03_Funciones_y_Modulos/01_funciones.md) y [Clases](../04_Programacion_Orientada_a_Objetos/01_clases_objetos.md). Los decoradores son conceptos avanzados pero muy poderosos. La ventaja clave: escribes la funcionalidad una vez, la aplicas a muchas funciones con solo agregar `@decorador` arriba.
:::

## Conceptos Básicos

### Decorador Simple

Un decorador es una función que toma otra función y devuelve una función modificada:

```python
def mi_decorador(funcion):
    # Esta función recibe una función como parámetro
    def wrapper():
        # Esta función "envuelve" la función original
        print("Antes de la función")
        funcion()  # Ejecuta la función original
        print("Después de la función")
    return wrapper  # Devuelve la función envuelta

# Aplicar el decorador con @
@mi_decorador
def saludar():
    print("¡Hola!")

# Cuando llamas saludar(), en realidad se ejecuta wrapper()
saludar()

# Salida:
# Antes de la función
# ¡Hola!
# Después de la función
```

**¿Qué está pasando aquí?**
1. `@mi_decorador` es azúcar sintáctico para `saludar = mi_decorador(saludar)`
2. `mi_decorador` recibe la función `saludar` original
3. Crea una nueva función `wrapper` que ejecuta código antes y después
4. Devuelve `wrapper`, que reemplaza a `saludar`
5. Cuando llamas `saludar()`, en realidad ejecutas `wrapper()`

**En la práctica:** Esto te permite agregar funcionalidad (logging, timing, validación) sin tocar el código de `saludar()`.

### Decorador con Argumentos
```python
def decorador_con_args(funcion):
    def wrapper(*args, **kwargs):
        print(f"Argumentos: {args}, {kwargs}")
        return funcion(*args, **kwargs)
    return wrapper

@decorador_con_args
def sumar(a, b):
    return a + b

# Uso
resultado = sumar(5, 3)
```

## Decoradores con Parámetros

### Decorador que Acepta Parámetros
```python
def repetir(veces):
    def decorador(funcion):
        def wrapper(*args, **kwargs):
            for _ in range(veces):
                resultado = funcion(*args, **kwargs)
            return resultado
        return wrapper
    return decorador

@repetir(veces=3)
def saludar(nombre):
    print(f"¡Hola, {nombre}!")

# Uso
saludar("Juan")
```

### Decorador con Estado
```python
def contador_llamadas(funcion):
    def wrapper(*args, **kwargs):
        wrapper.llamadas += 1
        print(f"Llamada #{wrapper.llamadas}")
        return funcion(*args, **kwargs)
    wrapper.llamadas = 0
    return wrapper

@contador_llamadas
def ejemplo():
    print("Función ejecutada")

# Uso
ejemplo()  # Llamada #1
ejemplo()  # Llamada #2
```

## Decoradores de Clase

### Decorador de Clase
```python
def decorador_clase(cls):
    class Wrapper:
        def __init__(self, *args, **kwargs):
            self.wrapped = cls(*args, **kwargs)

        def __getattr__(self, name):
            return getattr(self.wrapped, name)
    return Wrapper

@decorador_clase
class MiClase:
    def __init__(self, x):
        self.x = x

    def metodo(self):
        return self.x
```

### Decorador de Método
```python
def validar_entero(funcion):
    def wrapper(self, valor):
        if not isinstance(valor, int):
            raise TypeError("El valor debe ser un entero")
        return funcion(self, valor)
    return wrapper

class Calculadora:
    @validar_entero
    def sumar(self, x):
        return x + 1
```

## Decoradores Útiles

### Medir Tiempo
```python
import time
from functools import wraps

def medir_tiempo(funcion):
    @wraps(funcion)
    def wrapper(*args, **kwargs):
        inicio = time.time()
        resultado = funcion(*args, **kwargs)
        fin = time.time()
        print(f"Tiempo de ejecución: {fin - inicio:.2f} segundos")
        return resultado
    return wrapper

@medir_tiempo
def operacion_lenta():
    time.sleep(1)
    return "Completado"
```

### Cache
```python
from functools import wraps

def cache(funcion):
    cache = {}
    @wraps(funcion)
    def wrapper(*args, **kwargs):
        key = str(args) + str(kwargs)
        if key not in cache:
            cache[key] = funcion(*args, **kwargs)
        return cache[key]
    return wrapper

@cache
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

### Validación
```python
def validar_tipos(*tipos_args, **tipos_kwargs):
    def decorador(funcion):
        @wraps(funcion)
        def wrapper(*args, **kwargs):
            # Validar argumentos posicionales
            for arg, tipo in zip(args, tipos_args):
                if not isinstance(arg, tipo):
                    raise TypeError(f"Argumento {arg} debe ser de tipo {tipo}")

            # Validar argumentos nombrados
            for nombre, valor in kwargs.items():
                if nombre in tipos_kwargs:
                    tipo = tipos_kwargs[nombre]
                    if not isinstance(valor, tipo):
                        raise TypeError(f"Argumento {nombre} debe ser de tipo {tipo}")

            return funcion(*args, **kwargs)
        return wrapper
    return decorador

@validar_tipos(int, str)
def procesar_datos(numero, texto):
    return f"{texto}: {numero}"
```

## Buenas Prácticas

1. **Preservar Metadatos**
```python
from functools import wraps

def mi_decorador(funcion):
    @wraps(funcion)  # Preserva metadatos
    def wrapper(*args, **kwargs):
        return funcion(*args, **kwargs)
    return wrapper
```

2. **Manejo de Errores**
```python
def manejar_errores(funcion):
    @wraps(funcion)
    def wrapper(*args, **kwargs):
        try:
            return funcion(*args, **kwargs)
        except Exception as e:
            print(f"Error en {funcion.__name__}: {e}")
            raise
    return wrapper
```

3. **Documentación**
```python
def documentar(funcion):
    @wraps(funcion)
    def wrapper(*args, **kwargs):
        """
        Documentación del decorador.
        """
        return funcion(*args, **kwargs)
    return wrapper
```

## Ejemplos Avanzados

### Decorador para Logging
```python
import logging
from functools import wraps

def log_llamadas(funcion):
    @wraps(funcion)
    def wrapper(*args, **kwargs):
        logging.info(f"Llamando a {funcion.__name__} con args={args}, kwargs={kwargs}")
        try:
            resultado = funcion(*args, **kwargs)
            logging.info(f"{funcion.__name__} retornó {resultado}")
            return resultado
        except Exception as e:
            logging.error(f"Error en {funcion.__name__}: {e}")
            raise
    return wrapper
```

### Decorador para Retry
```python
import time
from functools import wraps

def retry(max_intentos=3, delay=1):
    def decorador(funcion):
        @wraps(funcion)
        def wrapper(*args, **kwargs):
            intentos = 0
            while intentos < max_intentos:
                try:
                    return funcion(*args, **kwargs)
                except Exception as e:
                    intentos += 1
                    if intentos == max_intentos:
                        raise
                    print(f"Intento {intentos} fallido: {e}")
                    time.sleep(delay)
        return wrapper
    return decorador

@retry(max_intentos=3, delay=1)
def operacion_riesgosa():
    # Código que puede fallar
    pass
```

## Consejos
1. Usa `@wraps` para preservar metadatos
2. Mantén los decoradores simples y reutilizables
3. Documenta el comportamiento del decorador
4. Considera el impacto en el rendimiento
5. Usa decoradores para aspectos transversales

## Recursos Adicionales

### Documentación Oficial
- [Documentación de functools](https://docs.python.org/3/library/functools.html)
- [PEP 318 - Decorators for Functions and Methods](https://peps.python.org/pep-0318/)
- [Decorator Pattern](https://en.wikipedia.org/wiki/Decorator_pattern)
- [Python Decorators Tutorial](https://realpython.com/primer-on-python-decorators/)

### Bibliografía Recomendada
- **Fluent Python** (Luciano Ramalho) - Capítulo 7: Function Decorators and Closures
- **Effective Python** (Brett Slatkin) - Items sobre decoradores
- **Python Tricks** (Dan Bader) - Capítulo completo sobre decoradores
- **Python Cookbook, 3rd Ed** (Beazley & Jones) - Recetas sobre decoradores
- **Design Patterns: Elements of Reusable OOP** (Gang of Four) - Patrón Decorator

## Wrappers Avanzados

### Wrapper con Preservación de Metadatos

```python
from functools import wraps

def medir_tiempo(funcion):
    @wraps(funcion)  # Preserva metadatos de la función original
    def wrapper(*args, **kwargs):
        import time
        inicio = time.time()
        resultado = funcion(*args, **kwargs)
        fin = time.time()
        print(f"{funcion.__name__} tomó {fin - inicio:.2f} segundos")
        return resultado
    return wrapper

@medir_tiempo
def operacion_lenta():
    import time
    time.sleep(1)
    return "Completado"

operacion_lenta()
```

### Wrapper con Validación

```python
from functools import wraps

def validar_entero_positivo(funcion):
    @wraps(funcion)
    def wrapper(numero):
        if not isinstance(numero, int):
            raise TypeError("El argumento debe ser un entero")
        if numero <= 0:
            raise ValueError("El número debe ser positivo")
        return funcion(numero)
    return wrapper

@validar_entero_positivo
def calcular_factorial(n):
    """Calcula el factorial de n"""
    if n == 1:
        return 1
    return n * calcular_factorial(n - 1)

print(calcular_factorial(5))  # 120
```

### Wrappers para Clases

```python
def agregar_metodo_logging(cls):
    """Agrega logging a todos los métodos de una clase"""
    for nombre, metodo in vars(cls).items():
        if callable(metodo) and not nombre.startswith('_'):
            setattr(cls, nombre, log_llamadas(metodo))
    return cls

def log_llamadas(funcion):
    def wrapper(*args, **kwargs):
        print(f"Llamando a {funcion.__name__}")
        return funcion(*args, **kwargs)
    return wrapper

@agregar_metodo_logging
class Calculadora:
    def sumar(self, a, b):
        return a + b

    def restar(self, a, b):
        return a - b

calc = Calculadora()
calc.sumar(5, 3)  # Imprime: Llamando a sumar
```

### Conceptos Relacionados
- [Funciones](../03_Funciones_y_Modulos/01_funciones.md) - Base para decoradores
- [Context Managers](./03_context_managers.md) - Similar a decoradores
- [Clases y Objetos](../04_Programacion_Orientada_a_Objetos/01_clases_objetos.md) - Decoradores de clase
- [Generadores e Iteradores](./01_generadores_iteradores.md) - Para decoradores avanzados

## Siguiente paso

<NextStep
  to="/Conceptos_Avanzados/context_managers"
  label="Siguiente: Context Managers →"
/>
