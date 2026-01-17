# Bucles en Python

## ¿Qué son los bucles y por qué los necesitas?

Imagina que tienes una lista de 100 productos y quieres mostrar cada uno. ¿Escribirías 100 líneas de `print()`? Eso sería terrible.

**Los bucles resuelven esto:** te permiten repetir código automáticamente. En lugar de escribir la misma acción 100 veces, escribes la acción una vez y le dices "repítela para cada elemento".

**Casos reales donde los usas:**
- Procesar todos los archivos en una carpeta
- Enviar emails a una lista de contactos
- Validar cada fila de un archivo CSV
- Repetir una acción hasta que se cumpla una condición

**En Python tienes dos tipos:**
- `for`: Cuando sabes cuántas veces repetir (o quieres iterar sobre una lista)
- `while`: Cuando no sabes cuántas veces, pero sabes la condición para parar

> **Antes de continuar**: Asegúrate de entender [Variables](./01_variables_y_tipos.md) y [Condicionales](./02_condicionales_y_logica.md).

## Bucle for - Para cuando sabes qué elementos procesar

El bucle `for` itera sobre una secuencia (lista, string, rango, etc.) y ejecuta código para cada elemento.

### Sintaxis básica

```python
# Estructura básica del bucle for
for variable in secuencia:
    # Código que se repite para cada elemento
    print(variable)
```

**¿Qué está pasando?**
- `for` = palabra clave que inicia el bucle
- `variable` = nombre que le das al elemento actual (puede ser cualquier nombre)
- `in` = palabra clave que indica "dentro de"
- `secuencia` = la colección sobre la que iteras (lista, string, etc.)
- El código indentado se ejecuta **una vez por cada elemento**

### Iterar sobre listas

El caso más común: procesar cada elemento de una lista:

```python
# Inventario de productos
productos = ["manzanas", "peras", "naranjas", "plátanos", "uvas"]

print("=== Inventario ===")
for producto in productos:
    # En cada iteración, 'producto' toma el valor del elemento actual
    print(f"- {producto}")

print(f"\nTotal de productos: {len(productos)}")

# Salida:
# === Inventario ===
# - manzanas
# - peras
# - naranjas
# - plátanos
# - uvas
#
# Total de productos: 5
```

**¿Qué está pasando paso a paso?**
1. Primera iteración: `producto = "manzanas"` → imprime "- manzanas"
2. Segunda iteración: `producto = "peras"` → imprime "- peras"
3. Y así hasta terminar la lista

**El nombre `producto` es arbitrario:** Podrías usar `item`, `p`, `fruta`, lo que quieras. Pero usa nombres descriptivos.

### Usar enumerate() para obtener índice

A veces necesitas el índice (posición) del elemento además de su valor. `enumerate()` te da ambos:

```python
# Lista numerada
tareas = ["revisar correos", "actualizar reporte", "reunión de equipo"]

print("=== Tareas del día ===")
for i, tarea in enumerate(tareas, 1):
    # i = índice (empezando en 1 por el segundo parámetro)
    # tarea = valor del elemento
    print(f"{i}. {tarea}")

# Salida:
# === Tareas del día ===
# 1. revisar correos
# 2. actualizar reporte
# 3. reunión de equipo
```

**¿Por qué `enumerate(tareas, 1)`?**
- `enumerate(tareas)` devuelve índices empezando en 0
- `enumerate(tareas, 1)` empieza en 1 (más natural para listas numeradas)
- `enumerate(tareas, 10)` empezaría en 10

**¿Cuándo usar `enumerate()`?**
- Cuando necesitas mostrar números (1, 2, 3...)
- Cuando necesitas modificar elementos por posición
- Cuando quieres saber en qué posición estás dentro del bucle

### Iterar sobre rangos

`range()` genera una secuencia de números. Útil cuando necesitas repetir algo un número específico de veces:

```python
# Contar hasta 10
print("=== Conteo simple ===")
for i in range(1, 11):
    # range(1, 11) genera: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    # Nota: el 11 NO se incluye (como las listas, el último índice no se incluye)
    print(f"Número: {i}")

# Salida:
# === Conteo simple ===
# Número: 1
# Número: 2
# ... (hasta 10)
```

