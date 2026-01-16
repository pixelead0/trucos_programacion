# Bucles y Manejo de Errores en Python

## ¿Qué son los bucles?
Los bucles permiten repetir una acción varias veces sin tener que escribir el mismo código una y otra vez. Son fundamentales para automatizar tareas repetitivas.

## Bucle for - Para cuando sabes cuántas veces repetir

### Sintaxis básica
```python
# Estructura básica del bucle for
for variable in secuencia:
    # Código que se repite
    print(variable)
```

### Iterar sobre listas
```python
# Inventario de productos
productos = ["manzanas", "peras", "naranjas", "plátanos", "uvas"]

print("=== Inventario ===")
for producto in productos:
    print(f"- {producto}")

print(f"\nTotal de productos: {len(productos)}")
```

### Usar enumerate() para obtener índice
```python
# Lista numerada
tareas = ["revisar correos", "actualizar reporte", "reunión de equipo"]

print("=== Tareas del día ===")
for i, tarea in enumerate(tareas, 1):
    print(f"{i}. {tarea}")
```

### Iterar sobre rangos
```python
# Contar hasta 10
print("=== Conteo simple ===")
for i in range(1, 11):
    print(f"Número: {i}")

# Contar de 2 en 2
print("\n=== Conteo de pares ===")
for i in range(0, 11, 2):
    print(f"{i}...")
```

### Iterar sobre strings
```python
# Deletrear una palabra
palabra = "PYTHON"
print("=== Deletreando ===")
for letra in palabra:
    print(f"La letra es: {letra}")
```

## Bucle while - Para cuando no sabes cuántas veces repetir

### Sintaxis básica
```python
# Estructura básica del bucle while
while condicion:
    # Código que se repite
    print("Repitiendo...")
    # Importante: modificar la condición para evitar bucle infinito
```

### Ejemplo práctico: Conexión a servidor
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
    if random.random() < 0.3:  # 30% de probabilidad de éxito
        print("¡Éxito! Conexión establecida")
        conectado = True
    else:
        print("Fallo en la conexión. Reintentando...")

if conectado:
    print(f"¡Conectado en {intentos} intentos!")
else:
    print("No se pudo conectar después de 5 intentos")
```

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

## Manejo de errores con try/except

### Sintaxis básica
```python
# Estructura básica del manejo de errores
try:
    # Código que puede fallar
    resultado = 10 / 0
except ZeroDivisionError:
    # Qué hacer si hay error
    print("Error: No se puede dividir por cero")
```

### Tipos de errores comunes
```python
# Manejo de múltiples errores
def procesar_dato(dato):
    try:
        if dato == "texto_invalido":
            # Simular error de valor
            raise ValueError("El formato del texto no es válido")
        elif dato == "error_acceso":
            # Simular error de clave/acceso
            raise KeyError("Clave no encontrada")
        else:
            print(f"Procesando: {dato}")
            return True
    except ValueError as e:
        print(f"Error de valor: {e}")
        return False
    except KeyError as e:
        print(f"Error de acceso: {e}")
        return False
    except Exception as e:
        print(f"Error inesperado: {e}")
        return False

# Probar diferentes casos
casos = ["dato_valido", "texto_invalido", "error_acceso"]
for caso in casos:
    procesar_dato(caso)
```

### Manejo de errores con else y finally
```python
# Operación con limpieza de recursos
def guardar_archivo():
    try:
        print("Abriendo archivo...")
        # Simular operación
        import random
        if random.random() < 0.7:  # 70% de éxito
            print("Guardando datos...")
            return True
        else:
            raise Exception("Error de escritura en disco")
    except Exception as e:
        print(f"Error: {e}")
        return False
    else:
        print("¡Archivo guardado correctamente!")
    finally:
        print("Cerrando archivo y liberando recursos.")

# Ejecutar la operación
guardar_archivo()
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

### 2. No manejar excepciones
```python
# ❌ Error común
numero = int(input("Número: "))  # Si el usuario escribe texto, el programa se cierra

# ✅ Correcto
try:
    numero = int(input("Número: "))
except ValueError:
    print("Por favor, ingresa un número válido")
```

### 3. Usar break fuera de un bucle
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
- [Documentación oficial - Control Flow](https://docs.python.org/3/tutorial/controlflow.html)
- [Tutorial de Python - Bucles](https://docs.python.org/3/tutorial/introduction.html#first-steps-towards-programming)
- [Manejo de excepciones](https://docs.python.org/3/tutorial/errors.html)
- [PEP 8 - Guía de estilo](https://peps.python.org/pep-0008/)

