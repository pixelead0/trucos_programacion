# Pathlib en Python

## ¿Qué es Pathlib?
Pathlib es un módulo de la biblioteca estándar de Python que proporciona una forma orientada a objetos para trabajar con rutas de archivos y directorios. Es más moderno y seguro que usar `os.path`.

## Conceptos Básicos

### Crear y Manipular Paths
```python
from pathlib import Path

# Crear un Path
ruta = Path('directorio/archivo.txt')

# Path absoluto
ruta_absoluta = Path('/home/usuario/directorio/archivo.txt')

# Path relativo
ruta_relativa = Path('./directorio/archivo.txt')
```

### Operaciones Básicas
```python
# Obtener partes del path
ruta = Path('/home/usuario/directorio/archivo.txt')
print(ruta.name)        # 'archivo.txt'
print(ruta.suffix)      # '.txt'
print(ruta.stem)        # 'archivo'
print(ruta.parent)      # '/home/usuario/directorio'
print(ruta.parts)       # ('/', 'home', 'usuario', 'directorio', 'archivo.txt')

# Unir paths
ruta_base = Path('/home/usuario')
ruta_completa = ruta_base / 'directorio' / 'archivo.txt'
```

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
- [Documentación de Pathlib](https://docs.python.org/3/library/pathlib.html)
- [PEP 428](https://peps.python.org/pep-0428/)
- [Tutorial de Pathlib](https://realpython.com/python-pathlib/)
