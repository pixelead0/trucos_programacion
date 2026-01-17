---
title: Listas, Tuplas y Diccionarios
description: Aprende a trabajar con las estructuras de datos fundamentales de Python
---

import LessonMeta from '@site/src/components/LessonMeta';
import Checkpoint from '@site/src/components/Checkpoint';
import NextStep from '@site/src/components/NextStep';
import TryIt from '@site/src/components/TryIt';
import ExpectedOutput from '@site/src/components/ExpectedOutput';

<LessonMeta
  level="beginner"
  time="2 horas"
  prereqs={['Variables y Tipos', 'Condicionales y Lógica', 'Bucles']}
/>

# Listas, Tuplas y Diccionarios en Python

## Qué vas a lograr

- Trabajar con listas: crear, modificar y manipular colecciones ordenadas
- Usar tuplas para datos inmutables y desempaquetado
- Dominar diccionarios para información estructurada con claves
- Elegir la estructura correcta según tu necesidad

## Concepto base

Hasta ahora has trabajado con variables individuales: `nombre = "Ana"`, `edad = 25`. Pero ¿qué pasa cuando necesitas guardar 100 nombres? ¿Crear 100 variables? Eso no tiene sentido.

**Las estructuras de datos resuelven esto:** te permiten agrupar y organizar información relacionada.

**En Python tienes 3 estructuras principales:**
- **Listas**: Para colecciones ordenadas que pueden cambiar (como una lista de compras)
- **Tuplas**: Para colecciones ordenadas que NO cambian (como coordenadas GPS)
- **Diccionarios**: Para información con etiquetas (como un perfil de usuario con nombre, email, edad)

Cada una tiene su propósito. Aprender cuándo usar cada una te ahorrará tiempo y hará tu código más claro.

:::info Para principiantes
Piensa en las estructuras de datos como cajas organizadoras: las listas son como cajas donde puedes agregar y quitar cosas, las tuplas son como cajas selladas que no cambian, y los diccionarios son como archivadores con etiquetas.
:::

## Paso a paso

### 1. Listas (Lists)

Las listas son colecciones ordenadas y mutables de elementos. Son extremadamente versátiles y se utilizan para almacenar secuencias de datos que pueden cambiar, crecer o reducirse.

**Crear listas:**

```python
# Crear una lista vacía
clientes = []

# Crear una lista con elementos
bebidas = ["Agua", "Café", "Té", "Jugo"]

# Las listas pueden tener diferentes tipos de datos mezclados
inventario = ["Agua", 50, 1.50, True]
```

:::tip Tip pro
Aunque las listas pueden mezclar tipos, es mejor mantener tipos consistentes. Si necesitas diferentes tipos de información, considera usar un diccionario: `{"producto": "Agua", "cantidad": 50}`.
:::

**Acceder a elementos:**

```python
bebidas = ["Agua", "Café", "Té", "Jugo"]
#           ↑      ↑      ↑     ↑
# índice:   0      1      2     3

print(bebidas[0])    # "Agua" - primer elemento
print(bebidas[-1])   # "Jugo" - último elemento (índice negativo)
print(bebidas[1:3])  # ["Café", "Té"] - slicing (del 1 al 2)
```

**Modificar elementos:**

```python
bebidas[0] = "Agua Mineral"  # Cambia el primer elemento
print(bebidas)  # ["Agua Mineral", "Café", "Té", "Jugo"]
```

**Agregar elementos:**

```python
# append() - agrega al final (más común)
bebidas.append("Refresco")

# insert() - agrega en una posición específica
bebidas.insert(1, "Leche")
```

**Quitar elementos:**

```python
# remove() - quita por valor
bebidas.remove("Té")

# pop() - quita por índice y devuelve el valor
bebida_eliminada = bebidas.pop(0)
print(f"Eliminada: {bebida_eliminada}")
```

**Métodos útiles:**

```python
ventas = [15.50, 8.00, 12.00, 15.50, 6.00]

print(f"Longitud: {len(ventas)}")
print(f"Suma: {sum(ventas)}")
print(f"Promedio: {sum(ventas) / len(ventas):.2f}")
print(f"Máximo: {max(ventas)}")
print(f"Mínimo: {min(ventas)}")

# Ordenar
ventas_ordenadas = sorted(ventas)

# Contar elementos
print(f"Veces que aparece 15.50: {ventas.count(15.50)}")

# Buscar elemento
if 8.00 in ventas:
    print(f"Índice: {ventas.index(8.00)}")
```

