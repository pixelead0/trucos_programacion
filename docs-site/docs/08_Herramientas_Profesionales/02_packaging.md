---
title: Empaquetado y Distribución en Python
description: Crea y distribuye paquetes Python profesionales
---

import LessonMeta from '@site/src/components/LessonMeta';
import LessonMap from '@site/src/components/LessonMap';
import Checkpoint from '@site/src/components/Checkpoint';
import NextStep from '@site/src/components/NextStep';
import TryIt from '@site/src/components/TryIt';
import ExpectedOutput from '@site/src/components/ExpectedOutput';
import ProgressIndicator from '@site/src/components/ProgressIndicator';

<LessonMeta
  level="advanced"
  time="1.5 horas"
  prereqs={['Módulos y Paquetes', 'Entornos Virtuales']}
/>

<ProgressIndicator
  module="Módulo 08: Herramientas Profesionales"
  lesson={3}
  total={5}
/>

# Empaquetado y Distribución en Python

<LessonMap
  objectives={[
    "Crear estructura de paquetes Python",
    "Configurar setup.py o pyproject.toml",
    "Gestionar dependencias y metadatos",
    "Instalar paquetes en modo desarrollo",
    "Publicar paquetes en PyPI (opcional)"
  ]}
  useCases={[
    "Crear bibliotecas reutilizables",
    "Compartir código entre proyectos del equipo",
    "Publicar en PyPI para uso público",
    "Distribuir herramientas internas de empresa",
    "Crear paquetes instalables con pip",
    "Gestionar versiones y actualizaciones"
  ]}
  time="1.5 horas"
  level="advanced"
/>

## 🎯 ¿Por qué aprender empaquetado?

Tienes un módulo útil que quieres compartir. Podrías decirle a la gente "copia este archivo a tu proyecto", pero eso no escala. ¿Qué pasa si actualizas el módulo? ¿Cómo manejan las dependencias?

El empaquetado es esencial porque:
- Compartir código profesionalmente: otros pueden instalar con `pip install`
- Gestión de versiones: usuarios pueden elegir qué versión usar
- Dependencias automáticas: `pip` instala todo lo necesario
- Distribución fácil: un comando para instalar en cualquier máquina
- Estándar de la industria: forma profesional de compartir código Python

## 🌍 Casos reales donde se usa

El empaquetado está en todos los proyectos que se comparten:

- **Crear bibliotecas reutilizables**: Código que otros pueden usar
- **Compartir código en equipo**: Módulos compartidos entre proyectos
- **Publicar en PyPI**: Hacer tu código disponible públicamente
- **Distribuir herramientas internas**: Paquetes privados para tu empresa
- **Gestionar versiones**: Controlar qué versión usa cada proyecto
- **Instalación simple**: `pip install` en lugar de copiar archivos

**Ejemplo real**: Librerías como `requests`, `pandas`, `django` están empaquetadas. Puedes instalarlas con `pip install requests` en lugar de descargar y copiar archivos manualmente.

## 💡 Concepto base

El empaquetado organiza tu código como un paquete que otros pueden instalar con `pip install tu-paquete`. Es la forma profesional de compartir código Python.

**Lo genial de Python:** Puedes crear paquetes con `setuptools` o `poetry`, y distribuirlos fácilmente a través de PyPI o repositorios privados.

```python
# Estructura básica de un paquete
mi_paquete/
    __init__.py
    modulo.py
    setup.py  # o pyproject.toml
```

```bash
# Instalar en modo desarrollo
pip install -e .

# O publicar en PyPI
python setup.py sdist bdist_wheel
twine upload dist/*
```

<ExpectedOutput>
```
# Después de pip install -e .
# Puedes importar tu paquete desde cualquier lugar
import mi_paquete
```
</ExpectedOutput>

:::tip 🌮 Analogía culinaria
El empaquetado es como crear un kit de ingredientes pre-empacado para preparar chilaquiles al pastor. En lugar de que cada cocinero tenga que buscar y comprar todos los ingredientes por separado, tú creas un paquete completo con todo lo necesario (tortillas, salsa, queso, pastor, especias) y otros pueden simplemente "instalar" tu paquete y empezar a cocinar. Es como crear una marca de comida que otros pueden usar fácilmente. Un comando (`pip install`) y todo está listo.
:::

:::info Para principiantes
**Antes de continuar**: Asegúrate de entender [Módulos](../03_Funciones_y_Modulos/02_modulos_paquetes.md) y [Entornos Virtuales](./01_virtual_envs.md). El empaquetado es avanzado pero esencial si quieres compartir código profesionalmente.
:::

## Estructura Básica de un Paquete

### Estructura de Directorios
```
mi_paquete/
├── LICENSE
├── README.md
├── setup.py
├── requirements.txt
├── mi_paquete/
│   ├── __init__.py
│   ├── modulo1.py
│   └── modulo2.py
└── tests/
    ├── __init__.py
    └── test_modulo1.py
```

### setup.py Básico
```python
from setuptools import setup, find_packages

setup(
    name="mi_paquete",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "requests>=2.25.1",
        "pandas>=1.2.0",
    ],
    author="Tu Nombre",
    author_email="tu@email.com",
    description="Descripción corta del paquete",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    url="https://github.com/usuario/mi_paquete",
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.6",
)
```

