# Entornos Virtuales en Python

## ¿Qué son los Entornos Virtuales?
Los entornos virtuales son espacios aislados donde puedes instalar paquetes Python sin afectar al sistema global. Esto permite tener diferentes versiones de paquetes para diferentes proyectos.

## Conceptos Básicos

### Crear y Activar Entornos
```bash
# Crear entorno virtual
python -m venv mi_entorno

# Activar en Windows
mi_entorno\Scripts\activate

# Activar en Unix/MacOS
source mi_entorno/bin/activate

# Desactivar
deactivate
```

### Verificar Entorno
```bash
# Ver Python actual
which python  # Unix/MacOS
where python  # Windows

# Ver paquetes instalados
pip list

# Ver ruta del entorno
echo $VIRTUAL_ENV
```

## Gestión de Dependencias

### requirements.txt
```
# requirements.txt
# Versiones exactas
requests==2.25.1
pandas==1.2.0

# Versiones mínimas
numpy>=1.19.0
scipy>=1.6.0

# Rangos de versiones
matplotlib>=3.3.0,<3.4.0
```

### Instalar Dependencias
```bash
# Instalar desde requirements.txt
pip install -r requirements.txt

# Instalar paquete específico
pip install nombre_paquete

# Instalar con versión específica
pip install nombre_paquete==1.2.3

# Actualizar paquete
pip install --upgrade nombre_paquete
```

## Herramientas de Gestión

### pip-tools
```bash
# Instalar pip-tools
pip install pip-tools

# Generar requirements.txt
pip-compile requirements.in

# Sincronizar entorno
pip-sync requirements.txt
```

### poetry
```toml
# pyproject.toml
[tool.poetry]
name = "mi_proyecto"
version = "0.1.0"
description = ""
authors = ["Tu Nombre <tu@email.com>"]

[tool.poetry.dependencies]
python = "^3.8"
requests = "^2.25.1"
pandas = "^1.2.0"

[tool.poetry.dev-dependencies]
pytest = "^6.0.0"
black = "^21.0.0"
```

## Buenas Prácticas

1. **Estructura de Proyecto**
```
mi_proyecto/
├── .gitignore
├── README.md
├── requirements.txt
├── requirements-dev.txt
├── src/
│   └── mi_proyecto/
│       ├── __init__.py
│       └── main.py
└── tests/
    └── test_main.py
```

2. **Separación de Dependencias**
```
# requirements.txt (producción)
requests==2.25.1
pandas==1.2.0

# requirements-dev.txt (desarrollo)
-r requirements.txt
pytest==6.0.0
black==21.0.0
flake8==3.9.0
```

3. **Versionado de Python**
```bash
# Verificar versión de Python
python --version

# Crear entorno con versión específica
python3.8 -m venv mi_entorno
```

## Ejemplos Avanzados

### Entorno para Desarrollo
```bash
# Crear entorno
python -m venv dev_env

# Activar
source dev_env/bin/activate  # Unix/MacOS
dev_env\Scripts\activate     # Windows

# Instalar dependencias de desarrollo
pip install -r requirements-dev.txt
```

### Entorno para Producción
```bash
# Crear entorno
python -m venv prod_env

# Activar
source prod_env/bin/activate  # Unix/MacOS
prod_env\Scripts\activate     # Windows

# Instalar solo dependencias de producción
pip install -r requirements.txt
```

### Script de Automatización
```bash
#!/bin/bash
# setup_env.sh

# Crear entorno
python -m venv venv

# Activar entorno
source venv/bin/activate

# Actualizar pip
pip install --upgrade pip

# Instalar dependencias
pip install -r requirements.txt

# Instalar dependencias de desarrollo si es necesario
if [ "$1" == "dev" ]; then
    pip install -r requirements-dev.txt
fi
```

## Herramientas de Desarrollo

### black
```ini
# pyproject.toml
[tool.black]
line-length = 88
target-version = ['py38']
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
1. Usa un entorno virtual por proyecto
2. Mantén requirements.txt actualizado
3. Especifica versiones exactas en producción
4. Separa dependencias de desarrollo
5. Documenta la configuración del entorno

## Recursos Adicionales
- [Documentación de venv](https://docs.python.org/3/library/venv.html)
- [pip Documentation](https://pip.pypa.io/)
- [poetry Documentation](https://python-poetry.org/)
- [pip-tools Documentation](https://pip-tools.readthedocs.io/)
