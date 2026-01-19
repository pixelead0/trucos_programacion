---
title: Calidad de Código en Python
description: Herramientas profesionales para mantener código de calidad
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
  prereqs={['Type Hints', 'Funciones']}
/>

<ProgressIndicator
  module="Módulo 05: Calidad y Robustez"
  lesson={4}
  total={4}
/>

# Calidad de Código en Python

<LessonMap
  objectives={[
    "Usar formateadores (black) para código consistente",
    "Usar linters (flake8) para encontrar problemas",
    "Usar type checkers (mypy) para verificar tipos",
    "Configurar pre-commit hooks",
    "Aplicar estándares de calidad en proyectos"
  ]}
  useCases={[
    "Colaboración: mantener código consistente en equipos",
    "Mantenimiento: encontrar errores antes de ejecutar",
    "Profesionalismo: código que sigue estándares",
    "CI/CD: verificar calidad automáticamente",
    "Refactoring: herramientas ayudan a hacer cambios seguros",
    "Onboarding: nuevos desarrolladores entienden el código más rápido"
  ]}
  time="1 hora"
  level="intermediate"
/>

## 🎯 ¿Por qué aprender herramientas de calidad de código?

Escribir código que funciona es solo la mitad del trabajo. El código también debe ser legible, mantenible, consistente y sin errores obvios.

Las herramientas de calidad son esenciales porque:
- Colaboración: otros desarrolladores pueden trabajar contigo fácilmente
- Mantenimiento: es más fácil arreglar bugs y agregar features
- Profesionalismo: código de calidad es señal de experiencia
- Ahorro de tiempo: encuentras errores antes, no después de deploy
- Consistencia: todo el equipo sigue las mismas convenciones

## 🌍 Casos reales donde se usa

Las herramientas de calidad están en todos los proyectos profesionales:

- **Colaboración**: Mantener código consistente en equipos
- **CI/CD**: Verificar calidad automáticamente en pipelines
- **Mantenimiento**: Encontrar errores antes de ejecutar
- **Refactoring**: Herramientas ayudan a hacer cambios seguros
- **Onboarding**: Nuevos desarrolladores entienden el código más rápido
- **Profesionalismo**: Código que sigue estándares de la industria

**Ejemplo real**: En proyectos open source como Django o Flask, todas las contribuciones pasan por verificaciones automáticas de calidad antes de ser aceptadas.

## 💡 Concepto base

Las herramientas de calidad de código verifican automáticamente que tu código siga estándares, esté bien formateado, y no tenga errores obvios.

**Lo genial de Python:** Hay herramientas excelentes y gratuitas que puedes integrar fácilmente en tu flujo de trabajo.

```python
# Código sin formatear (funciona, pero inconsistente)
def calcular_total(precio,cantidad):
    return precio*cantidad

# Después de black (formateado automáticamente)
def calcular_total(precio, cantidad):
    return precio * cantidad
```

**Este capítulo cubre:**
- **Formateadores** (black): Formato automático consistente
- **Linters** (flake8): Encuentran problemas de estilo y errores comunes
- **Type checkers** (mypy): Verifican tipos antes de ejecutar
- **Pre-commit hooks**: Verificaciones automáticas antes de hacer commit

<ExpectedOutput>
```
# Black formatea automáticamente:
# - Espacios alrededor de operadores
# - Líneas de máximo 88 caracteres
# - Indentación consistente
# - Y más...
```
</ExpectedOutput>

:::tip 🌮 Analogía culinaria
Las herramientas de calidad de código son como los estándares de higiene y presentación en una cocina profesional. Un formateador (black) es como tener un estándar de cómo cortar las tortillas: todas del mismo tamaño y forma. Un linter (flake8) es como un inspector que revisa que uses ingredientes frescos y sigas las medidas correctas. Un type checker (mypy) es como verificar que estés usando los ingredientes correctos antes de cocinar. Los pre-commit hooks son como una revisión final antes de servir el plato, asegurando que todo esté perfecto. Cada herramienta tiene su rol en mantener la calidad.
:::

:::info Para principiantes
**Antes de continuar**: Asegúrate de entender [Type Hints](./02_type_hints.md) y [Funciones](../03_Funciones_y_Modulos/01_funciones.md). Estas herramientas no cambian cómo funciona tu código, solo verifican que siga buenas prácticas y estándares.
:::

## Herramientas de Análisis

### black (Formateador)
```ini
# pyproject.toml
[tool.black]
line-length = 88
target-version = ['py38']
include = '\.pyi?$'
exclude = '''
/(
    \.git
  | \.hg
  | \.mypy_cache
  | \.tox
  | \.venv
  | _build
  | buck-out
  | build
  | dist
)/
'''
```

### flake8 (Linter)
```ini
# setup.cfg
[flake8]
max-line-length = 88
extend-ignore = E203
exclude = .git,__pycache__,build,dist
per-file-ignores =
    __init__.py: F401
    tests/*: S101
```

### mypy (Type Checker)
```ini
# mypy.ini
[mypy]
python_version = 3.8
warn_return_any = True
warn_unused_configs = True
disallow_untyped_defs = True

[mypy.plugins.pandas.*]
ignore_missing_imports = True
```

## Buenas Prácticas

### Estilo de Código
```python
# ❌ Mal
def calcular_promedio(x,y):
    return sum(x)/len(x)

# ✅ Bien
def calcular_promedio(numeros: list[float]) -> float:
    """
    Calcula el promedio de una lista de números.

    Args:
        numeros: Lista de números a promediar

    Returns:
        El promedio de los números

    Raises:
        ValueError: Si la lista está vacía
    """
    if not numeros:
        raise ValueError("La lista no puede estar vacía")
    return sum(numeros) / len(numeros)
```

