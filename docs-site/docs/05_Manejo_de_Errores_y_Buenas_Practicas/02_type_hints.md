---
title: Type Hints en Python
description: Anotaciones de tipo para código más claro y mantenible
---

import LessonMeta from '@site/src/components/LessonMeta';
import LessonMap from '@site/src/components/LessonMap';
import Checkpoint from '@site/src/components/Checkpoint';
import NextStep from '@site/src/components/NextStep';
import TryIt from '@site/src/components/TryIt';
import ExpectedOutput from '@site/src/components/ExpectedOutput';
import ProgressIndicator from '@site/src/components/ProgressIndicator';

<LessonMeta
  level="intermediate"
  time="1 hora"
  prereqs={['Funciones', 'Excepciones']}
/>

<ProgressIndicator
  module="Módulo 05: Calidad y Robustez"
  lesson={2}
  total={4}
/>

# Type Hints en Python

<LessonMap
  objectives={[
    "Entender qué son type hints y por qué usarlos",
    "Anotar tipos básicos (str, int, float, bool)",
    "Anotar tipos complejos (list, dict, Optional, Union)",
    "Usar type hints en funciones y clases",
    "Mejorar legibilidad y mantenibilidad del código"
  ]}
  useCases={[
    "Documentar código: los tipos son documentación viva",
    "IDEs: autocompletado y detección de errores mejorados",
    "Type checkers: encontrar errores antes de ejecutar",
    "APIs: documentar tipos de parámetros y retorno",
    "Colaboración: otros desarrolladores entienden mejor tu código",
    "Refactoring: cambios de tipos se detectan automáticamente"
  ]}
  time="1 hora"
  level="intermediate"
/>

## 🎯 ¿Por qué aprender type hints?

Python es de tipado dinámico: no necesitas declarar tipos. Esto es flexible, pero puede causar problemas cuando otros desarrolladores (o tú en el futuro) no saben qué tipos espera una función.

Los type hints te permiten:
- Documentar código: los tipos son documentación viva
- Detección temprana: herramientas como `mypy` encuentran errores antes de ejecutar
- Mejor autocompletado: los IDEs saben qué tipos esperar
- Refactoring más seguro: cambios de tipos se detectan automáticamente
- Colaboración: otros desarrolladores entienden mejor tu código

## 🌍 Casos reales donde se usa

Los type hints están en todos los proyectos Python profesionales:

- **APIs**: Documentar tipos de parámetros y retorno
- **Librerías**: Hacer que tu código sea más fácil de usar
- **Proyectos grandes**: Mantener consistencia en equipos
- **IDEs**: Mejor autocompletado y detección de errores
- **Type checkers**: Encontrar errores antes de ejecutar
- **Refactoring**: Cambios de tipos se detectan automáticamente

**Ejemplo real**: En proyectos como Django o FastAPI, los type hints ayudan a los desarrolladores a entender qué tipos de datos esperan las funciones sin leer documentación externa.

## 💡 Concepto base

Los type hints son anotaciones que documentan qué tipos de datos espera una función o variable. Python los ignora en tiempo de ejecución, pero las herramientas y IDEs los usan para ayudarte.

**Lo genial de Python:** Puedes usar type hints gradualmente. No necesitas anotar todo de una vez, puedes empezar con las funciones más importantes.

```python
# Sin type hints (puede ser confuso)
def calcular_total(precio, cantidad):
    return precio * cantidad

# Con type hints (claro y documentado)
def calcular_total(precio: float, cantidad: int) -> float:
    return precio * cantidad

resultado = calcular_total(10.5, 3)
print(f"Total: ${resultado}")
```

<ExpectedOutput>
```
Total: $31.5
```
</ExpectedOutput>

:::tip 🌮 Analogía culinaria
Los type hints son como las etiquetas en los recipientes de la cocina que indican qué contiene cada uno. Cuando preparas chilaquiles al pastor, sabes que el recipiente marcado "salsa" contiene salsa, no queso. Los type hints hacen lo mismo: le dicen a otros cocineros (desarrolladores) y a las herramientas qué tipo de dato espera cada función, evitando confusiones como intentar usar queso donde se necesita salsa. Es como tener etiquetas claras que previenen errores antes de que ocurran.
:::

:::info Para principiantes
**Importante:** Python ignora los type hints en tiempo de ejecución. Son solo para desarrolladores y herramientas, no afectan el rendimiento. Puedes empezar a usarlos gradualmente, agregándolos a las funciones más importantes primero.
:::

> **Antes de continuar**: Asegúrate de entender [Funciones](../03_Funciones_y_Modulos/01_funciones.md) y [Clases](../04_Programacion_Orientada_a_Objetos/01_clases_objetos.md).

## Conceptos Básicos

### Anotaciones Básicas

La sintaxis es simple: después del nombre de la variable o parámetro, pones `: tipo`:

```python
# Variables - anotas el tipo después del nombre
nombre: str = "Juan"      # nombre es un string
edad: int = 25            # edad es un entero
altura: float = 1.75      # altura es un flotante
activo: bool = True       # activo es un booleano
```

**¿Qué está pasando?**
- `nombre: str` dice "esta variable debe ser un string"
- Python no verifica esto en tiempo de ejecución, pero herramientas como `mypy` sí
- Si asignas `nombre = 123`, Python funciona, pero `mypy` te avisará del error

### Funciones con Type Hints

Para funciones, anotas parámetros y el valor de retorno:

```python
# Función simple - parámetro y retorno anotados
def saludar(nombre: str) -> str:
    # nombre: str = el parámetro debe ser string
    # -> str = la función devuelve un string
    return f"¡Hola, {nombre}!"

# Múltiples parámetros - todos anotados
def calcular_imc(peso: float, altura: float) -> float:
    # Ambos parámetros son float, y devuelve float
    return peso / (altura ** 2)
```

**Ventaja:** Ahora cualquiera que lea el código sabe exactamente qué esperar:
- `saludar()` necesita un string y devuelve un string
- `calcular_imc()` necesita dos floats y devuelve un float

**En la práctica:** Esto hace tu código mucho más legible y reduce errores.

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

### Documentación Oficial
- [Documentación de typing](https://docs.python.org/3/library/typing.html)
- [PEP 484 - Type Hints](https://peps.python.org/pep-0484/)
- [PEP 526 - Syntax for Variable Annotations](https://peps.python.org/pep-0526/)
- [PEP 544 - Protocols: Structural subtyping](https://peps.python.org/pep-0544/)
- [mypy Documentation](https://mypy.readthedocs.io/)
- [Type Hints Cheat Sheet](https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html)

### Bibliografía Recomendada
- **Fluent Python** (Luciano Ramalho) - Capítulo 15: Type Hints in Function Signatures
- **Effective Python** (Brett Slatkin) - Items sobre type hints y static typing
- **Python Tricks** (Dan Bader) - Capítulo sobre type hints
- **Python Cookbook, 3rd Ed** (Beazley & Jones) - Recetas sobre typing

### Conceptos Relacionados
- [Funciones](../03_Funciones_y_Modulos/01_funciones.md) - Aplica type hints a funciones
- [Clases y Objetos](../04_Programacion_Orientada_a_Objetos/01_clases_objetos.md) - Type hints en clases
- [Calidad de Código](./04_quality.md) - Type hints mejoran la calidad

---

## Siguiente paso

<NextStep
  to="/Manejo_de_Errores_y_Buenas_Practicas/logging"
  label="Siguiente: Logging →"
/>
