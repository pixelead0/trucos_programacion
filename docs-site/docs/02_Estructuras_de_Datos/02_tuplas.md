---
title: Tuplas y Desempaquetado en Python
description: Aprende a trabajar con tuplas, estructuras inmutables y desempaquetado de valores
---

import LessonMeta from '@site/src/components/LessonMeta';
import LessonMap from '@site/src/components/LessonMap';
import Checkpoint from '@site/src/components/Checkpoint';
import NextStep from '@site/src/components/NextStep';
import TryIt from '@site/src/components/TryIt';
import ExpectedOutput from '@site/src/components/ExpectedOutput';
import ProgressIndicator from '@site/src/components/ProgressIndicator';

<LessonMeta
  level="beginner"
  time="30 minutos"
  prereqs={['Listas']}
/>

<ProgressIndicator
  module="Módulo 02: Estructuras de Datos"
  lesson={2}
  total={4}
/>

# Tuplas y Desempaquetado en Python

<LessonMap
  objectives={[
    "Crear y usar tuplas en Python",
    "Entender la inmutabilidad de las tuplas",
    "Desempaquetar tuplas para múltiples valores",
    "Usar tuplas para devolver múltiples valores de funciones",
    "Diferenciar cuándo usar tuplas vs listas"
  ]}
  useCases={[
    "Coordenadas GPS que no cambian",
    "Configuraciones fijas (host, puerto)",
    "Devolver múltiples valores de funciones",
    "Datos constantes que no deben modificarse",
    "Claves compuestas en diccionarios"
  ]}
  time="30 minutos"
  level="beginner"
/>

## 🌍 Casos reales donde se usa

Las tuplas son perfectas para datos que no deben cambiar. Las verás en:

- **Coordenadas GPS**: Latitud y longitud que representan una ubicación fija
- **Configuraciones de conexión**: Host y puerto que no cambian durante la ejecución
- **Funciones que devuelven múltiples valores**: Cálculos que retornan varios resultados
- **Claves compuestas en diccionarios**: Cuando necesitas una clave formada por varios valores
- **Datos constantes**: Días de la semana, meses, estados fijos

**Ejemplo real**: Cuando una función calcula el total de una factura, puede devolver (subtotal, impuesto, total) como una tupla que el código desempaqueta.

## 💡 Concepto base

Las tuplas son colecciones ordenadas e inmutables de elementos. Una vez creada una tupla, no se puede modificar, agregar o eliminar elementos. Son ideales para datos constantes.

**Lo genial de Python:** Las tuplas permiten desempaquetar múltiples valores de forma elegante, lo que las hace perfectas para funciones que devuelven varios resultados.

```python
# Tupla de coordenadas
coordenadas = (40.7128, -74.0060)

# Desempaquetar
latitud, longitud = coordenadas
```

:::info Para principiantes
Piensa en una tupla como una caja sellada: una vez que pones cosas dentro, no puedes cambiarlas. Es útil cuando quieres asegurarte de que los datos no se modifiquen accidentalmente.
:::

## 📚 Paso a paso

### 1. Crear Tuplas

```python
# Crear una tupla vacía
menu_fijo = ()

# Crear una tupla con elementos
dias_semana = ("Lunes", "Martes", "Miércoles", "Jueves", "Viernes")

# Crear tupla de un elemento (necesita coma)
precio_unico = (3.50,)

# Crear tupla sin paréntesis (tupla por empaquetado)
coordenadas = 40.7128, -74.0060

# Crear tupla con tuple()
numeros = tuple([1, 2, 3, 4, 5])
```

**¿Qué está pasando aquí?**
- Las tuplas se crean con paréntesis `()` o simplemente separando valores con comas
- Una tupla de un elemento necesita una coma: `(3.50,)` no `(3.50)`
- Sin la coma, Python interpreta `(3.50)` como un número entre paréntesis

### 2. Acceder a Elementos

```python
dias = ("Lunes", "Martes", "Miércoles", "Jueves", "Viernes")

# Acceder por índice (igual que listas)
print(dias[0])    # "Lunes" - primer elemento
print(dias[-1])   # "Viernes" - último elemento

# Slicing (igual que listas)
print(dias[1:3])  # ("Martes", "Miércoles")
print(dias[:3])   # ("Lunes", "Martes", "Miércoles")
```

### 3. Desempaquetar Tuplas

