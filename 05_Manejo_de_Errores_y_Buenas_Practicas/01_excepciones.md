# Manejo de Excepciones en Python

## ¿Qué son las Excepciones?
Las excepciones son eventos que ocurren durante la ejecución de un programa que interrumpen el flujo normal de las instrucciones. En Python, usamos `try/except` para manejar estos eventos.

## Estructura Básica

### Try/Except
```python
try:
    # Código que puede generar un error
    resultado = 10 / 0
except:
    # Código que se ejecuta si ocurre un error
    print("¡Ocurrió un error!")
```

### Try/Except con Tipo de Error
```python
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("No se puede dividir por cero")
except Exception as e:
    print(f"Ocurrió un error: {e}")
```

## Ejemplos Comunes

### Manejo de Archivos
```python
try:
    with open('archivo.txt', 'r') as f:
        contenido = f.read()
except FileNotFoundError:
    print("El archivo no existe")
except PermissionError:
    print("No tienes permisos para leer el archivo")
```

### Validación de Datos
```python
try:
    numero = int("abc")
except ValueError:
    print("No se pudo convertir a número")
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

3. **Finally**
```python
try:
    # código
except Exception as e:
    print(f"Error: {e}")
finally:
    # Código que siempre se ejecuta
    print("Limpieza")
```

## Ejemplo Práctico
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

## Consejos
1. Siempre maneja excepciones específicas cuando sea posible
2. No uses `except:` sin especificar el tipo de error
3. Usa mensajes de error descriptivos
4. Considera usar `finally` para limpieza

## Recursos Adicionales
- [Documentación oficial de excepciones](https://docs.python.org/3/tutorial/errors.html)
- [Lista de excepciones built-in](https://docs.python.org/3/library/exceptions.html)
- [Buenas prácticas de manejo de errores](https://docs.python-guide.org/writing/style/#exceptions)
