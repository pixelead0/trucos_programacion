---
title: Testing en Python
description: Escribe tests profesionales con unittest y pytest
---

import LessonMeta from '@site/src/components/LessonMeta';
import LessonMap from '@site/src/components/LessonMap';
import Checkpoint from '@site/src/components/Checkpoint';
import NextStep from '@site/src/components/NextStep';
import TryIt from '@site/src/components/TryIt';
import ExpectedOutput from '@site/src/components/ExpectedOutput';
import ProgressIndicator from '@site/src/components/ProgressIndicator';

<LessonMeta
  level="advanced"
  time="2 horas"
  prereqs={['Funciones', 'Módulos y Paquetes', 'Manejo de Errores']}
/>

<ProgressIndicator
  module="Módulo 08: Herramientas Profesionales"
  lesson={4}
  total={5}
/>

# Testing en Python

<LessonMap
  objectives={[
    "Escribir tests con unittest y pytest",
    "Usar fixtures y mocks",
    "Testear funciones, clases y módulos",
    "Aplicar TDD (Test-Driven Development)",
    "Configurar CI/CD con tests automáticos"
  ]}
  useCases={[
    "Verificar que código funciona después de cambios",
    "Documentar comportamiento esperado del código",
    "Encontrar bugs antes de producción",
    "Refactoring seguro: tests garantizan que nada se rompe",
    "CI/CD: ejecutar tests automáticamente en cada commit",
    "Colaboración: tests como contrato entre desarrolladores"
  ]}
  time="2 horas"
  level="advanced"
/>

## 🎯 ¿Por qué aprender testing?

Imagina que cambias una función que usan 10 partes de tu código. ¿Cómo sabes que no rompiste nada? Podrías probar manualmente cada parte, pero eso es lento y propenso a errores.

El testing es esencial porque:
- Confianza al cambiar código: sabes que no rompiste nada existente
- Documentación viva: los tests muestran cómo se usa el código
- Detección temprana: encuentras errores antes de que lleguen a producción
- Refactoring seguro: puedes mejorar código sabiendo que los tests te avisan si algo falla
- Profesionalismo: todos los proyectos profesionales tienen tests

## 🌍 Casos reales donde se usa

El testing está en todos los proyectos profesionales:

- **Verificar funcionalidad**: Después de agregar nuevas características
- **Prevenir regresiones**: Antes de hacer deploy a producción
- **Reproducir bugs**: Escribes un test que reproduce el bug, luego lo arreglas
- **Refactoring seguro**: Mejorar código sabiendo que los tests verifican que funciona
- **CI/CD**: Ejecutar tests automáticamente en cada commit
- **Colaboración**: Tests como contrato entre desarrolladores

**Ejemplo real**: En proyectos como Django o Flask, cada cambio tiene tests asociados. Si un test falla, sabes inmediatamente qué se rompió.

## 💡 Concepto base

Los tests son código que verifica automáticamente que tu código funciona. Ejecutas los tests después de cada cambio y sabes inmediatamente si algo se rompió.

**Lo genial de Python:** Tienes `unittest` (incluido) y `pytest` (más popular, más fácil de usar). Ambos funcionan bien.

```python
# Test simple con unittest
import unittest

def sumar(a, b):
    return a + b

class TestSumar(unittest.TestCase):
    def test_sumar_positivos(self):
        self.assertEqual(sumar(2, 3), 5)

    def test_sumar_negativos(self):
        self.assertEqual(sumar(-1, -2), -3)

# Ejecutar tests
if __name__ == '__main__':
    unittest.main()
```

<ExpectedOutput>
```
..
----------------------------------------------------------------------
Ran 2 tests in 0.000s

OK
```
</ExpectedOutput>

:::tip 🌮 Analogía culinaria
Los tests son como tener un inspector de calidad que prueba cada plato antes de servirlo. Cada vez que cambias la receta de chilaquiles al pastor, el inspector verifica que el sabor, la textura y la presentación sean correctos. Si algo falla, sabes inmediatamente qué está mal y puedes corregirlo antes de servir al cliente. Los tests te dan confianza para mejorar tus recetas (refactorizar código) sabiendo que el inspector te avisará si algo sale mal.
:::

