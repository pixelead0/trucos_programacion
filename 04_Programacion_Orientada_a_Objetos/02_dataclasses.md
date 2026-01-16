# Dataclasses en Python

## ¿Qué son las Dataclasses?
Las dataclasses son una característica introducida en Python 3.7 que simplifica la creación de clases para almacenar datos. Reducen la cantidad de código boilerplate necesario para crear clases con atributos.

## Conceptos Básicos

### Creación Básica
```python
from dataclasses import dataclass

@dataclass
class Persona:
    nombre: str
    edad: int
    email: str
```

### Con Valores por Defecto
```python
@dataclass
class Configuracion:
    host: str = "localhost"
    puerto: int = 8080
    debug: bool = False
```

## Características Avanzadas

### Inmutabilidad
```python
@dataclass(frozen=True)
class Punto:
    x: float
    y: float
```

### Comparación Personalizada
```python
@dataclass(order=True)
class Producto:
    nombre: str
    precio: float
    stock: int
```

## Ejemplos de Uso

### Validación de Datos
```python
@dataclass
class ErrorValidacion:
    fila: int
    campo: str
    valor: str
    mensaje: str

# Uso
error = ErrorValidacion(
    fila=1,
    campo="email",
    valor="invalido",
    mensaje="Formato de email incorrecto"
)
```

### Configuración
```python
@dataclass
class ConfiguracionDB:
    host: str
    puerto: int
    usuario: str
    password: str
    base_datos: str

# Uso
config = ConfiguracionDB(
    host="localhost",
    puerto=5432,
    usuario="admin",
    password="secret",
    base_datos="mi_db"
)
```

## Métodos Especiales

### Post Init
```python
@dataclass
class Rectangulo:
    ancho: float
    alto: float
    area: float = None

    def __post_init__(self):
        self.area = self.ancho * self.alto
```

### Métodos Personalizados
```python
@dataclass
class Producto:
    nombre: str
    precio: float
    stock: int

    def tiene_stock(self) -> bool:
        return self.stock > 0

    def valor_total(self) -> float:
        return self.precio * self.stock
```

## Buenas Prácticas

1. **Usa Type Hints**
```python
@dataclass
class Usuario:
    id: int
    nombre: str
    activo: bool
```

2. **Documenta tus Clases**
```python
@dataclass
class Transaccion:
    """Representa una transacción financiera."""
    id: int
    monto: float
    fecha: str
```

3. **Considera la Inmutabilidad**
```python
@dataclass(frozen=True)
class Constantes:
    PI: float = 3.14159
    GRAVEDAD: float = 9.81
```

## Ejemplo Práctico
```python
from dataclasses import dataclass
from typing import List, Optional
from datetime import datetime

@dataclass
class Orden:
    id: int
    cliente: str
    productos: List[str]
    total: float
    fecha: datetime
    estado: str = "pendiente"
    notas: Optional[str] = None

    def __post_init__(self):
        if self.total < 0:
            raise ValueError("El total no puede ser negativo")

    def esta_completada(self) -> bool:
        return self.estado == "completada"

    def agregar_producto(self, producto: str, precio: float):
        self.productos.append(producto)
        self.total += precio
```

## Consejos
1. Usa dataclasses para estructuras de datos simples
2. Aprovecha los type hints para mejor documentación
3. Considera usar `frozen=True` para datos inmutables
4. Usa `__post_init__` para validaciones y cálculos

## Recursos Adicionales
- [Documentación oficial de dataclasses](https://docs.python.org/3/library/dataclasses.html)
- [PEP 557 - Data Classes](https://www.python.org/dev/peps/pep-0557/)
- [Type Hints en Python](https://docs.python.org/3/library/typing.html)