**Listas anidadas:**

```python
# Menú con precios
menu = [
    ["Agua", 1.50],
    ["Café", 2.00],
    ["Té", 1.80]
]

# Acceder a elementos anidados
print(f"Primera bebida: {menu[0][0]}")
print(f"Precio del café: ${menu[1][1]}")
```

### 2. Tuplas (Tuples)

Las tuplas son colecciones ordenadas e inmutables de elementos. Una vez creada una tupla, no se puede modificar, agregar o eliminar elementos. Son ideales para datos constantes.

**Crear tuplas:**

```python
# Crear una tupla vacía
menu_fijo = ()

# Crear una tupla con elementos
dias_semana = ("Lunes", "Martes", "Miércoles", "Jueves", "Viernes")

# Crear tupla de un elemento (necesita coma)
precio_unico = (3.50,)

# Crear tupla sin paréntesis
coordenadas = 40.7128, -74.0060
```

**Operaciones con tuplas:**

```python
dias = ("Lunes", "Martes", "Miércoles")
print(dias[0])    # Primer elemento
print(dias[-1])   # Último elemento

# Desempaquetar tuplas
info_usuario = ("Juan Pérez", "Gerente", "Ventas", "Madrid")
nombre, puesto, departamento, ciudad = info_usuario
print(f"Nombre: {nombre}, Puesto: {puesto}")
```

**Usar tuplas para múltiples valores:**

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
```

:::tip Tip pro
Las tuplas son perfectas para devolver múltiples valores de una función. Python las desempaqueta automáticamente.
:::

### 3. Diccionarios (Dictionaries)

Los diccionarios son colecciones de pares clave-valor. Permiten almacenar datos asociados, como una agenda telefónica o un perfil de usuario.

**Crear diccionarios:**

```python
# Crear un diccionario vacío
perfil = {}

# Crear un diccionario con elementos
usuario = {
    "nombre": "Ana García",
    "edad": 28,
    "email": "ana@email.com",
    "activo": True,
    "rol": "Admin"
}

# Crear diccionario con dict()
configuracion = dict(modo="oscuro", idioma="es", notificaciones=True)
```

**Operaciones con diccionarios:**

```python
usuario = {
    "nombre": "Ana García",
    "email": "ana@email.com",
    "rol": "Admin"
}

# Acceder a valores
print(usuario["nombre"])  # Por clave
print(usuario.get("telefono", "No disponible"))  # Con valor por defecto

# Modificar valores
usuario["email"] = "ana.garcia@nuevoemail.com"

# Agregar nuevos pares clave-valor
usuario["fecha_registro"] = "2024-01-15"

# Quitar elementos
del usuario["rol"]
email_anterior = usuario.pop("email", None)
```

**Métodos útiles:**

```python
inventario = {
    "laptops": 15,
    "monitores": 25,
    "teclados": 50
}

# Obtener todas las claves
print("Productos:", list(inventario.keys()))

# Obtener todos los valores
print("Cantidades:", list(inventario.values()))

# Obtener pares clave-valor
for producto, cantidad in inventario.items():
    print(f"{producto}: {cantidad}")

# Verificar si existe una clave
if "laptops" in inventario:
    print("Hay laptops en inventario")

# Obtener valor con valor por defecto
cantidad_impresoras = inventario.get("impresoras", 0)
```

**Diccionarios anidados:**

```python
# Base de datos de empleados
empleados = {
    "E001": {
        "nombre": "Juan Pérez",
        "puesto": "Desarrollador",
        "salario": 35000,
        "departamento": "IT"
    },
    "E002": {
        "nombre": "María López",
        "puesto": "Diseñadora",
        "salario": 32000,
        "departamento": "Diseño"
    }
}

# Acceder a elementos anidados
print(f"Empleado E001: {empleados['E001']['nombre']}")

# Modificar elementos anidados
empleados["E001"]["salario"] = 38000
```

### 4. Comparación de estructuras de datos

| Característica | Lista | Tupla | Diccionario |
|----------------|-------|-------|-------------|
| **Mutabilidad** | ✅ Cambiable | ❌ Inmutable | ✅ Cambiable |
| **Orden** | ✅ Ordenada | ✅ Ordenada | ✅ Ordenada (Python 3.7+) |
| **Acceso** | Por índice | Por índice | Por clave |
| **Duplicados** | ✅ Permitidos | ✅ Permitidos | ❌ Claves únicas |
| **Uso típico** | Lista de elementos | Datos fijos | Información estructurada |

## Errores comunes

### 1. Modificar tuplas

```python
# ❌ Error común
config = ("localhost", 8080)
config[0] = "127.0.0.1"  # Error: las tuplas son inmutables

