# Serialización Multi-Formato y Configuración Avanzada

La serialización multi-formato es una técnica que permite exportar los mismos datos a diferentes formatos simultáneamente, manteniendo la consistencia y flexibilidad. Este concepto es fundamental en aplicaciones modernas que necesitan interoperabilidad con diferentes sistemas.

## ¿Qué es la Serialización Multi-Formato?

La serialización multi-formato consiste en convertir una estructura de datos única a múltiples formatos de salida (CSV, XML, JSON, etc.) de manera simultánea y configurable. Esto permite:

- **Interoperabilidad**: Compatibilidad con diferentes sistemas
- **Flexibilidad**: Cada formato puede tener su configuración específica
- **Eficiencia**: Una sola fuente de datos para múltiples salidas
- **Mantenibilidad**: Configuración centralizada

## Arquitectura de Exportación Multi-Formato

### Patrón de Diseño: Strategy Pattern

```python
from abc import ABC, abstractmethod
from typing import Dict, Any
import pandas as pd

class ExportadorStrategy(ABC):
    """Interfaz para estrategias de exportación."""

    @abstractmethod
    def exportar(self, df: pd.DataFrame, config: Dict[str, Any]) -> bool:
        """Exporta DataFrame según la estrategia específica."""
        pass

class ExportadorCSV(ExportadorStrategy):
    def exportar(self, df: pd.DataFrame, config: Dict[str, Any]) -> bool:
        # Implementación para CSV
        pass

class ExportadorXML(ExportadorStrategy):
    def exportar(self, df: pd.DataFrame, config: Dict[str, Any]) -> bool:
        # Implementación para XML
        pass

class ExportadorJSON(ExportadorStrategy):
    def exportar(self, df: pd.DataFrame, config: Dict[str, Any]) -> bool:
        # Implementación para JSON
        pass
```

### Gestor de Exportación

```python
class GestorExportacion:
    """Gestiona múltiples formatos de exportación."""

    def __init__(self):
        self.exportadores = {
            'csv': ExportadorCSV(),
            'xml': ExportadorXML(),
            'json': ExportadorJSON()
        }

    def exportar_multi_formato(self, df: pd.DataFrame, config: Dict[str, Any]) -> Dict[str, bool]:
        """Exporta DataFrame a múltiples formatos según configuración."""
        resultados = {}

        for formato, exportador in self.exportadores.items():
            if config.get('exportacion', {}).get(formato, {}).get('habilitada', False):
                try:
                    resultados[formato] = exportador.exportar(df, config)
                except Exception as e:
                    print(f"Error exportando a {formato}: {e}")
                    resultados[formato] = False

        return resultados
```

## Configuración Jerárquica

### Estructura de Configuración

```yaml
# config.yaml
archivos:
  entrada: "datos.csv"
  salida:
    csv:
      validos: "datos_validos.csv"
      invalidos: "datos_invalidos.csv"
    xml:
      validos: "datos_validos.xml"
      invalidos: "datos_invalidos.xml"
    json:
      validos: "datos_validos.json"
      invalidos: "datos_invalidos.json"

exportacion:
  csv:
    habilitada: true
    separador: ","
    encoding: "utf-8"

  xml:
    habilitada: true
    elemento_raiz: "datos"
    elemento_fila: "fila"
    atributos: true
    indentacion: 2

  json:
    habilitada: true
    indentacion: 2
    formato_fecha: "%Y-%m-%d %H:%M:%S"
    incluir_metadatos: true
```

### Carga de Configuración Avanzada

```python
from dataclasses import dataclass
from typing import Dict, Any, Optional
import yaml

@dataclass
class ConfiguracionExportacion:
    """Configuración específica para cada formato."""
    habilitada: bool
    archivo_salida: str
    parametros: Dict[str, Any]

@dataclass
class ConfiguracionMultiFormato:
    """Configuración completa para exportación multi-formato."""
    archivo_entrada: str
    exportadores: Dict[str, ConfiguracionExportacion]
    logging: Dict[str, Any]

def cargar_configuracion_avanzada(archivo_config: str) -> ConfiguracionMultiFormato:
    """Carga configuración jerárquica para exportación multi-formato."""
    with open(archivo_config, 'r', encoding='utf-8') as f:
        datos = yaml.safe_load(f)

    # Procesar configuración de exportadores
    exportadores = {}
    for formato, config in datos['exportacion'].items():
        exportadores[formato] = ConfiguracionExportacion(
            habilitada=config.get('habilitada', False),
            archivo_salida=datos['archivos']['salida'][formato]['validos'],
            parametros=config
        )

    return ConfiguracionMultiFormato(
        archivo_entrada=datos['archivos']['entrada'],
        exportadores=exportadores,
        logging=datos.get('logging', {})
    )
```

