import logging
import xml.etree.ElementTree as ET
from typing import Any, Dict

import pandas as pd

logger = logging.getLogger(__name__)


def dataframe_a_xml(df: pd.DataFrame, config: Dict[str, Any]) -> ET.Element:
    """
    Convierte un DataFrame a estructura XML.

    Args:
        df: DataFrame a convertir
        config: Configuración de exportación XML

    Returns:
        ET.Element: Elemento raíz del XML
    """
    elemento_raiz = config.get("elemento_raiz", "datos")
    elemento_fila = config.get("elemento_fila", "fila")
    usar_atributos = config.get("atributos", True)

    root = ET.Element(elemento_raiz)

    for index, row in df.iterrows():
        if usar_atributos:
            # Crear elemento con atributos
            fila_elem = ET.SubElement(root, elemento_fila)
            for columna, valor in row.items():
                fila_elem.set(columna, str(valor))
        else:
            # Crear elemento con subelementos
            fila_elem = ET.SubElement(root, elemento_fila)
            for columna, valor in row.items():
                campo_elem = ET.SubElement(fila_elem, columna)
                campo_elem.text = str(valor)

    return root


def exportar_a_xml(
    df: pd.DataFrame, archivo_salida: str, config: Dict[str, Any]
) -> None:
    """
    Exporta un DataFrame a archivo XML.

    Args:
        df: DataFrame a exportar
        archivo_salida: Ruta del archivo de salida
        config: Configuración de exportación XML

    Raises:
        Exception: Si hay error al escribir el archivo
    """
    try:
        if df.empty:
            logger.warning(f"No hay datos para exportar a {archivo_salida}")
            return

        # Crear estructura XML
        root = dataframe_a_xml(df, config)

        # Crear árbol XML
        tree = ET.ElementTree(root)

        # Configurar indentación
        indentacion = config.get("indentacion", 2)
        ET.indent(tree, space=" " * indentacion)

        # Escribir archivo
        tree.write(archivo_salida, encoding="utf-8", xml_declaration=True)

        logger.info(f"Datos exportados a XML: {archivo_salida}")

    except Exception as e:
        logger.error(f"Error al exportar a XML: {e}")
        raise
