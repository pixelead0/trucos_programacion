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

## 🎯 ¿Por qué aprender tuplas?

Ya dominas las **listas** - esas estructuras flexibles donde puedes agregar, quitar y modificar elementos. Pero ¿qué pasa cuando **no quieres** que algo cambie?

Imagina que estás guardando:

- Las coordenadas de tu restaurante favorito (no van a moverse)
- La configuración de conexión a una base de datos (debe permanecer constante)
- El resultado de un cálculo que tiene múltiples partes (subtotal, impuesto, total)

En estos casos, una lista sería peligrosa: alguien podría modificar accidentalmente datos que deben permanecer fijos. **Las tuplas son la solución perfecta.**

## 🌍 Casos reales donde se usa

Las tuplas son perfectas para datos que no deben cambiar. Las verás en:

- **Coordenadas GPS**: Latitud y longitud que representan una ubicación fija
- **Configuraciones de conexión**: Host y puerto que no cambian durante la ejecución
- **Funciones que devuelven múltiples valores**: Cálculos que retornan varios resultados
- **Claves compuestas en diccionarios**: Cuando necesitas una clave formada por varios valores
- **Datos constantes**: Días de la semana, meses, estados fijos

**Ejemplo real**: Cuando una función calcula el total de una factura, puede devolver `(subtotal, impuesto, total)` como una tupla que el código desempaqueta elegantemente.

## 💡 Concepto base

Las tuplas son colecciones **ordenadas e inmutables** de elementos. Una vez creada una tupla, no se puede modificar, agregar o eliminar elementos. Son ideales para datos constantes.

**Lo genial de Python:** Las tuplas permiten desempaquetar múltiples valores de forma elegante, lo que las hace perfectas para funciones que devuelven varios resultados.

```python
# Tupla de coordenadas
coordenadas = (40.7128, -74.0060)

# Desempaquetar elegantemente
latitud, longitud = coordenadas
print(f"Latitud: {latitud}, Longitud: {longitud}")
```

<ExpectedOutput>
```
Latitud: 40.7128, Longitud: -74.0060
```
</ExpectedOutput>

:::tip 🌮 Analogía culinaria
Una tupla es como una **receta estándar escrita en piedra** que no puedes modificar. Una vez que defines los ingredientes exactos de los chilaquiles al pastor `(tortillas, salsa, queso, pastor)`, esa combinación queda fija. No puedes cambiar la receta base, pero puedes usarla como referencia para crear muchos platos. Es como las medidas estándar de una receta tradicional que se pasan de generación en generación sin alteraciones.
:::

:::info Para principiantes
Piensa en una tupla como una caja sellada: una vez que pones cosas dentro, no puedes cambiarlas. Es útil cuando quieres asegurarte de que los datos no se modifiquen accidentalmente. Si necesitas cambiar algo, creas una nueva tupla.
:::

## 🔄 Tuplas vs Listas: ¿Cuándo usar cada una?

Antes de profundizar, es importante entender cuándo usar tuplas y cuándo listas:

| Característica | Listas | Tuplas |
| -------------- | ------ | ------ |
| **Mutabilidad** | ✅ Puedes modificar | ❌ No puedes modificar |
| **Sintaxis** | `[1, 2, 3]` | `(1, 2, 3)` |
| **Uso ideal** | Datos que cambian (carrito, tareas) | Datos fijos (coordenadas, config) |
| **Velocidad** | Más lento | Más rápido |
| **Clave en diccionarios** | ❌ No permitido | ✅ Permitido |
| **Desempaquetado** | ✅ Sí | ✅ Sí |

**Regla de oro**: Si los datos **nunca deben cambiar**, usa tupla. Si los datos **pueden cambiar**, usa lista.

## 📚 Paso a paso

Vamos a aprender tuplas de forma progresiva, desde lo más simple hasta casos avanzados.

### 1. Crear Tuplas

Empecemos con las formas básicas de crear tuplas:

```python
# Forma 1: Tupla vacía (poco común, pero posible)
menu_fijo = ()

# Forma 2: Tupla con elementos (la más común)
dias_semana = ("Lunes", "Martes", "Miércoles", "Jueves", "Viernes")
ingredientes_base = ("tortillas", "salsa", "queso", "pastor")

# Forma 3: Tupla de un elemento (¡necesita coma!)
precio_unico = (3.50,)  # ✅ Esto es una tupla
precio_mal = (3.50)     # ❌ Esto es un float, NO una tupla

# Forma 4: Sin paréntesis (tupla por empaquetado)
coordenadas = 40.7128, -74.0060  # Python crea una tupla automáticamente
nombre, edad = "Juan", 25        # También es una tupla

# Forma 5: Convertir desde lista
numeros = tuple([1, 2, 3, 4, 5])
```

