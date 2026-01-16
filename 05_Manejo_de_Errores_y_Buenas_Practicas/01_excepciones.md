# Manejo de Excepciones en Python

## ¿Qué son las excepciones y por qué manejarlas?

Imagina que tu programa pide al usuario un número y divide 100 entre ese número. ¿Qué pasa si el usuario escribe "cero" o "abc"? Tu programa se rompe con un error feo y se cierra.

**Las excepciones son errores que ocurren durante la ejecución.** Sin manejo de excepciones, un solo error puede cerrar todo tu programa.

**Con manejo de excepciones:** Puedes "atrapar" errores, manejarlos elegantemente, y continuar ejecutando. Tu programa se vuelve robusto y profesional.

**Casos reales donde las necesitas:**
- Leer archivos que pueden no existir
- Convertir datos de usuario que pueden estar mal formateados
- Conectar a servicios que pueden estar caídos
- Dividir por cero, acceder a índices que no existen, etc.

> **Antes de continuar**: Asegúrate de entender [Variables](../01_Introduccion_y_Fundamentos/01_variables_y_tipos.md), [Condicionales](../01_Introduccion_y_Fundamentos/02_condicionales_y_logica.md) y [Bucles](../01_Introduccion_y_Fundamentos/04_bucles.md).

## Estructura Básica: try/except

La estructura básica es simple: intentas ejecutar código, y si falla, manejas el error:

```python
try:
    # Código que puede generar un error
    resultado = 10 / 0  # Esto causará un error
except:
    # Código que se ejecuta si ocurre CUALQUIER error
    print("¡Ocurrió un error!")
```

**¿Qué está pasando?**
- `try:` = "intenta ejecutar este código"
- Si todo va bien, el código se ejecuta y se salta el `except`
- Si hay un error, Python salta directamente al `except` y ejecuta ese código
- El programa continúa después del bloque `try/except`

**⚠️ Problema con `except:` sin especificar:** Atrapa TODOS los errores, incluso los que no esperas. Es mejor ser específico.

### Try/Except con Tipo de Error Específico

Es mejor especificar qué tipo de error esperas:

```python
try:
    resultado = 10 / 0
except ZeroDivisionError:
    # Solo atrapa errores de división por cero
    print("No se puede dividir por cero")
except Exception as e:
    # Exception es la clase base de todos los errores
    # 'as e' guarda el error en la variable 'e' para ver detalles
    print(f"Ocurrió un error: {e}")
```

**¿Por qué ser específico?**
- Si hay un error inesperado (como un typo en tu código), quieres verlo, no ocultarlo
- Diferentes errores requieren diferentes soluciones
- Es más fácil debuggear cuando sabes qué tipo de error ocurrió

**Orden importa:** Python evalúa los `except` de arriba hacia abajo. Pon los más específicos primero.

## Ejemplos Comunes

### Manejo de Archivos

Un caso muy común: leer archivos que pueden no existir o no tener permisos:

```python
try:
    with open('archivo.txt', 'r') as f:
        contenido = f.read()
except FileNotFoundError:
    # El archivo no existe en esa ruta
    print("El archivo no existe")
except PermissionError:
    # El archivo existe pero no tienes permisos para leerlo
    print("No tienes permisos para leer el archivo")
```

**¿Qué está pasando?**
- Intentas abrir `archivo.txt`
- Si no existe → `FileNotFoundError` → muestra mensaje amigable
- Si existe pero no tienes permisos → `PermissionError` → muestra mensaje diferente
- Si todo va bien → lee el contenido normalmente

**En la práctica:** Esto evita que tu programa se cierre con un error feo. En su lugar, muestras un mensaje útil al usuario.

### Validación de Datos de Usuario

Otro caso común: convertir entrada del usuario que puede estar mal formateada:

```python
try:
    numero = int("abc")  # Esto fallará porque "abc" no es un número
except ValueError:
    # ValueError ocurre cuando el formato no es el esperado
    print("No se pudo convertir a número")
```