## Manejo de Errores Específicos por Formato

### Estrategia de Manejo de Errores

```python
import logging
from typing import Dict, Any, Tuple

class ManejadorErroresExportacion:
    """Maneja errores específicos por formato de exportación."""

    def __init__(self):
        self.logger = logging.getLogger(__name__)
        self.errores_por_formato = {}

    def exportar_con_manejo_errores(
        self,
        df: pd.DataFrame,
        config: Dict[str, Any]
    ) -> Tuple[Dict[str, bool], Dict[str, str]]:
        """Exporta con manejo específico de errores por formato."""
        resultados = {}
        errores = {}

        for formato, exportador in self.exportadores.items():
            if config['exportadores'][formato].habilitada:
                try:
                    resultados[formato] = exportador.exportar(df, config)
                    if resultados[formato]:
                        self.logger.info(f"Exportación a {formato} exitosa")
                    else:
                        errores[formato] = f"Exportación a {formato} falló"
                except Exception as e:
                    errores[formato] = str(e)
                    resultados[formato] = False
                    self.logger.error(f"Error en exportación a {formato}: {e}")

        return resultados, errores
```

### Tipos de Errores Específicos

```python
class ErroresExportacion:
    """Errores específicos por formato."""

    @staticmethod
    def error_xml_parse(e: Exception) -> str:
        return f"Error de parsing XML: {e}"

    @staticmethod
    def error_json_serialize(e: Exception) -> str:
        return f"Error de serialización JSON: {e}"

    @staticmethod
    def error_csv_write(e: Exception) -> str:
        return f"Error de escritura CSV: {e}"

    @staticmethod
    def error_configuracion_invalida(formato: str, parametro: str) -> str:
        return f"Configuración inválida para {formato}: {parametro}"
```

## Validación de Configuración

### Validación de Parámetros

```python
from typing import List, Tuple

class ValidadorConfiguracion:
    """Valida configuración de exportación multi-formato."""

    @staticmethod
    def validar_configuracion(config: Dict[str, Any]) -> Tuple[bool, List[str]]:
        """Valida configuración completa."""
        errores = []

        # Validar estructura general
        if 'exportacion' not in config:
            errores.append("Sección 'exportacion' no encontrada")
            return False, errores

        # Validar cada formato
        for formato, config_formato in config['exportacion'].items():
            errores_formato = ValidadorConfiguracion.validar_formato(
                formato, config_formato
            )
            errores.extend(errores_formato)

        return len(errores) == 0, errores

    @staticmethod
    def validar_formato(formato: str, config: Dict[str, Any]) -> List[str]:
        """Valida configuración de un formato específico."""
        errores = []

        if formato == 'xml':
            if 'elemento_raiz' not in config:
                errores.append("XML: elemento_raiz requerido")
            if 'indentacion' in config and not isinstance(config['indentacion'], int):
                errores.append("XML: indentacion debe ser entero")

        elif formato == 'json':
            if 'indentacion' in config and not isinstance(config['indentacion'], int):
                errores.append("JSON: indentacion debe ser entero")
            if 'formato_fecha' in config and not isinstance(config['formato_fecha'], str):
                errores.append("JSON: formato_fecha debe ser string")

        elif formato == 'csv':
            if 'separador' in config and not isinstance(config['separador'], str):
                errores.append("CSV: separador debe ser string")

        return errores
```

## Optimización de Rendimiento

### Exportación Paralela

```python
import concurrent.futures
from typing import Dict, Any, List

class ExportadorParalelo:
    """Exporta a múltiples formatos en paralelo."""

    def __init__(self, max_workers: int = 3):
        self.max_workers = max_workers

    def exportar_paralelo(
        self,
        df: pd.DataFrame,
        config: Dict[str, Any]
    ) -> Dict[str, bool]:
        """Exporta a múltiples formatos usando threads paralelos."""
        resultados = {}

        with concurrent.futures.ThreadPoolExecutor(max_workers=self.max_workers) as executor:
            # Crear tareas de exportación
            futures = {}
            for formato, exportador in self.exportadores.items():
                if config['exportadores'][formato].habilitada:
                    future = executor.submit(
                        exportador.exportar,
                        df,
                        config
                    )
                    futures[future] = formato

            # Recolectar resultados
            for future in concurrent.futures.as_completed(futures):
                formato = futures[future]
                try:
                    resultados[formato] = future.result()
                except Exception as e:
                    resultados[formato] = False
                    print(f"Error en exportación paralela a {formato}: {e}")

        return resultados
```