<ExpectedOutput>
```python
# Verificar tipos
print(type(precio_unico))  # <class 'tuple'>
print(type(precio_mal))    # <class 'float'>
print(type(coordenadas))   # <class 'tuple'>
```
</ExpectedOutput>

:::tip Tip pro
**La coma es clave**: `(3.50,)` es una tupla, pero `(3.50)` es solo un número entre paréntesis. La coma le dice a Python "esto es una tupla".
:::

<TryIt>
### Práctica rápida: Crear tuplas

Intenta crear estas tuplas:

1. Una tupla con los días de la semana
2. Una tupla con un solo elemento (tu edad)
3. Una tupla sin paréntesis con tu nombre y ciudad

```python
# Tu código aquí
dias = # ...
edad = # ...
info = # ...
```
</TryIt>

### 2. Acceder a Elementos

Acceder a elementos de tuplas funciona **exactamente igual** que con listas:

```python
ingredientes = ("tortillas", "salsa", "queso", "pastor", "crema")

# Acceder por índice (igual que listas)
print(ingredientes[0])    # "tortillas" - primer elemento
print(ingredientes[2])    # "queso" - tercer elemento
print(ingredientes[-1])   # "crema" - último elemento

# Slicing (igual que listas)
print(ingredientes[1:3])  # ("salsa", "queso")
print(ingredientes[:2])   # ("tortillas", "salsa")
print(ingredientes[2:])   # ("queso", "pastor", "crema")
```

<ExpectedOutput>
```
tortillas
queso
crema
('salsa', 'queso')
('tortillas', 'salsa')
('queso', 'pastor', 'crema')
```
</ExpectedOutput>

:::info Para principiantes
Si ya sabes trabajar con listas, esto te resultará familiar. La diferencia es que **no puedes modificar** lo que obtienes. Puedes leer, pero no escribir.
:::

### 3. Desempaquetar Tuplas (El Superpoder de las Tuplas)

El desempaquetado es una de las características más elegantes de Python. Te permite asignar múltiples variables de una sola vez:

```python
# Desempaquetar básico
info_usuario = ("Juan Pérez", "Gerente", "Ventas", "Madrid")
nombre, puesto, departamento, ciudad = info_usuario
print(f"Nombre: {nombre}, Puesto: {puesto}")
```

<ExpectedOutput>
```
Nombre: Juan Pérez, Puesto: Gerente
```
</ExpectedOutput>

**¿Qué está pasando?** Python toma cada elemento de la tupla y lo asigna a la variable correspondiente, en orden.

```python
# Desempaquetar parcial (usando _ para ignorar valores)
nombre, _, _, ciudad = info_usuario
print(f"{nombre} vive en {ciudad}")  # Solo necesitamos nombre y ciudad
```

```python
# Desempaquetar con * (agrupar el resto)
nombre, *resto = info_usuario
print(f"Nombre: {nombre}")
print(f"Resto: {resto}")  # ["Gerente", "Ventas", "Madrid"]
```

<ExpectedOutput>
```
Nombre: Juan Pérez
Resto: ['Gerente', 'Ventas', 'Madrid']
```
</ExpectedOutput>

```python
# Intercambiar variables (truco clásico de Python)
a = 10
b = 20
print(f"Antes: a={a}, b={b}")

a, b = b, a  # ¡Intercambia valores en una línea!
print(f"Después: a={a}, b={b}")
```

<ExpectedOutput>
```
Antes: a=10, b=20
Después: a=20, b=10
```
</ExpectedOutput>

:::tip Tip pro
El intercambio de variables con tuplas es más elegante y legible que usar una variable temporal. Es una de las características que hace que Python sea tan expresivo.
:::

<TryIt>
### Práctica: Desempaquetado

Intenta desempaquetar esta tupla de diferentes formas:

```python
datos_producto = ("Chilaquiles al Pastor", 85.50, "Plato fuerte", True)

# 1. Desempaqueta todo
nombre, precio, categoria, disponible = datos_producto
print(f"{nombre} cuesta ${precio}")

# 2. Desempaqueta solo nombre y precio (ignora el resto)
# Tu código aquí

# 3. Desempaqueta nombre y agrupa el resto
# Tu código aquí
```
</TryIt>

