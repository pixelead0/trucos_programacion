import ipaddress
from dataclasses import dataclass
from typing import Tuple, List

@dataclass
class ErrorValidacion:
    fila: int
    campo: str
    valor: str
    mensaje: str

def validar_ip(ip: str) -> Tuple[bool, str]:
    """
    Valida que una dirección IP sea válida.

    Args:
        ip: La dirección IP a validar

    Returns:
        Tuple[bool, str]: (es_válida, mensaje_error)
    """
    try:
        ipaddress.IPv4Address(ip)
        return True, None
    except ipaddress.AddressValueError:
        return False, "IP inválida: debe ser una dirección IPv4 válida"

def validar_ruta_script(ruta: str) -> Tuple[bool, str]:
    """
    Valida que una ruta de script sea válida.

    Args:
        ruta: La ruta del script a validar

    Returns:
        Tuple[bool, str]: (es_válida, mensaje_error)
    """
    if not ruta.endswith('.sh'):
        return False, "La ruta debe terminar en .sh"
    return True, None