### Caché de Configuración

```python
from functools import lru_cache
import time

class ConfiguracionCacheada:
    """Configuración con caché para mejorar rendimiento."""

    def __init__(self, archivo_config: str, tiempo_cache: int = 300):
        self.archivo_config = archivo_config
        self.tiempo_cache = tiempo_cache
        self._ultima_modificacion = 0
        self._config_cache = None

    @lru_cache(maxsize=1)
    def obtener_configuracion(self) -> Dict[str, Any]:
        """Obtiene configuración con caché."""
        tiempo_actual = time.time()

        # Verificar si el archivo ha cambiado
        if (tiempo_actual - self._ultima_modificacion) > self.tiempo_cache:
            self._config_cache = self._cargar_configuracion()
            self._ultima_modificacion = tiempo_actual

        return self._config_cache

    def _cargar_configuracion(self) -> Dict[str, Any]:
        """Carga configuración desde archivo."""
        with open(self.archivo_config, 'r', encoding='utf-8') as f:
            return yaml.safe_load(f)
```

## Casos de Uso Avanzados

### 1. Exportación Condicional

```python
def exportar_condicional(
    df: pd.DataFrame,
    config: Dict[str, Any],
    condiciones: Dict[str, callable]
) -> Dict[str, bool]:
    """Exporta solo si se cumplen ciertas condiciones."""
    resultados = {}

    for formato, condicion in condiciones.items():
        if formato in config['exportadores'] and condicion(df):
            resultados[formato] = exportadores[formato].exportar(df, config)
        else:
            resultados[formato] = False

    return resultados

# Ejemplo de uso
condiciones = {
    'csv': lambda df: len(df) > 0,
    'xml': lambda df: len(df) < 10000,  # Solo para datasets pequeños
    'json': lambda df: 'metadatos' in df.columns
}
```

### 2. Transformación de Datos por Formato

```python
class TransformadorFormato:
    """Transforma datos según el formato de salida."""

    @staticmethod
    def transformar_para_xml(df: pd.DataFrame) -> pd.DataFrame:
        """Transforma DataFrame para optimizar exportación XML."""
        # Convertir tipos de datos problemáticos
        df_transformado = df.copy()
        for col in df_transformado.select_dtypes(include=['datetime']):
            df_transformado[col] = df_transformado[col].dt.strftime('%Y-%m-%d %H:%M:%S')
        return df_transformado

    @staticmethod
    def transformar_para_json(df: pd.DataFrame) -> pd.DataFrame:
        """Transforma DataFrame para optimizar exportación JSON."""
        # Asegurar que no hay valores NaN
        df_transformado = df.fillna('')
        return df_transformado
```

## Mejores Prácticas

1. **Separación de responsabilidades**: Cada exportador maneja un formato específico
2. **Configuración externa**: Parámetros configurables sin modificar código
3. **Manejo de errores robusto**: Tratamiento específico por tipo de exportación
4. **Validación de configuración**: Verificar parámetros antes de exportar
5. **Logging detallado**: Registro de todas las operaciones importantes
6. **Optimización de rendimiento**: Uso de paralelización cuando sea apropiado
7. **Caché de configuración**: Evitar recargas innecesarias de configuración

## Ejercicios Prácticos

1. **Implementar nuevo formato**: Agregar soporte para exportación a YAML
2. **Exportación condicional**: Implementar exportación basada en reglas de negocio
3. **Validación avanzada**: Crear validadores específicos para cada formato
4. **Optimización**: Implementar exportación paralela para grandes datasets

## Recursos Adicionales

- [Patrón Strategy en Python](https://refactoring.guru/design-patterns/strategy/python/example)
- [Concurrent.futures](https://docs.python.org/3/library/concurrent.futures.html)
- [Functools.lru_cache](https://docs.python.org/3/library/functools.html#functools.lru_cache)
- [Validación de Configuración](https://pydantic-docs.helpmanual.io/)