:::info Para principiantes
**En Python:** Tienes `unittest` (incluido en Python) y `pytest` (más popular, más fácil de usar). Ambos funcionan bien. Empieza con `unittest` que ya está incluido, luego explora `pytest` cuando te sientas cómodo.
:::

## Conceptos Básicos

### Estructura Básica de Tests con unittest

`unittest` es el framework de testing incluido en Python. La estructura básica:

```python
import unittest

# Tu clase debe heredar de unittest.TestCase
class TestCalculadora(unittest.TestCase):

    def setUp(self):
        # Se ejecuta ANTES de cada test
        # Útil para crear objetos que todos los tests necesitan
        self.calc = Calculadora()  # Cada test tiene su propia calculadora limpia

    def test_suma(self):
        # Los métodos que empiezan con 'test_' son ejecutados como tests
        resultado = self.calc.sumar(2, 3)
        self.assertEqual(resultado, 5)  # Verifica que resultado == 5

    def test_resta(self):
        resultado = self.calc.restar(5, 3)
        self.assertEqual(resultado, 2)

    def tearDown(self):
        # Se ejecuta DESPUÉS de cada test
        # Útil para limpiar recursos (cerrar archivos, conexiones, etc.)
        pass

# Esto permite ejecutar los tests directamente: python test.py
if __name__ == '__main__':
    unittest.main()
```

**¿Qué está pasando?**
- `setUp()` se ejecuta antes de cada test → cada test empieza con un estado limpio
- Cada método `test_*` es un test independiente
- `self.assertEqual()` verifica que el resultado sea el esperado
- `tearDown()` se ejecuta después de cada test → limpieza

**Ejecutar tests:**
```bash
# Desde la línea de comandos
python test.py

# O usando unittest directamente
python -m unittest test.py
```

**Salida esperada:**
```
..
----------------------------------------------------------------------
Ran 2 tests in 0.001s

OK
```

### Assertions Comunes
```python
def test_assertions(self):
    # Igualdad
    self.assertEqual(1 + 1, 2)

    # Verdadero/Falso
    self.assertTrue(True)
    self.assertFalse(False)

    # Excepciones
    with self.assertRaises(ValueError):
        int('abc')

    # Contenido
    self.assertIn(1, [1, 2, 3])
    self.assertNotIn(4, [1, 2, 3])

    # Tipos
    self.assertIsInstance(1, int)
```

## Test-Driven Development (TDD)

### Ciclo Red-Green-Refactor
1. **Red**: Escribe un test que falle
2. **Green**: Escribe el código mínimo para que pase
3. **Refactor**: Mejora el código manteniendo los tests

### Ejemplo TDD
```python
# test_calculadora.py
import unittest

class TestCalculadora(unittest.TestCase):
    def test_suma_positivos(self):
        calc = Calculadora()
        self.assertEqual(calc.sumar(2, 3), 5)

    def test_suma_negativos(self):
        calc = Calculadora()
        self.assertEqual(calc.sumar(-2, -3), -5)

    def test_suma_mixta(self):
        calc = Calculadora()
        self.assertEqual(calc.sumar(2, -3), -1)

# calculadora.py
class Calculadora:
    def sumar(self, a, b):
        return a + b
```

## Fixtures y Mocks

### Fixtures
```python
import pytest

@pytest.fixture
def calculadora():
    return Calculadora()

def test_suma(calculadora):
    assert calculadora.sumar(2, 3) == 5

@pytest.fixture
def datos_prueba():
    return {
        'entrada': [1, 2, 3],
        'esperado': 6
    }

def test_suma_lista(calculadora, datos_prueba):
    assert calculadora.sumar_lista(datos_prueba['entrada']) == datos_prueba['esperado']
```

### Mocks
```python
from unittest.mock import Mock, patch

class TestAPIClient(unittest.TestCase):
    def test_obtener_datos(self):
        # Crear mock
        mock_response = Mock()
        mock_response.json.return_value = {'data': 'test'}

        # Patchear requests.get
        with patch('requests.get', return_value=mock_response):
            client = APIClient()
            resultado = client.obtener_datos()
            self.assertEqual(resultado, {'data': 'test'})
```

## Cobertura de Código

### Instalación y Uso
```bash
# Instalar coverage
pip install coverage

# Ejecutar tests con coverage
coverage run -m pytest tests/

# Generar reporte
coverage report
coverage html
```

