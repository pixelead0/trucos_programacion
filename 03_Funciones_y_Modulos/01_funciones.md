# Funciones y Organización en Python

## ¿Qué son las funciones y por qué las necesitas?

Imagina que tienes que calcular el área de un rectángulo 10 veces en tu código. Podrías escribir `base * altura` 10 veces, pero ¿qué pasa si te equivocas en una? Tienes que corregir 10 lugares.

**Las funciones resuelven esto:** escribes la lógica una vez, la nombras, y la reutilizas cuando la necesites.

**Beneficios reales:**
- **Evitas repetir código**: Escribes una vez, usas muchas veces
- **Más fácil de corregir**: Si hay un error, lo arreglas en un solo lugar
- **Código más legible**: `calcular_total()` es más claro que 15 líneas de código
- **Organización**: Agrupas código relacionado

> **Antes de continuar**: Asegúrate de entender [Variables](../01_Introduccion_y_Fundamentos/01_variables_y_tipos.md), [Listas](../02_Estructuras_de_Datos/01_listas_tuplas_diccionarios.md) y [Bucles](../01_Introduccion_y_Fundamentos/04_bucles.md).

## Conceptos Básicos

### Definir una función

La sintaxis básica es simple:

```python
def nombre_de_la_funcion():
    """Docstring que explica qué hace la función"""
    # Código que hace algo
    print("¡Hola desde mi función!")
```

**Desglosando esto:**
- `def` = define (define una función)
- `nombre_de_la_funcion` = el nombre que le das (usa snake_case en Python)
- `()` = aquí van los parámetros (por ahora vacío)
- `:` = Python necesita esto para indicar que viene un bloque de código
- El código indentado es lo que hace la función

### Llamar una función

Definir una función no la ejecuta. Tienes que **llamarla**:

```python
# Llamar la función - simplemente escribe su nombre con paréntesis
nombre_de_la_funcion()  # Esto ejecuta el código de la función
```

**Piensa en una función como una receta:** definirla es escribir la receta, llamarla es cocinar con esa receta.

## Tipos de Funciones

### 1. Funciones sin parámetros

Estas funciones siempre hacen lo mismo, no reciben información externa:

```python
def mostrar_mensaje():
    """Función que muestra un mensaje simple"""
    print("¡Bienvenidos al curso de Python!")
    print("Espero que aprendan mucho.")

# Usar la función
mostrar_mensaje()  # Siempre muestra el mismo mensaje
```

**¿Cuándo usar esto?** Cuando necesitas ejecutar el mismo código varias veces pero no necesitas variar nada. Por ejemplo: mostrar un menú, inicializar una conexión, etc.

### 2. Funciones con parámetros

Estas funciones reciben información que pueden usar:

```python
def saludar_usuario(nombre, rol):
    """Función que saluda a un usuario específico"""
    print(f"¡Hola {nombre}!")
    print(f"Tu rol en el sistema es: {rol}")

# Usar la función con diferentes valores
saludar_usuario("Carlos", "Administrador")
# Salida: ¡Hola Carlos!
#         Tu rol en el sistema es: Administrador

saludar_usuario("Ana", "Editor")
# Salida: ¡Hola Ana!
#         Tu rol en el sistema es: Editor
```

**¿Qué está pasando?**
- `nombre` y `rol` son **parámetros** - variables que la función espera recibir
- Cuando llamas la función, pasas **argumentos** - los valores reales
- La función usa esos valores dentro de su código

**Ventaja:** Una sola función puede trabajar con diferentes datos. Sin parámetros, tendrías que crear una función diferente para cada usuario.

### 3. Funciones con valores de retorno
```python
def calcular_area_rectangulo(base, altura):
    """Calcula el área de un rectángulo"""
    area = base * altura
    return area

# Usar la función
area_total = calcular_area_rectangulo(10, 5)
print(f"El área es: {area_total}")
```

## Parámetros y Argumentos

### Parámetros posicionales
```python
def registrar_usuario(nombre, email, edad):
    """Registra un nuevo usuario"""
    print(f"Registrando a: {nombre}")
    print(f"Email: {email}")
    print(f"Edad: {edad}")

# Llamar con argumentos posicionales
registrar_usuario("Juan Pérez", "juan@email.com", 30)
```

