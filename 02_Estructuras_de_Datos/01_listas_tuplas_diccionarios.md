# Listas, Tuplas y Diccionarios en Python

## ¿Por qué necesitas estructuras de datos?

Hasta ahora has trabajado con variables individuales: `nombre = "Ana"`, `edad = 25`. Pero ¿qué pasa cuando necesitas guardar 100 nombres? ¿Crear 100 variables? Eso no tiene sentido.

**Las estructuras de datos resuelven esto:** te permiten agrupar y organizar información relacionada.

**En Python tienes 3 estructuras principales:**
- **Listas**: Para colecciones ordenadas que pueden cambiar (como una lista de compras)
- **Tuplas**: Para colecciones ordenadas que NO cambian (como coordenadas GPS)
- **Diccionarios**: Para información con etiquetas (como un perfil de usuario con nombre, email, edad)

Cada una tiene su propósito. Aprender cuándo usar cada una te ahorrará tiempo y hará tu código más claro.

> **Antes de continuar**: Asegúrate de entender [Variables](../01_Introduccion_y_Fundamentos/01_variables_y_tipos.md), [Condicionales](../01_Introduccion_y_Fundamentos/02_condicionales_y_logica.md) y [Bucles](../01_Introduccion_y_Fundamentos/04_bucles.md).

## Listas (Lists)

### ¿Qué son las listas?

Las listas son colecciones ordenadas y mutables de elementos. Son extremadamente versátiles y se utilizan para almacenar secuencias de datos que pueden cambiar, crecer o reducirse.

### Crear listas

Las listas se crean con corchetes `[]`. Pueden empezar vacías o con elementos:

```python
# Crear una lista vacía - útil cuando vas a agregar elementos después
clientes = []

# Crear una lista con elementos - separados por comas
bebidas = ["Agua", "Café", "Té", "Jugo"]

# Las listas pueden tener diferentes tipos de datos mezclados
inventario = ["Agua", 50, 1.50, True]
#              ↑      ↑   ↑     ↑
#            texto  int  float  bool
```

**¿Por qué mezclar tipos?** A veces es útil, pero en la práctica es mejor mantener tipos consistentes. Si tienes `["Agua", 50]`, ¿qué significa el 50? ¿Cantidad? ¿Precio? Es confuso. Mejor usar un diccionario: `{"producto": "Agua", "cantidad": 50}`.

### Operaciones básicas con listas

**Acceder a elementos:** Las listas usan índices que empiezan en 0:

```python
bebidas = ["Agua", "Café", "Té", "Jugo"]
#           ↑      ↑      ↑     ↑
# índice:   0      1      2     3

print(bebidas[0])    # "Agua" - primer elemento (índice 0)
print(bebidas[-1])   # "Jugo" - último elemento (índice negativo cuenta desde el final)
print(bebidas[1:3])  # ["Café", "Té"] - del índice 1 al 2 (el 3 no se incluye)
```

**Modificar elementos:** Las listas son mutables, puedes cambiar sus elementos:

```python
bebidas[0] = "Agua Mineral"  # Cambia el primer elemento
print(bebidas)  # ["Agua Mineral", "Café", "Té", "Jugo"]
```

**Agregar elementos:** Dos formas principales:

```python
# append() - agrega al final (más común)
bebidas.append("Refresco")
# Resultado: ["Agua", "Café", "Té", "Jugo", "Refresco"]

# insert() - agrega en una posición específica
bebidas.insert(1, "Leche")
# Resultado: ["Agua", "Leche", "Café", "Té", "Jugo"]
#            (inserta en posición 1, desplaza el resto)
```

**Quitar elementos:** También dos formas:

```python
# remove() - quita por valor (busca y elimina la primera coincidencia)
bebidas.remove("Té")
# Si hay dos "Té", solo quita el primero

# pop() - quita por índice y devuelve el valor
bebida_eliminada = bebidas.pop(0)
# Quita el elemento en índice 0 y lo guarda en la variable
print(f"Eliminada: {bebida_eliminada}")  # "Agua"
```

**¿Cuándo usar cada método?**
- `append()`: Cuando solo quieres agregar al final (99% de los casos)
- `insert()`: Cuando necesitas insertar en una posición específica
- `remove()`: Cuando sabes el valor pero no el índice
- `pop()`: Cuando necesitas el valor que estás quitando, o quieres quitar por índice

### Métodos útiles de listas