# ✅ Correcto
config = ("localhost", 8080)
# Crear nueva tupla si necesitas cambiar
nueva_config = ("127.0.0.1",) + config[1:]
```

:::warning Error típico
**Intentar modificar una tupla**: Las tuplas son inmutables. Si necesitas cambiar valores, crea una nueva tupla o usa una lista.
:::

### 2. Acceder a claves inexistentes

```python
# ❌ Error común
usuario = {"nombre": "Ana"}
email = usuario["email"]  # KeyError si no existe

# ✅ Correcto
usuario = {"nombre": "Ana"}
email = usuario.get("email", "No especificado")  # Valor por defecto
```

:::warning Error típico
**Acceder a claves que no existen**: Usa `.get()` con un valor por defecto en lugar de acceso directo con `[]` cuando no estés seguro de que la clave existe.
:::

### 3. Modificar lista mientras se itera

```python
# ❌ Error común
numeros = [1, 2, 3, 4, 5]
for num in numeros:
    if num % 2 == 0:
        numeros.remove(num)  # Puede causar comportamiento inesperado

# ✅ Correcto
numeros = [1, 2, 3, 4, 5]
numeros = [num for num in numeros if num % 2 != 0]  # Comprensión de lista
```

:::warning Error típico
**Modificar una lista mientras la iteras**: Esto puede causar que se salten elementos. Usa comprensiones de lista o crea una nueva lista.
:::

## Buenas Prácticas

### 1. Elegir la estructura correcta

```python
# ✅ Usar lista para elementos que cambian
usuarios_activos = ["ana", "carlos", "juan"]

# ✅ Usar tupla para datos fijos
coordenadas = (40.7128, -74.0060)

# ✅ Usar diccionario para información estructurada
perfil_usuario = {
    "nombre": "Ana",
    "email": "ana@example.com",
    "rol": "admin"
}
```

### 2. Validar datos antes de usar

```python
def procesar_venta(inventario, producto, cantidad):
    """Procesa una venta con validación"""
    if producto not in inventario:
        print(f"❌ {producto} no está disponible")
        return False

    if inventario[producto] < cantidad:
        print(f"❌ No hay suficiente {producto}")
        return False

    inventario[producto] -= cantidad
    print(f"✅ {cantidad} {producto}(s) vendidos")
    return True
```

### 3. Usar comprensiones de listas

```python
# Lista de precios
precios = [10.00, 25.50, 5.00, 100.00]

# Crear lista de precios con impuesto
precios_finales = [precio * 1.16 for precio in precios]

# Filtrar precios altos
precios_altos = [precio for precio in precios if precio > 50.0]
```

## Ejercicios Prácticos

<TryIt>
### Ejercicio 1: Gestor de Inventario Simple

Crea un gestor de inventario básico usando diccionarios:

```python
# Gestor de inventario simple
inventario = {}
ventas = []

def agregar_producto(nombre, cantidad, precio):
    """Agrega un producto al inventario"""
    if nombre in inventario:
        inventario[nombre]["cantidad"] += cantidad
    else:
        inventario[nombre] = {
            "cantidad": cantidad,
            "precio": precio
        }
    print(f"✅ {cantidad} {nombre}(s) agregados")

def vender_producto(nombre, cantidad):
    """Vende un producto"""
    if nombre not in inventario:
        print(f"❌ {nombre} no está en inventario")
        return False

    if inventario[nombre]["cantidad"] < cantidad:
        print(f"❌ No hay suficiente {nombre}")
        return False

    precio_unitario = inventario[nombre]["precio"]
    total = precio_unitario * cantidad

    inventario[nombre]["cantidad"] -= cantidad
    ventas.append({"producto": nombre, "cantidad": cantidad, "total": total})

    print(f"🛒 {cantidad} {nombre}(s) vendidos por ${total:.2f}")
    return True

def mostrar_inventario():
    """Muestra el inventario"""
    print("\n=== Inventario ===")
    for producto, info in inventario.items():
        print(f"{producto}: {info['cantidad']} unidades - ${info['precio']:.2f} c/u")

