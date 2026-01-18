---
title: Pathlib en Python
description: Manejo moderno de rutas y archivos en Python
---

import LessonMeta from '@site/src/components/LessonMeta';
import LessonMap from '@site/src/components/LessonMap';
import Checkpoint from '@site/src/components/Checkpoint';
import NextStep from '@site/src/components/NextStep';
import TryIt from '@site/src/components/TryIt';
import ProgressIndicator from '@site/src/components/ProgressIndicator';

<LessonMeta
  level="intermediate"
  time="45 minutos"
  prereqs={['Funciones', 'Manejo de Errores']}
/>

<ProgressIndicator
  module="Módulo 06: Datos y Formatos"
  lesson={1}
  total={5}
/>

# Pathlib en Python

<LessonMap
  objectives={[
    "Usar Pathlib en lugar de strings para rutas",
    "Combinar rutas de forma segura entre sistemas",
    "Extraer partes de rutas (nombre, extensión, directorio)",
    "Verificar existencia de archivos y directorios",
    "Crear y eliminar archivos y directorios"
  ]}
  useCases={[
    "Trabajar con archivos y directorios de forma segura",
    "Código multiplataforma (Windows, Linux, Mac)",
    "Procesar archivos en directorios",
    "Organizar proyectos con rutas relativas",
    "Scripts que manipulan archivos del sistema",
    "APIs que manejan uploads y downloads"
  ]}
  time="45 minutos"
  level="intermediate"
/>

## 💡 ¿Qué es Pathlib y por qué usarlo en lugar de strings?

Tradicionalmente en Python trabajabas con rutas como strings: `ruta = "/home/usuario/documentos/archivo.txt"`. Esto funciona, pero tiene problemas:

- Difícil de combinar rutas (¿usas `/` o `\\` según el sistema?)
- Difícil de extraer partes (nombre, extensión, directorio padre)
- No es seguro entre Windows, Linux y Mac

**Pathlib resuelve esto:** Te da un objeto `Path` que maneja todo esto de forma elegante y funciona en cualquier sistema operativo.

**Ventajas reales:**
- Combina rutas con `/` (funciona en todos los sistemas)
- Métodos claros: `.name`, `.suffix`, `.parent`, `.exists()`
- Más legible: `ruta.parent / "nuevo_archivo.txt"` vs `os.path.join(os.path.dirname(ruta), "nuevo_archivo.txt")`
- Es el estándar moderno (Python 3.6+)

**¿Cuándo usar Pathlib?**
- Siempre que trabajes con archivos y directorios
- Cuando necesites código que funcione en Windows, Linux y Mac
- Cuando quieras código más legible y mantenible

> **Antes de continuar**: Asegúrate de entender [Funciones](../03_Funciones_y_Modulos/01_funciones.md) y [Manejo de Errores](../05_Manejo_de_Errores_y_Buenas_Practicas/01_excepciones.md).

## Conceptos Básicos

### Crear y Manipular Paths

Primero importas `Path` y creas objetos de ruta:

```python
from pathlib import Path

# Crear un Path (relativo al directorio actual)
ruta = Path('directorio/archivo.txt')

# Path absoluto (desde la raíz del sistema)
ruta_absoluta = Path('/home/usuario/directorio/archivo.txt')

# Path relativo explícito (el ./ es opcional)
ruta_relativa = Path('./directorio/archivo.txt')
```

**¿Cuál usar?**
- **Relativo**: Cuando trabajas dentro de tu proyecto
- **Absoluto**: Cuando necesitas una ruta específica del sistema

### Operaciones Básicas: Extraer Información

Pathlib te da métodos claros para obtener partes de la ruta:

```python
# Obtener partes del path
ruta = Path('/home/usuario/directorio/archivo.txt')

print(ruta.name)        # 'archivo.txt' - nombre completo del archivo
print(ruta.suffix)      # '.txt' - extensión del archivo
print(ruta.stem)        # 'archivo' - nombre sin extensión
print(ruta.parent)      # Path('/home/usuario/directorio') - directorio padre
print(ruta.parts)       # ('/', 'home', 'usuario', 'directorio', 'archivo.txt') - tupla con todas las partes
```

**¿Por qué es útil?**
- `ruta.name` → Para mostrar el nombre del archivo al usuario
- `ruta.suffix` → Para verificar el tipo de archivo (`.txt`, `.json`, etc.)
- `ruta.parent` → Para crear archivos en el mismo directorio
- `ruta.stem` → Para cambiar la extensión manteniendo el nombre

### Combinar Paths (Lo Mejor de Pathlib)

En lugar de concatenar strings, usas el operador `/`:

```python
# Unir paths - funciona en Windows, Linux y Mac
ruta_base = Path('/home/usuario')
ruta_completa = ruta_base / 'directorio' / 'archivo.txt'
# Resultado: Path('/home/usuario/directorio/archivo.txt')
```

**Comparación con el método viejo:**
```python
# ❌ Viejo método (os.path) - verboso y propenso a errores
import os
ruta_vieja = os.path.join(os.path.join('/home/usuario', 'directorio'), 'archivo.txt')

# ✅ Pathlib - claro y legible
ruta_nueva = Path('/home/usuario') / 'directorio' / 'archivo.txt'
```

