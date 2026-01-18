---
title: Context Managers en Python
description: Aprende a gestionar recursos de forma segura con context managers
---

import LessonMeta from '@site/src/components/LessonMeta';
import LessonMap from '@site/src/components/LessonMap';
import Checkpoint from '@site/src/components/Checkpoint';
import NextStep from '@site/src/components/NextStep';
import TryIt from '@site/src/components/TryIt';
import ProgressIndicator from '@site/src/components/ProgressIndicator';

<LessonMeta
  level="advanced"
  time="1 hora"
  prereqs={['Funciones', 'Manejo de Errores']}
/>

<ProgressIndicator
  module="Módulo 07: Conceptos Avanzados"
  lesson={3}
  total={4}
/>

# Context Managers en Python

<LessonMap
  objectives={[
    "Entender qué son context managers y por qué usarlos",
    "Usar with statement para gestión segura de recursos",
    "Crear context managers personalizados",
    "Manejar recursos que necesitan limpieza",
    "Aplicar context managers en casos reales"
  ]}
  useCases={[
    "Abrir y cerrar archivos automáticamente",
    "Gestionar conexiones a bases de datos",
    "Bloquear recursos compartidos (threading locks)",
    "Configurar y restaurar estados temporales",
    "Medir tiempo de ejecución de bloques de código",
    "Gestionar transacciones de base de datos"
  ]}
  time="1 hora"
  level="advanced"
/>

## ¿Qué son los context managers y por qué usarlos?

Probablemente ya usas context managers sin saberlo. Cuando escribes:

```python
with open('archivo.txt', 'r') as f:
    contenido = f.read()
# El archivo se cierra automáticamente aquí
```

Ese `with` es un context manager. **¿Por qué es útil?** Porque garantiza que el archivo se cierre, incluso si hay un error.

**Sin context manager (problemático):**
```python
f = open('archivo.txt', 'r')
contenido = f.read()
# ¿Qué pasa si hay un error aquí? El archivo nunca se cierra
f.close()  # Esta línea puede no ejecutarse
```

**Con context manager (seguro):**
```python
with open('archivo.txt', 'r') as f:
    contenido = f.read()
# El archivo SIEMPRE se cierra, incluso si hay un error
```

**Casos reales donde los necesitas:**
- Abrir y cerrar archivos
- Conexiones a bases de datos
- Locks (candados) para threading
- Cambios temporales de configuración
- Recursos que necesitan limpieza

**Ventaja clave:** Garantiza que la limpieza siempre ocurra, incluso si hay excepciones.

> **Antes de continuar**: Asegúrate de entender [Manejo de Errores](../05_Manejo_de_Errores_y_Buenas_Practicas/01_excepciones.md) y [Clases](../04_Programacion_Orientada_a_Objetos/01_clases_objetos.md).

## Conceptos Básicos

### Uso Básico con `with`

El `with` statement es la forma de usar context managers. La sintaxis es:

```python
with objeto_context_manager as variable:
    # Código que usa el recurso
    pass
# Aquí el recurso se limpia automáticamente
```

**Ejemplo real: Abrir archivos**

```python
# Abrir y cerrar archivo
with open('archivo.txt', 'r') as f:
    contenido = f.read()
    # Puedes usar 'f' aquí
# El archivo se cierra automáticamente aquí, incluso si hay un error
```

**¿Qué está pasando?**
1. `open()` devuelve un context manager (un objeto archivo)
2. `as f` asigna el archivo abierto a la variable `f`
3. El código dentro del `with` se ejecuta
4. Al salir del bloque (normal o por error), Python llama automáticamente a `f.close()`

**Ejemplo: Conexión a base de datos**

```python
# Conexión a base de datos (ejemplo conceptual)
with conexion_db() as db:
    db.ejecutar_query("SELECT * FROM usuarios")
    # Puedes hacer más operaciones aquí
# La conexión se cierra automáticamente aquí
```

**Ventaja:** No importa si hay un error dentro del `with`, la conexión siempre se cierra. Sin `with`, tendrías que usar `try/finally` manualmente.

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

### Documentación Oficial
- [Documentación de contextlib](https://docs.python.org/3/library/contextlib.html)
- [PEP 343 - The "with" Statement](https://peps.python.org/pep-0343/)
- [Context Managers Tutorial](https://realpython.com/python-with-statement/)

### Bibliografía Recomendada
- **Fluent Python** (Luciano Ramalho) - Capítulo 15: Context Managers and else Blocks
- **Effective Python** (Brett Slatkin) - Item 66: Consider contextlib and with Statements for Reusable try/finally Behavior
- **Python Tricks** (Dan Bader) - Capítulo sobre context managers
- **Python Cookbook, 3rd Ed** (Beazley & Jones) - Recetas sobre context managers

### Conceptos Relacionados
- [Decoradores](./02_decorators.md) - Similar patrón de extensión
- [Manejo de Archivos](../06_Manejo_de_Archivos_y_Formatos/01_pathlib.md) - Usa context managers con archivos
- [Manejo de Errores](../05_Manejo_de_Errores_y_Buenas_Practicas/01_excepciones.md) - Context managers manejan errores

---

## Siguiente paso
## Siguiente paso

<NextStep
  to="/Conceptos_Avanzados/performance"
  label="Siguiente: Performance →"
/>
