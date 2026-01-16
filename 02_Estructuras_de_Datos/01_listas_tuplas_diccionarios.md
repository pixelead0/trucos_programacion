# Listas, Tuplas y Diccionarios en Python

## ¿Qué son las estructuras de datos?

Las estructuras de datos son formas de organizar y almacenar información en Python. Cada tipo de estructura tiene sus propias características y usos específicos para manejar datos eficientemente.

## Listas (Lists)

### ¿Qué son las listas?

Las listas son colecciones ordenadas y mutables de elementos. Son extremadamente versátiles y se utilizan para almacenar secuencias de datos que pueden cambiar, crecer o reducirse.

### Crear listas

```python
# Crear una lista vacía
clientes = []

# Crear una lista con elementos
bebidas = ["Agua", "Café", "Té", "Jugo"]

# Crear una lista con diferentes tipos de datos
inventario = ["Agua", 50, 1.50, True]
```

### Operaciones básicas con listas

```python
# Acceder a elementos
bebidas = ["Agua", "Café", "Té", "Jugo"]
print(bebidas[0])    # Primer elemento
print(bebidas[-1])   # Último elemento
print(bebidas[1:3])  # Elementos del índice 1 al 2

# Modificar elementos
bebidas[0] = "Agua Mineral"
print(bebidas)

# Agregar elementos
bebidas.append("Refresco")      # Al final
bebidas.insert(1, "Leche")      # En posición específica
print(bebidas)

# Quitar elementos
bebidas.remove("Té")            # Por valor
bebida_eliminada = bebidas.pop(0)  # Por índice
print(f"Eliminada: {bebida_eliminada}")
print(bebidas)
```

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

*"La organización de los datos es la base de un buen software."*

