# Empaquetado y Distribución en Python

## ¿Qué es el Empaquetado?
El empaquetado en Python es el proceso de organizar y distribuir código de manera que pueda ser fácilmente instalado y utilizado por otros. Esto incluye la creación de archivos de configuración, manejo de dependencias y distribución del código.

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
- [Python Packaging User Guide](https://packaging.python.org/)
- [setuptools Documentation](https://setuptools.readthedocs.io/)
- [PyPI](https://pypi.org/)
- [TestPyPI](https://test.pypi.org/)
