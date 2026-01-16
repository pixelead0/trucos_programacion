import ipaddress
from dataclasses import dataclass
from typing import Tuple


@dataclass
class ErrorValidacion:
    """Representa un error de validación."""

    fila: int
    campo: str
    valor: str
    mensaje: str


def validar_ip(ip: str, config: dict) -> Tuple[bool, str]:
    """
    Valida una dirección IP.

    Args:
        ip: Dirección IP a validar
        config: Configuración de validación

    Returns:
        Tuple[bool, str]: (es_válida, mensaje_error)
    """
    if not config.get("habilitada", True):
        return True, ""

    try:
        ipaddress.IPv4Address(ip)
        return True, ""
    except ipaddress.AddressValueError:
        return False, config.get("mensaje_error", "IP inválida")


def validar_ruta_script(ruta: str, config: dict) -> Tuple[bool, str]:
    """
    Valida que la ruta termine con la extensión correcta.

    Args:
        ruta: Ruta a validar
        config: Configuración de validación

    Returns:
        Tuple[bool, str]: (es_válida, mensaje_error)
    """
    if not config.get("habilitada", True):
        return True, ""

    extension = config.get("extension", ".sh")
    if not ruta.endswith(extension):
        return False, config.get("mensaje_error", f"Debe terminar en {extension}")

    return True, ""