### 4. Usar Tuplas para Múltiples Valores (El Caso de Uso Estrella)

Esta es probablemente la razón más común para usar tuplas: **devolver múltiples valores de una función**.

```python
# Función que devuelve múltiples valores
def calcular_factura(cantidad, precio_unitario):
    """Calcula subtotal, impuesto y total de una factura"""
    subtotal = cantidad * precio_unitario
    impuesto = subtotal * 0.16
    total = subtotal + impuesto
    return subtotal, impuesto, total  # Retorna una tupla

# Opción 1: Desempaquetar directamente (recomendado)
subtotal, impuesto, total = calcular_factura(5, 10.00)
print(f"Subtotal: ${subtotal:.2f}")
print(f"Impuesto: ${impuesto:.2f}")
print(f"Total: ${total:.2f}")
```

<ExpectedOutput>
```
Subtotal: $50.00
Impuesto: $8.00
Total: $58.00
```
</ExpectedOutput>

```python
# Opción 2: Recibir como tupla completa
factura = calcular_factura(5, 10.00)
print(f"Factura completa: {factura}")  # (50.0, 8.0, 58.0)
print(f"Total: ${factura[2]:.2f}")     # Acceder por índice
```

:::tip Tip pro
**Siempre desempaqueta directamente** cuando sepas cuántos valores retorna la función. Es más legible y expresivo que acceder por índice.
:::

**Ejemplo más realista**: Calcular estadísticas de un pedido

```python
def calcular_estadisticas_pedido(pedidos):
    """Calcula total, promedio y cantidad de pedidos"""
    if not pedidos:
        return None

    total = sum(pedidos)
    promedio = total / len(pedidos)
    cantidad = len(pedidos)

    return total, promedio, cantidad

# Usar la función
pedidos_dia = [150.00, 200.50, 85.00, 120.00]
total, promedio, cantidad = calcular_estadisticas_pedido(pedidos_dia)

print(f"Total del día: ${total:.2f}")
print(f"Promedio por pedido: ${promedio:.2f}")
print(f"Cantidad de pedidos: {cantidad}")
```

<ExpectedOutput>
```
Total del día: $555.50
Promedio por pedido: $138.88
Cantidad de pedidos: 4
```
</ExpectedOutput>

### 5. Tuplas como Claves en Diccionarios

Las tuplas tienen una ventaja sobre las listas: **pueden ser claves en diccionarios** (las listas no pueden porque son mutables).

```python
# Las tuplas pueden ser claves en diccionarios (las listas no)
coordenadas_restaurantes = {
    (19.4326, -99.1332): "Restaurante El Pastor - CDMX",
    (20.6597, -103.3496): "Taquería Los Chilaquiles - Guadalajara",
    (25.6866, -100.3161): "Cocina Tradicional - Monterrey"
}

# Acceder por coordenadas
ciudad = coordenadas_restaurantes[(19.4326, -99.1332)]
print(ciudad)
```

<ExpectedOutput>
```
Restaurante El Pastor - CDMX
```
</ExpectedOutput>

**¿Por qué las listas no pueden ser claves?** Porque las listas son mutables (pueden cambiar), y Python requiere que las claves de diccionarios sean inmutables para mantener la integridad del diccionario.

```python
# ❌ Esto daría error
# coordenadas_lista = {
#     [19.4326, -99.1332]: "CDMX"  # TypeError: unhashable type: 'list'
# }

# ✅ Esto funciona perfectamente
coordenadas_tupla = {
    (19.4326, -99.1332): "CDMX"  # ✅ Funciona
}
```

:::warning Error típico
**Intentar usar listas como claves**: Las listas no pueden ser claves de diccionarios porque son mutables. Usa tuplas si necesitas una clave compuesta.
:::

### 6. Operaciones con Tuplas

Aunque las tuplas son inmutables, puedes realizar varias operaciones que **crean nuevas tuplas**:

```python
ingredientes_base = ("tortillas", "salsa", "queso")

# Concatenar tuplas (crea una nueva tupla)
ingredientes_extra = ("crema", "cebolla")
ingredientes_completos = ingredientes_base + ingredientes_extra
print(ingredientes_completos)
```

<ExpectedOutput>
```
('tortillas', 'salsa', 'queso', 'crema', 'cebolla')
```
</ExpectedOutput>

