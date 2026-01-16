# Versión 9: Exportación Multi-Formato (XML + JSON)

Esta versión agrega la funcionalidad de exportar los datos validados a múltiples formatos (CSV, XML y JSON), manteniendo todas las características de las versiones anteriores.

## Nuevas Características

### Exportación Multi-Formato
- **Exportación automática**: Los datos válidos e inválidos se exportan automáticamente a CSV, XML y JSON
- **Configuración flexible**: Cada formato se puede configurar independientemente desde `config.yaml`
- **Metadatos en JSON**: Inclusión de información adicional como fecha de exportación y configuración
- **Formato configurable**: Control sobre indentación y estructura de salida

## Conceptos Nuevos

### JSON en Python
- **json**: Biblioteca estándar de Python para manejo de JSON
- **Serialización de objetos**: Conversión de DataFrames a estructuras JSON
- **Metadatos**: Información adicional sobre los datos exportados

### Configuración Multi-Formato
- **Configuración anidada**: Estructuras complejas para múltiples formatos
- **Validación de configuración**: Verificación de parámetros por formato
- **Habilitación selectiva**: Activar/desactivar formatos específicos

## Estructura de Archivos

```
version_9/
├── main.py              # Punto de entrada principal
├── config.py            # Manejo de configuración
├── validadores.py       # Funciones de validación
├── procesador.py        # Lógica de procesamiento
├── exportador_xml.py    # Exportación a XML
├── exportador_json.py   # Exportación a JSON
├── config.yaml          # Configuración de la aplicación
├── requirements.txt     # Dependencias
└── README.md           # Este archivo
```

## Configuración Multi-Formato

En `config.yaml` puedes configurar ambos formatos:

```yaml
exportacion:
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

## Ejemplos de Salida

### XML (Con Atributos)
```xml
<?xml version="1.0" encoding="utf-8"?>
<datos>
  <fila ip="192.168.1.1" ruta_script="/home/user/script.sh" />
  <fila ip="10.0.0.1" ruta_script="/opt/scripts/test.sh" />
</datos>
```

### JSON (Con Metadatos)
```json
{
  "datos": [
    {
      "ip": "192.168.1.1",
      "ruta_script": "/home/user/script.sh"
    },
    {
      "ip": "10.0.0.1",
      "ruta_script": "/opt/scripts/test.sh"
    }
  ],
  "total_registros": 2,
  "tipo": "validos",
  "metadatos": {
    "fecha_exportacion": "2024-01-15 14:30:25",
    "columnas": ["ip", "ruta_script"],
    "configuracion": {
      "indentacion": 2,
      "formato_fecha": "%Y-%m-%d %H:%M:%S"
    }
  }
}
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
- `datos_validos.csv`, `datos_validos.xml`, `datos_validos.json`
- `datos_invalidos.csv`, `datos_invalidos.xml`, `datos_invalidos.json`

## Aprendizaje

### Conceptos Clave
- **Serialización multi-formato**: Conversión de datos a diferentes formatos
- **Configuración jerárquica**: Organización compleja de configuraciones
- **Metadatos**: Información adicional sobre los datos y el proceso
- **Manejo de errores específicos**: Tratamiento diferenciado por tipo de operación

### Mejores Prácticas
- **Separación de responsabilidades**: Cada exportador maneja un formato específico
- **Configuración externa**: Parámetros configurables sin modificar código
- **Logging detallado**: Registro de todas las operaciones importantes
- **Manejo de errores robusto**: Tratamiento específico por tipo de exportación

### Diferencias con Versiones Anteriores
- **Versión 7**: Solo CSV
- **Versión 8**: CSV + XML
- **Versión 9**: CSV + XML + JSON con metadatos