### Parámetros con nombres (keyword arguments)
```python
def registrar_usuario(nombre, email, edad):
    """Registra un nuevo usuario"""
    print(f"Registrando a: {nombre}")
    print(f"Email: {email}")
    print(f"Edad: {edad}")

# Llamar con argumentos con nombres
registrar_usuario(edad=30,
                  nombre="Juan Pérez",
                  email="juan@email.com")
```

### Parámetros con valores por defecto
```python
def crear_reporte(titulo, formato="PDF", imprimir=False):
    """Crea un reporte con opciones por defecto"""
    estado = "🖨️ Imprimiendo" if imprimir else "💾 Guardando"
    print(f"Generando reporte: {titulo}")
    print(f"Formato: {formato}")
    print(f"Acción: {estado}")

# Usar con valores por defecto
crear_reporte("Ventas Mensuales")
crear_reporte("Inventario", "Excel")
crear_reporte("Nómina", formato="CSV", imprimir=True)
```

## Tipos de Retorno

### Retorno simple
```python
def cuadrado(numero):
    """Calcula el cuadrado de un número"""
    return numero * numero

resultado = cuadrado(5)
print(f"5 al cuadrado es: {resultado}")
```

### Retorno múltiple (tupla)
```python
def analizar_datos(datos):
    """Calcula estadísticas básicas de una lista"""
    if not datos:
        return 0, 0, 0, 0

    total = sum(datos)
    promedio = total / len(datos)
    maximo = max(datos)
    minimo = min(datos)

    return total, promedio, maximo, minimo

# Usar el retorno múltiple
ventas = [150, 200, 120, 300, 250]
total, prom, max_val, min_val = analizar_datos(ventas)

print(f"Total: {total}")
print(f"Promedio: {prom:.2f}")
print(f"Máximo: {max_val}")
print(f"Mínimo: {min_val}")
```

### Retorno de diccionario
```python
def crear_perfil(nombre, departamento, antiguedad):
    """Crea un perfil de empleado estructurado"""
    perfil = {
        'nombre': nombre,
        'departamento': departamento,
        'antiguedad': antiguedad,
        'nivel': 'Senior' if antiguedad >= 5 else 'Junior'
    }
    return perfil

# Usar la función
empleado = crear_perfil("María López", "IT", 6)
print(f"Perfil: {empleado}")
```

## Alcance de Variables (Scope)

### Variables locales
```python
def calcular_precio_final(precio):
    """Calcula precio con impuesto"""
    tasa_impuesto = 0.16  # Variable local
    impuesto = precio * tasa_impuesto
    total = precio + impuesto
    return total

# tasa_impuesto no existe fuera de la función
precio_final = calcular_precio_final(100)
print(f"Precio final: {precio_final}")
```

### Variables globales
```python
# Variable global
contador_visitas = 0

def registrar_visita():
    """Incrementa el contador de visitas"""
    global contador_visitas
    contador_visitas += 1
    print(f"Visita registrada. Total: {contador_visitas}")

# Usar la función
registrar_visita()
registrar_visita()
```

## Documentación de Funciones

### Docstrings
```python
def calcular_descuento(precio, porcentaje):
    """
    Calcula el descuento aplicable a un precio.

    Args:
        precio (float): El precio original del producto.
        porcentaje (float): El porcentaje de descuento (0-100).

    Returns:
        float: El monto del descuento calculado.

    Raises:
        ValueError: Si el precio o porcentaje son negativos.
    """
    if precio < 0 or porcentaje < 0:
        raise ValueError("Los valores no pueden ser negativos")

    return precio * (porcentaje / 100)

# Usar la función documentada
try:
    desc = calcular_descuento(1000, 20)
    print(f"Descuento: ${desc}")
except ValueError as e:
    print(f"Error: {e}")
```

## Buenas Prácticas

### 1. Nombres descriptivos
```python
# ❌ Malo
def f(x):
    return x * 12

# ✅ Bueno
def calcular_salario_anual(salario_mensual):
    """Calcula el salario anual basado en el mensual"""
    return salario_mensual * 12
```