**Sintaxis de `range()`:**
- `range(10)` → 0, 1, 2, ..., 9 (10 números, empezando en 0)
- `range(1, 11)` → 1, 2, 3, ..., 10 (del 1 al 10)
- `range(0, 11, 2)` → 0, 2, 4, 6, 8, 10 (de 2 en 2)

**Contar de 2 en 2 (números pares):**

```python
print("\n=== Conteo de pares ===")
for i in range(0, 11, 2):
    # range(0, 11, 2) genera: 0, 2, 4, 6, 8, 10
    # El tercer parámetro es el "paso" (step)
    print(f"{i}...")

# Salida:
# === Conteo de pares ===
# 0...
# 2...
# 4...
# 6...
# 8...
# 10...
```

**¿Cuándo usar `range()`?**
- Cuando necesitas repetir algo N veces: `for i in range(5):`
- Cuando necesitas índices numéricos: `for i in range(len(lista)):`
- Cuando necesitas secuencias numéricas con pasos específicos

### Iterar sobre strings
```python
# Deletrear una palabra
palabra = "PYTHON"
print("=== Deletreando ===")
for letra in palabra:
    print(f"La letra es: {letra}")
```

## Bucle while - Para cuando no sabes cuántas veces repetir

El bucle `while` repite código **mientras** una condición sea verdadera. A diferencia de `for`, no iteras sobre una lista, sino que repites hasta que algo cambie.

### Sintaxis básica

```python
# Estructura básica del bucle while
while condicion:
    # Código que se repite mientras la condición sea True
    print("Repitiendo...")
    # ⚠️ IMPORTANTE: modificar la condición para evitar bucle infinito
```

**¿Cuándo usar `while`?**
- Cuando no sabes cuántas veces necesitas repetir
- Cuando esperas una condición externa (usuario presiona "salir", conexión exitosa, etc.)
- Cuando necesitas repetir hasta que algo cambie

**⚠️ CUIDADO:** Si la condición nunca se vuelve `False`, tendrás un **bucle infinito**. Tu programa se quedará ejecutándose para siempre (o hasta que lo detengas con Ctrl+C).

### Ejemplo práctico: Conexión a servidor

Un caso real: intentar conectar a un servidor hasta que funcione o se agoten los intentos:

```python
# Simular intentos de conexión
intentos = 0
conectado = False
max_intentos = 5

print("=== Intentando conectar al servidor ===")
while not conectado and intentos < max_intentos:
    # Condición: seguir mientras NO esté conectado Y no hayamos superado el límite
    intentos += 1  # Incrementar contador
    print(f"Intento {intentos}: Conectando...")

    # Simular probabilidad de éxito (en la vida real sería una conexión real)
    import random
    if random.random() < 0.3:  # 30% de probabilidad de éxito
        print("¡Éxito! Conexión establecida")
        conectado = True  # Esto hace que la condición del while sea False
    else:
        print("Fallo en la conexión. Reintentando...")

# Después del bucle, verificar si se conectó
if conectado:
    print(f"¡Conectado en {intentos} intentos!")
else:
    print("No se pudo conectar después de 5 intentos")
```

**¿Qué está pasando aquí?**
1. El bucle se ejecuta mientras `not conectado and intentos < max_intentos`
2. En cada iteración, intenta conectar
3. Si tiene éxito, `conectado = True` y el bucle termina
4. Si falla 5 veces, `intentos >= max_intentos` y el bucle termina
5. Después del bucle, verificamos si se conectó o no

**¿Por qué `while` y no `for`?**
Porque no sabes cuántos intentos necesitarás. Podría ser 1, 3, o 5. `while` se adapta a la situación.

### Bucle con entrada del usuario
```python
# Pedir contraseña hasta acertar
contraseña_correcta = "secreto123"
intentos = 0

print("=== Validación de Seguridad ===")

while intentos < 3:
    respuesta = input("Introduce la contraseña: ")
    intentos += 1

    if respuesta == contraseña_correcta:
        print("¡Acceso concedido!")
        break
    else:
        print(f"Contraseña incorrecta. Intento {intentos}/3.")
else:
    print("Cuenta bloqueada. Demasiados intentos fallidos.")
```

