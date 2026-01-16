# Logging en Python

## ¿Qué es Logging?
Logging es un sistema para registrar eventos que ocurren durante la ejecución de un programa. Es más robusto que usar `print()` y permite diferentes niveles de detalle y múltiples destinos de salida.

## Conceptos Básicos

### Configuración Básica
```python
import logging

# Configuración básica
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

# Uso
logging.info("Mensaje informativo")
logging.warning("Advertencia")
logging.error("Error")
```

### Niveles de Logging
```python
# De menor a mayor severidad
logging.debug("Mensaje de depuración")
logging.info("Mensaje informativo")
logging.warning("Advertencia")
logging.error("Error")
logging.critical("Error crítico")
```

## Configuración Avanzada

### Múltiples Handlers
```python
import logging
import sys

# Crear logger
logger = logging.getLogger('mi_app')
logger.setLevel(logging.DEBUG)

# Handler para consola
console_handler = logging.StreamHandler(sys.stdout)
console_handler.setLevel(logging.INFO)

# Handler para archivo
file_handler = logging.FileHandler('app.log')
file_handler.setLevel(logging.DEBUG)

# Formato
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
console_handler.setFormatter(formatter)
file_handler.setFormatter(formatter)

# Agregar handlers
logger.addHandler(console_handler)
logger.addHandler(file_handler)
```

### Rotación de Logs
```python
from logging.handlers import RotatingFileHandler

handler = RotatingFileHandler(
    'app.log',
    maxBytes=1024*1024,  # 1MB
    backupCount=5
)
```

## Ejemplos de Uso

### En una Aplicación
```python
import logging

# Configuración
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('app.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)

def procesar_datos(datos):
    logger.info(f"Iniciando procesamiento de {len(datos)} registros")
    try:
        # Procesamiento
        logger.debug("Detalles del procesamiento")
    except Exception as e:
        logger.error(f"Error en el procesamiento: {e}")
        raise
```

### Con Contexto
```python
import logging
from contextlib import contextmanager

@contextmanager
def log_context(logger, mensaje):
    logger.info(f"Iniciando: {mensaje}")
    try:
        yield
    except Exception as e:
        logger.error(f"Error en {mensaje}: {e}")
        raise
    finally:
        logger.info(f"Finalizando: {mensaje}")

# Uso
with log_context(logger, "Procesamiento de archivo"):
    # Código a ejecutar
    pass
```

## Buenas Prácticas

1. **Usa Nombres de Logger Específicos**
```python
logger = logging.getLogger(__name__)
```

2. **Configura Niveles Apropiados**
```python
# Desarrollo
logging.basicConfig(level=logging.DEBUG)

# Producción
logging.basicConfig(level=logging.INFO)
```

3. **Incluye Información Útil**
```python
logger.error(f"Error al procesar archivo {archivo}: {error}")
```

## Ejemplo Práctico
```python
import logging
import sys
from datetime import datetime

class LoggerConfig:
    def __init__(self, nombre_app: str, nivel: str = "INFO"):
        self.logger = logging.getLogger(nombre_app)
        self.logger.setLevel(getattr(logging, nivel))

        # Formato
        formato = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        )

        # Handler para archivo
        archivo_handler = logging.FileHandler(
            f"{nombre_app}_{datetime.now().strftime('%Y%m%d')}.log"
        )
        archivo_handler.setFormatter(formato)

        # Handler para consola
        consola_handler = logging.StreamHandler(sys.stdout)
        consola_handler.setFormatter(formato)

        # Agregar handlers
        self.logger.addHandler(archivo_handler)
        self.logger.addHandler(consola_handler)

    def get_logger(self):
        return self.logger

# Uso
logger_config = LoggerConfig("mi_app", "DEBUG")
logger = logger_config.get_logger()

logger.info("Aplicación iniciada")
logger.debug("Detalles de configuración")
logger.error("Error en operación")
```

## Consejos
1. Usa niveles de logging apropiados
2. Incluye información contextual relevante
3. Configura diferentes handlers para diferentes propósitos
4. Considera la rotación de logs en producción

## Recursos Adicionales
- [Documentación oficial de logging](https://docs.python.org/3/library/logging.html)
- [Logging Cookbook](https://docs.python.org/3/howto/logging-cookbook.html)
- [Buenas Prácticas de Logging](https://docs.python-guide.org/writing/logging/)