```python
# Repetir tuplas (crea una nueva tupla)
menu_duplicado = ingredientes_base * 2
print(menu_duplicado)
```

<ExpectedOutput>
```
('tortillas', 'salsa', 'queso', 'tortillas', 'salsa', 'queso')
```
</ExpectedOutput>

```python
# Verificar pertenencia
if "queso" in ingredientes_base:
    print("✅ Queso está en los ingredientes")

# Contar elementos
print(f"Veces que aparece 'tortillas': {ingredientes_base.count('tortillas')}")

# Buscar índice
print(f"Índice de 'salsa': {ingredientes_base.index('salsa')}")
```

<ExpectedOutput>
```
✅ Queso está en los ingredientes
Veces que aparece 'tortillas': 1
Índice de 'salsa': 1
```
</ExpectedOutput>

:::info Para principiantes
Recuerda: estas operaciones **no modifican** la tupla original, crean una **nueva tupla**. La tupla original permanece intacta.
:::

## 🎓 Ejemplo Práctico Completo: Sistema de Gestión de Pedidos

Vamos a construir un sistema completo que demuestra el poder de las tuplas en un contexto real: **gestionar pedidos de un restaurante**.

```python
# Sistema de gestión de pedidos con tuplas
def crear_pedido(nombre_cliente, items, direccion):
    """Crea un pedido y retorna información estructurada"""
    total = sum(precio for _, precio in items)
    cantidad_items = len(items)
    return (nombre_cliente, items, direccion, total, cantidad_items)

def calcular_estadisticas_pedido(pedido):
    """Extrae estadísticas de un pedido"""
    nombre, items, direccion, total, cantidad = pedido
    promedio_item = total / cantidad if cantidad > 0 else 0
    return total, promedio_item, cantidad

def formatear_pedido(pedido):
    """Formatea un pedido para mostrar"""
    nombre, items, direccion, total, cantidad = pedido
    print(f"\n📋 Pedido de {nombre}")
    print(f"📍 Dirección: {direccion}")
    print(f"🍽️  Items ({cantidad}):")
    for item, precio in items:
        print(f"   - {item}: ${precio:.2f}")
    print(f"💰 Total: ${total:.2f}")

# Crear pedidos
pedido1 = crear_pedido(
    "María González",
    [("Chilaquiles al Pastor", 85.50), ("Agua", 15.00), ("Postre", 45.00)],
    "Av. Reforma 123, CDMX"
)

pedido2 = crear_pedido(
    "Juan Pérez",
    [("Chilaquiles Rojos", 75.00), ("Café", 25.00)],
    "Calle Insurgentes 456, CDMX"
)

# Mostrar pedidos
formatear_pedido(pedido1)
formatear_pedido(pedido2)

# Calcular estadísticas
total1, promedio1, cantidad1 = calcular_estadisticas_pedido(pedido1)
print(f"\n📊 Estadísticas del pedido 1:")
print(f"   Total: ${total1:.2f}, Promedio por item: ${promedio1:.2f}, Items: {cantidad1}")
```

<ExpectedOutput>
```
📋 Pedido de María González
📍 Dirección: Av. Reforma 123, CDMX
🍽️  Items (3):
   - Chilaquiles al Pastor: $85.50
   - Agua: $15.00
   - Postre: $45.00
💰 Total: $145.50

📋 Pedido de Juan Pérez
📍 Dirección: Calle Insurgentes 456, CDMX
🍽️  Items (2):
   - Chilaquiles Rojos: $75.00
   - Café: $25.00
💰 Total: $100.00

📊 Estadísticas del pedido 1:
   Total: $145.50, Promedio por item: $48.50, Items: 3
```
</ExpectedOutput>

**¿Qué aprendimos aquí?**

- ✅ Usamos tuplas para estructurar datos complejos (pedido)
- ✅ Devolvimos múltiples valores de funciones
- ✅ Desempaquetamos tuplas para acceder a los datos
- ✅ Usamos tuplas anidadas (items dentro del pedido)

## ⚠️ Errores comunes (y cómo evitarlos)

Estos son los errores que verás una y otra vez. Aprende a reconocerlos ahora y te ahorrarás horas de debugging.

### 1. Intentar modificar una tupla

**El error más común**: Intentar cambiar un elemento de una tupla.

```python
# ❌ Error común
config = ("localhost", 8080)
config[0] = "127.0.0.1"  # TypeError: 'tuple' object does not support item assignment
```