# Usar el gestor
agregar_producto("Laptop", 10, 800.00)
agregar_producto("Mouse", 50, 25.00)
mostrar_inventario()
vender_producto("Laptop", 2)
vender_producto("Mouse", 5)
mostrar_inventario()
```
</TryIt>

<TryIt>
### Ejercicio 2: Sistema de Calificaciones

Crea un sistema simple de calificaciones usando diccionarios anidados:

```python
# Sistema de calificaciones
estudiantes = {}

def agregar_estudiante(nombre, edad, grado):
    """Agrega un nuevo estudiante"""
    estudiantes[nombre] = {
        "edad": edad,
        "grado": grado,
        "calificaciones": []
    }
    print(f"✅ Estudiante {nombre} agregado")

def agregar_calificacion(nombre, calificacion):
    """Agrega una calificación"""
    if nombre not in estudiantes:
        print(f"❌ Estudiante {nombre} no encontrado")
        return

    estudiantes[nombre]["calificaciones"].append(calificacion)
    promedio = sum(estudiantes[nombre]["calificaciones"]) / len(estudiantes[nombre]["calificaciones"])
    print(f"✅ Calificación agregada. Promedio: {promedio:.2f}")

def mostrar_estudiante(nombre):
    """Muestra información del estudiante"""
    if nombre not in estudiantes:
        print(f"❌ Estudiante {nombre} no encontrado")
        return

    info = estudiantes[nombre]
    print(f"\n=== {nombre} ===")
    print(f"Edad: {info['edad']}, Grado: {info['grado']}")
    if info['calificaciones']:
        promedio = sum(info['calificaciones']) / len(info['calificaciones'])
        print(f"Calificaciones: {info['calificaciones']}")
        print(f"Promedio: {promedio:.2f}")
    else:
        print("Sin calificaciones aún")

# Usar el sistema
agregar_estudiante("Ana Ruiz", 20, "Universitario")
agregar_estudiante("Carlos Díaz", 21, "Universitario")
agregar_calificacion("Ana Ruiz", 90)
agregar_calificacion("Ana Ruiz", 95)
agregar_calificacion("Carlos Díaz", 85)
mostrar_estudiante("Ana Ruiz")
mostrar_estudiante("Carlos Díaz")
```
</TryIt>

## Checkpoint

<Checkpoint
  items={[
    "Puedes crear y manipular listas (agregar, quitar, modificar elementos)",
    "Entiendes cómo usar tuplas para datos inmutables",
    "Sabes desempaquetar tuplas y usarlas para múltiples valores",
    "Puedes trabajar con diccionarios (acceder, modificar, agregar claves)",
    "Entiendes cuándo usar cada estructura de datos",
    "Sabes evitar errores comunes (modificar tuplas, claves inexistentes)",
    "Estás listo para organizar código con funciones"
  ]}
/>

## Recursos Adicionales

### Documentación Oficial
- [Documentación oficial de Python sobre estructuras de datos](https://docs.python.org/3/tutorial/datastructures.html)
- [Tutorial de listas en Python](https://docs.python.org/3/tutorial/introduction.html#lists)
- [Tutorial de diccionarios en Python](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)
- [Collections - Tipos de datos especializados](https://docs.python.org/3/library/collections.html)

### Bibliografía Recomendada
- **Fluent Python** (Luciano Ramalho) - Capítulos 2-3: Data Structures
- **Effective Python** (Brett Slatkin) - Items sobre listas, diccionarios y tuplas
- **Python Tricks** (Dan Bader) - Capítulo sobre estructuras de datos
- **Python Cookbook, 3rd Ed** (Beazley & Jones) - Recetas sobre listas, diccionarios y tuplas
- **Automate the Boring Stuff** (Al Sweigart) - Capítulo 4: Lists, Capítulo 5: Dictionaries

### Conceptos Relacionados
- [Funciones](../03_Funciones_y_Modulos/01_funciones.md) - Organiza código que trabaja con estructuras
- [Clases y Objetos](../04_Programacion_Orientada_a_Objetos/01_clases_objetos.md) - Modela datos complejos
- [Type Hints](../05_Manejo_de_Errores_y_Buenas_Practicas/03_type_hints.md) - Tipa tus estructuras de datos

## Siguiente paso

<NextStep
  to="/Funciones_y_Modulos/funciones"
  label="Siguiente: Funciones →"
/>
