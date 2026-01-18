---
title: Diccionarios y Sets en Python
description: Aprende a trabajar con diccionarios (clave-valor) y sets (colecciones únicas)
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
  time="1 hora"
  prereqs={['Listas', 'Tuplas']}
/>

<ProgressIndicator
  module="Módulo 02: Estructuras de Datos"
  lesson={3}
  total={4}
/>

# Diccionarios y Sets en Python

<LessonMap
  objectives={[
    "Crear y manipular diccionarios (clave-valor)",
    "Trabajar con diccionarios anidados",
    "Usar métodos útiles de diccionarios",
    "Crear y usar sets para colecciones únicas",
    "Aplicar operaciones de conjuntos (unión, intersección, diferencia)"
  ]}
  useCases={[
    "Perfiles de usuario con información estructurada",
    "Configuraciones de aplicación (clave-valor)",
    "Bases de datos en memoria",
    "Eliminar duplicados de listas",
    "Verificar pertenencia de forma eficiente"
  ]}
  time="1 hora"
  level="beginner"
/>

## 🌍 Casos reales donde se usa

Los diccionarios y sets son fundamentales en Python. Los verás en:

- **APIs REST**: Respuestas JSON que se convierten en diccionarios
- **Configuraciones**: Archivos de configuración (JSON, YAML) son diccionarios
- **Bases de datos**: Cada registro es un diccionario
- **Caché y memoización**: Diccionarios para almacenar resultados calculados
- **Eliminar duplicados**: Sets para obtener valores únicos
- **Verificación rápida**: Sets para verificar pertenencia en O(1)

**Ejemplo real**: Cuando haces login en una app, tu perfil de usuario es un diccionario con claves como "nombre", "email", "rol". Los sets se usan para mantener una lista de usuarios únicos que han visitado el sitio.

## 💡 Concepto base

**Diccionarios** son colecciones de pares clave-valor. Permiten almacenar datos asociados, como una agenda telefónica o un perfil de usuario.

**Sets** son colecciones desordenadas de elementos únicos. Son perfectos para eliminar duplicados y verificar pertenencia rápidamente.

**Lo genial de Python:** Los diccionarios son extremadamente eficientes para búsquedas por clave (O(1)), y los sets son perfectos para operaciones de conjuntos matemáticos.

```python
# Diccionario: información estructurada
usuario = {"nombre": "Ana", "edad": 28, "email": "ana@example.com"}

# Set: valores únicos
usuarios_unicos = {"ana", "carlos", "juan", "ana"}  # {"ana", "carlos", "juan"}
```

:::info Para principiantes
Piensa en un diccionario como un archivador con etiquetas: cada etiqueta (clave) tiene un archivo (valor) asociado. Un set es como una lista pero sin duplicados y sin orden específico.
:::

## 📚 Paso a paso

### 1. Diccionarios: Crear y Acceder

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

# Acceder a valores
print(usuario["nombre"])  # "Ana García" - por clave
print(usuario.get("telefono", "No disponible"))  # "No disponible" - con valor por defecto

# Verificar si existe una clave
if "email" in usuario:
    print(f"Email: {usuario['email']}")
```

### 2. Diccionarios: Modificar y Agregar

```python
usuario = {
    "nombre": "Ana García",
    "email": "ana@email.com",
    "rol": "Admin"
}

# Modificar valores existentes
usuario["email"] = "ana.garcia@nuevoemail.com"

# Agregar nuevos pares clave-valor
usuario["fecha_registro"] = "2024-01-15"
usuario["telefono"] = "+34 123 456 789"

# Actualizar múltiples valores
usuario.update({
    "ciudad": "Madrid",
    "pais": "España"
})
```

### 3. Diccionarios: Quitar Elementos

```python
usuario = {
    "nombre": "Ana García",
    "email": "ana@email.com",
    "rol": "Admin",
    "telefono": "+34 123 456 789"
}

# Quitar con del
del usuario["telefono"]

# Quitar con pop() (devuelve el valor)
email_anterior = usuario.pop("email", None)
print(f"Email eliminado: {email_anterior}")

# Quitar último elemento (Python 3.7+)
ultimo = usuario.popitem()  # Devuelve (clave, valor)
print(f"Último eliminado: {ultimo}")

# Vaciar diccionario
usuario.clear()
```

### 4. Diccionarios: Métodos Útiles

```python
inventario = {
    "laptops": 15,
    "monitores": 25,
    "teclados": 50
}

# Obtener todas las claves
productos = list(inventario.keys())
print(f"Productos: {productos}")  # ["laptops", "monitores", "teclados"]

