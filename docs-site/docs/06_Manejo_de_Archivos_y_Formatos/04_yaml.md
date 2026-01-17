# Configuración con YAML en Python

## ¿Qué es YAML y por qué usarlo?

YAML (YAML Ain't Markup Language) es un formato de datos que se lee casi como texto normal. Si ya trabajaste con JSON, YAML es similar pero más legible para humanos.

**¿Cuándo usar YAML?**
- Archivos de configuración (Docker, CI/CD, aplicaciones)
- Cuando necesitas que alguien edite la configuración manualmente
- Cuando quieres que el archivo sea fácil de leer sin herramientas especiales

**¿Cuándo NO usar YAML?**
- APIs o comunicación entre sistemas (usa JSON)
- Cuando necesitas máximo rendimiento (JSON es más rápido)
- Datos muy simples (un archivo `.env` puede ser suficiente)

> **Nota**: Si ya conoces [JSON](./03_json.md) y [Diccionarios](../02_Estructuras_de_Datos/01_listas_tuplas_diccionarios.md), YAML te resultará familiar.

## Conceptos Básicos

### Estructura Básica de YAML

YAML usa indentación (como Python) para estructurar datos. Veamos un ejemplo completo:

```yaml
# Configuración básica - valores simples
nombre: "Mi Aplicación"
version: 1.0
debug: true

# Listas - cada elemento con guión
servidores:
  - servidor1
  - servidor2
  - servidor3

# Diccionarios anidados - como objetos JSON
base_datos:
  host: localhost
  puerto: 5432
  usuario: admin
  password: secret
```

**¿Qué está pasando aquí?**
- `nombre`, `version`, `debug` son valores simples (string, número, booleano)
- `servidores` es una lista (array) - nota los guiones `-`
- `base_datos` es un diccionario anidado - los valores están indentados

### Cargar YAML en Python

Para usar YAML en Python necesitas instalar `pyyaml`:
```bash
pip install pyyaml
```

Luego puedes cargar y usar el archivo:

```python
import yaml

# Cargar archivo YAML
# safe_load es más seguro que load (evita ejecutar código malicioso)
with open('config.yaml', 'r') as f:
    config = yaml.safe_load(f)

# Ahora config es un diccionario de Python normal
print(config['nombre'])  # "Mi Aplicación"
print(config['base_datos']['host'])  # "localhost"
print(config['servidores'][0])  # "servidor1"
```

**¿Por qué `safe_load`?**
`yaml.load()` puede ejecutar código Python arbitrario si el archivo YAML está manipulado. `safe_load()` solo carga datos, es más seguro para archivos que no controlas completamente.

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

### Documentación Oficial
- [Documentación de PyYAML](https://pyyaml.org/wiki/PyYAMLDocumentation)
- [YAML Specification](https://yaml.org/spec/1.2/spec.html)
- [Buenas Prácticas de YAML](https://yaml.org/type/index.html)
- [ruamel.yaml Documentation](https://yaml.readthedocs.io/) - Alternativa moderna a PyYAML

### Bibliografía Recomendada
- **Python Tricks** (Dan Bader) - Capítulo sobre configuración YAML
- **Python Cookbook, 3rd Ed** (Beazley & Jones) - Recetas sobre YAML
- **The Twelve-Factor App** (Heroku) - Uso de configuración en aplicaciones

### Conceptos Relacionados
- [JSON](./03_json.md) - Formato similar para datos
- [Configuración](../08_Herramientas_Profesionales/02_packaging.md) - Usa YAML para config
- [Pathlib](./01_pathlib.md) - Maneja rutas de archivos YAML

---

## Siguiente paso
Ahora que conoces los formatos básicos, aprende sobre serialización avanzada. Continúa con: **[Serialización Avanzada](./05_serialization_advanced.md)** o explora [Conceptos Avanzados](../07_Conceptos_Avanzados/01_decorators.md)