```python
# Desempaquetar básico
info_usuario = ("Juan Pérez", "Gerente", "Ventas", "Madrid")
nombre, puesto, departamento, ciudad = info_usuario
print(f"Nombre: {nombre}, Puesto: {puesto}")

# Desempaquetar parcial (usando _ para ignorar valores)
nombre, _, _, ciudad = info_usuario
print(f"{nombre} vive en {ciudad}")

# Desempaquetar con * (agrupar el resto)
nombre, *resto = info_usuario
print(f"Nombre: {nombre}, Resto: {resto}")  # Resto: ["Gerente", "Ventas", "Madrid"]

# Intercambiar variables (truco clásico)
a = 10
b = 20
a, b = b, a  # Intercambia valores
print(f"a={a}, b={b}")  # a=20, b=10
```

### 4. Usar Tuplas para Múltiples Valores

```python
# Función que devuelve múltiples valores
def calcular_factura(cantidad, precio_unitario):
    subtotal = cantidad * precio_unitario
    impuesto = subtotal * 0.16
    total = subtotal + impuesto
    return subtotal, impuesto, total

# Usar la función
subtotal, impuesto, total = calcular_factura(5, 10.00)
print(f"Subtotal: ${subtotal:.2f}")
print(f"Impuesto: ${impuesto:.2f}")
print(f"Total: ${total:.2f}")

# O recibir como tupla completa
factura = calcular_factura(5, 10.00)
print(f"Factura completa: {factura}")  # (50.0, 8.0, 58.0)
```

:::tip Tip pro
Las tuplas son perfectas para devolver múltiples valores de una función. Python las desempaqueta automáticamente, haciendo el código más legible.
:::

### 5. Tuplas como Claves en Diccionarios

```python
# Las tuplas pueden ser claves en diccionarios (las listas no)
coordenadas_ciudades = {
    (40.7128, -74.0060): "Nueva York",
    (34.0522, -118.2437): "Los Ángeles",
    (51.5074, -0.1278): "Londres"
}

# Acceder por coordenadas
ciudad = coordenadas_ciudades[(40.7128, -74.0060)]
print(ciudad)  # Nueva York
```

### 6. Operaciones con Tuplas

```python
dias = ("Lunes", "Martes", "Miércoles")

# Concatenar tuplas
mas_dias = ("Jueves", "Viernes")
semana_completa = dias + mas_dias
print(semana_completa)  # ("Lunes", "Martes", "Miércoles", "Jueves", "Viernes")

# Repetir tuplas
dias_duplicados = dias * 2
print(dias_duplicados)  # ("Lunes", "Martes", "Miércoles", "Lunes", "Martes", "Miércoles")

# Verificar pertenencia
if "Lunes" in dias:
    print("Lunes está en la tupla")

# Contar elementos
print(dias.count("Lunes"))  # 1

# Buscar índice
print(dias.index("Martes"))  # 1
```

## 🎓 Ejemplo Práctico Completo: Sistema de Coordenadas

```python
# Sistema de coordenadas con tuplas
def calcular_distancia(punto1, punto2):
    """Calcula distancia entre dos puntos (x, y)"""
    x1, y1 = punto1
    x2, y2 = punto2
    distancia = ((x2 - x1)**2 + (y2 - y1)**2)**0.5
    return distancia

def punto_medio(punto1, punto2):
    """Calcula el punto medio entre dos puntos"""
    x1, y1 = punto1
    x2, y2 = punto2
    medio_x = (x1 + x2) / 2
    medio_y = (y1 + y2) / 2
    return (medio_x, medio_y)

# Usar el sistema
punto_a = (0, 0)
punto_b = (3, 4)
distancia = calcular_distancia(punto_a, punto_b)
medio = punto_medio(punto_a, punto_b)

print(f"Distancia entre {punto_a} y {punto_b}: {distancia:.2f}")
print(f"Punto medio: {medio}")
```

<ExpectedOutput>
```
Distancia entre (0, 0) y (3, 4): 5.00
Punto medio: (1.5, 2.0)
```
</ExpectedOutput>

## ⚠️ Errores comunes

### 1. Intentar modificar una tupla

```python
# ❌ Error común
config = ("localhost", 8080)
config[0] = "127.0.0.1"  # TypeError: 'tuple' object does not support item assignment

# ✅ Correcto
config = ("localhost", 8080)
# Crear nueva tupla si necesitas cambiar
nueva_config = ("127.0.0.1",) + config[1:]
# O convertir a lista, modificar y volver a tupla
config_lista = list(config)
config_lista[0] = "127.0.0.1"
nueva_config = tuple(config_lista)
```