### Documentación
```python
class Usuario:
    """
    Representa un usuario del sistema.

    Attributes:
        nombre: Nombre completo del usuario
        email: Correo electrónico del usuario
        activo: Estado de la cuenta del usuario
    """

    def __init__(self, nombre: str, email: str) -> None:
        """
        Inicializa un nuevo usuario.

        Args:
            nombre: Nombre completo del usuario
            email: Correo electrónico del usuario
        """
        self.nombre = nombre
        self.email = email
        self.activo = True
```

### Manejo de Errores
```python
def procesar_archivo(ruta: str) -> dict:
    """
    Procesa un archivo y retorna su contenido como diccionario.

    Args:
        ruta: Ruta al archivo a procesar

    Returns:
        Diccionario con el contenido procesado

    Raises:
        FileNotFoundError: Si el archivo no existe
        ValueError: Si el archivo está mal formateado
    """
    try:
        with open(ruta, 'r') as f:
            contenido = f.read()
    except FileNotFoundError:
        raise FileNotFoundError(f"Archivo no encontrado: {ruta}")

    try:
        return json.loads(contenido)
    except json.JSONDecodeError:
        raise ValueError(f"Archivo mal formateado: {ruta}")
```

## Herramientas de Desarrollo

### pre-commit
```yaml
# .pre-commit-config.yaml
repos:
-   repo: https://github.com/psf/black
    rev: 21.12b0
    hooks:
    -   id: black
        language_version: python3.8

-   repo: https://github.com/pycqa/flake8
    rev: 4.0.1
    hooks:
    -   id: flake8
        additional_dependencies: [flake8-docstrings]

-   repo: https://github.com/pre-commit/mirrors-mypy
    rev: v0.910
    hooks:
    -   id: mypy
        additional_dependencies: [types-requests]
```

### pytest
```ini
# pytest.ini
[pytest]
testpaths = tests
python_files = test_*.py
python_functions = test_*
addopts = -v --cov=mi_proyecto --cov-report=term-missing
```

## Ejemplos de Código de Calidad

### Clase Bien Estructurada
```python
from dataclasses import dataclass
from typing import Optional
from datetime import datetime

@dataclass
class Transaccion:
    """
    Representa una transacción financiera.

    Attributes:
        id: Identificador único de la transacción
        monto: Monto de la transacción
        fecha: Fecha y hora de la transacción
        descripcion: Descripción opcional de la transacción
    """
    id: int
    monto: float
    fecha: datetime
    descripcion: Optional[str] = None

    def es_valida(self) -> bool:
        """
        Verifica si la transacción es válida.

        Returns:
            True si la transacción es válida, False en caso contrario
        """
        return (
            self.id > 0 and
            self.monto != 0 and
            self.fecha <= datetime.now()
        )

    def formatear_monto(self) -> str:
        """
        Formatea el monto de la transacción.

        Returns:
            String con el monto formateado
        """
        return f"${self.monto:,.2f}"
```

### Función con Manejo de Errores
```python
from typing import List, Dict, Any
import logging

logger = logging.getLogger(__name__)

def procesar_datos(
    datos: List[Dict[str, Any]],
    config: Dict[str, Any]
) -> List[Dict[str, Any]]:
    """
    Procesa una lista de datos según la configuración.

    Args:
        datos: Lista de diccionarios con datos a procesar
        config: Diccionario con configuración de procesamiento

    Returns:
        Lista de diccionarios con datos procesados

    Raises:
        ValueError: Si los datos o la configuración son inválidos
        ProcessingError: Si hay un error durante el procesamiento
    """
    if not datos:
        logger.warning("Lista de datos vacía")
        return []

    if not config:
        raise ValueError("Configuración requerida")

    try:
        resultados = []
        for item in datos:
            resultado = procesar_item(item, config)
            resultados.append(resultado)
        return resultados

    except Exception as e:
        logger.error(f"Error procesando datos: {e}")
        raise ProcessingError(f"Error en procesamiento: {e}")
```

## Consejos
1. Sigue las guías de estilo (PEP 8)
2. Escribe documentación clara
3. Usa type hints
4. Escribe pruebas unitarias
5. Mantén el código simple y legible

## Recursos Adicionales

### Documentación Oficial
- [PEP 8 - Style Guide for Python Code](https://peps.python.org/pep-0008/)
- [PEP 257 - Docstring Conventions](https://peps.python.org/pep-0257/)
- [Google Python Style Guide](https://google.github.io/styleguide/pyguide.html)
- [black Documentation](https://black.readthedocs.io/)
- [flake8 Documentation](https://flake8.pycqa.org/)
- [pylint Documentation](https://pylint.pycqa.org/)
- [ruff Documentation](https://docs.astral.sh/ruff/)

### Bibliografía Recomendada
- **Clean Code** (Robert C. Martin) - Principios fundamentales de código limpio
- **The Clean Coder** (Robert C. Martin) - Profesionalismo en programación
- **Refactoring** (Martin Fowler) - Técnicas para mejorar código existente
- **Effective Python** (Brett Slatkin) - 59 formas de escribir mejor Python
- **Python Tricks** (Dan Bader) - Trucos y mejores prácticas
- **Code Complete** (Steve McConnell) - Construcción de software profesional

### Conceptos Relacionados
- [Type Hints](./02_type_hints.md) - Mejora la calidad con tipos
- [Testing](../08_Herramientas_Profesionales/03_testing.md) - Pruebas de calidad
- [Logging](./03_logging.md) - Registra eventos de tu aplicación

---

## Siguiente paso
Ahora que conoces las herramientas de calidad, aprende a trabajar con archivos y formatos de datos. Continúa con: **[Pathlib](../06_Manejo_de_Archivos_y_Formatos/01_pathlib.md)**
