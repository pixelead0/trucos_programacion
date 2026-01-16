from dataclasses import dataclass
from typing import Dict, Any
import yaml

@dataclass
class Configuracion:
    """Configuración global de la aplicación."""
    archivo_entrada: str
    archivo_validos: str
    archivo_invalidos: str
    nivel_log: str
    validaciones: Dict[str, Any]

def cargar_configuracion(ruta_config: str = 'config.yaml') -> Configuracion:
    """
    Carga la configuración desde un archivo YAML.

    Args:
        ruta_config: Ruta al archivo de configuración

    Returns:
        Configuracion: Objeto con la configuración cargada
    """
    with open(ruta_config, 'r') as f:
        config_dict = yaml.safe_load(f)

    return Configuracion(
        archivo_entrada=config_dict['archivos']['entrada'],
        archivo_validos=config_dict['archivos']['validos'],
        archivo_invalidos=config_dict['archivos']['invalidos'],
        nivel_log=config_dict['logging']['nivel'],
        validaciones=config_dict['validaciones']
    )
