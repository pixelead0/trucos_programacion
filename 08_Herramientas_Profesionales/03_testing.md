# Testing en Python

## ¿Qué es testing y por qué escribir tests?

Imagina que cambias una función que usan 10 partes de tu código. ¿Cómo sabes que no rompiste nada? Podrías probar manualmente cada parte, pero eso es lento y propenso a errores.

**Los tests resuelven esto:** Escribes código que verifica automáticamente que tu código funciona. Ejecutas los tests después de cada cambio y sabes inmediatamente si algo se rompió.

**Beneficios reales:**
- **Confianza al cambiar código**: Sabes que no rompiste nada existente
- **Documentación viva**: Los tests muestran cómo se usa el código
- **Detección temprana de bugs**: Encuentras errores antes de que lleguen a producción
- **Refactoring seguro**: Puedes mejorar código sabiendo que los tests te avisan si algo falla

**Casos reales:**
- Después de agregar una nueva funcionalidad
- Antes de hacer deploy a producción
- Cuando encuentras un bug (escribes un test que reproduce el bug, luego lo arreglas)
- Al refactorizar código existente

**En Python:** Tienes `unittest` (incluido) y `pytest` (más popular, más fácil de usar). Ambos funcionan bien.

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
- [Documentación de unittest](https://docs.python.org/3/library/unittest.html)
- [Documentación de pytest](https://docs.pytest.org/)
- [TDD Tutorial](https://realpython.com/python-testing/)
- [Coverage.py Documentation](https://coverage.readthedocs.io/)

---

## Siguiente paso
Ahora que sabes escribir tests, aprende sobre seguridad para proteger tus aplicaciones. Continúa con: **[Seguridad](./04_security.md)**
