# Decoradores en Python

## ¿Qué son los decoradores y cuándo los necesitas?

Imagina que tienes 10 funciones y quieres medir cuánto tiempo tarda cada una en ejecutarse. Podrías agregar código de medición en cada función, pero eso es repetitivo y hace el código más difícil de leer.

**Los decoradores resuelven esto:** Te permiten "envolver" funciones para agregar funcionalidad sin modificar su código original. Es como poner una función dentro de otra que le agrega superpoderes.

**Casos reales donde los usas:**
- Medir tiempo de ejecución
- Agregar logging automático
- Validar argumentos
- Cachear resultados
- Controlar acceso (autenticación)
- Reintentar operaciones que pueden fallar

**Ventaja clave:** Escribes la funcionalidad una vez, la aplicas a muchas funciones con solo agregar `@decorador` arriba.

> **Antes de continuar**: Asegúrate de entender bien [Funciones](../03_Funciones_y_Modulos/01_funciones.md) y [Clases](../04_Programacion_Orientada_a_Objetos/01_clases_objetos.md). Los decoradores son conceptos avanzados.

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
- [Documentación de functools](https://docs.python.org/3/library/functools.html)
- [PEP 318](https://peps.python.org/pep-0318/)
- [Decorator Pattern](https://en.wikipedia.org/wiki/Decorator_pattern)
- [Python Decorators Tutorial](https://realpython.com/primer-on-python-decorators/)
