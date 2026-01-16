# Versión 8: Exportación a XML

Esta versión agrega la funcionalidad de exportar los datos validados a formato XML, manteniendo todas las características de las versiones anteriores.

## Nuevas Características

### Exportación XML
- **Exportación automática**: Los datos válidos e inválidos se exportan automáticamente a archivos XML
- **Configuración flexible**: El formato XML se puede configurar desde el archivo `config.yaml`
- **Dos formatos**: Soporte para elementos con atributos o con subelementos
- **Indentación configurable**: Control sobre el formato de salida

## Conceptos Nuevos

### XML en Python
- **xml.etree.ElementTree**: Biblioteca estándar de Python para manejo de XML
- **Elementos y atributos**: Diferentes formas de estructurar datos XML
- **Indentación**: Formateo del XML para mejor legibilidad

### Configuración Avanzada
- **Configuración anidada**: Estructuras de configuración más complejas
- **Validación de configuración**: Verificación de parámetros de exportación

## Estructura de Archivos

```
version_8/
├── main.py              # Punto de entrada principal
├── config.py            # Manejo de configuración
├── validadores.py       # Funciones de validación
├── procesador.py        # Lógica de procesamiento
├── exportador_xml.py    # Exportación a XML
├── config.yaml          # Configuración de la aplicación
├── requirements.txt     # Dependencias
└── README.md           # Este archivo
```

## Configuración XML

En `config.yaml` puedes configurar la exportación XML:

```yaml
exportacion:
  xml:
    habilitada: true
    elemento_raiz: "datos"
    elemento_fila: "fila"
    atributos: true        # true = usar atributos, false = usar subelementos
    indentacion: 2
```

## Ejemplos de Salida XML

### Con Atributos (atributos: true)
```xml
<?xml version="1.0" encoding="utf-8"?>
<datos>
  <fila ip="192.168.1.1" ruta_script="/home/user/script.sh" />
  <fila ip="10.0.0.1" ruta_script="/opt/scripts/test.sh" />
</datos>
```

### Con Subelementos (atributos: false)
```xml
<?xml version="1.0" encoding="utf-8"?>
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

## Uso

1. Instalar dependencias:
```bash
pip install -r requirements.txt
```

2. Ejecutar el validador:
```bash
python main.py
```

3. Revisar los archivos generados:
- `datos_validos.csv` y `datos_validos.xml`
- `datos_invalidos.csv` y `datos_invalidos.xml`

## Aprendizaje

### Conceptos Clave
- **Serialización de datos**: Conversión de estructuras de datos a formatos específicos
- **Configuración jerárquica**: Organización de configuraciones en niveles
- **Manejo de errores específicos**: Tratamiento de errores por tipo de operación

### Mejores Prácticas
- **Separación de responsabilidades**: Cada módulo tiene una función específica
- **Configuración externa**: Parámetros configurables sin modificar código
- **Logging detallado**: Registro de todas las operaciones importantes
