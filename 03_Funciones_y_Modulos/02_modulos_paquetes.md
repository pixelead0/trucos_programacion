# Módulos, Paquetes y Organización en Python

## ¿Qué son los módulos?

Los módulos son archivos Python (con extensión `.py`) que contienen código reutilizable. Nos permiten organizar lógicamente nuestro código agrupando funciones, clases y variables relacionadas.

## Crear y usar módulos

### Crear un módulo simple
```python
# archivo: utilidades.py
def saludar(nombre):
    """Función para saludar"""
    return f"¡Hola, {nombre}!"

def despedir(nombre):
    """Función para despedirse"""
    return f"¡Adiós, {nombre}!"

# Variable del módulo
version = "1.0.0"
autor = "Equipo de Desarrollo"
```

### Importar y usar el módulo
```python
# archivo: main.py
import utilidades

# Usar funciones del módulo
mensaje = utilidades.saludar("Usuario")
print(mensaje)

# Acceder a variables del módulo
print(f"Versión del sistema: {utilidades.version}")
```

## Diferentes formas de importar

### 1. Importar todo el módulo
```python
import utilidades

# Usar con el nombre del módulo
resultado = utilidades.saludar("Ana")
```

### 2. Importar funciones específicas
```python
from utilidades import saludar, despedir

# Usar directamente sin el nombre del módulo
resultado = saludar("Carlos")
resultado2 = despedir("Maria")
```

### 3. Importar con alias
```python
import utilidades as utils

# Usar con el alias
resultado = utils.saludar("Pedro")
```

### 4. Importar todo con * (No recomendado)
```python
from utilidades import *

# Importa todo al espacio de nombres actual
# Puede causar conflictos de nombres
resultado = saludar("Juan")
```

## Módulos estándar de Python

Python viene con una gran biblioteca estándar ("pilas incluidas").

### Módulo math
```python
import math

# Constantes
print(f"Pi: {math.pi}")

# Funciones matemáticas
print(f"Raíz cuadrada de 16: {math.sqrt(16)}")
print(f"Potencia 2^3: {math.pow(2, 3)}")
print(f"Seno de 90°: {math.sin(math.radians(90))}")
```

### Módulo random
```python
import random

# Aleatorios enteros
print(f"Dado: {random.randint(1, 6)}")

# Elección aleatoria
frutas = ["manzana", "peras", "uva", "naranja"]
print(f"Fruta del día: {random.choice(frutas)}")

# Mezclar lista
random.shuffle(frutas)
print(f"Orden aleatorizado: {frutas}")
```

### Módulo datetime
```python
import datetime

# Fecha y hora actual
ahora = datetime.datetime.now()
print(f"Fecha actual: {ahora}")

# Formateo
print(f"Formato legible: {ahora.strftime('%d/%m/%Y %H:%M')}")

# Operaciones con fechas
mañana = ahora + datetime.timedelta(days=1)
print(f"Mañana será: {mañana}")
```

### Módulo os
```python
import os

# Directorio actual
print(f"Estamos en: {os.getcwd()}")

# Listar archivos
# print(os.listdir("."))

# Verificar existencia
if os.path.exists("config.json"):
    print("Archivo de configuración encontrado")
```

## Paquetes

### ¿Qué son los paquetes?

Los paquetes son directorios que contienen múltiples módulos y un archivo especial `__init__.py`. Permiten organizar proyectos grandes en jerarquías de directorios.

### Estructura de un paquete
```
mi_proyecto/
├── __init__.py          # Convierte el directorio en paquete
├── main.py              # Punto de entrada
├── base_datos/          # Subpaquete
│   ├── __init__.py
│   ├── conexion.py
│   └── modelos.py
└── utilidades/          # Subpaquete
    ├── __init__.py
    └── validaciones.py
```

### Ejemplo de `__init__.py`
El archivo `__init__.py` puede estar vacío o puede ejecutar código de inicialización para el paquete, como exponer ciertas funciones para facilitar las importaciones.

```python
# archivo: mi_paquete/__init__.py
from .modulo1 import clase_principal
from .modulo2 import funcion_util

__version__ = "1.0.0"
```

## Ejercicios Prácticos

### Ejercicio 1: Sistema de Biblioteca Modular

Imaginemos un sistema dividido en módulos:

**archivo: biblioteca/libros.py**
```python
class Libro:
    def __init__(self, titulo, autor):
        self.titulo = titulo
        self.autor = autor
        self.disponible = True

    def prestar(self):
        if self.disponible:
            self.disponible = False
            return True
        return False

    def devolver(self):
        self.disponible = True
```

**archivo: biblioteca/usuarios.py**
```python
class Usuario:
    def __init__(self, nombre, id_usuario):
        self.nombre = nombre
        self.id = id_usuario
        self.prestamos = []

    def tomar_prestado(self, libro):
        if libro.prestar():
            self.prestamos.append(libro)
            print(f"{self.nombre} ha tomado '{libro.titulo}'")
        else:
            print(f"'{libro.titulo}' no está disponible")
```

**archivo: main.py**
```python
from biblioteca.libros import Libro
from biblioteca.usuarios import Usuario

libro1 = Libro("El Quijote", "Cervantes")
usuario1 = Usuario("Ana", 101)

usuario1.tomar_prestado(libro1)
```

### Ejercicio 2: Gestor de Proyectos

Organiza un sistema de gestión de tareas utilizando paquetes.

**Estructura:**
- `proyectos/`: Paquete principal
- `proyectos/modelos.py`: Clases `Proyecto` y `Tarea`
- `proyectos/servicios.py`: Lógica de negocio (asignar tareas, completar, etc.)

**archivo: proyectos/modelos.py**
```python
class Tarea:
    def __init__(self, descripcion):
        self.descripcion = descripcion
        self.completada = False

class Proyecto:
    def __init__(self, nombre):
        self.nombre = nombre
        self.tareas = []
```

**archivo: proyectos/servicios.py**
```python
def agregar_tarea(proyecto, descripcion):
    from .modelos import Tarea
    nueva = Tarea(descripcion)
    proyecto.tareas.append(nueva)
    return nueva

def resumen(proyecto):
    total = len(proyecto.tareas)
    completadas = sum(1 for t in proyecto.tareas if t.completada)
    return f"{proyecto.nombre}: {completadas}/{total} tareas completadas"
```

## Buenas Prácticas

1.  **Nombres significativos**: Usa nombres de módulos cortos y en minúsculas (ej: `modelos.py`, `utils.py`).
2.  **Evitas importaciones circulares**: Diseña tu arquitectura para que los módulos no dependan mutuamente entre sí de forma cíclica.
3.  **Encapsulamiento**: Usa `_` al principio de funciones o variables que sean internas del módulo (ej: `_funcion_interna`).
4.  **No importes todo (`*`)**: Hace que el código sea difícil de leer y depurar.

## Errores Comunes

- **ImportError / ModuleNotFoundError**: Verifica que el nombre sea correcto y que el archivo esté en una ruta accesible (`sys.path`).
- **Circular Import**: Cuando el módulo A importa B y módulo B importa A. Solución: reestructurar código o mover importaciones dentro de funciones.
- **Nombre de archivo conflictivo**: No llames a tus archivos igual que módulos estándar (ej: no crees un archivo llamado `math.py`, romperá las importaciones de `math`).

## Recursos Adicionales

- [Documentación oficial de Módulos](https://docs.python.org/3/tutorial/modules.html)
- [Guía de importaciones en Python](https://realpython.com/python-modules-packages/)

