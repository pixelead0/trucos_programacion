# Condicionales y Lógica en Python

## ¿Qué son las condicionales y por qué las necesitas?

Hasta ahora tu código ejecuta línea por línea, siempre en el mismo orden. Pero en la vida real necesitas que tu programa **tome decisiones**: "Si el usuario es mayor de edad, mostrar contenido para adultos", "Si hay stock, permitir compra", "Si es fin de semana, aplicar descuento".

**Las condicionales resuelven esto:** le das a tu programa la capacidad de elegir qué hacer según las circunstancias. Es como enseñarle a tu computadora a pensar con lógica: si pasa esto, haz aquello.

**¿Cuándo las usas?**
- Validar datos de entrada
- Controlar el flujo del programa
- Aplicar reglas de negocio
- Manejar diferentes casos

## Estructura Básica: if

La estructura más simple es `if` (si). Python evalúa la condición y solo ejecuta el código si es verdadera:

```python
# Estructura básica
if condicion:
    # Código que se ejecuta si la condición es True
    print("La condición se cumple")
```

**¿Qué está pasando aquí?**
- `if` = palabra clave que inicia la condición
- `condicion` = una expresión que Python evalúa como `True` o `False`
- `:` = dos puntos obligatorios (Python necesita esto)
- El código indentado = solo se ejecuta si la condición es `True`

### Ejemplo Simple

Veamos un caso real: verificar si alguien es mayor de edad:

```python
edad = 18

if edad >= 18:
    print("Eres mayor de edad")
    print("Puedes votar")
# Salida: Eres mayor de edad
#         Puedes votar
```

**¿Qué pasa si `edad = 15`?**
El código dentro del `if` no se ejecuta. El programa simplemente continúa después del bloque `if`.

**Prueba esto:** Cambia `edad = 18` a `edad = 15` y ejecuta. ¿Qué pasa?

## Estructura Completa: if-elif-else

Cuando necesitas evaluar múltiples condiciones, usas `elif` (else if) y `else`:

```python
# Estructura completa
if condicion1:
    # Código si condicion1 es True
    print("Primera condición")
elif condicion2:
    # Código si condicion2 es True (solo si condicion1 fue False)
    print("Segunda condición")
else:
    # Código si ninguna condición es True
    print("Ninguna condición")
```

**¿Cómo funciona?**
1. Python evalúa `condicion1` primero
2. Si es `True`, ejecuta ese bloque y **termina** (no evalúa el resto)
3. Si es `False`, evalúa `condicion2`
4. Si ninguna es `True`, ejecuta el bloque `else`

**Importante:** Solo se ejecuta **un** bloque, el primero que sea verdadero.

### Ejemplo: Evaluar Calificaciones

Un sistema de calificaciones es un caso perfecto para `if-elif-else`:

```python
calificacion = 85

if calificacion >= 90:
    print("Excelente")
elif calificacion >= 80:
    print("Bien")  # ← Este se ejecuta porque 85 >= 80
elif calificacion >= 70:
    print("Satisfactorio")
else:
    print("Necesitas mejorar")

# Salida: Bien
```

**¿Por qué funciona así?**
- Si `calificacion = 95`, se ejecuta "Excelente" y termina
- Si `calificacion = 85`, se ejecuta "Bien" (85 >= 80 pero 85 < 90)
- Si `calificacion = 65`, se ejecuta "Necesitas mejorar"

**Orden importa:** Las condiciones se evalúan de arriba hacia abajo. Si pones `>= 70` antes de `>= 80`, un 85 ejecutaría "Satisfactorio" en lugar de "Bien".

## Operadores de Comparación

| Operador | Significado | Ejemplo |
|----------|-------------|---------|
| `==` | Igual a | `edad == 18` |
| `!=` | Diferente de | `edad != 18` |
| `>` | Mayor que | `edad > 18` |
| `<` | Menor que | `edad < 18` |
| `>=` | Mayor o igual | `edad >= 18` |
| `<=` | Menor o igual | `edad <= 18` |

### Ejemplos Prácticos
```python
# Comparaciones numéricas
temperatura = 25
if temperatura > 30:
    print("Hace calor")
elif temperatura < 10:
    print("Hace frío")
else:
    print("Temperatura agradable")

# Comparaciones de texto
usuario = "admin"
if usuario == "admin":
    print("¡Acceso total!")
elif usuario == "invitado":
    print("¡Acceso restringido!")
else:
    print("¡Usuario desconocido!")
```

## Operadores Lógicos

### AND (y)
```python
# Ambas condiciones deben ser verdaderas
edad = 20
tiene_licencia = True

if edad >= 18 and tiene_licencia:
    print("Puedes conducir")
else:
    print("No puedes conducir")
```

