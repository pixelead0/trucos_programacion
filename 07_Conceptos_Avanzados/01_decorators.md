# Decoradores en Python

## ¿Qué son los Decoradores?
Los decoradores son una característica de Python que permite modificar el comportamiento de funciones o clases sin cambiar su código fuente. Son una forma de aplicar el patrón de diseño "Decorator" de manera elegante y concisa.

## Conceptos Básicos

### Decorador Simple
```python
def mi_decorador(funcion):
    def wrapper():
        print("Antes de la función")
        funcion()
        print("Después de la función")
    return wrapper

@mi_decorador
def saludar():
    print("¡Hola!")

# Uso
saludar()
```

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
- [Documentación de functools](https://docs.python.org/3/library/functools.html)
- [PEP 318](https://peps.python.org/pep-0318/)
- [Decorator Pattern](https://en.wikipedia.org/wiki/Decorator_pattern)
- [Python Decorators Tutorial](https://realpython.com/primer-on-python-decorators/)
