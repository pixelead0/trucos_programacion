# Serialización JSON y Metadatos en Python

JSON (JavaScript Object Notation) es un formato de datos ligero y fácil de leer que se ha convertido en el estándar de facto para el intercambio de datos en aplicaciones web y APIs. Python proporciona excelente soporte para JSON a través del módulo `json` de la biblioteca estándar.

## ¿Qué es JSON?

JSON es un formato de datos basado en texto que representa objetos de JavaScript. Es ampliamente utilizado para:
- APIs web (REST, GraphQL)
- Configuración de aplicaciones
- Almacenamiento de datos
- Intercambio de datos entre sistemas

## Estructura Básica de JSON

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

**Tipos de datos soportados:**
- **Objetos**: `{"clave": "valor"}`
- **Arrays**: `["item1", "item2"]`
- **Strings**: `"texto"`
- **Números**: `123`, `3.14`
- **Booleanos**: `true`, `false`
- **Null**: `null`

## Módulo json de Python

### Importación

```python
import json
```

### Funciones Principales

#### Serialización (Python → JSON)
- `json.dumps()`: Convierte objeto Python a string JSON
- `json.dump()`: Escribe objeto Python a archivo JSON

#### Deserialización (JSON → Python)
- `json.loads()`: Convierte string JSON a objeto Python
- `json.load()`: Lee archivo JSON a objeto Python

## Conversión de DataFrame a JSON

### Método Básico

```python
import pandas as pd
import json

# DataFrame de ejemplo
df = pd.DataFrame({
    'ip': ['192.168.1.1', '10.0.0.1'],
    'ruta_script': ['/home/user/script.sh', '/opt/scripts/test.sh']
})

# Conversión simple
json_string = df.to_json(orient='records', indent=2)
print(json_string)
```

### Método Avanzado con Metadatos

```python
def dataframe_a_json(df, config, tipo_datos="validos"):
    """Convierte DataFrame a JSON con metadatos."""
    from datetime import datetime

    # Convertir DataFrame a lista de diccionarios
    datos = df.to_dict('records')

    # Crear estructura base
    estructura = {
        "datos": datos,
        "total_registros": len(datos),
        "tipo": tipo_datos
    }

    # Agregar metadatos si está habilitado
    if config.get('incluir_metadatos', True):
        estructura["metadatos"] = {
            "fecha_exportacion": datetime.now().strftime(
                config.get('formato_fecha', '%Y-%m-%d %H:%M:%S')
            ),
            "columnas": list(df.columns),
            "configuracion": {
                "indentacion": config.get('indentacion', 2),
                "formato_fecha": config.get('formato_fecha', '%Y-%m-%d %H:%M:%S')
            }
        }

    return estructura
```

## Configuración de Exportación JSON

### Parámetros de json.dump()

```python
def exportar_a_json(df, archivo_salida, config, tipo_datos="validos"):
    """Exporta DataFrame a JSON con configuración."""
    try:
        if df.empty:
            print(f"No hay datos para exportar a {archivo_salida}")
            return

        # Crear estructura JSON
        estructura = dataframe_a_json(df, config, tipo_datos)

        # Configurar indentación
        indentacion = config.get('indentacion', 2)

        # Escribir archivo
        with open(archivo_salida, 'w', encoding='utf-8') as archivo:
            json.dump(
                estructura,
                archivo,
                indent=indentacion,
                ensure_ascii=False,  # Soporte para caracteres especiales
                separators=(',', ': ')  # Formato compacto
            )

        print(f"Datos exportados a JSON: {archivo_salida}")

    except Exception as e:
        print(f"Error al exportar a JSON: {e}")
        raise
```

### Parámetros Importantes

- **indent**: Número de espacios para indentación
- **ensure_ascii**: Si es `False`, permite caracteres Unicode
- **separators**: Tupla con separadores personalizados
- **sort_keys**: Si es `True`, ordena las claves alfabéticamente

## Tipos de Metadatos

### Metadatos de Exportación

```python
metadatos_exportacion = {
    "fecha_exportacion": "2024-01-15 14:30:25",
    "usuario": "admin",
    "version_aplicacion": "1.0.0",
    "formato_datos": "JSON"
}
```

### Metadatos de Datos

```python
metadatos_datos = {
    "total_registros": 1000,
    "columnas": ["ip", "ruta_script"],
    "tipos_datos": {
        "ip": "string",
        "ruta_script": "string"
    },
    "filtros_aplicados": ["ip_válida", "ruta_válida"]
}
```

### Metadatos de Configuración

```python
metadatos_configuracion = {
    "configuracion": {
        "indentacion": 2,
        "formato_fecha": "%Y-%m-%d %H:%M:%S",
        "incluir_metadatos": True,
        "encoding": "utf-8"
    }
}
```

## Estructuras JSON Comunes

### 1. Lista Simple

```json
[
  {"ip": "192.168.1.1", "ruta": "/home/user/script.sh"},
  {"ip": "10.0.0.1", "ruta": "/opt/scripts/test.sh"}
]
```

### 2. Objeto con Datos y Metadatos

