# Clases y Objetos en Python

## ¿Qué es POO y cuándo la necesitas?

Hasta ahora has usado funciones y estructuras de datos por separado. Pero imagina que trabajas con usuarios: cada usuario tiene nombre, email, edad, y puede hacer cosas como "iniciar sesión" o "actualizar perfil".

**Sin POO:** Tendrías variables sueltas y funciones que reciben esos datos:
```python
nombre = "Ana"
email = "ana@email.com"
edad = 25

def iniciar_sesion(nombre, email):
    # código...
```

**Con POO:** Agrupas datos y comportamientos relacionados:
```python
class Usuario:
    def __init__(self, nombre, email, edad):
        self.nombre = nombre
        self.email = email
        self.edad = edad

    def iniciar_sesion(self):
        # código...
```

**¿Cuándo usar POO?**
- Cuando tienes entidades con datos Y comportamientos (Usuario, Producto, Carrito)
- Cuando necesitas crear múltiples "instancias" similares
- Cuando tu código crece y necesitas organización

**¿Cuándo NO usar POO?**
- Scripts simples de una sola función
- Procesamiento de datos simple
- Cuando las funciones son suficientes

> **Antes de continuar**: Asegúrate de entender [Funciones](../03_Funciones_y_Modulos/01_funciones.md) y [Diccionarios](../02_Estructuras_de_Datos/01_listas_tuplas_diccionarios.md).

## Conceptos Fundamentales

### Conceptos clave (en términos simples)

**Clase = Plano o molde**
- Es la definición, el "cómo debe ser" algo
- Ejemplo: La clase `Usuario` define que un usuario tiene nombre, email y puede iniciar sesión
- No es un usuario real, solo la plantilla

**Objeto = Instancia real**
- Es la "cosa" creada a partir de la clase
- Ejemplo: `usuario1 = Usuario("Ana", "ana@email.com", 25)` crea un objeto usuario real
- Puedes crear muchos objetos de la misma clase

**Atributos = Datos del objeto**
- Son las variables que guardan información del objeto
- Ejemplo: `self.nombre`, `self.email`, `self.edad`
- Cada objeto tiene sus propios valores

**Métodos = Acciones del objeto**
- Son funciones que el objeto puede ejecutar
- Ejemplo: `def iniciar_sesion(self):` - el usuario puede iniciar sesión
- Usan `self` para acceder a los atributos del objeto

**Analogía real:**
- Clase `Coche` = el diseño de un coche (tiene ruedas, motor, puede acelerar)
- Objeto `mi_coche` = tu coche específico (rojo, marca Toyota, con 50000 km)
- Atributos = color, marca, kilometraje
- Métodos = acelerar(), frenar(), encender()

## Crear una Clase Básica

### Sintaxis básica
```python
class NombreClase:
    def __init__(self, parametros):
        # Constructor: inicializa el objeto
        self.atributo = valor

    def metodo(self):
        # Comportamiento
        pass
```

### Ejemplo práctico completo

Vamos a crear una clase `Persona` que tenga datos (nombre, edad, energía) y comportamientos (saludar, trabajar):

```python
class Persona:
    def __init__(self, nombre, edad):
        # __init__ es el constructor - se ejecuta al crear el objeto
        self.nombre = nombre      # Atributo: guarda el nombre
        self.edad = edad          # Atributo: guarda la edad
        self.energia = 100        # Atributo: todos empiezan con 100 de energía

    def saludar(self):
        # Método: acción que puede hacer la persona
        print(f"Hola, soy {self.nombre}")

    def trabajar(self):
        # Método: otra acción, pero con lógica condicional
        if self.energia > 20:
            self.energia -= 20  # Gasta energía
            print(f"{self.nombre} está trabajando...")
        else:
            print(f"{self.nombre} está demasiado cansado para trabajar")

# Crear objetos (Instanciación)
# Cada objeto es independiente - tienen sus propios valores
persona1 = Persona("Ana", 28)
persona2 = Persona("Carlos", 35)

# Usar los objetos - llamar sus métodos
persona1.saludar()        # "Hola, soy Ana"
persona2.trabajar()       # "Carlos está trabajando..."
print(f"Energía de {persona2.nombre}: {persona2.energia}")  # 80 (100 - 20)
```

**¿Qué está pasando aquí?**
1. `__init__` se ejecuta automáticamente cuando creas un objeto
2. `self` se refiere al objeto actual (persona1 o persona2)
3. Cada objeto mantiene sus propios valores (Ana tiene 28 años, Carlos tiene 35)
4. Los métodos pueden modificar los atributos del objeto (`self.energia -= 20`)

**Prueba esto:** Crea `persona3` y haz que trabaje 6 veces. ¿Qué pasa con su energía?

