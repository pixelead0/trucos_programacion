# Logging en Python

## ¿Qué es logging y por qué no usar print()?

Cuando depuras código, probablemente usas `print()` para ver qué está pasando. Funciona, pero tiene problemas:

- **No puedes controlar qué se muestra**: En producción quieres menos detalle, en desarrollo más
- **No puedes guardar en archivo fácilmente**: Los `print()` se pierden cuando cierras la terminal
- **No sabes la importancia**: ¿Es un error crítico o solo información?
- **Difícil de filtrar**: No puedes decir "solo muéstrame errores"

**Logging resuelve esto:** Te da un sistema profesional para registrar eventos con niveles de importancia, formatos personalizados, y múltiples destinos (consola, archivo, etc.).

**Casos reales:**
- En desarrollo: Ver todos los detalles (DEBUG)
- En producción: Solo errores y advertencias (ERROR, WARNING)
- Guardar logs en archivo para análisis posterior
- Filtrar logs por módulo o componente

> **Antes de continuar**: Asegúrate de entender [Manejo de Excepciones](./01_excepciones.md). Logging y excepciones van de la mano.

## Conceptos Básicos

### Configuración Básica

La forma más simple de empezar:

```python
import logging

# Configuración básica (solo necesitas hacerlo una vez al inicio)
logging.basicConfig(
    level=logging.INFO,  # Solo muestra INFO y niveles superiores
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    # Formato: fecha - nombre - nivel - mensaje
)

# Usar logging
logging.info("Mensaje informativo")
logging.warning("Advertencia")
logging.error("Error")
```

**Salida esperada:**
```
2024-01-15 14:30:25,123 - root - INFO - Mensaje informativo
2024-01-15 14:30:25,124 - root - WARNING - Advertencia
2024-01-15 14:30:25,125 - root - ERROR - Error
```

**¿Qué está pasando?**
- `level=logging.INFO` significa "solo muestra mensajes de nivel INFO o superior"
- El formato incluye fecha/hora, nombre del logger, nivel y mensaje
- `logging.info()`, `logging.warning()`, etc. son funciones para registrar eventos

### Niveles de Logging (De Menor a Mayor Severidad)

Python tiene 5 niveles estándar:

```python
# DEBUG - Detalles para depuración (más verboso)
logging.debug("Detalles internos del proceso")
# Solo se muestra si level=logging.DEBUG

# INFO - Información general del programa
logging.info("Usuario inició sesión")
# Se muestra si level=logging.INFO o superior

# WARNING - Algo inesperado pero no es un error
logging.warning("Conexión lenta detectada")
# Se muestra si level=logging.WARNING o superior

# ERROR - Error que impide una funcionalidad
logging.error("No se pudo conectar a la base de datos")
# Se muestra si level=logging.ERROR o superior

# CRITICAL - Error crítico que puede detener el programa
logging.critical("Sistema de archivos lleno")
# Siempre se muestra
```

**¿Cuándo usar cada nivel?**
- **DEBUG**: Detalles técnicos solo para desarrolladores
- **INFO**: Eventos normales del programa (usuario hizo X, proceso completado)
- **WARNING**: Algo raro pero el programa puede continuar
- **ERROR**: Algo falló pero el programa puede recuperarse
- **CRITICAL**: El programa puede fallar completamente

**En la práctica:** En desarrollo usas `DEBUG`, en producción `INFO` o `WARNING`.

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

---

## Siguiente paso
Ahora que sabes registrar eventos, aprende a documentar tipos en tu código. Continúa con: **[Type Hints](./03_type_hints.md)**