```python
# Lista de ventas del día
ventas = [15.50, 8.00, 12.00, 15.50, 6.00]

# Información sobre la lista
print(f"Longitud: {len(ventas)}")
print(f"Suma: {sum(ventas)}")
print(f"Promedio: {sum(ventas) / len(ventas):.2f}")
print(f"Máximo: {max(ventas)}")
print(f"Mínimo: {min(ventas)}")

# Ordenar
ventas_ordenadas = sorted(ventas)
print(f"Ordenadas: {ventas_ordenadas}")

# Contar elementos
print(f"Veces que aparece 15.50: {ventas.count(15.50)}")

# Buscar elemento
if 8.00 in ventas:
    print("8.00 está en las ventas")
    print(f"Índice: {ventas.index(8.00)}")
```

### Listas anidadas

```python
# Menú con precios
menu = [
    ["Agua", 1.50],
    ["Café", 2.00],
    ["Té", 1.80],
    ["Jugo", 2.50]
]

# Acceder a elementos anidados
print(f"Primera bebida: {menu[0][0]}")
print(f"Precio del café: ${menu[1][1]}")

# Agregar nueva bebida
menu.append(["Refresco", 2.00])
print(menu)
```

## Tuplas (Tuples)

### ¿Qué son las tuplas?

Las tuplas son colecciones ordenadas e inmutables de elementos. Una vez creada una tupla, no se puede modificar, agregar o eliminar elementos. Son ideales para datos constantes.

### Crear tuplas

```python
# Crear una tupla vacía
menu_fijo = ()

# Crear una tupla con elementos
dias_semana = ("Lunes", "Martes", "Miércoles", "Jueves", "Viernes")

# Crear una tupla de un elemento (necesita coma)
precio_unico = (3.50,)

# Crear tupla sin paréntesis
coordenadas = 40.7128, -74.0060
```

### Operaciones con tuplas

```python
# Acceder a elementos
dias = ("Lunes", "Martes", "Miércoles")
print(dias[0])    # Primer elemento
print(dias[-1])   # Último elemento

# Desempaquetar tuplas
info_usuario = ("Juan Pérez", "Gerente", "Ventas", "Madrid")
nombre, puesto, departamento, ciudad = info_usuario
print(f"Nombre: {nombre}")
print(f"Puesto: {puesto}")

# Las tuplas no se pueden modificar
# dias[0] = "Domingo"  # Esto causaría error
```

### Usar tuplas para múltiples valores

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

## Diccionarios (Dictionaries)

### ¿Qué son los diccionarios?

Los diccionarios son colecciones de pares clave-valor. Permiten almacenar datos asociados, como una agenda telefónica o un perfil de usuario.

### Crear diccionarios

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

### Operaciones con diccionarios

```python
# Acceder a valores
usuario = {
    "nombre": "Ana García",
    "email": "ana@email.com",
    "rol": "Admin"
}

print(usuario["nombre"])  # Por clave
print(usuario.get("telefono", "No disponible"))  # Con valor por defecto

# Modificar valores
usuario["email"] = "ana.garcia@nuevoemail.com"
usuario["rol"] = "SuperAdmin"

# Agregar nuevos pares clave-valor
usuario["fecha_registro"] = "2024-01-15"

# Quitar elementos
del usuario["rol"]
email_anterior = usuario.pop("email", None)
```

### Métodos útiles de diccionarios

```python
# Diccionario de inventario
inventario = {
    "laptops": 15,
    "monitores": 25,
    "teclados": 50,
    "ratones": 45
}

# Obtener todas las claves
print("Productos:", list(inventario.keys()))

# Obtener todos los valores
print("Cantidades:", list(inventario.values()))

# Obtener pares clave-valor
print("Inventario completo:")
for producto, cantidad in inventario.items():
    print(f"{producto}: {cantidad}")

# Verificar si existe una clave
if "laptops" in inventario:
    print("Hay laptops en inventario")

# Obtener valor con valor por defecto
cantidad_impresoras = inventario.get("impresoras", 0)
print(f"Impresoras disponibles: {cantidad_impresoras}")
```

### Diccionarios anidados

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
    },
    "E003": {
        "nombre": "Carlos Ruiz",
        "puesto": "Gerente",
        "salario": 45000,
        "departamento": "Ventas"
    }
}

# Acceder a elementos anidados
print(f"Empleado E001: {empleados['E001']['nombre']}")