# Obtener todos los valores
cantidades = list(inventario.values())
print(f"Cantidades: {cantidades}")  # [15, 25, 50]

# Obtener pares clave-valor
for producto, cantidad in inventario.items():
    print(f"{producto}: {cantidad} unidades")

# Obtener valor con valor por defecto
cantidad_impresoras = inventario.get("impresoras", 0)
print(f"Impresoras: {cantidad_impresoras}")  # 0 (no existe)

# Crear copia del diccionario
inventario_copia = inventario.copy()
```

### 5. Diccionarios Anidados

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
print(f"Salario: ${empleados['E001']['salario']}")

# Modificar elementos anidados
empleados["E001"]["salario"] = 38000

# Agregar nuevo empleado
empleados["E003"] = {
    "nombre": "Carlos Ruiz",
    "puesto": "Gerente",
    "salario": 45000,
    "departamento": "Ventas"
}
```

### 6. Sets: Crear y Operaciones Básicas

```python
# Crear un set vacío (usar set(), no {})
numeros = set()

# Crear un set con elementos
colores = {"rojo", "verde", "azul", "rojo"}  # Los duplicados se eliminan
print(colores)  # {"rojo", "verde", "azul"}

# Crear set desde una lista (elimina duplicados)
lista_con_duplicados = [1, 2, 2, 3, 3, 3, 4]
numeros_unicos = set(lista_con_duplicados)
print(numeros_unicos)  # {1, 2, 3, 4}

# Agregar elementos
colores.add("amarillo")
colores.update(["naranja", "morado"])

# Quitar elementos
colores.remove("rojo")  # Error si no existe
colores.discard("verde")  # No da error si no existe
```

### 7. Sets: Operaciones de Conjuntos

```python
set_a = {1, 2, 3, 4, 5}
set_b = {4, 5, 6, 7, 8}

# Unión (elementos en A o B)
union = set_a | set_b  # {1, 2, 3, 4, 5, 6, 7, 8}
union = set_a.union(set_b)  # Método alternativo

# Intersección (elementos en A y B)
interseccion = set_a & set_b  # {4, 5}
interseccion = set_a.intersection(set_b)

# Diferencia (elementos en A pero no en B)
diferencia = set_a - set_b  # {1, 2, 3}
diferencia = set_a.difference(set_b)

# Diferencia simétrica (elementos en A o B pero no en ambos)
diferencia_sim = set_a ^ set_b  # {1, 2, 3, 6, 7, 8}
diferencia_sim = set_a.symmetric_difference(set_b)

# Verificar subconjunto
es_subconjunto = {1, 2}.issubset(set_a)  # True
```

## 🎓 Ejemplo Práctico Completo: Sistema de Usuarios

```python
# Sistema de usuarios con diccionarios y sets
usuarios = {}
usuarios_activos = set()

def registrar_usuario(id_usuario, nombre, email):
    """Registra un nuevo usuario"""
    usuarios[id_usuario] = {
        "nombre": nombre,
        "email": email,
        "activo": False,
        "fecha_registro": "2024-01-15"
    }
    print(f"✅ Usuario {nombre} registrado")

def activar_usuario(id_usuario):
    """Activa un usuario"""
    if id_usuario in usuarios:
        usuarios[id_usuario]["activo"] = True
        usuarios_activos.add(id_usuario)
        print(f"✅ Usuario {usuarios[id_usuario]['nombre']} activado")
    else:
        print(f"❌ Usuario {id_usuario} no encontrado")

def mostrar_usuarios_activos():
    """Muestra usuarios activos"""
    print(f"\n=== Usuarios Activos ({len(usuarios_activos)}) ===")
    for id_usuario in usuarios_activos:
        usuario = usuarios[id_usuario]
        print(f"- {usuario['nombre']} ({usuario['email']})")

# Usar el sistema
registrar_usuario("U001", "Ana García", "ana@example.com")
registrar_usuario("U002", "Carlos Ruiz", "carlos@example.com")
activar_usuario("U001")
activar_usuario("U002")
mostrar_usuarios_activos()
```

<ExpectedOutput>
```
✅ Usuario Ana García registrado
✅ Usuario Carlos Ruiz registrado
✅ Usuario Ana García activado
✅ Usuario Carlos Ruiz activado

=== Usuarios Activos (2) ===
- Ana García (ana@example.com)
- Carlos Ruiz (carlos@example.com)
```
</ExpectedOutput>

## ⚠️ Errores comunes

### 1. Acceder a claves inexistentes