## Atributos de Clase vs Instancia

### Atributos de instancia
Son específicos de cada objeto. Se definen dentro de `__init__` usando `self`.

```python
class Empleado:
    def __init__(self, nombre, id_empleado):
        self.nombre = nombre      # Único para cada empleado
        self.id = id_empleado     # Único para cada empleado

e1 = Empleado("Luis", 101)
e2 = Empleado("Marta", 102)
```

### Atributos de clase
Son compartidos por todas las instancias de la clase. Se definen directamente en la clase.

```python
class Empleado:
    empresa = "TechCorp Inc."  # Compartido por todos

    def __init__(self, nombre):
        self.nombre = nombre

e1 = Empleado("Luis")
e2 = Empleado("Marta")

print(e1.empresa)  # TechCorp Inc.
print(e2.empresa)  # TechCorp Inc.
```

## Tipos de Métodos

### Métodos de instancia
Reciben `self` como primer parámetro. Actúan sobre una instancia específica.

```python
    def saludar(self):
        print(f"Hola, soy {self.nombre}")
```

### Métodos de clase
Reciben `cls` como primer parámetro. Actúan sobre la clase, no sobre una instancia. Usan el decorador `@classmethod`.

```python
class Empleado:
    contador = 0

    def __init__(self):
        Empleado.contador += 1

    @classmethod
    def total_empleados(cls):
        return cls.contador
```

### Métodos estáticos
No reciben ni `self` ni `cls`. Son funciones normales que pertenecen lógicamente a la clase.

```python
    @staticmethod
    def es_dia_laboral(dia):
        return dia.lower() not in ["sábado", "domingo"]
```

## Herencia

La herencia permite crear nuevas clases basadas en clases existentes, reutilizando y extendiendo su código.

```python
# Clase Padre (Superclase)
class Vehiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

    def arrancar(self):
        print("El vehículo está arrancando")

# Clase Hija (Subclase)
class Coche(Vehiculo):
    def __init__(self, marca, modelo, puertas):
        super().__init__(marca, modelo)  # Llamar constructor del padre
        self.puertas = puertas

    def tocar_bocina(self):
        print("¡Bip bip!")

# Uso
mi_coche = Coche("Toyota", "Corolla", 4)
mi_coche.arrancar()  # Heredado
mi_coche.tocar_bocina()  # Propio
```

## Encapsulación

Proteger los datos internos de un objeto para que no sean modificados incorrectamente desde fuera.

- **Público**: `self.nombre` (Accesible desde cualquier lugar)
- **Protegido**: `self._nombre` (Convención: no tocar desde fuera)
- **Privado**: `self.__nombre` (Python lo oculta, difícil acceso desde fuera)

```python
class CuentaBancaria:
    def __init__(self, titular, saldo):
        self.titular = titular
        self.__saldo = saldo  # Privado

    def depositar(self, monto):
        if monto > 0:
            self.__saldo += monto

    def ver_saldo(self):
        return self.__saldo

cuenta = CuentaBancaria("Juan", 1000)
# cuenta.__saldo = 5000  # Esto daría error o no afectaría la variable real interna
cuenta.depositar(500)
print(cuenta.ver_saldo())
```

## Polimorfismo

Capacidad de objetos de diferentes clases de responder al mismo método de manera distinta.

```python
class Perro:
    def hablar(self):
        print("Guau!")

class Gato:
    def hablar(self):
        print("Miau!")

animales = [Perro(), Gato()]

for animal in animales:
    animal.hablar()  # Cada uno responde a su manera
```

## Ejercicios Prácticos

### Ejercicio 1: Sistema de Gestión de Biblioteca

```python
class Libro:
    def __init__(self, titulo, autor, isbn):
        self.titulo = titulo
        self.autor = autor
        self.isbn = isbn
        self.disponible = True

    def prestar(self):
        if self.disponible:
            self.disponible = False
            return True
        return False

    def devolver(self):
        self.disponible = True

class Biblioteca:
    def __init__(self):
        self.libros = []

    def agregar_libro(self, libro):
        self.libros.append(libro)
        print(f"Libro agregado: {libro.titulo}")

    def buscar_por_titulo(self, titulo):
        for libro in self.libros:
            if titulo.lower() in libro.titulo.lower():
                return libro
        return None

# Uso
biblio = Biblioteca()
l1 = Libro("Python 101", "Guido van Rossum", "12345")
l2 = Libro("Clean Code", "Robert Martin", "67890")

biblio.agregar_libro(l1)
biblio.agregar_libro(l2)

libro = biblio.buscar_por_titulo("python")
if libro and libro.prestar():
    print(f"Te has llevado: {libro.titulo}")
else:
    print("Libro no disponible o no encontrado")
```