**Solución**: Crea una nueva tupla o usa una lista si necesitas modificar.

```python
# ✅ Opción 1: Crear nueva tupla
config = ("localhost", 8080)
nueva_config = ("127.0.0.1",) + config[1:]  # Nueva tupla con el cambio
print(nueva_config)  # ("127.0.0.1", 8080)

# ✅ Opción 2: Convertir a lista, modificar, volver a tupla
config_lista = list(config)
config_lista[0] = "127.0.0.1"
nueva_config = tuple(config_lista)
print(nueva_config)  # ("127.0.0.1", 8080)

# ✅ Opción 3: Si necesitas modificar frecuentemente, usa lista desde el inicio
config_mutable = ["localhost", 8080]  # Lista en lugar de tupla
config_mutable[0] = "127.0.0.1"  # ✅ Funciona
```

:::warning Error típico
**Intentar modificar una tupla**: Las tuplas son inmutables por diseño. Si necesitas cambiar valores frecuentemente, considera usar una lista. Si solo necesitas cambiar ocasionalmente, crea una nueva tupla.
:::

### 2. Olvidar la coma en tuplas de un elemento

**El error más sutil**: Crear una tupla de un elemento sin la coma.

```python
# ❌ Error común
precio = (3.50)  # Esto es un float, NO una tupla
print(type(precio))  # <class 'float'>
print(isinstance(precio, tuple))  # False

# ✅ Correcto
precio = (3.50,)  # La coma hace que sea una tupla
print(type(precio))  # <class 'tuple'>
print(isinstance(precio, tuple))  # True
```

**Regla de oro**: Si quieres una tupla de un elemento, **siempre incluye la coma**.

### 3. Desempaquetar con número incorrecto de variables

**El error más frustrante**: Intentar desempaquetar más o menos variables de las que hay en la tupla.

```python
# ❌ Error común
datos = ("Juan", "Pérez", 30)
nombre, apellido = datos  # ValueError: too many values to unpack (expected 2)

# ✅ Solución 1: Desempaquetar todos los valores
nombre, apellido, edad = datos  # ✅ Correcto

# ✅ Solución 2: Ignorar valores con _
nombre, apellido, _ = datos  # Ignoramos la edad

# ✅ Solución 3: Agrupar el resto con *
nombre, *resto = datos  # resto = ["Pérez", 30]
```

:::tip Tip pro
Usa `_` para ignorar valores que no necesitas y `*` para agrupar el resto. Esto hace tu código más flexible y legible.
:::

## ✅ Buenas Prácticas

Sigue estas prácticas para escribir código más claro, seguro y mantenible:

### 1. Usar tuplas para datos constantes

**Regla**: Si los datos nunca deben cambiar, usa tupla. Si pueden cambiar, usa lista.

```python
# ✅ Usar tupla para datos fijos
dias_semana = ("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo")
configuracion_servidor = ("localhost", 8080, True)
ingredientes_base = ("tortillas", "salsa", "queso")

# ❌ No usar lista para datos constantes
dias_semana = ["Lunes", "Martes", ...]  # Puede modificarse accidentalmente
# Alguien podría hacer: dias_semana.append("Día Extra")  # ❌ No queremos esto
```

**Beneficio**: Protege tus datos de modificaciones accidentales y comunica claramente la intención.

### 2. Usar tuplas para devolver múltiples valores

**Regla**: Cuando una función retorna múltiples valores relacionados, usa tupla y desempaqueta directamente.

```python
# ✅ Devolver tupla y desempaquetar
def obtener_usuario(id):
    # ... lógica ...
    return (nombre, email, edad)

# Desempaquetar al recibir (más legible)
nombre, email, edad = obtener_usuario(1)

# ❌ Evitar acceder por índice
usuario = obtener_usuario(1)
nombre = usuario[0]  # Menos claro, ¿qué es [0]?
```

**Beneficio**: Código más legible y expresivo. Los nombres de variables explican qué es cada valor.

### 3. Usar nombres descriptivos al desempaquetar

**Regla**: Los nombres de variables deben explicar qué representan.

```python
# ✅ Nombres descriptivos
latitud, longitud = coordenadas
nombre, apellido, edad = datos_usuario
subtotal, impuesto, total = calcular_factura(5, 10.00)

# ❌ Nombres genéricos (evitar)
x, y = coordenadas  # ¿Qué representan x e y?
a, b, c = datos_usuario  # ¿Qué es a, b, c?
```

