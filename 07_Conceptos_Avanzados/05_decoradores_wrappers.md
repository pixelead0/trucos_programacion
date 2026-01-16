# Decoradores y Wrappers en Python

## Introducción

Los decoradores y wrappers son patrones de diseño que permiten modificar o extender el comportamiento de funciones, métodos o clases sin cambiar su código fuente. Son una característica poderosa de Python que se usa ampliamente en frameworks y bibliotecas profesionales.

> **Prerequisitos**: Antes de continuar, asegúrate de entender [Decoradores Básicos](./01_decorators.md) y [Funciones](../03_Funciones_y_Modulos/01_funciones.md).

## ¿Qué son los Wrappers?

Un wrapper (envoltorio) es una función que envuelve otra función, añadiendo funcionalidad antes o después de su ejecución. Los decoradores son una forma elegante de aplicar wrappers en Python.

### Wrapper Manual

```python
def mi_funcion():
    print("Función original")

def wrapper(funcion):
    def nueva_funcion():
        print("Antes de ejecutar")
        resultado = funcion()
        print("Después de ejecutar")
        return resultado
    return nueva_funcion

# Aplicar wrapper manualmente
funcion_envuelta = wrapper(mi_funcion)
funcion_envuelta()
```

### Wrapper con Decorador

```python
def mi_decorador(funcion):
    def wrapper(*args, **kwargs):
        print("Antes de ejecutar")
        resultado = funcion(*args, **kwargs)
        print("Después de ejecutar")
        return resultado
    return wrapper

@mi_decorador
def mi_funcion():
    print("Función original")

# Ahora la función está decorada automáticamente
mi_funcion()
```

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

## Wrappers para Clases

### Decorador de Clase

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

## Ejemplos Prácticos

### Cache con Wrapper

```python
from functools import wraps

def cache(funcion):
    cache_dict = {}

    @wraps(funcion)
    def wrapper(*args, **kwargs):
        clave = str(args) + str(kwargs)
        if clave not in cache_dict:
            cache_dict[clave] = funcion(*args, **kwargs)
        return cache_dict[clave]
    return wrapper

@cache
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# La primera llamada calcula, las siguientes usan cache
print(fibonacci(30))  # Rápido gracias al cache
```

### Retry con Wrapper

```python
from functools import wraps
import time

def retry(max_intentos=3, delay=1):
    def decorador(funcion):
        @wraps(funcion)
        def wrapper(*args, **kwargs):
            for intento in range(max_intentos):
                try:
                    return funcion(*args, **kwargs)
                except Exception as e:
                    if intento == max_intentos - 1:
                        raise
                    print(f"Intento {intento + 1} falló: {e}. Reintentando...")
                    time.sleep(delay)
        return wrapper
    return decorador

@retry(max_intentos=3, delay=1)
def operacion_riesgosa():
    import random
    if random.random() < 0.7:
        raise Exception("Error aleatorio")
    return "Éxito"

operacion_riesgosa()
```

## Buenas Prácticas

1. **Usa `@wraps` para preservar metadatos**
2. **Documenta el comportamiento del wrapper**
3. **Mantén los wrappers simples y reutilizables**
4. **Considera el impacto en el rendimiento**

## Recursos Adicionales

- [Documentación de functools.wraps](https://docs.python.org/3/library/functools.html#functools.wraps)
- [Wrappers y Decoradores (PDF)](http://46.101.4.154/Art%C3%ADculos%20t%C3%A9cnicos/Python/Wrappers%20y%20decoradores.pdf)
- [Primer on Python Decorators (Real Python)](https://realpython.com/primer-on-python-decorators/)

---

## Siguiente paso
Ahora que conoces decoradores y wrappers, explora otros conceptos avanzados. Continúa con: **[Context Managers](./02_context_managers.md)** o **[Performance](./03_performance.md)**