### 2. Funciones pequeñas y específicas
```python
# ❌ Malo - función que hace demasiadas cosas
def procesar_pedido(pedido):
    # Validar, calcular impuestos, enviar email, actualizar stock...
    pass

# ✅ Bueno - dividir en funciones específicas
def validar_pedido(pedido):
    pass

def calcular_totales(pedido):
    pass

def actualizar_inventario(pedido):
    pass
```

### 3. Manejo de errores
```python
def division_segura(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("Error: Divisor no puede ser cero")
        return None
```

## Ejercicios Prácticos

### Ejercicio 1: Calculadora
```python
def calculadora(operacion, a, b):
    """
    Calculadora básica que soporta suma, resta, multiplicación y división.
    """
    if operacion == 'suma':
        return a + b
    elif operacion == 'resta':
        return a - b
    elif operacion == 'multiplicacion':
        return a * b
    elif operacion == 'division':
        if b != 0:
            return a / b
        else:
            print("Error: División por cero")
            return None
    else:
        print("Operación no reconocida")
        return None

# Pruebas
print(f"Suma: {calculadora('suma', 10, 5)}")
print(f"División: {calculadora('division', 10, 2)}")
```

### Ejercicio 2: Sistema de Evaluación
```python
def evaluar_rendimiento(ventas, meta):
    """
    Evalúa el rendimiento de ventas contra una meta.
    """
    porcentaje = (ventas / meta) * 100

    if porcentaje >= 120:
        calificacion = "Excelente"
        bono = True
    elif porcentaje >= 100:
        calificacion = "Bueno"
        bono = True
    elif porcentaje >= 80:
        calificacion = "Regular"
        bono = False
    else:
        calificacion = "Insuficiente"
        bono = False

    return {
        "ventas": ventas,
        "meta": meta,
        "porcentaje": round(porcentaje, 2),
        "calificacion": calificacion,
        "aplica_bono": bono
    }

# Prueba
resultado = evaluar_rendimiento(15000, 12000)
print(f"Evaluación: {resultado}")
```

### Ejercicio 3: Gestor de Tareas Simple
```python
class GestorTareas:
    def __init__(self):
        self.tareas = []

    def agregar(self, descripcion, prioridad="normal"):
        tarea = {
            "id": len(self.tareas) + 1,
            "descripcion": descripcion,
            "prioridad": prioridad,
            "completada": False
        }
        self.tareas.append(tarea)
        print(f"Tarea agregada: {descripcion}")

    def listar(self):
        print("\n--- Lista de Tareas ---")
        for t in self.tareas:
            estado = "[x]" if t["completada"] else "[ ]"
            print(f"{t['id']}. {estado} {t['descripcion']} ({t['prioridad']})")

    def completar(self, id_tarea):
        for t in self.tareas:
            if t["id"] == id_tarea:
                t["completada"] = True
                print(f"Tarea {id_tarea} completada.")
                return
        print("Tarea no encontrada.")

# Uso
gestor = GestorTareas()
gestor.agregar("Revisar correos", "alta")
gestor.agregar("Actualizar documentación")
gestor.listar()
gestor.completar(1)
gestor.listar()
```

## Errores Comunes

### 1. Olvidar el return
Si una función no tiene `return`, devuelve `None` por defecto. Asegúrate de retornar los valores que necesitas.

### 2. Modificar variables globales sin `global`
Si intentas asignar valor a una variable global dentro de una función sin declararla como `global`, Python creará una nueva variable local en su lugar.

### 3. Argumentos mutables por defecto
Evita usar listas o diccionarios como valores por defecto en argumentos, ya que mantienen su estado entre llamadas.

```python
# ❌ Malo
def agregar_item(item, lista=[]):
    lista.append(item)
    return lista

# ✅ Bueno
def agregar_item(item, lista=None):
    if lista is None:
        lista = []
    lista.append(item)
    return lista
```

## Recursos Adicionales

- [Documentación oficial sobre funciones](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)
- [Guía de estilo PEP 8](https://peps.python.org/pep-0008/)

---

## Siguiente paso
Ahora que sabes crear funciones, aprende a organizarlas en módulos y paquetes. Continúa con: **[Módulos y Paquetes](./02_modulos_paquetes.md)**
