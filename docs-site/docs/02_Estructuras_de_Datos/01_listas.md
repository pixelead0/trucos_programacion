---
title: Listas en Python
description: Aprende a trabajar con listas, la estructura de datos más versátil de Python
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
  prereqs={['Variables y Tipos', 'Condicionales y Lógica', 'Bucles']}
/>

<ProgressIndicator
  module="Módulo 02: Estructuras de Datos"
  lesson={1}
  total={4}
/>

# Listas en Python

<LessonMap
  objectives={[
    "Crear y manipular listas en Python",
    "Acceder a elementos por índice y slicing",
    "Agregar, modificar y eliminar elementos",
    "Usar métodos útiles de listas (sort, count, index)",
    "Trabajar con listas anidadas"
  ]}
  useCases={[
    "Almacenar colecciones de datos que cambian (carrito de compras, lista de tareas)",
    "Procesar secuencias de datos (ventas diarias, calificaciones)",
    "Organizar información ordenada (menús, catálogos)",
    "Trabajar con datos temporales que se modifican"
  ]}
  time="45 minutos"
  level="beginner"
/>

## 🎯 ¿Por qué aprender listas?

Las listas son **la estructura de datos más común y versátil** en Python. Casi todos los programas las usan para almacenar y procesar colecciones de información.

Aprender listas te permitirá:
- Agrupar información relacionada de forma organizada
- Procesar múltiples elementos eficientemente
- Trabajar con datos que cambian dinámicamente
- Construir la base para estructuras de datos más complejas

Sin listas, tendrías que crear una variable separada para cada elemento, lo cual es impráctico e imposible de escalar.

## 🌍 Casos reales donde se usa

Las listas son la estructura de datos más común en Python. Las verás en:

- **Carritos de compras**: Agregar y quitar productos dinámicamente
- **Listas de tareas**: Gestionar tareas que se completan o agregan
- **Procesamiento de datos**: Analizar ventas, calificaciones, métricas
- **APIs y servicios**: Recibir y procesar arrays de datos
- **Juegos**: Inventarios, puntuaciones, niveles desbloqueados
- **Aplicaciones web**: Listas de usuarios, posts, comentarios

**Ejemplo real**: Cuando compras online, el carrito es una lista que crece cuando agregas productos y se vacía cuando finalizas la compra.

## 💡 Concepto base

Las listas son colecciones ordenadas y mutables de elementos. Piensa en una lista como una caja donde puedes agregar, quitar y reorganizar elementos en cualquier momento.

**Lo genial de Python:** Las listas son extremadamente flexibles. Pueden contener cualquier tipo de dato, pueden crecer o reducirse, y tienen métodos útiles integrados.

```python
# Una lista puede contener cualquier cosa
productos = ["Chilaquiles", "Tacos", "Quesadillas", 42, 3.14, True]
print(f"Productos: {productos}")
print(f"Primer producto: {productos[0]}")
```

<ExpectedOutput>
```
Productos: ['Chilaquiles', 'Tacos', 'Quesadillas', 42, 3.14, True]
Primer producto: Chilaquiles
```
</ExpectedOutput>

:::tip 🌮 Analogía culinaria
Así como no guardas cada tortilla en un plato separado, sino que las organizas en una canasta (lista), las listas te permiten agrupar información relacionada. Una lista es como una canasta de tortillas donde puedes agregar más, quitar algunas, o reorganizarlas según necesites. Cuando necesitas una tortilla, simplemente la tomas de la canasta por su posición.
:::

:::info Para principiantes
Piensa en una lista como una fila de cajas numeradas (0, 1, 2, 3...). Puedes poner cosas en cada caja, cambiar lo que hay dentro, agregar más cajas al final, o quitar cajas. La lista siempre mantiene el orden. Es la estructura más básica y poderosa para trabajar con colecciones de datos.
:::

## 📚 Paso a paso

### 1. Crear Listas

```python
# Crear una lista vacía
clientes = []

# Crear una lista con elementos
bebidas = ["Agua", "Café", "Té", "Jugo"]

# Crear lista con list()
numeros = list(range(1, 6))  # [1, 2, 3, 4, 5]

# Las listas pueden tener diferentes tipos de datos mezclados
inventario = ["Agua", 50, 1.50, True]
```

