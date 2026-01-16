# Type Hints en Python

## ¿Qué son Type Hints?
Los Type Hints (anotaciones de tipo) son una característica de Python que permite especificar el tipo de datos esperado para variables, parámetros de función y valores de retorno. Ayudan a mejorar la legibilidad del código y permiten la detección temprana de errores.

## Conceptos Básicos

### Anotaciones Básicas
```python
# Variables
nombre: str = "Juan"
edad: int = 25
altura: float = 1.75
activo: bool = True

# Funciones
def saludar(nombre: str) -> str:
    return f"¡Hola, {nombre}!"

# Múltiples parámetros
def calcular_imc(peso: float, altura: float) -> float:
    return peso / (altura ** 2)
```

### Tipos Básicos
```python
from typing import Any, Union, Optional

# Any: cualquier tipo
variable: Any = 42

# Union: múltiples tipos posibles
numero: Union[int, float] = 3.14

# Optional: puede ser None
nombre: Optional[str] = None
```

## Tipos Compuestos

### Listas y Diccionarios
```python
from typing import List, Dict, Tuple

# Listas
numeros: List[int] = [1, 2, 3, 4, 5]
nombres: List[str] = ["Juan", "María", "Pedro"]

# Diccionarios
usuarios: Dict[str, int] = {"Juan": 25, "María": 30}
config: Dict[str, Union[str, int, bool]] = {
    "nombre": "app",
    "puerto": 8080,
    "debug": True
}

# Tuplas
coordenadas: Tuple[float, float] = (10.5, 20.3)
```

### Tipos Personalizados
```python
from typing import TypeVar, Generic

# TypeVar para tipos genéricos
T = TypeVar('T')

class Pila(Generic[T]):
    def __init__(self) -> None:
        self.items: List[T] = []

    def push(self, item: T) -> None:
        self.items.append(item)

    def pop(self) -> T:
        return self.items.pop()
```

## Type Aliases
```python
from typing import TypeAlias, List, Dict

# Alias para tipos complejos
Vector: TypeAlias = List[float]
Matrix: TypeAlias = List[Vector]
Config: TypeAlias = Dict[str, Union[str, int, bool]]

# Uso
def procesar_vector(v: Vector) -> float:
    return sum(v)

def procesar_matriz(m: Matrix) -> float:
    return sum(sum(fila) for fila in m)
```

## Ejemplos Prácticos

### Validación de Datos
```python
from typing import List, Dict, Union
from dataclasses import dataclass

@dataclass
class Usuario:
    nombre: str
    edad: int
    email: str

def validar_usuario(usuario: Usuario) -> bool:
    return (
        isinstance(usuario.nombre, str) and
        isinstance(usuario.edad, int) and
        isinstance(usuario.email, str) and
        '@' in usuario.email
    )
```

### Procesamiento de Datos
```python
from typing import List, Dict, Optional
from datetime import datetime

class ProcesadorDatos:
    def __init__(self) -> None:
        self.datos: Dict[str, List[float]] = {}

    def agregar_dato(self, clave: str, valor: float) -> None:
        if clave not in self.datos:
            self.datos[clave] = []
        self.datos[clave].append(valor)

    def obtener_promedio(self, clave: str) -> Optional[float]:
        if clave not in self.datos or not self.datos[clave]:
            return None
        return sum(self.datos[clave]) / len(self.datos[clave])
```

### API con Type Hints
```python
from typing import List, Dict, Optional
from dataclasses import dataclass
from datetime import datetime

@dataclass
class Producto:
    id: int
    nombre: str
    precio: float
    stock: int

class API:
    def __init__(self) -> None:
        self.productos: Dict[int, Producto] = {}

    def agregar_producto(self, producto: Producto) -> None:
        self.productos[producto.id] = producto

    def obtener_producto(self, id: int) -> Optional[Producto]:
        return self.productos.get(id)

    def listar_productos(self) -> List[Producto]:
        return list(self.productos.values())
```

## Buenas Prácticas

1. **Usar Type Hints Consistente**
```python
# ❌ Mal
def procesar(x):
    return x * 2

# ✅ Bien
def procesar(x: int) -> int:
    return x * 2
```

2. **Documentar Tipos Complejos**
```python
from typing import List, Dict, Union

# Documentar tipos complejos
Configuracion = Dict[str, Union[str, int, bool]]

def cargar_config(config: Configuracion) -> None:
    """
    Carga la configuración del sistema.

    Args:
        config: Diccionario con la configuración
    """
    pass
```

3. **Usar Type Aliases para Tipos Reutilizables**
```python
from typing import TypeAlias, List, Dict

# Definir alias para tipos comunes
Vector: TypeAlias = List[float]
Matriz: TypeAlias = List[Vector]

def procesar_vector(v: Vector) -> float:
    return sum(v)

def procesar_matriz(m: Matriz) -> float:
    return sum(sum(fila) for fila in m)
```

## Herramientas de Type Checking

### mypy
```bash
# Instalación
pip install mypy

# Uso
mypy archivo.py
```

### Configuración de mypy
```ini
# mypy.ini
[mypy]
python_version = 3.9
warn_return_any = True
warn_unused_configs = True
disallow_untyped_defs = True
```

## Consejos
1. Usa type hints desde el inicio del proyecto
2. Mantén la consistencia en las anotaciones
3. Documenta tipos complejos
4. Usa herramientas de type checking
5. Considera la compatibilidad con versiones anteriores

## Recursos Adicionales
- [Documentación de typing](https://docs.python.org/3/library/typing.html)
- [PEP 484](https://peps.python.org/pep-0484/)
- [mypy Documentation](https://mypy.readthedocs.io/)
- [Type Hints Cheat Sheet](https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html)
