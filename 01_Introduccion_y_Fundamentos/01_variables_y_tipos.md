# Variables y Tipos de Datos en Python

## ¿Qué son las variables?

Las variables son como etiquetas que pones a valores para poder usarlos después. Piensa en una variable como una caja con un nombre donde guardas algo.

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

## Tipos de Datos Básicos

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

## Conversión de Tipos

```python
# Convertir entre tipos
numero_texto = "123"
numero = int(numero_texto)  # 123

decimal_texto = "3.14"
decimal = float(decimal_texto)  # 3.14

verdadero_texto = "True"
booleano = bool(verdadero_texto)  # True
```

## F-strings (Formateo de Strings)

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

## Errores Comunes

### 1. Confundir = con ==
```python
# ❌ Error común
if edad = 18:  # Error de sintaxis
    print("Eres mayor de edad")

# ✅ Correcto
if edad == 18:
    print("Eres mayor de edad")
```

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

## Ejercicios Prácticos

### Ejercicio 1: Calculadora de Edad
```python
# Pide al usuario su año de nacimiento y calcula su edad
año_nacimiento = int(input("¿En qué año naciste? "))
año_actual = 2024
edad = año_actual - año_nacimiento
print(f"Tienes {edad} años")
```

### Ejercicio 2: Conversor de Temperatura
```python
# Convierte de Celsius a Fahrenheit
celsius = float(input("Temperatura en Celsius: "))
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C = {fahrenheit}°F")
```

## Recursos Adicionales
- [Documentación oficial de Python - Tipos de datos](https://docs.python.org/3/library/stdtypes.html)
- [Tutorial de Python - Variables](https://docs.python.org/3/tutorial/introduction.html#using-python-as-a-calculator)
- [PEP 8 - Guía de estilo para Python](https://peps.python.org/pep-0008/)

---

## Siguiente paso
Ahora que conoces las variables y tipos de datos, es momento de aprender a tomar decisiones en tu código. Continúa con: **[Condicionales y Lógica](./02_condicionales_y_logica.md)**