**Ventaja:** El `/` funciona en todos los sistemas operativos. Pathlib se encarga de usar `/` o `\` según corresponda.

## Operaciones con Archivos

### Verificar Existencia
```python
ruta = Path('archivo.txt')

# Verificar si existe
if ruta.exists():
    print("El archivo existe")

# Verificar si es archivo o directorio
if ruta.is_file():
    print("Es un archivo")
if ruta.is_dir():
    print("Es un directorio")
```

### Crear y Eliminar
```python
# Crear directorio
ruta = Path('nuevo_directorio')
ruta.mkdir(exist_ok=True)

# Crear archivo
archivo = Path('nuevo_archivo.txt')
archivo.touch()

# Eliminar
archivo.unlink()  # Eliminar archivo
ruta.rmdir()      # Eliminar directorio vacío
```

### Leer y Escribir
```python
# Escribir archivo
ruta = Path('archivo.txt')
ruta.write_text('Contenido del archivo')

# Leer archivo
contenido = ruta.read_text()

# Leer bytes
bytes_contenido = ruta.read_bytes()
```

## Operaciones con Directorios

### Listar Contenido
```python
# Listar archivos en directorio
directorio = Path('.')

# Listar todos los archivos
for archivo in directorio.iterdir():
    print(archivo)

# Listar archivos con patrón
for archivo in directorio.glob('*.txt'):
    print(archivo)

# Búsqueda recursiva
for archivo in directorio.rglob('*.txt'):
    print(archivo)
```

### Crear Estructura de Directorios
```python
# Crear directorios anidados
ruta = Path('dir1/dir2/dir3')
ruta.mkdir(parents=True, exist_ok=True)
```

## Ejemplos Prácticos

### Copiar Archivos
```python
from pathlib import Path
import shutil

def copiar_archivo(origen: Path, destino: Path):
    if not origen.exists():
        raise FileNotFoundError(f"Archivo no encontrado: {origen}")

    # Crear directorio de destino si no existe
    destino.parent.mkdir(parents=True, exist_ok=True)

    # Copiar archivo
    shutil.copy2(origen, destino)
```

### Buscar Archivos
```python
def buscar_archivos(directorio: Path, patron: str) -> list[Path]:
    return list(directorio.rglob(patron))

# Uso
archivos = buscar_archivos(Path('.'), '*.py')
for archivo in archivos:
    print(f"Encontrado: {archivo}")
```

### Gestionar Backups
```python
from datetime import datetime

def crear_backup(archivo: Path):
    if not archivo.exists():
        raise FileNotFoundError(f"Archivo no encontrado: {archivo}")

    # Crear nombre de backup con timestamp
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    backup = archivo.parent / f"{archivo.stem}_{timestamp}{archivo.suffix}"

    # Copiar archivo
    shutil.copy2(archivo, backup)
    return backup
```

## Buenas Prácticas

1. **Usar Path en lugar de strings**
```python
# ❌ Mal
ruta = '/home/usuario/archivo.txt'

# ✅ Bien
ruta = Path('/home/usuario/archivo.txt')
```

2. **Manejar Errores**
```python
def procesar_archivo(ruta: Path):
    try:
        if not ruta.exists():
            raise FileNotFoundError(f"Archivo no encontrado: {ruta}")

        # Procesar archivo
        contenido = ruta.read_text()
        # ...

    except PermissionError:
        print(f"Sin permisos para acceder a: {ruta}")
    except Exception as e:
        print(f"Error al procesar archivo: {e}")
```

3. **Validar Paths**
```python
def validar_path(ruta: Path) -> bool:
    return (
        ruta.exists() and
        ruta.is_file() and
        ruta.suffix == '.txt'
    )
```

## Consejos
1. Usa `Path` en lugar de `os.path`
2. Prefiere métodos de `Path` sobre operaciones de string
3. Maneja los errores apropiadamente
4. Usa `parents=True` al crear directorios
5. Considera la portabilidad entre sistemas operativos

## Recursos Adicionales

### Documentación Oficial
- [Documentación de Pathlib](https://docs.python.org/3/library/pathlib.html)
- [PEP 428 - The pathlib module](https://peps.python.org/pep-0428/)
- [Tutorial de Pathlib](https://realpython.com/python-pathlib/)
- [os.path vs pathlib](https://docs.python.org/3/library/pathlib.html#correspondence-to-tools-in-the-os-module)

### Bibliografía Recomendada
- **Python Tricks** (Dan Bader) - Capítulo sobre pathlib
- **Effective Python** (Brett Slatkin) - Item 37: Use Comprehensions Instead of map and filter
- **Python Cookbook, 3rd Ed** (Beazley & Jones) - Recetas sobre manejo de archivos
- **Automate the Boring Stuff** (Al Sweigart) - Capítulo 8: Reading and Writing Files

### Conceptos Relacionados
- [XML](./02_xml.md) - Trabaja con archivos XML
- [Context Managers](../07_Conceptos_Avanzados/03_context_managers.md) - Maneja archivos de forma segura
- [JSON](./03_json.md) - Trabaja con archivos JSON

---

## Siguiente paso
Ahora que sabes trabajar con rutas, aprende a procesar formatos de datos comunes. Continúa con: **[JSON](./03_json.md)** o **[XML](./02_xml.md)**