:::tip Tip pro
Aunque las listas pueden mezclar tipos, es mejor mantener tipos consistentes. Si necesitas diferentes tipos de información, considera usar un diccionario: `{"producto": "Agua", "cantidad": 50}`.
:::

### 2. Acceder a Elementos

```python
bebidas = ["Agua", "Café", "Té", "Jugo"]
#           ↑      ↑      ↑     ↑
# índice:   0      1      2     3

# Acceder por índice positivo
print(bebidas[0])    # "Agua" - primer elemento
print(bebidas[2])    # "Té" - tercer elemento

# Acceder por índice negativo (desde el final)
print(bebidas[-1])   # "Jugo" - último elemento
print(bebidas[-2])   # "Té" - penúltimo elemento

# Slicing (rebanadas)
print(bebidas[1:3])  # ["Café", "Té"] - del índice 1 al 2
print(bebidas[:2])   # ["Agua", "Café"] - desde el inicio hasta el 1
print(bebidas[2:])   # ["Té", "Jugo"] - desde el índice 2 hasta el final
print(bebidas[:])    # ["Agua", "Café", "Té", "Jugo"] - copia completa
```

**¿Qué está pasando aquí?**
- Los índices empiezan en 0 (no en 1)
- Los índices negativos cuentan desde el final (-1 es el último)
- El slicing usa `[inicio:fin]` donde `fin` NO se incluye
- Si omites `inicio` o `fin`, Python usa el inicio/fin de la lista

### 3. Modificar Elementos

```python
bebidas = ["Agua", "Café", "Té", "Jugo"]

# Cambiar un elemento existente
bebidas[0] = "Agua Mineral"
print(bebidas)  # ["Agua Mineral", "Café", "Té", "Jugo"]

# Cambiar múltiples elementos con slicing
bebidas[1:3] = ["Café Latte", "Té Verde"]
print(bebidas)  # ["Agua Mineral", "Café Latte", "Té Verde", "Jugo"]
```

### 4. Agregar Elementos

```python
bebidas = ["Agua", "Café", "Té"]

# append() - agrega al final (más común)
bebidas.append("Jugo")
print(bebidas)  # ["Agua", "Café", "Té", "Jugo"]

# insert() - agrega en una posición específica
bebidas.insert(1, "Leche")
print(bebidas)  # ["Agua", "Leche", "Café", "Té", "Jugo"]

# extend() - agrega múltiples elementos
bebidas.extend(["Refresco", "Agua de Sabor"])
print(bebidas)  # ["Agua", "Leche", "Café", "Té", "Jugo", "Refresco", "Agua de Sabor"]

# Concatenar listas con +
nuevas_bebidas = ["Smoothie", "Batido"]
todas = bebidas + nuevas_bebidas
```

### 5. Quitar Elementos

```python
bebidas = ["Agua", "Café", "Té", "Jugo", "Café"]

# remove() - quita por valor (solo la primera ocurrencia)
bebidas.remove("Café")
print(bebidas)  # ["Agua", "Té", "Jugo", "Café"]

# pop() - quita por índice y devuelve el valor
bebida_eliminada = bebidas.pop(0)
print(f"Eliminada: {bebida_eliminada}")  # Eliminada: Agua
print(bebidas)  # ["Té", "Jugo", "Café"]

# pop() sin índice - quita el último elemento
ultima = bebidas.pop()
print(f"Última: {ultima}")  # Última: Café

# del - elimina por índice o slicing
del bebidas[0]  # Elimina el primer elemento
del bebidas[:]  # Vacía la lista completamente

# clear() - vacía la lista
bebidas.clear()
```

### 6. Métodos Útiles