## Bucles anidados

### Estructura básica
```python
# Organización de archivos
carpetas = ["documentos", "imágenes", "videos"]
archivos = ["vacaciones", "trabajo", "familia"]

print("=== Escaneo de Sistema de Archivos ===")
for carpeta in carpetas:
    print(f"\nCarpeta: {carpeta}")
    for archivo in archivos:
        print(f"  - {archivo}.{carpeta[:3]}") # Ejemplo: vacaciones.doc
```

### Ejemplo práctico: Tabla de multiplicar
```python
# Generar tablas de multiplicar
print("=== Tablas de Multiplicar ===")
for i in range(1, 6):  # Tablas del 1 al 5
    print(f"\nTabla del {i}:")
    for j in range(1, 11):  # Multiplicar del 1 al 10
        resultado = i * j
        print(f"  {i} x {j} = {resultado}")
```

## Control de bucles: break, continue, pass

### break - Salir del bucle
```python
# Buscar un producto específico
id_buscado = 505
ids_productos = [101, 202, 303, 505, 606]

print(f"=== Buscando Producto ID: {id_buscado} ===")
for id_prod in ids_productos:
    print(f"Escaneando ID: {id_prod}")
    if id_prod == id_buscado:
        print("¡Producto encontrado!")
        break
    else:
        print("No es el producto buscado.")
```

### continue - Saltar a la siguiente iteración
```python
# Procesar solo números pares
print("=== Procesando números pares ===")
for i in range(1, 11):
    if i % 2 != 0:  # Si es impar
        continue  # Saltar al siguiente
    print(f"Procesando par: {i}")
```

### pass - No hacer nada (placeholder)
```python
# Estructura pendiente de implementar
tareas = ["iniciar_sistema", "cargar_config", "conectar_db"]

print("=== Inicialización ===")
for tarea in tareas:
    if tarea == "conectar_db":
        pass  # TODO: Implementar conexión a base de datos
        print(f"⚠️ {tarea}: Pendiente de implementación")
    else:
        print(f"✅ {tarea}: Completado")
```

## Ejercicios Prácticos

### Ejercicio 1: Simulador de Cajero Automático
```python
# Simulador simple de cajero
def cajero_automatico():
    print("=== Cajero Automático ===")
    saldo = 1000
    intentos = 0
    max_intentos = 3
    pin_correcto = "1234"

    # Autenticación
    while intentos < max_intentos:
        pin = input("Ingrese su PIN: ")
        if pin == pin_correcto:
            print("¡Bienvenido!")
            break
        else:
            intentos += 1
            print(f"PIN incorrecto. Intento {intentos}/{max_intentos}")
    else:
        print("Tarjeta bloqueada por seguridad.")
        return

    # Menú de operaciones
    while True:
        print("\nOpciones:")
        print("1. Consultar saldo")
        print("2. Retirar dinero")
        print("3. Salir")

        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            print(f"Su saldo es: ${saldo}")
        elif opcion == "2":
            try:
                monto = float(input("Monto a retirar: "))
                if monto > saldo:
                    print("Fondos insuficientes.")
                elif monto <= 0:
                    print("Monto inválido.")
                else:
                    saldo -= monto
                    print(f"Retiro exitoso. Nuevo saldo: ${saldo}")
            except ValueError:
                print("Por favor ingrese un número válido.")
        elif opcion == "3":
            print("Gracias por usar nuestro cajero.")
            break
        else:
            print("Opción no válida.")

# Ejecutar el simulador
cajero_automatico()
```