**Caso real:** Cuando pides al usuario un número:
```python
entrada = input("Ingresa tu edad: ")
try:
    edad = int(entrada)
    print(f"Tienes {edad} años")
except ValueError:
    print("Por favor, ingresa un número válido")
```

**Sin try/except:** Si el usuario escribe "veinte", tu programa se cierra con un error.
**Con try/except:** Muestras un mensaje amigable y puedes pedirle que lo intente de nuevo.

### Manejo de Múltiples Tipos de Errores
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

## Buenas Prácticas

1. **Específico es Mejor**
```python
# ❌ Mal
try:
    # código
except:
    pass

# ✅ Bien
try:
    # código
except ValueError as e:
    print(f"Error de valor: {e}")
```

2. **Manejo de Múltiples Errores**
```python
try:
    # código
except (ValueError, TypeError) as e:
    print(f"Error de tipo o valor: {e}")
```

3. **Finally y Else**
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
        # Se ejecuta solo si NO hubo excepciones
        print("¡Archivo guardado correctamente!")
    finally:
        # Siempre se ejecuta, haya o no excepciones
        print("Cerrando archivo y liberando recursos.")

# Ejecutar la operación
guardar_archivo()
```

## Ejemplos Prácticos

### Ejemplo 1: Leer Archivo con Manejo de Errores
```python
def leer_archivo(ruta):
    try:
        with open(ruta, 'r') as f:
            return f.read()
    except FileNotFoundError:
        print(f"El archivo {ruta} no existe")
        return None
    except PermissionError:
        print(f"No tienes permisos para leer {ruta}")
        return None
    except Exception as e:
        print(f"Error inesperado: {e}")
        return None
```

### Ejemplo 2: Validar Entrada del Usuario
```python
def obtener_edad():
    """Solicita la edad al usuario con validación"""
    while True:
        try:
            edad = int(input("Ingresa tu edad: "))
            if edad < 0 or edad > 150:
                raise ValueError("La edad debe estar entre 0 y 150")
            return edad
        except ValueError as e:
            print(f"Error: {e}. Por favor, ingresa un número válido.")
        except KeyboardInterrupt:
            print("\nOperación cancelada por el usuario.")
            return None

# Usar la función
edad = obtener_edad()
if edad:
    print(f"Tienes {edad} años")
```

### Ejemplo 3: Procesador de Datos Robusto
```python
def procesar_numeros(lista_textos):
    """Convierte una lista de textos a números, manejando errores"""
    numeros_validos = []
    errores = []

    for i, texto in enumerate(lista_textos):
        try:
            numero = float(texto)
            numeros_validos.append(numero)
        except ValueError:
            errores.append(f"Índice {i}: '{texto}' no es un número válido")
        except Exception as e:
            errores.append(f"Índice {i}: Error inesperado - {e}")

    return numeros_validos, errores

# Probar
datos = ["10", "20.5", "abc", "30", "xyz"]
validos, errores = procesar_numeros(datos)
print(f"Números válidos: {validos}")
print(f"Errores encontrados: {errores}")
```

## Errores Comunes

### 1. Capturar todas las excepciones sin especificar
```python
# ❌ Malo - oculta errores importantes
try:
    resultado = operacion_riesgosa()
except:  # Captura TODO, incluso errores de programación
    print("Algo salió mal")

# ✅ Bueno - específico y descriptivo
try:
    resultado = operacion_riesgosa()
except ValueError as e:
    print(f"Error de valor: {e}")
except FileNotFoundError as e:
    print(f"Archivo no encontrado: {e}")
except Exception as e:
    print(f"Error inesperado: {e}")
    raise  # Re-lanzar si es un error crítico
```

### 2. No manejar excepciones en operaciones críticas
```python
# ❌ Malo - el programa se rompe si hay error
numero = int(input("Número: "))
resultado = 10 / numero