```python
ventas = [15.50, 8.00, 12.00, 15.50, 6.00]

# Información básica
print(f"Longitud: {len(ventas)}")  # 5
print(f"Suma: {sum(ventas)}")  # 57.0
print(f"Promedio: {sum(ventas) / len(ventas):.2f}")  # 11.40
print(f"Máximo: {max(ventas)}")  # 15.50
print(f"Mínimo: {min(ventas)}")  # 6.00

# Ordenar (crea nueva lista)
ventas_ordenadas = sorted(ventas)
print(ventas_ordenadas)  # [6.0, 8.0, 12.0, 15.5, 15.5]

# Ordenar in-place (modifica la lista original)
ventas.sort()
print(ventas)  # [6.0, 8.0, 12.0, 15.5, 15.5]

# Ordenar descendente
ventas.sort(reverse=True)
print(ventas)  # [15.5, 15.5, 12.0, 8.0, 6.0]

# Contar elementos
print(f"Veces que aparece 15.50: {ventas.count(15.50)}")  # 2

# Buscar elemento
if 8.00 in ventas:
    print(f"Índice: {ventas.index(8.00)}")  # Índice: 3

# Revertir orden
ventas.reverse()
print(ventas)  # [6.0, 8.0, 12.0, 15.5, 15.5]
```

### 7. Listas Anidadas

```python
# Menú con precios
menu = [
    ["Agua", 1.50],
    ["Café", 2.00],
    ["Té", 1.80]
]

# Acceder a elementos anidados
print(f"Primera bebida: {menu[0][0]}")  # Primera bebida: Agua
print(f"Precio del café: ${menu[1][1]}")  # Precio del café: $2.0

# Modificar elementos anidados
menu[0][1] = 1.75  # Cambiar precio del agua
print(menu[0])  # ["Agua", 1.75]

# Agregar nuevo elemento
menu.append(["Jugo", 2.50])
print(menu)  # [["Agua", 1.75], ["Café", 2.0], ["Té", 1.8], ["Jugo", 2.5]]
```

## 🎓 Ejemplo Práctico Completo: Gestor de Inventario

```python
# Gestor de inventario simple con listas
inventario = []

def agregar_producto(nombre, cantidad):
    """Agrega un producto al inventario"""
    producto = [nombre, cantidad]
    inventario.append(producto)
    print(f"✅ {cantidad} {nombre}(s) agregados")

def buscar_producto(nombre):
    """Busca un producto en el inventario"""
    for producto in inventario:
        if producto[0] == nombre:
            return producto
    return None

def actualizar_cantidad(nombre, nueva_cantidad):
    """Actualiza la cantidad de un producto"""
    producto = buscar_producto(nombre)
    if producto:
        producto[1] = nueva_cantidad
        print(f"✅ {nombre} actualizado: {nueva_cantidad} unidades")
    else:
        print(f"❌ {nombre} no encontrado")

def mostrar_inventario():
    """Muestra el inventario completo"""
    print("\n=== Inventario ===")
    for producto in inventario:
        print(f"{producto[0]}: {producto[1]} unidades")

# Usar el gestor
agregar_producto("Laptop", 10)
agregar_producto("Mouse", 50)
agregar_producto("Teclado", 30)
mostrar_inventario()
actualizar_cantidad("Mouse", 45)
mostrar_inventario()
```

<ExpectedOutput>
```
✅ 10 Laptop(s) agregados
✅ 50 Mouse(s) agregados
✅ 30 Teclado(s) agregados

=== Inventario ===
Laptop: 10 unidades
Mouse: 50 unidades
Teclado: 30 unidades
✅ Mouse actualizado: 45 unidades

=== Inventario ===
Laptop: 10 unidades
Mouse: 45 unidades
Teclado: 30 unidades
```
</ExpectedOutput>

## ⚠️ Errores comunes

### 1. Índice fuera de rango

```python
# ❌ Error común
bebidas = ["Agua", "Café", "Té"]
print(bebidas[5])  # IndexError: list index out of range

# ✅ Correcto
bebidas = ["Agua", "Café", "Té"]
if len(bebidas) > 5:
    print(bebidas[5])
else:
    print("Índice no válido")
```

:::warning Error típico
**Índice fuera de rango**: Siempre verifica que el índice existe antes de acceder. Usa `len()` para saber cuántos elementos tiene la lista.
:::

### 2. Modificar lista mientras se itera

```python
# ❌ Error común
numeros = [1, 2, 3, 4, 5]
for num in numeros:
    if num % 2 == 0:
        numeros.remove(num)  # Puede causar comportamiento inesperado
print(numeros)  # Resultado impredecible

# ✅ Correcto
numeros = [1, 2, 3, 4, 5]
numeros = [num for num in numeros if num % 2 != 0]  # Comprensión de lista
print(numeros)  # [1, 3, 5]
```

