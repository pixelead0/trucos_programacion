# Configuración con YAML en Python

## ¿Qué es YAML?
YAML (YAML Ain't Markup Language) es un formato de serialización de datos legible por humanos. Es comúnmente usado para archivos de configuración por su simplicidad y claridad.

## Conceptos Básicos

### Estructura Básica de YAML
```yaml
# Configuración básica
nombre: "Mi Aplicación"
version: 1.0
debug: true

# Listas
servidores:
  - servidor1
  - servidor2
  - servidor3

# Diccionarios anidados
base_datos:
  host: localhost
  puerto: 5432
  usuario: admin
  password: secret
```

### Cargar YAML en Python
```python
import yaml

# Cargar archivo YAML
with open('config.yaml', 'r') as f:
    config = yaml.safe_load(f)

# Acceder a valores
print(config['nombre'])
print(config['base_datos']['host'])
```

## Configuración Avanzada

### Validación de Configuración
```python
from dataclasses import dataclass
from typing import List, Dict, Any

@dataclass
class Configuracion:
    nombre: str
    version: str
    debug: bool
    servidores: List[str]
    base_datos: Dict[str, Any]

def cargar_configuracion(ruta: str) -> Configuracion:
    with open(ruta, 'r') as f:
        datos = yaml.safe_load(f)
    return Configuracion(**datos)
```

### Valores por Defecto
```python
def cargar_configuracion_con_defaults(ruta: str) -> dict:
    config_default = {
        'debug': False,
        'puerto': 8080,
        'timeout': 30
    }

    with open(ruta, 'r') as f:
        config = yaml.safe_load(f)

    return {**config_default, **config}
```

## Ejemplos de Uso

### Configuración de Aplicación
```yaml
# config.yaml
aplicacion:
  nombre: "Mi App"
  version: "1.0.0"
  debug: true

servidor:
  host: "localhost"
  puerto: 8000
  workers: 4

base_datos:
  host: "db.example.com"
  puerto: 5432
  nombre: "mi_db"
  usuario: "admin"
  password: "secret"

logging:
  nivel: "INFO"
  archivo: "app.log"
  formato: "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
```

### Cargar y Usar Configuración
```python
import yaml
from dataclasses import dataclass
from typing import Dict, Any

@dataclass
class ConfiguracionApp:
    aplicacion: Dict[str, Any]
    servidor: Dict[str, Any]
    base_datos: Dict[str, Any]
    logging: Dict[str, Any]

def cargar_configuracion(ruta: str) -> ConfiguracionApp:
    with open(ruta, 'r') as f:
        datos = yaml.safe_load(f)
    return ConfiguracionApp(**datos)

# Uso
config = cargar_configuracion('config.yaml')
print(f"Aplicación: {config.aplicacion['nombre']}")
print(f"Servidor: {config.servidor['host']}:{config.servidor['puerto']}")
```

## Buenas Prácticas

1. **Validación de Configuración**
```python
def validar_configuracion(config: dict) -> bool:
    requeridos = ['nombre', 'version', 'servidor', 'base_datos']
    return all(campo in config for campo in requeridos)
```

2. **Manejo de Errores**
```python
def cargar_configuracion_segura(ruta: str) -> dict:
    try:
        with open(ruta, 'r') as f:
            return yaml.safe_load(f)
    except FileNotFoundError:
        print(f"Archivo de configuración no encontrado: {ruta}")
        return {}
    except yaml.YAMLError as e:
        print(f"Error al parsear YAML: {e}")
        return {}
```

3. **Configuración por Entorno**
```yaml
# config.yaml
desarrollo:
  debug: true
  base_datos:
    host: localhost

produccion:
  debug: false
  base_datos:
    host: db.produccion.com
```

## Ejemplo Práctico
```python
import yaml
from dataclasses import dataclass
from typing import Dict, Any, Optional
from pathlib import Path

@dataclass
class ConfiguracionDB:
    host: str
    puerto: int
    nombre: str
    usuario: str
    password: str

@dataclass
class ConfiguracionApp:
    nombre: str
    version: str
    debug: bool
    base_datos: ConfiguracionDB
    logging: Dict[str, Any]

class ConfiguracionManager:
    def __init__(self, ruta_config: str):
        self.ruta_config = Path(ruta_config)
        self.config = self._cargar_configuracion()

    def _cargar_configuracion(self) -> ConfiguracionApp:
        if not self.ruta_config.exists():
            raise FileNotFoundError(f"Archivo de configuración no encontrado: {self.ruta_config}")

        with open(self.ruta_config, 'r') as f:
            datos = yaml.safe_load(f)

        # Convertir configuración de base de datos
        db_config = ConfiguracionDB(**datos['base_datos'])

        return ConfiguracionApp(
            nombre=datos['nombre'],
            version=datos['version'],
            debug=datos['debug'],
            base_datos=db_config,
            logging=datos['logging']
        )

    def get_config(self) -> ConfiguracionApp:
        return self.config

# Uso
try:
    config_manager = ConfiguracionManager('config.yaml')
    config = config_manager.get_config()
    print(f"Aplicación: {config.nombre} v{config.version}")
    print(f"Base de datos: {config.base_datos.host}:{config.base_datos.puerto}")
except Exception as e:
    print(f"Error al cargar configuración: {e}")
```

## Consejos
1. Usa `safe_load` en lugar de `load` para mayor seguridad
2. Valida la configuración al cargarla
3. Proporciona valores por defecto
4. Usa tipos de datos apropiados
5. Documenta la estructura de la configuración

## Recursos Adicionales
- [Documentación de PyYAML](https://pyyaml.org/wiki/PyYAMLDocumentation)
- [YAML Specification](https://yaml.org/spec/1.2/spec.html)
- [Buenas Prácticas de YAML](https://yaml.org/type/index.html)
