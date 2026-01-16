# Variables y Tipos de Datos en Python

## ¿Qué son las variables?
Las variables son como cajas donde guardas cosas. En Python, no necesitas declarar el tipo de variable explícitamente - Python lo infiere automáticamente.

## Tipos de Datos Básicos

### 1. Strings (str) - Texto
```python
# Crear una variable de texto
nombre = "Ana García"
frase = '¡Hola mundo!'
multilinea = """Esta es una
frase de múltiples líneas"""

# Operaciones con strings
print(nombre.upper())  # ANA GARCÍA
print(nombre.lower())  # ana garcía
print(len(nombre))     # 10
```

### 2. Números Enteros (int)
```python
# Números sin decimales
edad = 25
año = 2024
temperatura = -5

# Operaciones matemáticas
suma = edad + 5
multiplicacion = edad * 2
```

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
multilinea = """Esta es una
frase de múltiples líneas"""

# Operaciones con strings
print(nombre.upper())  # ANA GARCÍA
print(nombre.lower())  # ana garcía
print(len(nombre))     # 10
```

### 2. Números Enteros (int)
```python
# Números sin decimales
edad = 25
año = 2024
temperatura = -5

# Operaciones matemáticas
suma = edad + 5
multiplicacion = edad * 2
```

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
