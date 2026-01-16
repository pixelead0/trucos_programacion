import logging
from dataclasses import dataclass
from typing import Any, Dict

import yaml

logger = logging.getLogger(__name__)


@dataclass
class Configuracion:
    """Configuración de la aplicación."""

    archivo_entrada: str
    archivo_validos: str
    archivo_invalidos: str
    archivo_xml_validos: str
    archivo_xml_invalidos: str
    nivel_log: str
    validaciones: Dict[str, Any]
    exportacion: Dict[str, Any]


def cargar_configuracion(archivo_config: str = "config.yaml") -> Configuracion:
    """
    Carga la configuración desde un archivo YAML.

    Args:
        archivo_config: Ruta al archivo de configuración

    Returns:
        Configuracion: Objeto con la configuración cargada

    Raises:
        FileNotFoundError: Si no se encuentra el archivo de configuración
        yaml.YAMLError: Si hay un error en el formato YAML
    """
    try:
        with open(archivo_config, "r", encoding="utf-8") as archivo:
            datos = yaml.safe_load(archivo)

        return Configuracion(
            archivo_entrada=datos["archivos"]["entrada"],
            archivo_validos=datos["archivos"]["validos"],
            archivo_invalidos=datos["archivos"]["invalidos"],
            archivo_xml_validos=datos["archivos"]["xml_validos"],
            archivo_xml_invalidos=datos["archivos"]["xml_invalidos"],
            nivel_log=datos["logging"]["nivel"],
            validaciones=datos["validaciones"],
            exportacion=datos["exportacion"],
        )
    except FileNotFoundError:
        logger.error(f"No se encontró el archivo de configuración: {archivo_config}")
        raise
    except yaml.YAMLError as e:
        logger.error(f"Error al parsear el archivo YAML: {e}")
        raise
    except KeyError as e:
        logger.error(f"Clave de configuración faltante: {e}")
        raise
