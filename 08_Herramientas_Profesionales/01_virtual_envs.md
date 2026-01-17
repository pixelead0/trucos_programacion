# Entornos Virtuales en Python

## ¿Qué son los entornos virtuales y por qué son esenciales?

Imagina este escenario: Tienes dos proyectos:
- Proyecto A necesita `pandas==1.2.0`
- Proyecto B necesita `pandas==2.0.0`

Si instalas pandas globalmente, solo puedes tener una versión. ¿Qué haces?

**Los entornos virtuales resuelven esto:** Cada proyecto tiene su propio "mundo" de paquetes aislado. Puedes tener diferentes versiones en diferentes proyectos sin conflictos.

**Problemas que resuelven:**
- **Conflictos de versiones**: Proyecto A usa Django 3, Proyecto B usa Django 4
- **Contaminación global**: No llenas tu Python del sistema con paquetes de todos los proyectos
- **Reproducibilidad**: Puedes compartir exactamente qué versiones usa tu proyecto
- **Limpieza**: Eliminas un proyecto y sus dependencias sin afectar otros

**En la práctica:** Cada proyecto tiene su propio entorno virtual. Es la primera cosa que haces al empezar un proyecto nuevo.

> **Importante**: Aprende esto temprano. Es fundamental y te ahorrará muchos dolores de cabeza.

## Conceptos Básicos

### Crear y Activar Entornos

**Paso 1: Crear el entorno virtual**

```bash
# Crear entorno virtual (crea una carpeta con Python y pip aislados)
python -m venv mi_entorno
```

Esto crea una carpeta `mi_entorno/` con:
- Una copia de Python
- Una copia de pip
- Espacio para instalar paquetes (aislado del sistema)

**Paso 2: Activar el entorno**

Una vez creado, debes "activarlo" para usarlo:

```bash
# En Windows (PowerShell o CMD)
mi_entorno\Scripts\activate

# En Unix/MacOS (Linux, macOS)
source mi_entorno/bin/activate
```

**¿Cómo sabes que está activado?** Verás el nombre del entorno al inicio de tu prompt:
```bash
(mi_entorno) usuario@computadora:~/proyecto$
#      ↑ Esto indica que el entorno está activo
```

**Paso 3: Trabajar normalmente**

Una vez activado, `python` y `pip` apuntan al entorno virtual, no al sistema:
```bash
pip install requests  # Se instala solo en este entorno
python mi_script.py   # Usa el Python del entorno
```

**Paso 4: Desactivar cuando termines**

```bash
deactivate  # Vuelves al Python del sistema
```

**Flujo típico:**
1. `python -m venv venv` (crear)
2. `source venv/bin/activate` (activar)
3. Trabajar en tu proyecto
4. `deactivate` (desactivar cuando termines)

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

### Documentación Oficial
- [Documentación de venv](https://docs.python.org/3/library/venv.html)
- [pip Documentation](https://pip.pypa.io/)
- [poetry Documentation](https://python-poetry.org/)
- [pip-tools Documentation](https://pip-tools.readthedocs.io/)
- [PEP 405 - Python Virtual Environments](https://peps.python.org/pep-0405/)

### Bibliografía Recomendada
- **Effective Python** (Brett Slatkin) - Item 83: Know Where to Find Community-Built Modules
- **Python Tricks** (Dan Bader) - Capítulo sobre entornos virtuales
- **The Hitchhiker's Guide to Python** (Kenneth Reitz) - Sección sobre entornos virtuales
- **Python Packaging User Guide](https://packaging.python.org/) - Guía oficial de empaquetado

### Conceptos Relacionados
- [Empaquetado](./02_packaging.md) - Distribuye proyectos con dependencias
- [Testing](./03_testing.md) - Usa entornos virtuales para tests
- [Gestión de Dependencias](./02_gestion_dependencias.md) - Administra paquetes profesionalmente

---

## Siguiente paso
Ahora que sabes usar entornos virtuales, aprende a empaquetar y distribuir tu código. Continúa con: **[Empaquetado](./02_packaging.md)**