:::warning Error típico
**Modificar una lista mientras la iteras**: Esto puede causar que se salten elementos. Usa comprensiones de lista o crea una nueva lista.
:::

### 3. Confundir append() con extend()

```python
# ❌ Confusión común
lista1 = [1, 2, 3]
lista1.append([4, 5])
print(lista1)  # [1, 2, 3, [4, 5]] - agrega la lista como un elemento

# ✅ Correcto
lista2 = [1, 2, 3]
lista2.extend([4, 5])
print(lista2)  # [1, 2, 3, 4, 5] - agrega los elementos individuales
```

## ✅ Buenas Prácticas

### 1. Usar nombres descriptivos

```python
# ✅ Buenos nombres
usuarios_activos = ["ana", "carlos", "juan"]
precios_productos = [10.50, 25.00, 5.00]

# ❌ Nombres confusos
l = ["ana", "carlos"]
p = [10.50, 25.00]
```

### 2. Validar antes de acceder

```python
def obtener_elemento(lista, indice):
    """Obtiene un elemento de forma segura"""
    if 0 <= indice < len(lista):
        return lista[indice]
    else:
        return None
```

### 3. Usar métodos apropiados

```python
# ✅ Usar métodos específicos
bebidas.append("Jugo")  # Para agregar uno
bebidas.extend(["A", "B"])  # Para agregar varios
bebidas.remove("Té")  # Para quitar por valor
bebidas.pop(0)  # Para quitar por índice y obtener valor
```

## 🧪 Ejercicios Prácticos

<TryIt>
### Ejercicio 1: Lista de Compras

Crea un programa que gestione una lista de compras:

```python
# Lista de compras
compras = []

def agregar_item(item):
    compras.append(item)
    print(f"✅ {item} agregado a la lista")

def quitar_item(item):
    if item in compras:
        compras.remove(item)
        print(f"✅ {item} eliminado")
    else:
        print(f"❌ {item} no está en la lista")

def mostrar_lista():
    if compras:
        print("\n=== Lista de Compras ===")
        for i, item in enumerate(compras, 1):
            print(f"{i}. {item}")
    else:
        print("La lista está vacía")

# Usar el programa
agregar_item("Leche")
agregar_item("Pan")
agregar_item("Huevos")
mostrar_lista()
quitar_item("Pan")
mostrar_lista()
```
</TryIt>

<TryIt>
### Ejercicio 2: Analizador de Calificaciones

Analiza una lista de calificaciones:

```python
calificaciones = [85, 92, 78, 96, 88, 91, 75, 89]

# Calcular estadísticas
promedio = sum(calificaciones) / len(calificaciones)
calificacion_max = max(calificaciones)
calificacion_min = min(calificaciones)

print(f"Promedio: {promedio:.2f}")
print(f"Calificación más alta: {calificacion_max}")
print(f"Calificación más baja: {calificacion_min}")

# Ordenar de mayor a menor
calificaciones_ordenadas = sorted(calificaciones, reverse=True)
print(f"Top 3: {calificaciones_ordenadas[:3]}")
```
</TryIt>

## 🎯 Checkpoint

<Checkpoint
  items={[
    "Puedes crear listas vacías y con elementos",
    "Sabes acceder a elementos por índice y slicing",
    "Puedes agregar elementos con append(), insert(), extend()",
    "Puedes quitar elementos con remove(), pop(), del",
    "Conoces métodos útiles como sort(), count(), index()",
    "Puedes trabajar con listas anidadas",
    "Estás listo para aprender tuplas"
  ]}
/>

## 📚 Recursos Adicionales

### Documentación Oficial
- [Documentación oficial de Python sobre listas](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)
- [Tutorial de listas en Python](https://docs.python.org/3/tutorial/introduction.html#lists)

### Conceptos Relacionados
- [Tuplas](./02_tuplas.md) - Estructura inmutable similar
- [Diccionarios y Sets](./03_diccionarios_sets.md) - Otras estructuras de datos
- [Operaciones Avanzadas](./04_operaciones_avanzadas.md) - List comprehensions y más

## 🚀 Siguiente paso

<NextStep
  to="/Estructuras_de_Datos/tuplas"
  label="Siguiente: Tuplas →"
/>