### Configuración
```ini
# .coveragerc
[run]
source = mi_proyecto
omit =
    */tests/*
    */venv/*
    setup.py

[report]
exclude_lines =
    pragma: no cover
    def __repr__
    raise NotImplementedError
```

## Buenas Prácticas

1. **Nombres Descriptivos**
```python
def test_suma_debe_retornar_cinco_cuando_suma_dos_y_tres(self):
    calc = Calculadora()
    resultado = calc.sumar(2, 3)
    self.assertEqual(resultado, 5)
```

2. **Tests Aislados**
```python
class TestUsuario(unittest.TestCase):
    def setUp(self):
        self.db = MockDatabase()
        self.usuario = Usuario(self.db)

    def test_crear_usuario(self):
        self.usuario.crear("test", "test@test.com")
        self.assertTrue(self.db.usuario_existe("test"))

    def test_eliminar_usuario(self):
        self.usuario.crear("test", "test@test.com")
        self.usuario.eliminar("test")
        self.assertFalse(self.db.usuario_existe("test"))
```

3. **Parametrización de Tests**
```python
import pytest

@pytest.mark.parametrize("entrada,esperado", [
    (2, 4),
    (3, 9),
    (4, 16),
])
def test_cuadrado(entrada, esperado):
    assert cuadrado(entrada) == esperado
```

## Ejemplos Avanzados

### Testing de API
```python
import requests
import pytest

class TestAPI:
    @pytest.fixture
    def api_client(self):
        return APIClient("http://api.example.com")

    def test_obtener_usuario(self, api_client):
        usuario = api_client.obtener_usuario(1)
        assert usuario['id'] == 1
        assert 'nombre' in usuario

    def test_crear_usuario(self, api_client):
        datos = {'nombre': 'test', 'email': 'test@test.com'}
        respuesta = api_client.crear_usuario(datos)
        assert respuesta.status_code == 201
        assert 'id' in respuesta.json()
```

### Testing de Base de Datos
```python
import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

@pytest.fixture
def db_session():
    engine = create_engine('sqlite:///:memory:')
    Session = sessionmaker(bind=engine)
    session = Session()

    # Crear tablas
    Base.metadata.create_all(engine)

    yield session

    # Limpiar
    session.close()
    Base.metadata.drop_all(engine)

def test_crear_usuario(db_session):
    usuario = Usuario(nombre='test', email='test@test.com')
    db_session.add(usuario)
    db_session.commit()

    usuario_db = db_session.query(Usuario).first()
    assert usuario_db.nombre == 'test'
    assert usuario_db.email == 'test@test.com'
```

## Consejos
1. Escribe tests antes del código (TDD)
2. Mantén los tests simples y enfocados
3. Usa nombres descriptivos
4. Asegura buena cobertura de código
5. Mantén los tests independientes

## Recursos Adicionales

### Documentación Oficial
- [Documentación de unittest](https://docs.python.org/3/library/unittest.html)
- [Documentación de pytest](https://docs.pytest.org/)
- [TDD Tutorial](https://realpython.com/python-testing/)
- [Coverage.py Documentation](https://coverage.readthedocs.io/)
- [doctest Documentation](https://docs.python.org/3/library/doctest.html)

### Bibliografía Recomendada
- **Test-Driven Development with Python** (Harry Percival) - Guía completa de TDD
- **Python Testing with pytest** (Brian Okken) - Guía completa de pytest
- **Effective Python** (Brett Slatkin) - Items sobre testing
- **Clean Code** (Robert C. Martin) - Capítulo sobre tests
- **The Art of Unit Testing** (Roy Osherove) - Principios de testing

### Conceptos Relacionados
- [Manejo de Errores](../05_Manejo_de_Errores_y_Buenas_Practicas/01_excepciones.md) - Prueba el manejo de errores
- [Type Hints](../05_Manejo_de_Errores_y_Buenas_Practicas/02_type_hints.md) - Facilita el testing
- [Empaquetado](./02_packaging.md) - Distribuye código probado

---

## Siguiente paso
Ahora que sabes escribir tests, aprende sobre seguridad para proteger tus aplicaciones. Continúa con: **[Seguridad](./04_security.md)**
