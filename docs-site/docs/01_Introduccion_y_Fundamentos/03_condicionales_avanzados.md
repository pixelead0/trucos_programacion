---
title: Condicionales Avanzados
description: Técnicas avanzadas de control de flujo y lógica compleja
---

import LessonMeta from '@site/src/components/LessonMeta';
import Checkpoint from '@site/src/components/Checkpoint';
import NextStep from '@site/src/components/NextStep';
import TryIt from '@site/src/components/TryIt';

<LessonMeta
  level="beginner"
  time="1 hora"
  prereqs={['Condicionales y Lógica']}
/>

# Condicionales Avanzados

## Qué vas a lograr

- Anidar condicionales para lógica compleja
- Usar comparaciones múltiples y operadores avanzados
- Aplicar el operador ternario para código compacto
- Validar entrada del usuario de forma robusta

## Casos reales donde se usa

Las condicionales avanzadas son esenciales para lógica de negocio compleja:

- **Sistemas de facturación**: Calcular impuestos según país, tipo de producto y monto
- **Plataformas de streaming**: Decidir qué contenido mostrar según edad, suscripción y preferencias
- **Sistemas de envío**: Calcular costo según peso, distancia, tipo de servicio y urgencia
- **Aplicaciones bancarias**: Validar transacciones con múltiples condiciones de seguridad
- **Sistemas de calificaciones**: Asignar letras (A, B, C) según rangos de puntuación
- **APIs de pago**: Validar tarjeta, verificar fondos, aplicar descuentos y calcular total

**Ejemplo real**: En un sistema de envíos, se evalúa: "¿Es cliente premium? ¿El paquete pesa menos de 5kg? ¿Está en zona de entrega rápida?" Cada condición afecta el precio y tiempo de entrega.

## Concepto base

Ya conoces `if/elif/else` básico. Ahora vamos a ver técnicas más sofisticadas para manejar lógica compleja de manera elegante.

**¿Cuándo necesitas condicionales avanzadas?**
- Cuando tienes múltiples condiciones relacionadas
- Cuando necesitas validar múltiples cosas a la vez
- Cuando quieres escribir código más compacto y legible
- Cuando trabajas con lógica de negocio compleja

:::info Para principiantes
Las condicionales avanzadas son como combinar varias decisiones simples en una lógica más compleja. No te preocupes si parece complicado al principio, con práctica se vuelve natural.
:::

## Paso a paso

### 1. Anidamiento de Condicionales

Puedes poner condicionales dentro de condicionales. Esto es útil cuando una condición depende de otra:

```python
# Condicionales dentro de condicionales
if condicion_externa:
    if condicion_interna:
        print("Ambas condiciones se cumplen")
    else:
        print("Solo la condición externa se cumple")
else:
    print("Ninguna condición se cumple")
```

**Ejemplo práctico: Sistema de acceso**

```python
edad = 25
es_empleado = False
nivel_seguridad = 3

if edad >= 18:
    if es_empleado:
        if nivel_seguridad >= 5:
            print("Acceso completo permitido")
        elif nivel_seguridad >= 3:
            print("Acceso limitado permitido")
        else:
            print("Acceso básico permitido")
    else:
        print("Necesitas permiso especial")
else:
    print("Acceso denegado: muy joven")
```

:::warning Error típico
**Demasiado anidamiento**: Si tienes más de 2-3 niveles de anidamiento, considera refactorizar. El código se vuelve difícil de leer.
:::

### 2. Comparaciones Múltiples

Python permite comparaciones encadenadas:

```python
# Verificar si un número está en un rango
temperatura = 25

if 20 <= temperatura <= 30:
    print("Temperatura ideal")
elif 15 <= temperatura < 20:
    print("Un poco frío")
else:
    print("Temperatura extrema")
```

### 3. Operador Ternario

Forma compacta de escribir if-else:

```python
# Forma básica
edad = 20
mensaje = "Mayor de edad" if edad >= 18 else "Menor de edad"

# Ternarios anidados
calificacion = 85
mensaje = (
    "Excelente" if calificacion >= 90 else
    "Muy bien" if calificacion >= 80 else
    "Bien" if calificacion >= 70 else
    "Regular"
)
```

:::tip Tip pro
El operador ternario es útil para asignaciones simples, pero evítalo para lógica compleja. La legibilidad es más importante que la brevedad.
:::

### 4. Validación de Entrada Avanzada

```python
def validar_empleado():
    while True:
        try:
            nombre = input("Nombre: ").strip()
            if not nombre or len(nombre) < 2:
                print("El nombre debe tener al menos 2 caracteres")
                continue

            edad = int(input("Edad: "))
            if edad < 18 or edad > 65:
                print("La edad debe estar entre 18 y 65 años")
                continue

            return nombre, edad
        except ValueError:
            print("Por favor, ingresa valores válidos")
```

## Errores comunes

### 1. Lógica incorrecta en operadores

```python
# ❌ Lógica incorrecta
if edad >= 18 or edad < 65:  # Siempre será True
    print("Siempre se ejecuta")

# ✅ Correcto
if edad >= 18 and edad < 65:
    print("Edad laboral")
```

:::warning Error típico
**Confundir `and` con `or`**: `and` requiere que ambas condiciones sean verdaderas, `or` requiere que al menos una sea verdadera. Usa paréntesis para clarificar lógica compleja.
:::

## Ejercicios Prácticos

<TryIt>
### Ejercicio: Sistema de Seguridad

Crea un sistema de seguridad que valide múltiples condiciones:

```python
def verificar_acceso():
    print("=== Sistema de Seguridad ===")

    id_empleado = input("ID de empleado: ")
    if not id_empleado or len(id_empleado) < 3:
        print("❌ ID inválido")
        return False

    try:
        nivel = int(input("Nivel de seguridad (1-10): "))
        hora = int(input("Hora actual (0-23): "))

        if nivel >= 8 and 8 <= hora <= 18:
            print("✅ Acceso completo permitido")
            return True
        elif nivel >= 5 and 7 <= hora <= 19:
            print("✅ Acceso limitado permitido")
            return True
        else:
            print("❌ Acceso denegado")
            return False
    except ValueError:
        print("❌ Valores inválidos")
        return False

verificar_acceso()
```
</TryIt>

## Checkpoint

<Checkpoint
  items={[
    "Puedes anidar condicionales cuando es necesario",
    "Entiendes comparaciones múltiples como rangos encadenados",
    "Sabes usar el operador ternario para código compacto",
    "Puedes validar entrada del usuario de forma robusta",
    "Entiendes cuándo evitar demasiado anidamiento",
    "Estás listo para combinar condicionales con bucles"
  ]}
/>

## Recursos Adicionales

### Documentación Oficial
- [Documentación oficial - Control Flow](https://docs.python.org/3/tutorial/controlflow.html)
- [PEP 634 - Structural Pattern Matching](https://peps.python.org/pep-0634/) - Match/case (Python 3.10+)

### Bibliografía Recomendada
- **Python Tricks** (Dan Bader) - Capítulo sobre condicionales avanzadas
- **Effective Python** (Brett Slatkin) - Items sobre control de flujo

### Conceptos Relacionados
- [Condicionales Básicas](./02_condicionales_y_logica.md) - Fundamentos
- [Bucles](./04_bucles.md) - Combina con condicionales

## Siguiente paso

<NextStep
  to="/Introduccion_y_Fundamentos/bucles"
  label="Siguiente: Bucles →"
/>