## Buenas Prácticas

1.  **Clases sustantivos, Métodos verbos**: `class Usuario` y `def guardar()`.
2.  **Principio de Responsabilidad Única**: Una clase debe encargarse de una sola cosa.
3.  **Documentación**: Usa docstrings para explicar qué hace la clase y sus métodos.

## Errores Comunes

1.  **Olvidar `self`**: En Python es obligatorio poner `self` como primer parámetro en métodos de instancia.
2.  **No inicializar el padre**: Al usar herencia, si defines `__init__` en la hija, recuerda llamar a `super().__init__`.

## Recursos Adicionales

- [Tutorial oficial de Clases](https://docs.python.org/3/tutorial/classes.html)
- [Real Python: OOP in Python 3](https://realpython.com/python3-object-oriented-programming/)



### 2. Documentación
```python
class Calculadora:
    """Clase para realizar operaciones matemáticas básicas"""

    def __init__(self, marca):
        """
        Inicializa la calculadora

        Args:
            marca (str): Marca de la calculadora
        """
        self.marca = marca

    def sumar(self, a, b):
        """
        Suma dos números

        Args:
            a (float): Primer número
            b (float): Segundo número

        Returns:
            float: Resultado de la suma
        """
        return a + b
```

### 3. Encapsulación apropiada
```python
class CuentaBancaria:
    def __init__(self, titular, saldo_inicial):
        self.titular = titular  # Público
        self._saldo = saldo_inicial  # Protegido
        self.__numero_cuenta = self._generar_numero()  # Privado

    def _generar_numero(self):
        """Método protegido para generar número de cuenta"""
        import random
        return f"ACC{random.randint(100000, 999999)}"

    def obtener_saldo(self):
        """Método público para obtener saldo"""
        return self._saldo
```

## Errores Comunes

### 1. Olvidar self en métodos
```python
# ❌ Malo
class Persona:
    def __init__(self, nombre):
        self.nombre = nombre

    def saludar():
        print(f"Hola, soy {self.nombre}")  # Error: falta self

# ✅ Bueno
class Persona:
    def __init__(self, nombre):
        self.nombre = nombre

    def saludar(self):
        print(f"Hola, soy {self.nombre}")
```

### 2. No llamar super().__init__()
```python
# ❌ Malo
class Hijo(Padre):
    def __init__(self, nombre, edad):
        self.nombre = nombre  # No inicializa atributos del padre
        self.edad = edad

# ✅ Bueno
class Hijo(Padre):
    def __init__(self, nombre, edad):
        super().__init__(nombre)  # Inicializa atributos del padre
        self.edad = edad
```

### 3. Modificar atributos de clase incorrectamente
```python
# ❌ Malo
class Persona:
    contador = 0

    def __init__(self, nombre):
        self.nombre = nombre
        self.contador += 1  # Modifica instancia, no clase

# ✅ Bueno
class Persona:
    contador = 0

    def __init__(self, nombre):
        self.nombre = nombre
        Persona.contador += 1  # Modifica la clase
```

## Recursos Adicionales

## Recursos Adicionales

### Documentación Oficial
- [Documentación oficial de Python sobre clases](https://docs.python.org/3/tutorial/classes.html)
- [Tutorial de POO en Python](https://docs.python.org/3/tutorial/classes.html)
- [PEP 8 - Guía de estilo para código Python](https://www.python.org/dev/peps/pep-0008/)
- [PEP 3115 - Metaclasses](https://peps.python.org/pep-3115/)

### Bibliografía Recomendada
- **Fluent Python** (Luciano Ramalho) - Capítulos 1, 9-12: Data Model y POO
- **Effective Python** (Brett Slatkin) - Items sobre clases y objetos
- **Python Tricks** (Dan Bader) - Capítulo sobre POO en Python
- **Python Cookbook, 3rd Ed** (Beazley & Jones) - Recetas sobre clases y objetos
- **Clean Code** (Robert C. Martin) - Capítulos sobre POO y diseño de clases
- **Design Patterns: Elements of Reusable OOP** (Gang of Four) - Patrones de diseño clásicos

### Conceptos Relacionados
- [Dataclasses](./02_dataclasses.md) - Forma moderna de crear clases
- [Decoradores](../07_Conceptos_Avanzados/01_decorators.md) - Extiende clases y métodos
- [Módulos y Paquetes](../03_Funciones_y_Modulos/02_modulos_paquetes.md) - Organiza clases en módulos

---

## Siguiente paso
Ahora que entiendes las clases básicas, aprende sobre dataclasses, una forma moderna y concisa de crear clases. Continúa con: **[Dataclasses](./02_dataclasses.md)**