### Ejercicio 2: Procesador de Pedidos
```python
# Sistema de procesamiento de pedidos
def procesar_pedidos():
    print("=== Sistema de Pedidos ===")

    pedidos_pendientes = 5
    procesados = 0
    errores = 0

    import time
    import random

    while pedidos_pendientes > 0:
        pedidos_pendientes -= 1
        print(f"\nProcesando pedido #{procesados + 1}...")

        try:
            # Simular procesamiento
            if random.random() < 0.2:  # 20% de probabilidad de error
                raise Exception("Error de conexión con el almacén")

            print("Verificado stock... OK")
            print("Verificado pago... OK")
            print("Generando envío... OK")
            procesados += 1

        except Exception as e:
            print(f"❌ Error al procesar pedido: {e}")
            errores += 1

    print(f"\n=== Resumen ===")
    print(f"Total procesados: {procesados}")
    print(f"Total errores: {errores}")

# Ejecutar el procesador
procesar_pedidos()
```

### Ejercicio 3: Calculadora Estadística
```python
# Calculadora de estadísticas de datos
def calcular_estadisticas_datos():
    print("=== Herramienta de Análisis de Datos ===")

    numeros = []
    print("Ingresa valores numéricos (escribe 'fin' para terminar):")

    while True:
        try:
            entrada = input("Valor: ")
            if entrada.lower() == 'fin':
                break

            numero = float(entrada)
            numeros.append(numero)
            print(f"Registrado: {numero}")

        except ValueError:
            print("Por favor, ingresa un número válido o 'fin'")
        except KeyboardInterrupt:
            print("\nOperación cancelada por el usuario.")
            break

    if numeros:
        print(f"\n=== Reporte Estadístico ===")
        print(f"N de muestras: {len(numeros)}")
        print(f"Suma total: {sum(numeros)}")
        print(f"Promedio: {sum(numeros) / len(numeros):.2f}")
        print(f"Máximo: {max(numeros)}")
        print(f"Mínimo: {min(numeros)}")
    else:
        print("No se ingresaron datos para analizar.")

# Ejecutar la calculadora
calcular_estadisticas_datos()
```

## Errores Comunes y Cómo Evitarlos

### 1. Bucle infinito
```python
# ❌ Error común
i = 0
while i < 10:
    print(i)
    # Al olvidar incrementar i, el bucle nunca termina

# ✅ Correcto
i = 0
while i < 10:
    print(i)
    i += 1
```

### 2. Usar break fuera de un bucle
```python
# ❌ Error común
if condicion:
    break  # Error: break solo funciona dentro de bucles

# ✅ Correcto
for i in range(10):
    if condicion:
        break  # Correcto
```

## Recursos Adicionales

### Documentación Oficial
- [Documentación oficial - Control Flow](https://docs.python.org/3/tutorial/controlflow.html)
- [Tutorial de Python - Bucles](https://docs.python.org/3/tutorial/introduction.html#first-steps-towards-programming)
- [PEP 8 - Guía de estilo](https://peps.python.org/pep-0008/)

### Bibliografía Recomendada
- **Python Tricks** (Dan Bader) - Capítulo sobre bucles y iteración eficiente
- **Effective Python** (Brett Slatkin) - Item 27: Use Comprehensions Instead of map and filter
- **Automate the Boring Stuff** (Al Sweigart) - Capítulo 2: Flow Control (bucles)
- **Python Cookbook, 3rd Ed** (Beazley & Jones) - Recetas sobre iteración y bucles
- **Fluent Python** (Luciano Ramalho) - Capítulo 14: Iterables, Iterators, and Generators

### Conceptos Relacionados
- [Estructuras de Datos](../02_Estructuras_de_Datos/01_listas_tuplas_diccionarios.md) - Aprende a trabajar con colecciones
- [Generadores e Iteradores](../07_Conceptos_Avanzados/04_generadores_iteradores.md) - Iteración avanzada

---

## Siguiente paso
Ahora que dominas los bucles, es momento de aprender a organizar tu código en estructuras de datos. Continúa con: **[Listas, Tuplas y Diccionarios](../02_Estructuras_de_Datos/01_listas_tuplas_diccionarios.md)**

> **Nota**: En los ejercicios de este capítulo usamos `try/except` para manejar errores. Si quieres aprender más sobre esto, consulta el capítulo de [Manejo de Excepciones](../05_Manejo_de_Errores_y_Buenas_Practicas/01_excepciones.md).