# Modificar elementos anidados
empleados["E001"]["salario"] = 38000
empleados["E001"]["proyectos"] = ["Web Corp", "App Móvil"]
```

## Comparación de estructuras de datos

| Característica | Lista | Tupla | Diccionario |
|----------------|-------|-------|-------------|
| **Mutabilidad** | ✅ Cambiable | ❌ Inmutable | ✅ Cambiable |
| **Orden** | ✅ Ordenada | ✅ Ordenada | ❌ No ordenada (Python 3.7+) |
| **Acceso** | Por índice | Por índice | Por clave |
| **Duplicados** | ✅ Permitidos | ✅ Permitidos | ❌ Claves únicas |
| **Uso típico** | Lista de elementos | Datos fijos | Información estructurada |

## Ejercicios Prácticos

### Ejercicio 1: Gestor de inventario

```python
class GestorInventario:
    def __init__(self):
        self.inventario = {}
        self.ventas = []

    def agregar_producto(self, nombre, cantidad, precio):
        """Agrega un producto al inventario"""
        if nombre in self.inventario:
            self.inventario[nombre]["cantidad"] += cantidad
        else:
            self.inventario[nombre] = {
                "cantidad": cantidad,
                "precio": precio
            }
        print(f"✅ {cantidad} {nombre}(s) agregados al inventario")

    def vender_producto(self, nombre, cantidad, cliente="Cliente"):
        """Vende un producto del inventario"""
        if nombre not in self.inventario:
            print(f"❌ {nombre} no está en el inventario")
            return False

        if self.inventario[nombre]["cantidad"] < cantidad:
            print(f"❌ No hay suficiente {nombre} en inventario")
            return False

        # Calcular venta
        precio_unitario = self.inventario[nombre]["precio"]
        total_venta = precio_unitario * cantidad

        # Actualizar inventario
        self.inventario[nombre]["cantidad"] -= cantidad

        # Registrar venta
        venta = {
            "cliente": cliente,
            "producto": nombre,
            "cantidad": cantidad,
            "precio_unitario": precio_unitario,
            "total": total_venta
        }
        self.ventas.append(venta)

        print(f"🛒 {cliente} compró {cantidad} {nombre}(s) por ${total_venta:.2f}")
        return True

    def mostrar_inventario(self):
        """Muestra el inventario actual"""
        print("\n=== Inventario ===")
        for producto, info in self.inventario.items():
            print(f"{producto}: {info['cantidad']} unidades - ${info['precio']:.2f} c/u")

    def mostrar_ventas(self):
        """Muestra las ventas realizadas"""
        print("\n=== Ventas ===")
        for venta in self.ventas:
            print(f"{venta['cliente']}: {venta['cantidad']} {venta['producto']}(s) - ${venta['total']:.2f}")

    def calcular_ganancias(self):
        """Calcula las ganancias totales"""
        return sum(venta['total'] for venta in self.ventas)

# Usar el gestor de inventario
gestor = GestorInventario()

# Agregar productos
gestor.agregar_producto("Laptop", 10, 800.00)
gestor.agregar_producto("Mouse", 50, 25.00)
gestor.agregar_producto("Teclado", 30, 45.00)

# Mostrar inventario
gestor.mostrar_inventario()

# Realizar ventas
gestor.vender_producto("Laptop", 2, "Empresa A")
gestor.vender_producto("Mouse", 5, "Usuario B")