```json
{
  "datos": [
    {"ip": "192.168.1.1", "ruta": "/home/user/script.sh"},
    {"ip": "10.0.0.1", "ruta": "/opt/scripts/test.sh"}
  ],
  "metadatos": {
    "total": 2,
    "fecha": "2024-01-15 14:30:25"
  }
}
```

### 3. Respuesta de API

```json
{
  "estado": "exito",
  "mensaje": "Datos exportados correctamente",
  "datos": [...],
  "paginacion": {
    "pagina": 1,
    "total_paginas": 10,
    "registros_por_pagina": 100
  }
}
```

## Manejo de Errores

### Errores Comunes

```python
import json

# Error de sintaxis JSON
try:
    datos = json.loads('{"clave": "valor",}')  # Coma extra
except json.JSONDecodeError as e:
    print(f"Error de sintaxis JSON: {e}")

# Error de tipo de datos
try:
    datos = json.dumps({"fecha": datetime.now()})  # datetime no es serializable
except TypeError as e:
    print(f"Error de tipo: {e}")

# Error de archivo
try:
    with open("archivo.json", "r") as f:
        datos = json.load(f)
except FileNotFoundError:
    print("Archivo no encontrado")
```

### Serialización Personalizada

```python
from datetime import datetime

class DateTimeEncoder(json.JSONEncoder):
    """Encoder personalizado para datetime."""
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        return super().default(obj)

# Usar encoder personalizado
datos = {"fecha": datetime.now()}
json_string = json.dumps(datos, cls=DateTimeEncoder)
```

## Casos de Uso Avanzados

### 1. Configuración de Aplicación

```python
def cargar_configuracion_json(archivo_config):
    """Carga configuración desde archivo JSON."""
    try:
        with open(archivo_config, 'r', encoding='utf-8') as f:
            config = json.load(f)
        return config
    except Exception as e:
        print(f"Error al cargar configuración: {e}")
        return {}

# Uso
config = cargar_configuracion_json("config.json")
```

### 2. Logging de Metadatos

```python
def log_metadatos_exportacion(df, archivo_salida, config):
    """Registra metadatos de la exportación."""
    metadatos = {
        "timestamp": datetime.now().isoformat(),
        "archivo_salida": archivo_salida,
        "registros_exportados": len(df),
        "columnas": list(df.columns),
        "configuracion_usada": config
    }

    # Guardar metadatos en archivo separado
    with open("metadatos_exportacion.json", "w") as f:
        json.dump(metadatos, f, indent=2)
```

### 3. Validación de Estructura

```python
def validar_estructura_json(datos, esquema_esperado):
    """Valida que los datos JSON tengan la estructura esperada."""
    def verificar_estructura(datos, esquema):
        if isinstance(esquema, dict):
            if not isinstance(datos, dict):
                return False
            for clave in esquema:
                if clave not in datos:
                    return False
                if not verificar_estructura(datos[clave], esquema[clave]):
                    return False
        elif isinstance(esquema, list):
            if not isinstance(datos, list):
                return False
            if datos and not verificar_estructura(datos[0], esquema[0]):
                return False
        return True

    return verificar_estructura(datos, esquema_esperado)

# Ejemplo de uso
esquema = {
    "datos": [{"ip": "", "ruta_script": ""}],
    "total_registros": 0,
    "metadatos": {"fecha_exportacion": ""}
}

es_valido = validar_estructura_json(datos_json, esquema)
```

## Ventajas y Desventajas

### Ventajas
- **Ligero**: Menos verboso que XML
- **Rápido**: Parsing más eficiente
- **Universal**: Soporte nativo en JavaScript y muchos lenguajes
- **Legible**: Formato fácil de leer y escribir
- **Flexible**: Soporte para estructuras complejas

### Desventajas
- **Sin comentarios**: No soporta comentarios nativos
- **Sin esquemas**: No tiene validación de esquemas incorporada
- **Sin tipos**: No distingue entre enteros y flotantes
- **Sin referencias**: No soporta referencias circulares

## Mejores Prácticas

1. **Usar indentación**: Para archivos legibles por humanos
2. **Incluir metadatos**: Agregar información contextual
3. **Manejar errores**: Siempre usar try/except
4. **Validar datos**: Verificar estructura antes de procesar
5. **Usar encoding UTF-8**: Para soporte de caracteres especiales
6. **Documentar esquemas**: Especificar estructura esperada

## Ejercicios Prácticos

1. **Crear JSON desde DataFrame**: Convierte un DataFrame a JSON con metadatos
2. **Validar estructura**: Verifica que un JSON tenga la estructura esperada
3. **Configuración dinámica**: Carga configuración desde archivo JSON
4. **Logging de metadatos**: Registra información sobre exportaciones

## Recursos Adicionales

- [Documentación oficial de json](https://docs.python.org/3/library/json.html)
- [JSON Schema](https://json-schema.org/)
- [JSONPath para consultas](https://goessner.net/articles/JsonPath/)
- [JSON Lines (JSONL)](https://jsonlines.org/)
- [JSON Web Tokens (JWT)](https://jwt.io/)
