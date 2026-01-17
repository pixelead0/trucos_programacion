---
title: Bucles en Python
description: Aprende a repetir código eficientemente con for y while
---

import LessonMeta from '@site/src/components/LessonMeta';
import Checkpoint from '@site/src/components/Checkpoint';
import NextStep from '@site/src/components/NextStep';
import TryIt from '@site/src/components/TryIt';

<LessonMeta
  level="beginner"
  time="1.5 horas"
  prereqs={['Variables y Tipos', 'Condicionales y Lógica']}
/>

# Bucles en Python

## Qué vas a lograr

- Usar bucles `for` para iterar sobre listas, strings y rangos
- Usar bucles `while` para repetir hasta que se cumpla una condición
- Controlar bucles con `break`, `continue` y `pass`
- Anidar bucles para trabajar con estructuras complejas

## Concepto base

Imagina que tienes una lista de 100 productos y quieres mostrar cada uno. ¿Escribirías 100 líneas de `print()`? Eso sería terrible.

**Los bucles resuelven esto:** te permiten repetir código automáticamente. En lugar de escribir la misma acción 100 veces, escribes la acción una vez y le dices "repítela para cada elemento".

**En Python tienes dos tipos:**
- `for`: Cuando sabes cuántas veces repetir (o quieres iterar sobre una lista)
- `while`: Cuando no sabes cuántas veces, pero sabes la condición para parar

:::info Para principiantes
Piensa en los bucles como "haz esto para cada elemento" (for) o "haz esto mientras sea verdadero" (while). Son como una máquina que repite una tarea automáticamente.
:::

## Paso a paso

### 1. Bucle for - Para cuando sabes qué elementos procesar

El bucle `for` itera sobre una secuencia (lista, string, rango, etc.) y ejecuta código para cada elemento.

**Sintaxis básica:**

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

**Iterar sobre listas:**

```python
# Inventario de productos
productos = ["manzanas", "peras", "naranjas", "plátanos", "uvas"]

print("=== Inventario ===")
for producto in productos:
    print(f"- {producto}")

print(f"\nTotal de productos: {len(productos)}")
```

**Usar enumerate() para obtener índice:**

```python
# Lista numerada
tareas = ["revisar correos", "actualizar reporte", "reunión de equipo"]

print("=== Tareas del día ===")
for i, tarea in enumerate(tareas, 1):
    # i = índice (empezando en 1)
    # tarea = valor del elemento
    print(f"{i}. {tarea}")
```

:::tip Tip pro
`enumerate(tareas, 1)` empieza en 1 en lugar de 0, lo cual es más natural para listas numeradas. Si no especificas el segundo parámetro, empieza en 0.
:::

**Iterar sobre rangos:**

```python
# Contar hasta 10
for i in range(1, 11):
    # range(1, 11) genera: 1, 2, 3, ..., 10
    print(f"Número: {i}")

# Contar de 2 en 2 (números pares)
for i in range(0, 11, 2):
    # range(0, 11, 2) genera: 0, 2, 4, 6, 8, 10
    print(f"{i}...")
```

**Sintaxis de `range()`:**
- `range(10)` → 0, 1, 2, ..., 9 (10 números, empezando en 0)
- `range(1, 11)` → 1, 2, 3, ..., 10 (del 1 al 10)
- `range(0, 11, 2)` → 0, 2, 4, 6, 8, 10 (de 2 en 2)

**Iterar sobre strings:**

```python
# Deletrear una palabra
palabra = "PYTHON"
for letra in palabra:
    print(f"La letra es: {letra}")
```

### 2. Bucle while - Para cuando no sabes cuántas veces repetir

El bucle `while` repite código **mientras** una condición sea verdadera. A diferencia de `for`, no iteras sobre una lista, sino que repites hasta que algo cambie.

**Sintaxis básica:**

```python
# Estructura básica del bucle while
while condicion:
    # Código que se repite mientras la condición sea True
    print("Repitiendo...")
    # ⚠️ IMPORTANTE: modificar la condición para evitar bucle infinito
```

:::warning Error típico
**Bucle infinito**: Si la condición nunca se vuelve `False`, tendrás un bucle infinito. Tu programa se quedará ejecutándose para siempre. Siempre asegúrate de modificar la condición dentro del bucle.
:::

**Ejemplo práctico: Conexión a servidor**