```python
# ❌ Error común
usuario = {"nombre": "Ana"}
email = usuario["email"]  # KeyError: 'email'

# ✅ Correcto
usuario = {"nombre": "Ana"}
email = usuario.get("email", "No especificado")  # Valor por defecto

# O verificar antes
if "email" in usuario:
    email = usuario["email"]
```

:::warning Error típico
**Acceder a claves que no existen**: Usa `.get()` con un valor por defecto en lugar de acceso directo con `[]` cuando no estés seguro de que la clave existe.
:::

### 2. Confundir {} para sets

```python
# ❌ Confusión común
mi_set = {}  # Esto es un diccionario vacío, no un set
print(type(mi_set))  # <class 'dict'>

# ✅ Correcto
mi_set = set()  # Set vacío
mi_set_con_elementos = {1, 2, 3}  # Set con elementos
```

### 3. Modificar set mientras se itera

```python
# ❌ Error común (similar a listas)
colores = {"rojo", "verde", "azul"}
for color in colores:
    if color == "verde":
        colores.remove(color)  # Puede causar error

# ✅ Correcto
colores = {"rojo", "verde", "azul"}
colores = {c for c in colores if c != "verde"}  # Comprensión de set
```

## ✅ Buenas Prácticas

### 1. Usar diccionarios para información estructurada

```python
# ✅ Diccionario para perfil de usuario
perfil_usuario = {
    "nombre": "Ana",
    "email": "ana@example.com",
    "rol": "admin"
}

# ❌ Lista para información estructurada
perfil_lista = ["Ana", "ana@example.com", "admin"]  # Menos claro
```

### 2. Usar sets para eliminar duplicados

```python
# ✅ Usar set para eliminar duplicados
lista_con_duplicados = [1, 2, 2, 3, 3, 3, 4]
unicos = list(set(lista_con_duplicados))
print(unicos)  # [1, 2, 3, 4]
```

### 3. Usar sets para verificación rápida

```python
# ✅ Set para verificación O(1)
usuarios_permitidos = {"ana", "carlos", "juan"}
if usuario_actual in usuarios_permitidos:
    print("Acceso permitido")

# ❌ Lista para verificación O(n) - más lento
usuarios_permitidos = ["ana", "carlos", "juan"]
if usuario_actual in usuarios_permitidos:  # Más lento con muchas entradas
    print("Acceso permitido")
```

## 🧪 Ejercicios Prácticos

<TryIt>
### Ejercicio 1: Gestor de Inventario con Diccionarios

Crea un gestor de inventario usando diccionarios:

```python
inventario = {}

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
    print(f"🛒 {cantidad} {nombre}(s) vendidos por ${total:.2f}")
    return True

# Usar el gestor
agregar_producto("Laptop", 10, 800.00)
agregar_producto("Mouse", 50, 25.00)
vender_producto("Laptop", 2)
vender_producto("Mouse", 5)
```
</TryIt>

<TryIt>
### Ejercicio 2: Eliminar Duplicados con Sets

Usa sets para eliminar duplicados de una lista:

```python
# Lista con duplicados
emails = [
    "ana@example.com",
    "carlos@example.com",
    "ana@example.com",
    "juan@example.com",
    "carlos@example.com"
]

# Eliminar duplicados
emails_unicos = list(set(emails))
print(f"Emails únicos: {emails_unicos}")

# Mantener orden (Python 3.7+)
emails_ordenados = list(dict.fromkeys(emails))
print(f"Emails únicos (ordenados): {emails_ordenados}")
```
</TryIt>

## 🎯 Checkpoint

<Checkpoint
  items={[
    "Puedes crear y manipular diccionarios",
    "Sabes acceder a valores con [] y .get()",
    "Puedes trabajar con diccionarios anidados",
    "Conoces métodos útiles de diccionarios (keys, values, items)",
    "Puedes crear y usar sets",
    "Sabes usar operaciones de conjuntos (unión, intersección, diferencia)",
    "Entiendes cuándo usar diccionarios vs sets vs listas",
    "Estás listo para operaciones avanzadas"
  ]}
/>

## 📚 Recursos Adicionales

### Documentación Oficial
- [Documentación oficial de Python sobre diccionarios](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)
- [Documentación oficial de Python sobre sets](https://docs.python.org/3/tutorial/datastructures.html#sets)

### Conceptos Relacionados
- [Listas](./01_listas.md) - Otra estructura de datos
- [Tuplas](./02_tuplas.md) - Estructura inmutable
- [Operaciones Avanzadas](./04_operaciones_avanzadas.md) - Dict comprehensions y más

## 🚀 Siguiente paso

<NextStep
  to="/Estructuras_de_Datos/operaciones_avanzadas"
  label="Siguiente: Operaciones Avanzadas →"
/>
