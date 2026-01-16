# Procesamiento de XML en Python

XML (eXtensible Markup Language) es un formato de datos estructurado ampliamente utilizado para el intercambio de información. Python proporciona varias bibliotecas para trabajar con XML, siendo `xml.etree.ElementTree` la más común y fácil de usar.

## ¿Qué es XML?

XML es un lenguaje de marcado que permite estructurar datos de manera jerárquica usando etiquetas. Es especialmente útil para:
- Intercambio de datos entre sistemas
- Configuración de aplicaciones
- Almacenamiento de datos estructurados
- APIs web (REST, SOAP)

## Estructura Básica de XML

```xml
<?xml version="1.0" encoding="utf-8"?>
<datos>
  <fila ip="192.168.1.1" ruta_script="/home/user/script.sh" />
  <fila ip="10.0.0.1" ruta_script="/opt/scripts/test.sh" />
</datos>
```

**Componentes:**
- **Declaración XML**: `<?xml version="1.0" encoding="utf-8"?>`
- **Elemento raíz**: `<datos>`
- **Elementos**: `<fila>`
- **Atributos**: `ip="192.168.1.1"`

## xml.etree.ElementTree

Esta biblioteca estándar de Python proporciona una API simple y eficiente para trabajar con XML.

### Importación

```python
import xml.etree.ElementTree as ET
```

### Crear XML desde Cero

```python
# Crear elemento raíz
root = ET.Element("datos")

# Crear elementos hijos
fila1 = ET.SubElement(root, "fila")
fila1.set("ip", "192.168.1.1")
fila1.set("ruta_script", "/home/user/script.sh")

fila2 = ET.SubElement(root, "fila")
fila2.set("ip", "10.0.0.1")
fila2.set("ruta_script", "/opt/scripts/test.sh")

# Crear árbol XML
tree = ET.ElementTree(root)

# Escribir archivo
tree.write("datos.xml", encoding="utf-8", xml_declaration=True)
```

### Leer XML Existente

```python
# Parsear archivo XML
tree = ET.parse("datos.xml")
root = tree.getroot()

# Recorrer elementos
for fila in root.findall("fila"):
    ip = fila.get("ip")
    ruta = fila.get("ruta_script")
    print(f"IP: {ip}, Ruta: {ruta}")
```

### Métodos Principales

#### Element
- `Element(tag)`: Crear elemento
- `SubElement(parent, tag)`: Crear elemento hijo
- `set(key, value)`: Establecer atributo
- `get(key)`: Obtener atributo
- `find(tag)`: Buscar primer elemento hijo
- `findall(tag)`: Buscar todos los elementos hijos
- `text`: Contenido de texto del elemento

#### ElementTree
- `parse(source)`: Parsear archivo XML
- `write(file, encoding, xml_declaration)`: Escribir archivo
- `getroot()`: Obtener elemento raíz

## Formatos de XML

### XML con Atributos

```xml
<datos>
  <fila ip="192.168.1.1" ruta_script="/home/user/script.sh" />
  <fila ip="10.0.0.1" ruta_script="/opt/scripts/test.sh" />
</datos>
```

**Ventajas:**
- Más compacto
- Fácil de leer
- Eficiente para datos simples

### XML con Subelementos

```xml
<datos>
  <fila>
    <ip>192.168.1.1</ip>
    <ruta_script>/home/user/script.sh</ruta_script>
  </fila>
  <fila>
    <ip>10.0.0.1</ip>
    <ruta_script>/opt/scripts/test.sh</ruta_script>
  </fila>
</datos>
```

**Ventajas:**
- Más estructurado
- Soporte para datos complejos
- Mejor para datos anidados

## Conversión de DataFrame a XML

