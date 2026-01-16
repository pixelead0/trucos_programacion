import ipaddress
import logging
from dataclasses import dataclass
from typing import Tuple, List, Dict, Any

logger = logging.getLogger(__name__)

@dataclass
class ErrorValidacion:
    fila: int
    campo: str
    valor: str
    mensaje: str

def validar_ip(ip: str, config: Dict[str, Any]) -> Tuple[bool, str]:
    """
    Valida que una dirección IP sea válida.

    Args:
        ip: La dirección IP a validar
        config: Configuración de validación

    Returns:
        Tuple[bool, str]: (es_válida, mensaje_error)
    """
    if not config['habilitada']:
        return True, None

    try:
        ipaddress.IPv4Address(ip)
        logger.debug(f"IP válida: {ip}")
        return True, None
    except ipaddress.AddressValueError:
        logger.warning(f"IP inválida: {ip}")
        return False, config['mensaje_error']

def validar_ruta_script(ruta: str, config: Dict[str, Any]) -> Tuple[bool, str]:
    """
    Valida que una ruta de script sea válida.

    Args:
        ruta: La ruta del script a validar
        config: Configuración de validación

    Returns:
        Tuple[bool, str]: (es_válida, mensaje_error)
    """
    if not config['habilitada']:
        return True, None

    if not ruta.endswith(config['extension']):
        logger.warning(f"Ruta inválida: {ruta}")
        return False, config['mensaje_error']

    logger.debug(f"Ruta válida: {ruta}")
    return True, None
