---
title: Condicionales y Lógica en Python
description: Aprende a tomar decisiones en tu código con condicionales
---

import LessonMeta from '@site/src/components/LessonMeta';
import Checkpoint from '@site/src/components/Checkpoint';
import NextStep from '@site/src/components/NextStep';
import TryIt from '@site/src/components/TryIt';

<LessonMeta
  level="beginner"
  time="1 hora"
  prereqs={['Variables y Tipos']}
/>

# Condicionales y Lógica en Python

## Qué vas a lograr

- Usar `if`, `elif` y `else` para tomar decisiones
- Combinar condiciones con operadores lógicos (and, or, not)
- Validar entrada del usuario
- Escribir código que se adapte a diferentes situaciones

## Casos reales donde se usa

Las condicionales están en prácticamente todos los programas. Las verás en:

- **E-commerce**: "Si el usuario es premium, aplicar descuento del 20%"
- **Sistemas de acceso**: "Si tiene permisos Y es horario laboral, permitir entrada"
- **Validación de formularios**: "Si el email es válido Y la contraseña tiene 8+ caracteres, crear cuenta"
- **Juegos**: "Si la vida del jugador `<= 0`, mostrar pantalla de game over"
- **APIs**: "Si el token es válido, devolver datos; si no, error 401"
- **Sistemas de recomendación**: "Si el usuario compró X, recomendar Y"

**Ejemplo real**: Cuando inicias sesión en cualquier app, el sistema verifica: "¿El usuario existe? ¿La contraseña es correcta? ¿La cuenta está activa?" Solo si todas son verdaderas, te deja entrar.

## Concepto base

Hasta ahora tu código ejecuta línea por línea, siempre en el mismo orden. Pero en la vida real necesitas que tu programa **tome decisiones**: "Si el usuario es mayor de edad, mostrar contenido para adultos", "Si hay stock, permitir compra", "Si es fin de semana, aplicar descuento".

**Las condicionales resuelven esto:** le das a tu programa la capacidad de elegir qué hacer según las circunstancias. Es como enseñarle a tu computadora a pensar con lógica: si pasa esto, haz aquello.

:::info Para principiantes
Piensa en las condicionales como semáforos para tu código: "Si está en verde, avanza; si está en rojo, detente". Tu programa evalúa una condición y decide qué hacer.
:::

## Paso a paso

### 1. Estructura Básica: if

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

**Ejemplo Simple:**

```python
edad = 18

if edad >= 18:
    print("Eres mayor de edad")
    print("Puedes votar")
# Salida: Eres mayor de edad
#         Puedes votar
```

**¿Qué pasa si `edad = 15`?** El código dentro del `if` no se ejecuta. El programa simplemente continúa después del bloque `if`.

### 2. Estructura Completa: if-elif-else

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

**Ejemplo: Evaluar Calificaciones**

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

:::tip Tip pro
El orden importa: Las condiciones se evalúan de arriba hacia abajo. Si pones `>= 70` antes de `>= 80`, un 85 ejecutaría "Satisfactorio" en lugar de "Bien".
:::

### 3. Operadores de Comparación

| Operador | Significado | Ejemplo |
|----------|-------------|---------|
| `==` | Igual a | `edad == 18` |
| `!=` | Diferente de | `edad != 18` |
| `>` | Mayor que | `edad > 18` |
| `<` | Menor que | `edad < 18` |
| `>=` | Mayor o igual | `edad >= 18` |
| `<=` | Menor o igual | `edad <= 18` |

### 4. Operadores Lógicos

**AND (y):** Ambas condiciones deben ser verdaderas

```python
edad = 20
tiene_licencia = True

if edad >= 18 and tiene_licencia:
    print("Puedes conducir")
else:
    print("No puedes conducir")
```

**OR (o):** Al menos una condición debe ser verdadera

```python
dia = "sábado"
es_festivo = False

if dia == "sábado" or dia == "domingo" or es_festivo:
    print("Es fin de semana")
else:
    print("Es día laboral")
```

**NOT (no):** Invierte el resultado

```python
es_estudiante = False

if not es_estudiante:
    print("No eres estudiante")
else:
    print("Eres estudiante")
```

### 5. Anidamiento de Condicionales

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

:::warning Error típico
**Demasiado anidamiento**: Si tienes más de 2-3 niveles de anidamiento, considera refactorizar. El código se vuelve difícil de leer.
:::

### 6. Operador Ternario

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

## Errores comunes

### 1. Usar = en lugar de ==

```python
# ❌ Error común
if edad = 18:  # Error de sintaxis
    print("Tienes 18 años")

# ✅ Correcto
if edad == 18:
    print("Tienes 18 años")
```

:::warning Error típico
**Confundir `=` (asignación) con `==` (comparación)**: `=` asigna un valor, `==` compara dos valores. Este es uno de los errores más comunes.
:::

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

:::warning Error típico
**Indentación incorrecta**: En Python, la indentación es parte de la sintaxis. El código dentro del `if` debe estar indentado (normalmente 4 espacios).
:::

## Ejercicios Prácticos

<TryIt>
### Ejercicio 1: Calculadora de Descuentos

Calcula descuento basado en el monto de compra:

```python
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
</TryIt>

<TryIt>
### Ejercicio 2: Sistema de Calificaciones

Sistema de calificaciones académico:

```python
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
</TryIt>

## Checkpoint

<Checkpoint
  items={[
    "Puedes usar if, elif y else para tomar decisiones",
    "Entiendes los operadores de comparación (==, !=, >, etc.)",
    "Sabes combinar condiciones con and, or, not",
    "Puedes anidar condicionales cuando es necesario",
    "Conoces el operador ternario para código compacto",
    "Estás listo para usar condicionales en bucles"
  ]}
/>

## Recursos Adicionales

### Documentación Oficial
- [Documentación oficial - Control Flow](https://docs.python.org/3/tutorial/controlflow.html)
- [Tutorial de Python - Condicionales](https://docs.python.org/3/tutorial/introduction.html#first-steps-towards-programming)
- [PEP 8 - Guía de estilo](https://peps.python.org/pep-0008/)

### Bibliografía Recomendada
- **Python Tricks** (Dan Bader) - Capítulo sobre condicionales y lógica booleana
- **Effective Python** (Brett Slatkin) - Item 4: Prefer Exceptions to Returning None
- **Automate the Boring Stuff** (Al Sweigart) - Capítulo 2: Flow Control
- **Python Cookbook, 3rd Ed** (Beazley & Jones) - Recetas sobre control de flujo

### Conceptos Relacionados
- [Condicionales Avanzados](./03_condicionales_avanzados.md) - Técnicas avanzadas de condicionales
- [Bucles](./04_bucles.md) - Aprende a repetir código
- [Funciones](../03_Funciones_y_Modulos/01_funciones.md) - Organiza tu código con funciones

## Siguiente paso

<NextStep
  to="/Introduccion_y_Fundamentos/condicionales_avanzados"
  label="Siguiente: Condicionales Avanzados →"
/>