## Creación de Paquetes

### Configuración de pyproject.toml
```toml
[build-system]
requires = ["setuptools>=42", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "mi_paquete"
version = "0.1.0"
description = "Descripción del paquete"
readme = "README.md"
authors = [
    {name = "Tu Nombre", email = "tu@email.com"}
]
license = {file = "LICENSE"}
classifiers = [
    "Programming Language :: Python :: 3",
    "License :: OSI Approved :: MIT License",
    "Operating System :: OS Independent",
]
requires-python = ">=3.6"
dependencies = [
    "requests>=2.25.1",
    "pandas>=1.2.0",
]

[project.urls]
Homepage = "https://github.com/usuario/mi_paquete"
Documentation = "https://mi_paquete.readthedocs.io/"
```

### requirements.txt
```
requests>=2.25.1
pandas>=1.2.0
pytest>=6.0.0
black>=21.0.0
flake8>=3.9.0
```

## Distribución

### Construir el Paquete
```bash
# Instalar herramientas necesarias
pip install build twine

# Construir el paquete
python -m build

# Verificar el paquete
twine check dist/*
```

### Subir a PyPI
```bash
# Subir a PyPI
twine upload dist/*

# Subir a TestPyPI (para pruebas)
twine upload --repository testpypi dist/*
```

## Entornos Virtuales

### Crear y Activar
```bash
# Crear entorno virtual
python -m venv venv

# Activar en Windows
venv\Scripts\activate

# Activar en Unix/MacOS
source venv/bin/activate
```

### requirements.txt
```
# requirements.txt
# Dependencias de producción
requests==2.25.1
pandas==1.2.0

# Dependencias de desarrollo
pytest==6.0.0
black==21.0.0
flake8==3.9.0
```

## Buenas Prácticas

1. **Versionado Semántico**
```python
# setup.py
setup(
    version="1.2.3",  # MAJOR.MINOR.PATCH
    # ...
)
```

2. **Manejo de Dependencias**
```python
# setup.py
setup(
    install_requires=[
        "requests>=2.25.1,<3.0.0",  # Rango de versiones
        "pandas>=1.2.0",
    ],
    extras_require={
        "dev": [
            "pytest>=6.0.0",
            "black>=21.0.0",
        ],
    },
)
```

3. **Documentación**
```python
# setup.py
setup(
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    project_urls={
        "Documentation": "https://mi_paquete.readthedocs.io/",
        "Source": "https://github.com/usuario/mi_paquete",
    },
)
```

## Ejemplos Avanzados

### Paquete con Código C
```python
# setup.py
from setuptools import setup, Extension

module = Extension(
    "mi_modulo",
    sources=["mi_modulo.c"],
    include_dirs=["include"],
    libraries=["m"],
)

setup(
    name="mi_paquete",
    version="0.1.0",
    ext_modules=[module],
    # ...
)
```

### Paquete con Datos
```python
# setup.py
setup(
    # ...
    package_data={
        "mi_paquete": [
            "datos/*.json",
            "config/*.yaml",
        ],
    },
    include_package_data=True,
)
```

### Scripts de Consola
```python
# setup.py
setup(
    # ...
    entry_points={
        "console_scripts": [
            "mi_comando=mi_paquete.cli:main",
        ],
    },
)
```

## Herramientas de Desarrollo

### black
```ini
# pyproject.toml
[tool.black]
line-length = 88
target-version = ['py36', 'py37', 'py38']
include = '\.pyi?$'
```

### flake8
```ini
# setup.cfg
[flake8]
max-line-length = 88
extend-ignore = E203
exclude = .git,__pycache__,build,dist
```

### pytest
```ini
# pytest.ini
[pytest]
testpaths = tests
python_files = test_*.py
python_functions = test_*
```

## Consejos
1. Usa versionado semántico
2. Mantén las dependencias actualizadas
3. Incluye documentación clara
4. Prueba el paquete antes de distribuir
5. Usa entornos virtuales

## Recursos Adicionales

### Documentación Oficial
- [Python Packaging User Guide](https://packaging.python.org/)
- [setuptools Documentation](https://setuptools.readthedocs.io/)
- [PyPI](https://pypi.org/)
- [TestPyPI](https://test.pypi.org/)
- [PEP 517 - Build System](https://peps.python.org/pep-0517/)
- [PEP 518 - Specifying Build System](https://peps.python.org/pep-0518/)

### Bibliografía Recomendada
- **Python Tricks** (Dan Bader) - Capítulo sobre empaquetado
- **Effective Python** (Brett Slatkin) - Item 84: Write Docstrings for Every Function, Class, and Module
- **The Hitchhiker's Guide to Python** (Kenneth Reitz) - Sección sobre packaging
- **Python Packaging User Guide** (https://packaging.python.org/) - Guía oficial completa

### Conceptos Relacionados
- [Entornos Virtuales](./01_virtual_envs.md) - Prepara el entorno antes de empaquetar
- [Testing](./03_testing.md) - Prueba tu paquete antes de publicarlo
- [Type Hints](../05_Manejo_de_Errores_y_Buenas_Practicas/02_type_hints.md) - Documenta tipos en tu código

---

## Siguiente paso
Ahora que sabes empaquetar código, aprende a escribir tests para asegurar su calidad. Continúa con: **[Testing](./03_testing.md)**