### OR (o)
```python
# Al menos una condición debe ser verdadera
dia = "sábado"
es_festivo = False

if dia == "sábado" or dia == "domingo" or es_festivo:
    print("Es fin de semana")
else:
    print("Es día laboral")
```

### NOT (no)
```python
# Invierte el resultado
es_estudiante = False

if not es_estudiante:
    print("No eres estudiante")
else:
    print("Eres estudiante")
```

## Combinando Operadores

```python
# Ejemplo complejo: Sistema de acceso
edad = 25
tiene_permiso = True
es_empleado = False

if (edad >= 18 and tiene_permiso) or es_empleado:
    print("Acceso permitido")
else:
    print("Acceso denegado")
```

## Anidamiento de Condicionales

```python
# Condicionales dentro de condicionales
edad = 20
tiene_licencia = True

if edad >= 18:
    if tiene_licencia:
        print("Puedes conducir")
    else:
        print("Necesitas licencia")
else:
    print("Eres muy joven para conducir")
```

## Ejemplo Práctico: Sistema de Recomendaciones

```python
# Sistema de recomendaciones de actividades
energia = 8  # Escala del 1 al 10
dinero = 15
tiempo = 30  # minutos disponibles

print("=== Sistema de Recomendaciones ===")

if energia >= 8 and dinero >= 20:
    print("🏃 Ir al gimnasio o salir a correr")
    print("   - Actividad física intensa")
elif energia >= 6 and dinero >= 10:
    print("☕ Ir a una cafetería")
    print("   - Leer un libro con café")
elif energia >= 4 and tiempo >= 20:
    print("🏠 Leer en casa")
    print("   - Relajación tranquila")
elif energia >= 2:
    print("😴 Tomar una siesta")
    print("   - Descanso necesario")
else:
    print("🤔 Revisa tus opciones")
    print("   - Tal vez necesitas comer algo")
```

## Operador Ternario

```python
# Forma compacta de escribir if-else
edad = 20
mensaje = "Mayor de edad" if edad >= 18 else "Menor de edad"
print(mensaje)

# Equivale a:
if edad >= 18:
    mensaje = "Mayor de edad"
else:
    mensaje = "Menor de edad"
```

## Validación de Entrada

```python
# Validar entrada del usuario
try:
    edad = int(input("¿Cuántos años tienes? "))

    if edad < 0:
        print("La edad no puede ser negativa")
    elif edad > 150:
        print("Esa edad parece incorrecta")
    else:
        print(f"Tienes {edad} años")

except ValueError:
    print("Por favor, ingresa un número válido")
```

## Ejercicios Prácticos

### Ejercicio 1: Calculadora de Descuentos
```python
# Calcula descuento basado en el monto de compra
monto = float(input("Monto de la compra: $"))

if monto >= 1000:
    descuento = 0.20
    print("Descuento del 20%")
elif monto >= 500:
    descuento = 0.10
    print("Descuento del 10%")
elif monto >= 100:
    descuento = 0.05
    print("Descuento del 5%")
else:
    descuento = 0
    print("Sin descuento")

total = monto * (1 - descuento)
print(f"Total a pagar: ${total:.2f}")
```

### Ejercicio 2: Sistema de Calificaciones
```python
# Sistema de calificaciones académico
nombre = input("Nombre del estudiante: ")
calificacion = float(input("Calificación (0-100): "))

if calificacion >= 90:
    letra = "A"
    comentario = "Excelente trabajo"
elif calificacion >= 80:
    letra = "B"
    comentario = "Buen trabajo"
elif calificacion >= 70:
    letra = "C"
    comentario = "Satisfactorio"
elif calificacion >= 60:
    letra = "D"
    comentario = "Necesitas mejorar"
else:
    letra = "F"
    comentario = "Reprobado"

print(f"\nEstudiante: {nombre}")
print(f"Calificación: {calificacion} ({letra})")
print(f"Comentario: {comentario}")
```

## Errores Comunes

### 1. Usar = en lugar de ==
```python
# ❌ Error común
if edad = 18:  # Error de sintaxis
    print("Tienes 18 años")

# ✅ Correcto
if edad == 18:
    print("Tienes 18 años")
```

### 2. Olvidar los dos puntos
```python
# ❌ Error común
if edad >= 18
    print("Mayor de edad")

# ✅ Correcto
if edad >= 18:
    print("Mayor de edad")
```

### 3. Indentación incorrecta
```python
# ❌ Error común
if edad >= 18:
print("Mayor de edad")  # Error de indentación

# ✅ Correcto
if edad >= 18:
    print("Mayor de edad")  # Correctamente indentado
```

## Recursos Adicionales
- [Documentación oficial - Control Flow](https://docs.python.org/3/tutorial/controlflow.html)
- [Tutorial de Python - Condicionales](https://docs.python.org/3/tutorial/introduction.html#first-steps-towards-programming)
- [PEP 8 - Guía de estilo](https://peps.python.org/pep-0008/)
