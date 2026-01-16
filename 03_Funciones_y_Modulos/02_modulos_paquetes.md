# Módulos, Paquetes y Organización en Python

## ¿Qué son los módulos y por qué organizar tu código?

Imagina que tienes un proyecto con 50 funciones. ¿Las pones todas en un solo archivo de 2000 líneas? Eso sería un desastre: difícil de encontrar cosas, difícil de mantener, difícil de trabajar en equipo.

**Los módulos resuelven esto:** Te permiten dividir tu código en archivos lógicos. Cada archivo es un "módulo" que agrupa código relacionado.

**Beneficios reales:**
- **Organización**: Encuentras código más rápido
- **Reutilización**: Usas el mismo módulo en múltiples proyectos
- **Colaboración**: Varios desarrolladores pueden trabajar en módulos diferentes
- **Mantenimiento**: Cambios en un módulo no afectan otros

**En la práctica:** Un módulo es simplemente un archivo `.py` con funciones, clases o variables que quieres reutilizar.

> **Antes de continuar**: Asegúrate de entender [Funciones](./01_funciones.md) y [Diccionarios](../02_Estructuras_de_Datos/01_listas_tuplas_diccionarios.md).

## Crear y usar módulos

### Crear un módulo simple

Un módulo es solo un archivo Python normal. Por ejemplo, creas `utilidades.py`:

```python
# archivo: utilidades.py
def saludar(nombre):
    """Función para saludar"""
    return f"¡Hola, {nombre}!"

def despedir(nombre):
    """Función para despedirse"""
    return f"¡Adiós, {nombre}!"

# Variables del módulo (también puedes guardar constantes)
version = "1.0.0"
autor = "Equipo de Desarrollo"
```

**¿Qué está pasando?**
Este es un archivo Python normal. No hay nada especial en él. La "magia" viene cuando lo importas en otro archivo.

### Importar y usar el módulo

En otro archivo (por ejemplo `main.py`), importas y usas el módulo:

```python
# archivo: main.py
import utilidades  # Importa todo el módulo

# Usar funciones del módulo - nota el punto: módulo.función
mensaje = utilidades.saludar("Usuario")
print(mensaje)  # "¡Hola, Usuario!"

# Acceder a variables del módulo
print(f"Versión del sistema: {utilidades.version}")  # "Versión del sistema: 1.0.0"
```

**¿Qué está pasando aquí?**
- `import utilidades` busca el archivo `utilidades.py` en el mismo directorio (o en las rutas de Python)
- Carga todo el código del módulo
- Puedes acceder a funciones y variables usando `utilidades.` (nombre del módulo + punto)

**Ventaja:** Si actualizas `utilidades.py`, todos los archivos que lo importan automáticamente usan la versión actualizada.

## Diferentes formas de importar

### 1. Importar todo el módulo

La forma más común y segura:

```python
import utilidades

# Usar con el nombre del módulo (módulo.función)
resultado = utilidades.saludar("Ana")
```

**Ventajas:**
- Claro de dónde viene cada función (`utilidades.saludar` vs solo `saludar`)
- Evita conflictos de nombres (si tienes `saludar()` en dos módulos, sabes cuál usas)
- Es la forma recomendada por PEP 8

**Desventaja:** Más verboso (tienes que escribir `utilidades.` cada vez)

### 2. Importar funciones específicas

Cuando solo necesitas algunas funciones:

```python
from utilidades import saludar, despedir

# Usar directamente sin el nombre del módulo
resultado = saludar("Carlos")
resultado2 = despedir("Maria")
```

**Ventajas:**
- Más corto y legible
- Útil cuando solo necesitas 1-2 funciones de un módulo

**Desventajas:**
- Puede causar conflictos si importas `saludar` de dos módulos diferentes
- Menos claro de dónde viene la función

**¿Cuándo usar esto?** Cuando el nombre del módulo es muy largo o cuando solo necesitas una función específica.

### 3. Importar con alias

Útil cuando el nombre del módulo es largo o conflictivo:

```python
import utilidades as utils  # 'as' crea un alias

# Usar con el alias (más corto)
resultado = utils.saludar("Pedro")
```

**¿Cuándo usar alias?**
- Módulos con nombres largos: `import pandas as pd` (muy común)
- Evitar conflictos: `import datetime as dt` para no confundir con tu variable `datetime`
- Convenciones del proyecto: `import numpy as np` (todos lo hacen así)

### 4. Importar todo con * (⚠️ No recomendado)

```python
from utilidades import *  # Importa TODO

# Puedes usar funciones directamente
resultado = saludar("Juan")
```

**⚠️ ¿Por qué no recomendado?**
- **Conflictos de nombres**: Si `utilidades` tiene `saludar()` y otro módulo también, ¿cuál se usa?
- **Difícil de rastrear**: No sabes de dónde viene cada función
- **Contamina el namespace**: Llena tu espacio de nombres con muchas funciones que tal vez no uses

**Excepción:** A veces se usa en `__init__.py` de paquetes para facilitar importaciones, pero en código normal, evítalo.

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

---

## Siguiente paso
Ahora que sabes organizar código en módulos, aprende a crear clases y objetos. Continúa con: **[Clases y Objetos](../04_Programacion_Orientada_a_Objetos/01_clases_objetos.md)**