:::warning Error típico
**Intentar modificar una tupla**: Las tuplas son inmutables. Si necesitas cambiar valores, crea una nueva tupla o usa una lista.
:::

### 2. Olvidar la coma en tuplas de un elemento

```python
# ❌ Error común
precio = (3.50)  # Esto es un float, no una tupla
print(type(precio))  # <class 'float'>

# ✅ Correcto
precio = (3.50,)  # Esto es una tupla
print(type(precio))  # <class 'tuple'>
```

### 3. Desempaquetar con número incorrecto de variables

```python
# ❌ Error común
datos = ("Juan", "Pérez", 30)
nombre, apellido = datos  # ValueError: too many values to unpack

# ✅ Correcto
datos = ("Juan", "Pérez", 30)
nombre, apellido, edad = datos  # Correcto
# O ignorar valores
nombre, apellido, _ = datos
```

## ✅ Buenas Prácticas

### 1. Usar tuplas para datos constantes

```python
# ✅ Usar tupla para datos fijos
dias_semana = ("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo")
configuracion = ("localhost", 8080, True)

# ❌ No usar lista para datos constantes
dias_semana = ["Lunes", "Martes", ...]  # Puede modificarse accidentalmente
```

### 2. Usar tuplas para devolver múltiples valores

```python
# ✅ Devolver tupla
def obtener_usuario(id):
    # ... lógica ...
    return (nombre, email, edad)

# Desempaquetar al recibir
nombre, email, edad = obtener_usuario(1)
```

### 3. Usar nombres descriptivos al desempaquetar

```python
# ✅ Nombres descriptivos
latitud, longitud = coordenadas
nombre, apellido, edad = datos_usuario

# ❌ Nombres genéricos
x, y = coordenadas
a, b, c = datos_usuario
```

## 🧪 Ejercicios Prácticos

<TryIt>
### Ejercicio 1: Calculadora de Estadísticas

Crea una función que calcule estadísticas de una lista y devuelva múltiples valores:

```python
def calcular_estadisticas(numeros):
    """Calcula estadísticas de una lista de números"""
    if not numeros:
        return None

    suma = sum(numeros)
    promedio = suma / len(numeros)
    maximo = max(numeros)
    minimo = min(numeros)

    return (suma, promedio, maximo, minimo)

# Usar la función
datos = [10, 20, 30, 40, 50]
suma, promedio, maximo, minimo = calcular_estadisticas(datos)
print(f"Suma: {suma}, Promedio: {promedio:.2f}, Máx: {maximo}, Mín: {minimo}")
```
</TryIt>

<TryIt>
### Ejercicio 2: Intercambio de Variables

Practica el intercambio de variables usando tuplas:

```python
# Intercambiar dos variables
a = 10
b = 20
print(f"Antes: a={a}, b={b}")

a, b = b, a
print(f"Después: a={a}, b={b}")

# Intercambiar tres variables
x, y, z = 1, 2, 3
x, y, z = z, x, y
print(f"x={x}, y={y}, z={z}")  # x=3, y=1, z=2
```
</TryIt>

## 🎯 Checkpoint

<Checkpoint
  items={[
    "Puedes crear tuplas de diferentes formas",
    "Entiendes que las tuplas son inmutables",
    "Sabes desempaquetar tuplas en múltiples variables",
    "Puedes usar tuplas para devolver múltiples valores de funciones",
    "Sabes cuándo usar tuplas vs listas",
    "Puedes usar tuplas como claves en diccionarios",
    "Estás listo para aprender diccionarios"
  ]}
/>

## 📚 Recursos Adicionales

### Documentación Oficial
- [Documentación oficial de Python sobre tuplas](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences)

### Conceptos Relacionados
- [Listas](./01_listas.md) - Estructura mutable similar
- [Diccionarios y Sets](./03_diccionarios_sets.md) - Otras estructuras de datos
- [Operaciones Avanzadas](./04_operaciones_avanzadas.md) - Desempaquetado avanzado

## 🚀 Siguiente paso

<NextStep
  to="/Estructuras_de_Datos/diccionarios_sets"
  label="Siguiente: Diccionarios y Sets →"
/>
