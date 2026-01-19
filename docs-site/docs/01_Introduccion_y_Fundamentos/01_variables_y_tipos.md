---
title: Variables y Tipos de Datos en Python
description: Fundamentos básicos de variables y tipos de datos en Python
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
  time="45 minutos"
  prereqs={['El Zen de Python']}
/>

<ProgressIndicator
  module="Módulo 01: Fundamentos"
  lesson={2}
  total={5}
/>

# Variables y Tipos de Datos en Python

<LessonMap
  objectives={[
    "Crear y usar variables en Python",
    "Entender los tipos de datos básicos (str, int, float, bool)",
    "Convertir entre tipos usando int(), float(), str(), bool()",
    "Usar f-strings para formateo de texto",
    "Realizar operaciones matemáticas básicas"
  ]}
  useCases={[
    "Formularios web: capturar nombre, email, edad del usuario",
    "Cálculos financieros: precios, descuentos, totales, impuestos",
    "Sistemas de autenticación: validar credenciales (usuario, contraseña)",
    "Análisis de datos: procesar números, promedios, estadísticas",
    "APIs y servicios: enviar y recibir datos estructurados",
    "Aplicaciones móviles: guardar preferencias del usuario, configuraciones"
  ]}
  time="45 minutos"
  level="beginner"
/>

## 🌍 Casos reales donde se usa

Las variables y tipos de datos son la base de todo programa Python. Los verás en:

- **Formularios web**: Capturar nombre, email, edad del usuario
- **Cálculos financieros**: Precios, descuentos, totales, impuestos
- **Sistemas de autenticación**: Validar credenciales (usuario, contraseña)
- **Análisis de datos**: Procesar números, promedios, estadísticas
- **APIs y servicios**: Enviar y recibir datos estructurados
- **Aplicaciones móviles**: Guardar preferencias del usuario, configuraciones

**Ejemplo real**: Cuando compras algo online, el sistema guarda tu nombre (string), el precio del producto (float), la cantidad (int), y si el pago fue exitoso (bool).

## Concepto base

Las variables son como etiquetas que pones a valores para poder usarlos después. Piensa en una variable como una caja con un nombre donde guardas algo.

> 🌮 **Analogía culinaria**: Imagina que estás preparando chilaquiles al pastor. Las variables son como los recipientes donde guardas cada ingrediente: `tortillas = "fritas"`, `salsa = "roja"`, `queso = "fresco"`, `pastor = "marinado"`. Cada variable tiene un nombre claro que describe qué contiene, igual que etiquetas en una cocina profesional.

**Lo genial de Python:** No necesitas decirle qué tipo de dato vas a guardar. Python lo descubre automáticamente cuando le asignas un valor.

```python
# Python ve "Ana" y dice: "Ah, es texto (string)"
nombre = "Ana"

# Python ve 25 y dice: "Ah, es un número entero (int)"
edad = 25

# Python ve True y dice: "Ah, es un booleano (bool)"
es_activo = True
```

**¿Por qué importa esto?** En otros lenguajes tienes que declarar `string nombre = "Ana"` o `int edad = 25`. En Python, simplemente asignas y ya. Más simple, menos errores de sintaxis.

:::info Para principiantes
Si esto te suena raro, es normal. Quédate con la idea: "una variable es una caja con un nombre donde guardas algo". El tipo de dato (texto, número, etc.) Python lo descubre solo.
:::

## Paso a paso

### 1. Strings (str) - Texto

Los strings son secuencias de caracteres. En Python puedes usar comillas simples o dobles (ambas funcionan igual):

```python
# Crear una variable de texto
nombre = "Ana García"
frase = '¡Hola mundo!'

# Para texto de múltiples líneas, usa triple comilla
multilinea = """Esta es una
frase de múltiples líneas"""
```

**Operaciones comunes con strings:**

```python
nombre = "Ana García"

# Convertir a mayúsculas
print(nombre.upper())  # ANA GARCÍA

# Convertir a minúsculas
print(nombre.lower())  # ana garcía

# Obtener la longitud (número de caracteres)
print(len(nombre))     # 10 (incluye el espacio)
```

**¿Cuándo usar cada tipo de comilla?**
- Comillas simples o dobles: para texto normal
- Triple comilla: para texto largo, documentación, o cuando necesitas saltos de línea
- En la práctica: usa la que prefieras, pero sé consistente en tu proyecto

### 2. Números Enteros (int)

Los enteros son números sin decimales. Pueden ser positivos, negativos o cero:

```python
# Números sin decimales
edad = 25
año = 2024
temperatura = -5  # También pueden ser negativos
cero = 0
```

**Operaciones matemáticas básicas:**

```python
edad = 25

# Suma
suma = edad + 5  # 30

# Multiplicación
multiplicacion = edad * 2  # 50

# División (cuidado: devuelve float)
division = edad / 5  # 5.0 (aunque sea exacto, devuelve float)

# División entera (solo la parte entera)
division_entera = edad // 3  # 8 (ignora el decimal)

# Módulo (resto de la división)
resto = edad % 7  # 4 (25 dividido entre 7 = 3, resto 4)
```

**¿Cuándo usar cada operación?**
- `+`, `-`, `*`: Operaciones normales
- `/`: División normal (siempre devuelve float)
- `//`: División entera (útil para contar grupos completos)
- `%`: Módulo (útil para saber si un número es par/impar: `numero % 2 == 0`)

### 3. Números Flotantes (float)

```python
# Números con decimales
promedio = 8.5
pi = 3.14159
precio = 19.99

# Operaciones matemáticas
resultado = promedio * 2
```

### 4. Booleanos (bool)

```python
# Valores de verdad
es_estudiante = True
tiene_trabajo = False
es_mayor = edad >= 18

# Operaciones lógicas
resultado = es_estudiante and tiene_trabajo
```