**Beneficio**: El código se auto-documenta. No necesitas comentarios para entender qué hace.

### 4. Usar `_` para ignorar valores no necesarios

**Regla**: Si no necesitas un valor, usa `_` para indicarlo explícitamente.

```python
# ✅ Ignorar valores explícitamente
nombre, _, ciudad = ("Juan", "Gerente", "Madrid")  # No necesitamos el puesto
_, _, total = calcular_factura(5, 10.00)  # Solo necesitamos el total

# ❌ Crear variables que no usas
nombre, puesto, ciudad = ("Juan", "Gerente", "Madrid")
# puesto nunca se usa, pero ocupa espacio y confunde
```

**Beneficio**: Código más limpio y claro sobre qué valores realmente importan.

## 🧪 Ejercicios Prácticos

Ahora es tu turno. Practica con estos ejercicios progresivos:

<TryIt>
### Ejercicio 1: Calculadora de Estadísticas de Ventas

Crea una función que calcule estadísticas de ventas diarias y devuelva múltiples valores usando tuplas:

```python
def calcular_estadisticas_ventas(ventas):
    """Calcula estadísticas de una lista de ventas diarias"""
    if not ventas:
        return None

    # Tu código aquí:
    # 1. Calcula la suma total
    # 2. Calcula el promedio
    # 3. Encuentra la venta máxima
    # 4. Encuentra la venta mínima
    # 5. Retorna una tupla con estos valores

# Probar la función
ventas_semana = [150.00, 200.50, 85.00, 120.00, 300.00]
# Desempaqueta los resultados y muéstralos
```

**Pista**: Usa `sum()`, `max()`, `min()` y `len()` para los cálculos.
</TryIt>

<TryIt>
### Ejercicio 2: Sistema de Coordenadas de Restaurantes

Crea un sistema que calcule la distancia entre dos restaurantes usando sus coordenadas:

```python
def calcular_distancia(restaurante1, restaurante2):
    """
    Calcula la distancia entre dos restaurantes.
    Cada restaurante es una tupla (nombre, latitud, longitud)
    Retorna (distancia, nombre1, nombre2)
    """
    # Tu código aquí:
    # 1. Desempaqueta las coordenadas de cada restaurante
    # 2. Calcula la distancia usando la fórmula:
    #    distancia = ((x2 - x1)**2 + (y2 - y1)**2)**0.5
    # 3. Retorna una tupla con (distancia, nombre1, nombre2)

# Probar
rest1 = ("El Pastor", 19.4326, -99.1332)
rest2 = ("Los Chilaquiles", 20.6597, -103.3496)
distancia, nombre1, nombre2 = calcular_distancia(rest1, rest2)
print(f"Distancia entre {nombre1} y {nombre2}: {distancia:.2f} km")
```
</TryIt>

<TryIt>
### Ejercicio 3: Intercambio de Variables (Truco de Python)

Practica el intercambio de variables usando tuplas - una de las características más elegantes de Python:

```python
# Intercambiar dos variables
a = 10
b = 20
print(f"Antes: a={a}, b={b}")

# Tu código aquí: intercambia a y b en una línea

print(f"Después: a={a}, b={b}")

# Desafío: Intercambiar tres variables en un solo paso
x, y, z = 1, 2, 3
print(f"Antes: x={x}, y={y}, z={z}")

# Tu código aquí: intercambia x, y, z de forma que x=3, y=1, z=2

print(f"Después: x={x}, y={y}, z={z}")
```
</TryIt>

## 🎯 Checkpoint: ¿Dominas las tuplas?

Antes de continuar, asegúrate de poder hacer lo siguiente:

<Checkpoint
  items={[
    "Puedes crear tuplas de diferentes formas (con paréntesis, sin paréntesis, con tuple())",
    "Entiendes que las tuplas son inmutables y por qué eso es útil",
    "Sabes desempaquetar tuplas en múltiples variables (básico y avanzado con *)",
    "Puedes usar tuplas para devolver múltiples valores de funciones",
    "Sabes cuándo usar tuplas vs listas (datos fijos vs datos que cambian)",
    "Puedes usar tuplas como claves en diccionarios",
    "Reconoces y evitas los errores comunes (modificar tuplas, olvidar comas, desempaquetado incorrecto)",
    "Estás listo para aprender diccionarios y sets"
  ]}
/>

**Si puedes hacer todo lo anterior, ¡felicidades!** Has dominado las tuplas y estás listo para la siguiente estructura de datos.

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