```python
import pandas as pd
import xml.etree.ElementTree as ET

def dataframe_a_xml(df, config):
    """Convierte DataFrame a XML."""
    elemento_raiz = config.get('elemento_raiz', 'datos')
    elemento_fila = config.get('elemento_fila', 'fila')
    usar_atributos = config.get('atributos', True)

    root = ET.Element(elemento_raiz)

    for index, row in df.iterrows():
        if usar_atributos:
            # Usar atributos
            fila_elem = ET.SubElement(root, elemento_fila)
            for columna, valor in row.items():
                fila_elem.set(columna, str(valor))
        else:
            # Usar subelementos
            fila_elem = ET.SubElement(root, elemento_fila)
            for columna, valor in row.items():
                campo_elem = ET.SubElement(fila_elem, columna)
                campo_elem.text = str(valor)

    return root
```

## Configuración y Formateo

### Indentación

```python
# Configurar indentación
ET.indent(tree, space='  ')  # 2 espacios
ET.indent(tree, space='    ')  # 4 espacios
```

### Declaración XML

```python
# Incluir declaración XML
tree.write("archivo.xml", encoding="utf-8", xml_declaration=True)
```

## Manejo de Errores

```python
try:
    tree = ET.parse("archivo.xml")
    root = tree.getroot()
except ET.ParseError as e:
    print(f"Error al parsear XML: {e}")
except FileNotFoundError:
    print("Archivo XML no encontrado")
```

## Casos de Uso Comunes

### 1. Configuración de Aplicaciones

```xml
<configuracion>
  <base_datos>
    <host>localhost</host>
    <puerto>5432</puerto>
    <nombre>mi_app</nombre>
  </base_datos>
  <logging>
    <nivel>INFO</nivel>
    <archivo>app.log</archivo>
  </logging>
</configuracion>
```

### 2. Intercambio de Datos

```xml
<respuesta_api>
  <estado>exito</estado>
  <datos>
    <usuario id="123">
      <nombre>Juan Pérez</nombre>
      <email>juan@ejemplo.com</email>
    </usuario>
  </datos>
</respuesta_api>
```

### 3. Exportación de Datos

```python
def exportar_datos_xml(df, archivo_salida, config):
    """Exporta DataFrame a XML con configuración."""
    try:
        root = dataframe_a_xml(df, config)
        tree = ET.ElementTree(root)

        # Configurar formato
        indentacion = config.get('indentacion', 2)
        ET.indent(tree, space=' ' * indentacion)

        # Escribir archivo
        tree.write(
            archivo_salida,
            encoding='utf-8',
            xml_declaration=True
        )

        return True
    except Exception as e:
        print(f"Error al exportar XML: {e}")
        return False
```

## Ventajas y Desventajas

### Ventajas
- **Estándar ampliamente soportado**: Compatible con muchos sistemas
- **Estructura jerárquica**: Permite datos complejos y anidados
- **Validación**: Soporte para esquemas (DTD, XSD)
- **Legibilidad**: Formato de texto legible por humanos

### Desventajas
- **Verboso**: Más espacio que formatos binarios
- **Rendimiento**: Parsing más lento que JSON
- **Complejidad**: Más complejo que formatos simples

## Mejores Prácticas

1. **Usar declaración XML**: Siempre incluir `<?xml version="1.0" encoding="utf-8"?>`
2. **Elegir formato apropiado**: Atributos para datos simples, subelementos para datos complejos
3. **Manejar errores**: Siempre usar try/except al parsear XML
4. **Validar datos**: Usar esquemas cuando sea posible
5. **Documentar estructura**: Comentar el formato XML esperado

## Ejercicios Prácticos

1. **Crear XML desde DataFrame**: Convierte un DataFrame de pandas a XML
2. **Leer configuración**: Parsear un archivo de configuración XML
3. **Validar estructura**: Verificar que un XML tenga la estructura esperada
4. **Convertir formatos**: Transformar entre XML con atributos y subelementos

## Recursos Adicionales

- [Documentación oficial de ElementTree](https://docs.python.org/3/library/xml.etree.elementtree.html)
- [Tutorial de XML en Python](https://docs.python.org/3/library/xml.html)
- [XML Schema Definition (XSD)](https://www.w3.org/XML/Schema)
- [XPath para navegación XML](https://docs.python.org/3/library/xml.etree.elementtree.html#xpath-support)
