# Progresión de Aprendizaje: Validador de Datos

Este proyecto muestra la evolución de un script de validación de datos, desde lo más básico hasta una aplicación profesional. Cada versión agrega nuevas características y mejores prácticas, permitiendo aprender conceptos de manera progresiva.

## Versiones

### Versión 1: Lectura Básica de CSV
**Conceptos clave:**
- Uso básico de pandas
- Manejo de excepciones con try/except
- Estructura básica de un script Python

**¿Qué aprendemos?**
- Cómo leer un archivo CSV usando pandas
- Cómo manejar errores básicos
- La estructura básica de un programa Python

### Versión 2: Validación de IP
**Conceptos clave:**
- Funciones personalizadas
- Módulo ipaddress
- Iteración sobre DataFrames

**¿Qué aprendemos?**
- Cómo crear funciones reutilizables
- Cómo validar direcciones IP
- Cómo recorrer filas de un DataFrame
- Mejor manejo de errores específicos

### Versión 3: Validación de Rutas
**Conceptos clave:**
- Múltiples validaciones
- Strings y métodos de string
- Mejor organización del código

**¿Qué aprendemos?**
- Cómo agregar múltiples validaciones
- Cómo trabajar con strings en Python
- Cómo estructurar mejor el código
- Cómo mostrar resultados más detallados

### Versión 4: Recolección de Errores
**Conceptos clave:**
- Dataclasses
- Tipos de datos personalizados
- Listas y colecciones

**¿Qué aprendemos?**
- Cómo usar dataclasses para estructurar datos
- Cómo recolectar y organizar errores
- Cómo trabajar con tipos de datos personalizados
- Mejor manejo de resultados

### Versión 5: Separación de Datos
**Conceptos clave:**
- Manipulación de DataFrames
- Guardado de archivos
- Mejor organización de resultados

**¿Qué aprendemos?**
- Cómo separar datos válidos e inválidos
- Cómo guardar resultados en archivos
- Cómo trabajar con múltiples DataFrames
- Mejor presentación de resultados

### Versión 6: Estructura Modular
**Conceptos clave:**
- Módulos y paquetes
- Type hints
- Documentación de código
- Separación de responsabilidades

**¿Qué aprendemos?**
- Cómo organizar código en módulos
- Cómo usar type hints para mejor documentación
- Cómo documentar funciones y clases
- Principios de diseño de software

### Versión 7: Aplicación Profesional
**Conceptos clave:**
- Configuración externa
- Sistema de logging
- Manejo de errores robusto
- Documentación completa

**¿Qué aprendemos?**
- Cómo usar archivos de configuración
- Cómo implementar logging profesional
- Cómo manejar errores de manera robusta
- Cómo documentar un proyecto completo

### Versión 8: Exportación a XML
**Conceptos clave:**
- Serialización de datos
- XML con ElementTree
- Configuración jerárquica
- Múltiples formatos de salida

**¿Qué aprendemos?**
- Cómo exportar datos a formato XML
- Cómo trabajar con xml.etree.ElementTree
- Cómo configurar formatos de exportación
- Cómo manejar configuraciones anidadas

### Versión 9: Exportación Multi-Formato (XML + JSON)
**Conceptos clave:**
- Serialización multi-formato
- JSON con metadatos
- Configuración avanzada
- Manejo de errores específicos por formato

**¿Qué aprendemos?**
- Cómo exportar a múltiples formatos simultáneamente
- Cómo incluir metadatos en JSON
- Cómo configurar exportaciones independientes
- Cómo manejar errores por tipo de exportación

## Documentación Detallada

En el directorio `../learning_resources/` encontrarás documentación detallada sobre cada concepto importante utilizado en el proyecto:

### Conceptos Básicos
- `01_pandas_basico.md`: Introducción a pandas y DataFrames
- `02_manejo_excepciones.md`: Manejo de errores y excepciones
- `03_validacion_ip.md`: Validación de direcciones IP
- `04_dataclasses.md`: Uso de dataclasses para estructurar datos

### Conceptos Intermedios
- `05_logging.md`: Sistema de logging profesional
- `06_configuracion_yaml.md`: Configuración con archivos YAML
- `07_pathlib.md`: Manejo de rutas y archivos
- `08_type_hints.md`: Anotaciones de tipo en Python

### Conceptos Avanzados
- `09_context_managers.md`: Gestores de contexto
- `10_decorators.md`: Decoradores y su uso
- `11_testing.md`: Pruebas unitarias y de integración
- `12_packaging.md`: Empaquetado y distribución
- `13_virtual_envs.md`: Entornos virtuales
- `14_code_quality.md`: Calidad de código y buenas prácticas
- `15_performance.md`: Optimización de rendimiento
- `16_security.md`: Seguridad en Python

### Conceptos de Serialización y Exportación
- `17_xml_processing.md`: Procesamiento de XML en Python
- `18_json_serialization.md`: Serialización JSON y metadatos
- `19_multi_format_serialization.md`: Serialización multi-formato y configuración avanzada

## Cómo Usar

1. Navega a la versión que quieras estudiar:
```bash
cd codigo/version_X  # donde X es el número de versión
```

2. Instala las dependencias (si son necesarias):
```bash
pip install -r requirements.txt  # solo necesario para versiones 6-9
```

3. Ejecuta el script:
```bash
python validar_datos.py  # para versiones 1-5
python main.py          # para versiones 6-9
```

## Recursos de Aprendizaje

### Para Principiantes (Versiones 1-3)
- [Documentación de pandas](https://pandas.pydata.org/docs/)
- [Tutorial de Python](https://docs.python.org/3/tutorial/)
- [Manejo de excepciones en Python](https://docs.python.org/3/tutorial/errors.html)

### Para Intermedios (Versiones 4-5)
- [Dataclasses en Python](https://docs.python.org/3/library/dataclasses.html)
- [Type Hints en Python](https://docs.python.org/3/library/typing.html)
- [Pandas DataFrame](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html)

### Para Avanzados (Versiones 6-7)
- [Logging en Python](https://docs.python.org/3/library/logging.html)
- [YAML en Python](https://pyyaml.org/wiki/PyYAMLDocumentation)
- [Buenas Prácticas de Python](https://docs.python-guide.org/)

### Para Expertos (Versiones 8-9)
- [XML Processing en Python](https://docs.python.org/3/library/xml.etree.elementtree.html)
- [JSON en Python](https://docs.python.org/3/library/json.html)
- [Serialización de Datos](https://docs.python.org/3/library/pickle.html)
- [Patrón Strategy](https://refactoring.guru/design-patterns/strategy/python/example)
- [Concurrent.futures](https://docs.python.org/3/library/concurrent.futures.html)

## Consejos para Aprendizaje

1. **Progresión Gradual**: Comienza con la versión 1 y avanza secuencialmente.
2. **Experimenta**: Modifica el código para ver cómo afecta el comportamiento.
3. **Documenta**: Toma notas de los conceptos nuevos que aprendes.
4. **Pregunta**: Si algo no está claro, investiga o pregunta.

## Contribuciones

Siéntete libre de:
- Reportar errores
- Sugerir mejoras
- Compartir ejemplos adicionales
- Mejorar la documentación