# ✅ Bueno - maneja errores apropiadamente
try:
    numero = int(input("Número: "))
    resultado = 10 / numero
    print(f"Resultado: {resultado}")
except ValueError:
    print("Por favor, ingresa un número válido")
except ZeroDivisionError:
    print("No se puede dividir por cero")
```

### 3. Usar pass en except sin documentar
```python
# ❌ Malo - oculta errores silenciosamente
try:
    operacion_importante()
except:
    pass  # ¿Por qué se ignora el error?

# ✅ Bueno - documenta por qué se ignora
try:
    operacion_importante()
except ValueError:
    # Ignoramos errores de formato esperados en datos externos
    pass
except Exception as e:
    # Log del error para debugging
    print(f"Error inesperado ignorado: {e}")
```

## Ejercicios Prácticos

### Ejercicio 1: Calculadora Segura
```python
def calculadora_segura():
    """Calculadora que maneja errores de entrada"""
    try:
        a = float(input("Primer número: "))
        operador = input("Operador (+, -, *, /): ")
        b = float(input("Segundo número: "))

        if operador == '+':
            resultado = a + b
        elif operador == '-':
            resultado = a - b
        elif operador == '*':
            resultado = a * b
        elif operador == '/':
            if b == 0:
                raise ZeroDivisionError("No se puede dividir por cero")
            resultado = a / b
        else:
            raise ValueError(f"Operador '{operador}' no válido")

        print(f"Resultado: {resultado}")

    except ValueError as e:
        print(f"Error de valor: {e}")
    except ZeroDivisionError as e:
        print(f"Error matemático: {e}")
    except KeyboardInterrupt:
        print("\nOperación cancelada")
    except Exception as e:
        print(f"Error inesperado: {e}")

# Ejecutar
calculadora_segura()
```

### Ejercicio 2: Validador de Archivos
```python
def validar_y_procesar_archivo(ruta):
    """Valida y procesa un archivo con manejo completo de errores"""
    try:
        # Verificar que el archivo existe
        from pathlib import Path
        archivo = Path(ruta)

        if not archivo.exists():
            raise FileNotFoundError(f"El archivo {ruta} no existe")

        if not archivo.is_file():
            raise ValueError(f"{ruta} no es un archivo válido")

        # Leer el archivo
        with open(ruta, 'r', encoding='utf-8') as f:
            contenido = f.read()

        # Procesar contenido
        lineas = contenido.split('\n')
        print(f"Archivo procesado: {len(lineas)} líneas")
        return lineas

    except FileNotFoundError as e:
        print(f"Error: {e}")
        return None
    except PermissionError:
        print(f"Error: No tienes permisos para leer {ruta}")
        return None
    except UnicodeDecodeError:
        print(f"Error: El archivo {ruta} no está en formato UTF-8")
        return None
    except Exception as e:
        print(f"Error inesperado al procesar {ruta}: {e}")
        return None

# Probar
resultado = validar_y_procesar_archivo("datos.txt")
```

## Consejos y Buenas Prácticas

1. **Siempre maneja excepciones específicas** cuando sea posible
2. **No uses `except:` sin especificar** el tipo de error
3. **Usa mensajes de error descriptivos** que ayuden a debuggear
4. **Considera usar `finally`** para limpieza de recursos
5. **Usa `else`** para código que solo debe ejecutarse si no hay errores
6. **Re-lanza excepciones críticas** que no puedes manejar
7. **Documenta por qué** ignoras ciertas excepciones

## Recursos Adicionales
- [Documentación oficial de excepciones](https://docs.python.org/3/tutorial/errors.html)
- [Lista de excepciones built-in](https://docs.python.org/3/library/exceptions.html)
- [Buenas prácticas de manejo de errores](https://docs.python-guide.org/writing/style/#exceptions)

---

## Siguiente paso
Ahora que sabes manejar errores, aprende a documentarlos y monitorearlos. Continúa con: **[Logging](./02_logging.md)**
