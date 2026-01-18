---
title: Dataclasses en Python
description: Simplifica clases de datos con el decorador @dataclass
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
  prereqs={['Clases y Objetos', 'Type Hints']}
/>

<ProgressIndicator
  module="Módulo 04: Programación Orientada a Objetos"
  lesson={2}
  total={2}
/>

# Dataclasses en Python

<LessonMap
  objectives={[
    "Entender qué son las dataclasses y cuándo usarlas",
    "Crear dataclasses con @dataclass",
    "Usar campos con valores por defecto",
    "Aplicar frozen para inmutabilidad",
    "Comparar objetos automáticamente"
  ]}
  useCases={[
    "Clases que principalmente almacenan datos (estructuras de datos)",
    "Configuraciones: settings, opciones de aplicación",
    "Resultados de funciones: devolver múltiples valores estructurados",
    "DTOs (Data Transfer Objects): transferir datos entre capas",
    "Modelos simples: cuando no necesitas lógica compleja",
    "Comparación automática: cuando necesitas __eq__ automático"
  ]}
  time="45 minutos"
  level="intermediate"
/>

## 💡 ¿Qué son las dataclasses y cuándo usarlas?

Imagina que necesitas una clase solo para guardar datos (como un usuario, una configuración, o un producto). Con clases normales escribirías:

```python
class Persona:
    def __init__(self, nombre, edad, email):
        self.nombre = nombre
        self.edad = edad
        self.email = email

    def __repr__(self):
        return f"Persona(nombre={self.nombre}, edad={self.edad}, email={self.email})"

    def __eq__(self, other):
        return (self.nombre, self.edad, self.email) == (other.nombre, other.edad, other.email)
```

Mucho código repetitivo, ¿verdad?

**Las dataclasses resuelven esto:** Con un simple decorador, Python genera automáticamente `__init__`, `__repr__`, `__eq__` y más. Escribes menos código y es más legible.

**¿Cuándo usar dataclasses?**
- Clases que principalmente almacenan datos (estructuras de datos)
- Configuraciones
- Resultados de funciones que devuelven múltiples valores
- Cuando necesitas comparación automática entre objetos

**¿Cuándo NO usar dataclasses?**
- Clases con mucha lógica de negocio (usa clases normales)
- Cuando necesitas control total sobre `__init__` o métodos especiales

> **Antes de continuar**: Asegúrate de entender [Clases](./01_clases_objetos.md) y [Type Hints](../05_Manejo_de_Errores_y_Buenas_Practicas/02_type_hints.md).

## Conceptos Básicos

### Creación Básica

Con el decorador `@dataclass`, Python genera automáticamente los métodos necesarios:

```python
from dataclasses import dataclass

@dataclass
class Persona:
    nombre: str
    edad: int
    email: str
```

**¿Qué hace `@dataclass` automáticamente?**
- Genera `__init__()` con los parámetros
- Genera `__repr__()` para mostrar el objeto
- Genera `__eq__()` para comparar objetos
- Y más métodos útiles

**Uso:**
```python
# Crear objeto - igual que una clase normal
persona1 = Persona("Ana", 28, "ana@email.com")
persona2 = Persona("Ana", 28, "ana@email.com")

print(persona1)  # Persona(nombre='Ana', edad=28, email='ana@email.com')
print(persona1 == persona2)  # True (comparación automática)
```

**Comparación con clase normal:** Esto es equivalente a ~20 líneas de código en una clase normal.

### Con Valores por Defecto

Puedes dar valores por defecto a los atributos:

```python
@dataclass
class Configuracion:
    host: str = "localhost"  # Valor por defecto
    puerto: int = 8080        # Valor por defecto
    debug: bool = False       # Valor por defecto
```

**Uso:**
```python
# Usar todos los valores por defecto
config1 = Configuracion()  # host="localhost", puerto=8080, debug=False

# Sobrescribir algunos
config2 = Configuracion(host="192.168.1.1", puerto=3000)
# host="192.168.1.1", puerto=3000, debug=False (usa el default)

# Especificar todos
config3 = Configuracion(host="prod.server.com", puerto=443, debug=True)
```

**Importante:** Los atributos con valores por defecto deben ir **después** de los que no tienen. Python requiere esto.

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

### Documentación Oficial
- [Documentación oficial de dataclasses](https://docs.python.org/3/library/dataclasses.html)
- [PEP 557 - Data Classes](https://www.python.org/dev/pep-0557/)
- [Type Hints en Python](https://docs.python.org/3/library/typing.html)
- [attrs Documentation](https://www.attrs.org/) - Alternativa a dataclasses

### Bibliografía Recomendada
- **Fluent Python** (Luciano Ramalho) - Capítulo 5: Data Class Builders
- **Effective Python** (Brett Slatkin) - Item 37: Use Comprehensions Instead of map and filter
- **Python Tricks** (Dan Bader) - Capítulo sobre dataclasses
- **Python Cookbook, 3rd Ed** (Beazley & Jones) - Recetas sobre dataclasses

### Conceptos Relacionados
- [Clases y Objetos](./01_clases_objetos.md) - Base para entender dataclasses
- [Type Hints](../05_Manejo_de_Errores_y_Buenas_Practicas/02_type_hints.md) - Usa type hints con dataclasses
- [Diccionarios y Sets](../02_Estructuras_de_Datos/03_diccionarios_sets.md) - Dataclasses organizan datos

---

## Siguiente paso
Ahora que conoces las dataclasses, aprende a manejar errores de manera profesional. Continúa con: **[Manejo de Excepciones](../05_Manejo_de_Errores_y_Buenas_Practicas/01_excepciones.md)**
