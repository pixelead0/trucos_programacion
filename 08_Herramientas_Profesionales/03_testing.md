# Testing en Python

## ¿Qué es Testing?
El testing es el proceso de verificar que el código funciona como se espera. En Python, el módulo `unittest` y la biblioteca `pytest` son las herramientas más comunes para escribir y ejecutar pruebas.

## Conceptos Básicos

### Estructura Básica de Tests
```python
import unittest

class TestCalculadora(unittest.TestCase):
    def setUp(self):
        # Configuración inicial para cada test
        self.calc = Calculadora()

    def test_suma(self):
        resultado = self.calc.sumar(2, 3)
        self.assertEqual(resultado, 5)

    def test_resta(self):
        resultado = self.calc.restar(5, 3)
        self.assertEqual(resultado, 2)

    def tearDown(self):
        # Limpieza después de cada test
        pass

if __name__ == '__main__':
    unittest.main()
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
- [Documentación de unittest](https://docs.python.org/3/library/unittest.html)
- [Documentación de pytest](https://docs.pytest.org/)
- [TDD Tutorial](https://realpython.com/python-testing/)
- [Coverage.py Documentation](https://coverage.readthedocs.io/)
