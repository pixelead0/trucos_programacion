# Validador de Datos

Este script valida datos de un archivo CSV, verificando direcciones IP y rutas de scripts.

## Características

- Validación de direcciones IP IPv4
- Validación de rutas de scripts (extensión .sh)
- Separación de datos válidos e inválidos
- Sistema de logging configurable
- Configuración mediante archivo YAML
- Manejo de errores robusto

## Requisitos

- Python 3.8+
- Dependencias listadas en `requirements.txt`

## Instalación

1. Crear un entorno virtual (opcional pero recomendado):
```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

2. Instalar dependencias:
```bash
pip install -r requirements.txt
```

## Uso

1. Configurar el archivo `config.yaml` según necesidades
2. Ejecutar el script:
```bash
python main.py
```

## Estructura del Proyecto

- `main.py`: Punto de entrada del programa
- `config.py`: Manejo de configuración
- `validadores.py`: Funciones de validación
- `procesador.py`: Lógica de procesamiento
- `config.yaml`: Archivo de configuración
- `requirements.txt`: Dependencias del proyecto

## Salida

El programa genera:
- `datos_validos.csv`: Datos que pasaron todas las validaciones
- `datos_invalidos.csv`: Datos que fallaron en alguna validación
- `validacion.log`: Registro detallado del proceso

## Configuración

El archivo `config.yaml` permite configurar:
- Rutas de archivos
- Nivel de logging
- Reglas de validación
- Mensajes de error