```python
# Simular intentos de conexión
intentos = 0
conectado = False
max_intentos = 5

print("=== Intentando conectar al servidor ===")
while not conectado and intentos < max_intentos:
    intentos += 1
    print(f"Intento {intentos}: Conectando...")

    # Simular probabilidad de éxito
    import random
    if random.random() < 0.3:  # 30% de probabilidad
        print("¡Éxito! Conexión establecida")
        conectado = True
    else:
        print("Fallo en la conexión. Reintentando...")

# Después del bucle, verificar si se conectó
if conectado:
    print(f"¡Conectado en {intentos} intentos!")
else:
    print("No se pudo conectar después de 5 intentos")
```

**Bucle con entrada del usuario:**

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

### 3. Bucles anidados

Puedes poner bucles dentro de bucles:

```python
# Tabla de multiplicar
print("=== Tablas de Multiplicar ===")
for i in range(1, 6):  # Tablas del 1 al 5
    print(f"\nTabla del {i}:")
    for j in range(1, 11):  # Multiplicar del 1 al 10
        resultado = i * j
        print(f"  {i} x {j} = {resultado}")
```

### 4. Control de bucles: break, continue, pass

**break - Salir del bucle:**

```python
# Buscar un producto específico
id_buscado = 505
ids_productos = [101, 202, 303, 505, 606]

for id_prod in ids_productos:
    if id_prod == id_buscado:
        print("¡Producto encontrado!")
        break  # Sale del bucle inmediatamente
    print(f"Escaneando ID: {id_prod}")
```

**continue - Saltar a la siguiente iteración:**

```python
# Procesar solo números pares
for i in range(1, 11):
    if i % 2 != 0:  # Si es impar
        continue  # Saltar al siguiente
    print(f"Procesando par: {i}")
```

**pass - No hacer nada (placeholder):**

```python
# Estructura pendiente de implementar
tareas = ["iniciar_sistema", "cargar_config", "conectar_db"]

for tarea in tareas:
    if tarea == "conectar_db":
        pass  # TODO: Implementar conexión
        print(f"⚠️ {tarea}: Pendiente")
    else:
        print(f"✅ {tarea}: Completado")
```

## Errores comunes

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
    i += 1  # Incrementar el contador
```

:::warning Error típico
**Olvidar modificar la condición en while**: Siempre asegúrate de que algo dentro del bucle cambie la condición, o tendrás un bucle infinito.
:::

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

### 3. Confundir for con while

```python
# ❌ Cuando deberías usar for
i = 0
while i < len(lista):
    print(lista[i])
    i += 1

# ✅ Mejor usar for
for elemento in lista:
    print(elemento)
```

:::tip Tip pro
Usa `for` cuando iteras sobre una colección conocida. Usa `while` cuando no sabes cuántas veces necesitas repetir o cuando esperas una condición externa.
:::

## Ejercicios Prácticos

<TryIt>
### Ejercicio 1: Simulador de Cajero Automático

Crea un simulador de cajero con autenticación y menú:

```python
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

cajero_automatico()
```
</TryIt>

<TryIt>
### Ejercicio 2: Calculadora Estadística

Crea una calculadora que procese números hasta que el usuario escriba 'fin':

```python
def calcular_estadisticas():
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

    if numeros:
        print(f"\n=== Reporte Estadístico ===")
        print(f"N de muestras: {len(numeros)}")
        print(f"Suma total: {sum(numeros)}")
        print(f"Promedio: {sum(numeros) / len(numeros):.2f}")
        print(f"Máximo: {max(numeros)}")
        print(f"Mínimo: {min(numeros)}")
    else:
        print("No se ingresaron datos para analizar.")

calcular_estadisticas()
```
</TryIt>

## Checkpoint

<Checkpoint
  items={[
    "Puedes usar for para iterar sobre listas, strings y rangos",
    "Sabes usar enumerate() para obtener índices",
    "Entiendes cómo usar while para repetir hasta que se cumpla una condición",
    "Puedes controlar bucles con break, continue y pass",
    "Sabes anidar bucles cuando es necesario",
    "Entiendes cómo evitar bucles infinitos",
    "Estás listo para trabajar con estructuras de datos"
  ]}
/>

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

> **Nota**: En los ejercicios de este capítulo usamos `try/except` para manejar errores. Si quieres aprender más sobre esto, consulta el capítulo de [Manejo de Excepciones](../05_Manejo_de_Errores_y_Buenas_Practicas/01_excepciones.md).

## Siguiente paso

<NextStep
  to="/Introduccion_y_Fundamentos/git_intro"
  label="Siguiente: Git y Control de Versiones →"
/>
