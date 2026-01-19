---
title: Logging en Python
description: Sistema profesional para registrar eventos y depurar código
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
  prereqs={['Type Hints', 'Excepciones']}
/>

<ProgressIndicator
  module="Módulo 05: Calidad y Robustez"
  lesson={3}
  total={4}
/>

# Logging en Python

<LessonMap
  objectives={[
    "Usar el módulo logging en lugar de print()",
    "Entender niveles de logging (DEBUG, INFO, WARNING, ERROR, CRITICAL)",
    "Configurar logging para consola y archivos",
    "Crear loggers personalizados",
    "Aplicar logging en producción y desarrollo"
  ]}
  useCases={[
    "Depuración: registrar eventos para entender qué pasa",
    "Monitoreo: rastrear comportamiento de aplicaciones en producción",
    "Auditoría: registrar acciones importantes del usuario",
    "Diagnóstico: encontrar problemas en sistemas complejos",
    "Análisis: analizar patrones de uso y errores",
    "Debugging: diferentes niveles para desarrollo vs producción"
  ]}
  time="1 hora"
  level="intermediate"
/>

## 🎯 ¿Por qué aprender logging?

Cuando depuras código, probablemente usas `print()` para ver qué está pasando. Funciona, pero tiene problemas: no puedes controlar qué se muestra, no puedes guardar en archivo fácilmente, y no sabes la importancia de cada mensaje.

El logging es esencial porque:
- Control de niveles: diferentes niveles para desarrollo vs producción
- Persistencia: guardar logs en archivos para análisis posterior
- Organización: filtrar y buscar logs por nivel, módulo o componente
- Profesionalismo: sistemas reales usan logging, no print()
- Depuración: entender qué pasa en producción cuando no puedes depurar

## 🌍 Casos reales donde se usa

El logging está en todos los sistemas profesionales:

- **Depuración**: Registrar eventos para entender qué pasa
- **Monitoreo**: Rastrear comportamiento de aplicaciones en producción
- **Auditoría**: Registrar acciones importantes del usuario
- **Diagnóstico**: Encontrar problemas en sistemas complejos
- **Análisis**: Analizar patrones de uso y errores
- **Debugging**: Diferentes niveles para desarrollo vs producción

**Ejemplo real**: Cuando una aplicación web falla en producción, los logs te permiten ver exactamente qué pasó, cuándo, y por qué, sin necesidad de reproducir el error.

## 💡 Concepto base

El logging te da un sistema profesional para registrar eventos con niveles de importancia (DEBUG, INFO, WARNING, ERROR, CRITICAL), formatos personalizados, y múltiples destinos (consola, archivo, etc.).

**Lo genial de Python:** El módulo `logging` está incluido en la librería estándar y es muy potente.

```python
import logging

# Configurar logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Usar logging en lugar de print()
logger.info("Preparando chilaquiles al pastor")
logger.warning("Se está acabando el queso")
logger.error("Se quemaron las tortillas")
```

<ExpectedOutput>
```
INFO:__main__:Preparando chilaquiles al pastor
WARNING:__main__:Se está acabando el queso
ERROR:__main__:Se quemaron las tortillas
```
</ExpectedOutput>

:::tip 🌮 Analogía culinaria
El logging es como el libro de recetas de un restaurante donde anotas todo lo que pasa en la cocina: qué platos se prepararon, qué ingredientes se usaron, si hubo algún problema, y cuánto tiempo tomó cada orden. En lugar de solo recordar mentalmente (como `print()`), tienes un registro organizado que puedes revisar después. Los niveles de logging son como diferentes tipos de notas: INFO es "preparé chilaquiles al pastor", WARNING es "se está acabando el queso", ERROR es "se quemaron las tortillas". Cada nivel tiene su importancia y propósito.
:::

:::info Para principiantes
**Antes de continuar**: Asegúrate de entender [Manejo de Excepciones](./01_excepciones.md). Logging y excepciones van de la mano: cuando manejas una excepción, deberías registrarla con logging para poder diagnosticar problemas después.
:::

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

### Documentación Oficial
- [Documentación oficial de logging](https://docs.python.org/3/library/logging.html)
- [Logging Cookbook](https://docs.python.org/3/howto/logging-cookbook.html)
- [Buenas Prácticas de Logging](https://docs.python-guide.org/writing/logging/)
- [PEP 282 - A Logging System](https://peps.python.org/pep-0282/)

### Bibliografía Recomendada
- **Python Tricks** (Dan Bader) - Capítulo sobre logging y debugging
- **Effective Python** (Brett Slatkin) - Item 57: Consider Interactive Debugging with pdb
- **Python Cookbook, 3rd Ed** (Beazley & Jones) - Recetas sobre logging
- **The Pragmatic Programmer** (Thomas & Hunt) - Capítulo sobre logging y monitoreo
- **Site Reliability Engineering** (Google) - Capítulos sobre logging en producción

### Conceptos Relacionados
- [Excepciones](./01_excepciones.md) - Maneja errores que luego registras
- [Type Hints](./02_type_hints.md) - Documenta tipos junto con logging
- [Testing](../08_Herramientas_Profesionales/03_testing.md) - Usa logging en tests

---

## Siguiente paso
## Siguiente paso

<NextStep
  to="/Manejo_de_Errores_y_Buenas_Practicas/quality"
  label="Siguiente: Calidad de Código →"
/>
