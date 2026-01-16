# Context Managers en Python

## ¿Qué son Context Managers?
Los Context Managers (gestores de contexto) son objetos que definen los métodos `__enter__` y `__exit__` para manejar la entrada y salida de un bloque de código. Son útiles para gestionar recursos como archivos, conexiones de base de datos o locks.

## Conceptos Básicos

### Uso Básico con `with`
```python
# Abrir y cerrar archivo
with open('archivo.txt', 'r') as f:
    contenido = f.read()
# El archivo se cierra automáticamente

# Conexión a base de datos
with conexion_db() as db:
    db.ejecutar_query("SELECT * FROM usuarios")
# La conexión se cierra automáticamente
```

### Crear un Context Manager
```python
class MiContextManager:
    def __init__(self, nombre):
        self.nombre = nombre

    def __enter__(self):
        print(f"Entrando al contexto: {self.nombre}")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"Saliendo del contexto: {self.nombre}")
        if exc_type:
            print(f"Error: {exc_val}")
            return True  # Suprime la excepción
```

## Ejemplos Comunes

### Gestión de Archivos
```python
class GestorArchivo:
    def __init__(self, nombre_archivo, modo='r'):
        self.nombre_archivo = nombre_archivo
        self.modo = modo
        self.archivo = None

    def __enter__(self):
        self.archivo = open(self.nombre_archivo, self.modo)
        return self.archivo

    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.archivo:
            self.archivo.close()

# Uso
with GestorArchivo('datos.txt', 'w') as f:
    f.write('Hola, mundo!')
```

### Gestión de Conexiones
```python
class GestorConexion:
    def __init__(self, host, puerto):
        self.host = host
        self.puerto = puerto
        self.conexion = None

    def __enter__(self):
        self.conexion = self.establecer_conexion()
        return self.conexion

    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.conexion:
            self.cerrar_conexion()

    def establecer_conexion(self):
        print(f"Conectando a {self.host}:{self.puerto}")
        return "Conexión establecida"

    def cerrar_conexion(self):
        print("Cerrando conexión")
```

### Gestión de Locks
```python
import threading

class GestorLock:
    def __init__(self):
        self.lock = threading.Lock()

    def __enter__(self):
        self.lock.acquire()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.lock.release()

# Uso
lock = GestorLock()
with lock:
    # Código que requiere exclusión mutua
    pass
```

## Decorador `@contextmanager`

### Uso Básico
```python
from contextlib import contextmanager

@contextmanager
def gestor_temporal():
    print("Configuración inicial")
    try:
        yield
    finally:
        print("Limpieza final")

# Uso
with gestor_temporal():
    print("Código principal")
```

### Ejemplo Práctico
```python
from contextlib import contextmanager
import time

@contextmanager
def medir_tiempo(nombre):
    inicio = time.time()
    try:
        yield
    finally:
        fin = time.time()
        print(f"{nombre}: {fin - inicio:.2f} segundos")

# Uso
with medir_tiempo("Operación costosa"):
    # Código a medir
    time.sleep(1)
```

## Buenas Prácticas

1. **Manejo de Errores**
```python
class GestorSeguro:
    def __enter__(self):
        try:
            self.recurso = self.obtener_recurso()
            return self.recurso
        except Exception as e:
            print(f"Error al obtener recurso: {e}")
            raise

    def __exit__(self, exc_type, exc_val, exc_tb):
        try:
            self.liberar_recurso()
        except Exception as e:
            print(f"Error al liberar recurso: {e}")
            return False  # Propaga el error
```

2. **Recursos Anidados**
```python
class GestorRecursos:
    def __init__(self, nombre):
        self.nombre = nombre

    def __enter__(self):
        print(f"Obteniendo {self.nombre}")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"Liberando {self.nombre}")

# Uso
with GestorRecursos("Recurso1") as r1:
    with GestorRecursos("Recurso2") as r2:
        print("Trabajando con recursos")
```

3. **Context Manager como Decorador**
```python
from functools import wraps

def con_reintentos(max_intentos=3):
    def decorador(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for intento in range(max_intentos):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if intento == max_intentos - 1:
                        raise
                    print(f"Intento {intento + 1} fallido: {e}")
        return wrapper
    return decorador

# Uso
@con_reintentos(max_intentos=3)
def operacion_riesgosa():
    # Código que puede fallar
    pass
```

## Ejemplos Avanzados

### Gestión de Transacciones
```python
class GestorTransaccion:
    def __init__(self, conexion):
        self.conexion = conexion

    def __enter__(self):
        self.conexion.begin()
        return self.conexion

    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type:
            self.conexion.rollback()
        else:
            self.conexion.commit()
```

### Gestión de Caché
```python
from contextlib import contextmanager
import tempfile
import os

@contextmanager
def directorio_temporal():
    temp_dir = tempfile.mkdtemp()
    try:
        yield temp_dir
    finally:
        for archivo in os.listdir(temp_dir):
            os.remove(os.path.join(temp_dir, archivo))
        os.rmdir(temp_dir)
```

## Consejos
1. Usa context managers para recursos que necesitan limpieza
2. Maneja las excepciones apropiadamente
3. Considera usar `@contextmanager` para casos simples
4. Documenta el comportamiento del context manager
5. Asegúrate de liberar recursos en `__exit__`

## Recursos Adicionales
- [Documentación de contextlib](https://docs.python.org/3/library/contextlib.html)
- [PEP 343](https://peps.python.org/pep-0343/)
- [Context Managers Tutorial](https://realpython.com/python-with-statement/)