### 5. Conversión de Tipos

```python
# Convertir entre tipos
numero_texto = "123"
numero = int(numero_texto)  # 123

decimal_texto = "3.14"
decimal = float(decimal_texto)  # 3.14

verdadero_texto = "True"
booleano = bool(verdadero_texto)  # True
```

### 6. F-strings (Formateo de Strings)

```python
# Formateo moderno con f-strings
nombre = "Carlos"
edad = 30
promedio = 9.5

# Formato básico
mensaje = f"Hola, soy {nombre} y tengo {edad} años"

# Formato con decimales
calificacion = f"Mi promedio es {promedio:.2f}"

# Formato con operaciones
resultado = f"En 5 años tendré {edad + 5} años"
```

:::tip Tip pro
F-strings (introducidos en Python 3.6) son la forma más moderna y eficiente de formatear strings. Son más legibles y más rápidas que `.format()` o `%`.
:::

## Ejemplo Práctico: Perfil de Usuario

```python
# Crear un perfil completo de usuario
nombre = "Maria Lopez"
edad = 28
ocupacion = "Desarrolladora"
promedio = 9.2
esta_empleada = True
commits_hoy = 5

# Mostrar información
print(f"=== Perfil de {nombre} ===")
print(f"Edad: {edad} años")
print(f"Ocupación: {ocupacion}")
print(f"Promedio: {promedio}")
print(f"¿Está empleada? {esta_empleada}")
print(f"Commits de hoy: {commits_hoy}")

# Calcular contribuciones semanales estimadas
contribuciones_semana = commits_hoy * 5
print(f"Contribuciones estimadas esta semana: {contribuciones_semana}")
```

<ExpectedOutput>
```
=== Perfil de Maria Lopez ===
Edad: 28 años
Ocupación: Desarrolladora
Promedio: 9.2
¿Está empleada? True
Commits de hoy: 5
Contribuciones estimadas esta semana: 25
```
</ExpectedOutput>

## Errores comunes

### 1. Confundir = con ==

```python
# ❌ Error común
if edad = 18:  # Error de sintaxis
    print("Eres mayor de edad")

# ✅ Correcto
if edad == 18:
    print("Eres mayor de edad")
```

:::warning Error típico
**Confundir `=` (asignación) con `==` (comparación)**: `=` asigna un valor, `==` compara dos valores. Este es uno de los errores más comunes en principiantes.
:::

### 2. Concatenar strings y números

```python
# ❌ Error común
edad = 20
mensaje = "Tengo " + edad + " años"  # Error

# ✅ Correcto
mensaje = f"Tengo {edad} años"
# o
mensaje = "Tengo " + str(edad) + " años"
```

:::warning Error típico
**Intentar concatenar strings y números directamente**: Python no puede sumar texto y números. Usa f-strings o convierte el número a string con `str()`.
:::

## Buenas Prácticas

### Nombres de Variables

```python
# ✅ Buenos nombres
nombre_usuario = "Juan"
edad_usuario = 25
es_activo = True

# ❌ Nombres confusos
n = "Juan"
e = 25
x = True
```

### Constantes

```python
# Constantes en mayúsculas
PI = 3.14159
MAX_INTENTOS = 3
MENSAJE_BIENVENIDA = "¡Bienvenido al sistema!"
```

## Ejercicios Prácticos

<TryIt>
### Ejercicio 1: Calculadora de Edad

Pide al usuario su año de nacimiento y calcula su edad:

```python
año_nacimiento = int(input("¿En qué año naciste? "))
año_actual = 2024
edad = año_actual - año_nacimiento
print(f"Tienes {edad} años")
```
</TryIt>

<TryIt>
### Ejercicio 2: Conversor de Temperatura

Convierte de Celsius a Fahrenheit:

```python
celsius = float(input("Temperatura en Celsius: "))
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C = {fahrenheit}°F")
```
</TryIt>

## Checkpoint

<Checkpoint
  items={[
    "Puedes crear variables y asignarles valores",
    "Conoces los tipos básicos: str, int, float, bool",
    "Sabes convertir entre tipos usando int(), float(), str()",
    "Puedes usar f-strings para formatear texto",
    "Entiendes las operaciones matemáticas básicas",
    "Estás listo para usar variables en condicionales"
  ]}
/>

## Recursos Adicionales

### Documentación Oficial
- [Documentación oficial de Python - Tipos de datos](https://docs.python.org/3/library/stdtypes.html)
- [Tutorial de Python - Variables](https://docs.python.org/3/tutorial/introduction.html#using-python-as-a-calculator)
- [PEP 8 - Guía de estilo para Python](https://peps.python.org/pep-0008/)
- [PEP 484 - Type Hints](https://peps.python.org/pep-0484/) - Introducción a anotaciones de tipo

### Bibliografía Recomendada
- **Python Tricks** (Dan Bader) - Capítulo sobre tipos de datos y variables
- **Effective Python** (Brett Slatkin) - Item 1: Know Which Version of Python You're Using
- **Fluent Python** (Luciano Ramalho) - Capítulo 1: The Python Data Model
- **Automate the Boring Stuff** (Al Sweigart) - Capítulo 1: Python Basics
- **Python Cookbook, 3rd Ed** (Beazley & Jones) - Recetas sobre tipos de datos

### Conceptos Relacionados
- [Condicionales y Lógica](./02_condicionales_y_logica.md) - Usa variables en decisiones
- [Type Hints](../05_Manejo_de_Errores_y_Buenas_Practicas/02_type_hints.md) - Anotaciones de tipo avanzadas

## Siguiente paso

<NextStep
  to="/Introduccion_y_Fundamentos/condicionales_y_logica"
  label="Siguiente: Condicionales y Lógica →"
/>