# Mostrar ventas y ganancias
gestor.mostrar_ventas()
print(f"\n💰 Ganancias totales: ${gestor.calcular_ganancias():.2f}")
```

### Ejercicio 2: Sistema de calificaciones

```python
class SistemaCalificaciones:
    def __init__(self):
        self.estudiantes = {}
        self.materias = ["Matemáticas", "Ciencias", "Historia", "Inglés"]

    def agregar_estudiante(self, nombre, edad, grado):
        """Agrega un nuevo estudiante"""
        self.estudiantes[nombre] = {
            "edad": edad,
            "grado": grado,
            "calificaciones": {materia: [] for materia in self.materias},
            "promedio_general": 0.0
        }
        print(f"✅ Estudiante {nombre} agregado")

    def agregar_calificacion(self, estudiante, materia, calificacion):
        """Agrega una calificación a un estudiante"""
        if estudiante not in self.estudiantes:
            print(f"❌ Estudiante {estudiante} no encontrado")
            return

        if materia not in self.materias:
            print(f"❌ Materia {materia} no válida")
            return

        self.estudiantes[estudiante]["calificaciones"][materia].append(calificacion)
        self.calcular_promedio_estudiante(estudiante)
        print(f"✅ Calificación {calificacion} agregada a {estudiante} en {materia}")

    def calcular_promedio_estudiante(self, estudiante):
        """Calcula el promedio de un estudiante"""
        calificaciones = self.estudiantes[estudiante]["calificaciones"]
        todas_las_calificaciones = []

        for materia, califs in calificaciones.items():
            todas_las_calificaciones.extend(califs)

        if todas_las_calificaciones:
            promedio = sum(todas_las_calificaciones) / len(todas_las_calificaciones)
            self.estudiantes[estudiante]["promedio_general"] = promedio

    def mostrar_estudiante(self, estudiante):
        """Muestra la información de un estudiante"""
        if estudiante not in self.estudiantes:
            print(f"❌ Estudiante {estudiante} no encontrado")
            return

        info = self.estudiantes[estudiante]
        print(f"\n=== Información de {estudiante} ===")
        print(f"Edad: {info['edad']}")
        print(f"Grado: {info['grado']}")
        print(f"Promedio general: {info['promedio_general']:.2f}")

        print("\nCalificaciones por materia:")
        for materia, califs in info["calificaciones"].items():
            if califs:
                promedio_materia = sum(califs) / len(califs)
                print(f"{materia}: {califs} (Promedio: {promedio_materia:.2f})")
            else:
                print(f"{materia}: Sin calificaciones")

    def mostrar_todos_estudiantes(self):
        """Muestra todos los estudiantes"""
        print("\n=== Todos los Estudiantes ===")
        for estudiante in self.estudiantes:
            self.mostrar_estudiante(estudiante)

# Usar el sistema de calificaciones
sistema = SistemaCalificaciones()

# Agregar estudiantes
sistema.agregar_estudiante("Ana Ruiz", 20, "Universitario")
sistema.agregar_estudiante("Carlos Díaz", 21, "Universitario")

# Agregar calificaciones
sistema.agregar_calificacion("Ana Ruiz", "Matemáticas", 90)
sistema.agregar_calificacion("Ana Ruiz", "Ciencias", 95)
sistema.agregar_calificacion("Carlos Díaz", "Matemáticas", 85)

# Mostrar información
sistema.mostrar_todos_estudiantes()
```

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
print(f"Precios finales: {precios_finales}")

# Filtrar precios altos
precios_altos = [precio for precio in precios if precio > 50.0]
print(f"Precios altos: {precios_altos}")
```

## Errores Comunes

### 1. Modificar tuplas

```python
# ❌ Malo
config = ("localhost", 8080)
config[0] = "127.0.0.1"  # Error

# ✅ Bueno
config = ("localhost", 8080)
# Crear nueva tupla
nueva_config = ("127.0.0.1",) + config[1:]
```

### 2. Acceder a claves inexistentes

```python
# ❌ Malo
usuario = {"nombre": "Ana"}
email = usuario["email"]  # Error si no existe

# ✅ Bueno
usuario = {"nombre": "Ana"}
email = usuario.get("email", "No especificado")  # Valor por defecto
```

### 3. Modificar lista mientras se itera

```python
# ❌ Malo
numeros = [1, 2, 3, 4, 5]
for num in numeros:
    if num % 2 == 0:
        numeros.remove(num)  # Puede causar comportamiento inesperado

# ✅ Bueno
numeros = [1, 2, 3, 4, 5]
numeros = [num for num in numeros if num % 2 != 0]
```

## Recursos Adicionales

### Enlaces útiles
- [Documentación oficial de Python sobre estructuras de datos](https://docs.python.org/3/tutorial/datastructures.html)
- [Tutorial de listas en Python](https://docs.python.org/3/tutorial/introduction.html#lists)
- [Tutorial de diccionarios en Python](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

### Conceptos relacionados
- **Comprensiones de listas**
- **Generadores**
- **Sets** (conjuntos)
- **Clases y objetos**

---

## Siguiente paso
Ahora que conoces las estructuras de datos básicas, es momento de aprender a organizar tu código en funciones reutilizables. Continúa con: **[Funciones](../03_Funciones_y_Modulos/01_funciones.md)**

---

*"La organización de los datos es la base de un buen software."*
