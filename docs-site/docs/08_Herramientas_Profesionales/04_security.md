---
title: Seguridad en Python
description: Mejores prácticas de seguridad para código Python
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
  time="1.5 horas"
  prereqs={['Manejo de Errores', 'Funciones']}
/>

<ProgressIndicator
  module="Módulo 08: Herramientas Profesionales"
  lesson={5}
  total={5}
/>

# Seguridad en Python

<LessonMap
  objectives={[
    "Manejar contraseñas de forma segura (hashing)",
    "Proteger secretos y credenciales",
    "Validar y sanitizar entrada del usuario",
    "Prevenir inyección de código",
    "Aplicar principios de seguridad desde el diseño"
  ]}
  useCases={[
    "Aplicaciones web: autenticación y autorización",
    "APIs: proteger endpoints y datos sensibles",
    "Sistemas que manejan datos personales",
    "Aplicaciones financieras o de salud",
    "Cualquier código que maneje información sensible",
    "Prevenir vulnerabilidades comunes (OWASP Top 10)"
  ]}
  time="1.5 horas"
  level="advanced"
/>

## 🎯 ¿Por qué aprender seguridad?

Un pequeño error de seguridad puede exponer datos sensibles, permitir acceso no autorizado, o causar que tu aplicación sea comprometida. La seguridad no es opcional en código que maneja datos reales.

La seguridad es esencial porque:
- Protege datos sensibles: contraseñas, información personal, datos financieros
- Previene ataques: inyección de código, acceso no autorizado
- Cumple regulaciones: GDPR, HIPAA requieren seguridad adecuada
- Confianza del usuario: usuarios confían en aplicaciones seguras
- Profesionalismo: código inseguro puede causar daños graves

## 🌍 Casos reales donde se usa

La seguridad es crítica en todos los sistemas que manejan datos:

- **Aplicaciones web**: Autenticación y autorización
- **APIs**: Proteger endpoints y datos sensibles
- **Sistemas con datos personales**: Información de usuarios
- **Aplicaciones financieras o de salud**: Datos altamente sensibles
- **Cualquier código con información sensible**: Secretos, credenciales, tokens
- **Prevenir vulnerabilidades**: OWASP Top 10, ataques comunes

**Ejemplo real**: Una aplicación web que almacena contraseñas en texto plano puede ser comprometida fácilmente. Con seguridad adecuada, las contraseñas se hashean y son imposibles de recuperar incluso si alguien accede a la base de datos.

## 💡 Concepto base

La seguridad en código implica proteger datos sensibles, validar entrada del usuario, y prevenir vulnerabilidades comunes. La seguridad no es algo que agregas al final, es parte de cómo trabajas desde el principio.

**Lo genial de Python:** Hay librerías excelentes como `bcrypt` para hashing de contraseñas y `secrets` para generar tokens seguros.

```python
import hashlib
import secrets

# Hash de contraseña (simplificado, usa bcrypt en producción)
def hash_password(password):
    salt = secrets.token_hex(16)
    hash_obj = hashlib.sha256((password + salt).encode())
    return f"{salt}:{hash_obj.hexdigest()}"

# Verificar contraseña
def verify_password(password, stored_hash):
    salt, hash_value = stored_hash.split(':')
    hash_obj = hashlib.sha256((password + salt).encode())
    return hash_obj.hexdigest() == hash_value

# Ejemplo
hashed = hash_password("mi_contraseña_secreta")
print(f"Hash almacenado: {hashed[:50]}...")
print(f"Verificación: {verify_password('mi_contraseña_secreta', hashed)}")
```

<ExpectedOutput>
```
Hash almacenado: a1b2c3d4e5f6...:9f8e7d6c5b4a...
Verificación: True
```
</ExpectedOutput>

:::tip 🌮 Analogía culinaria
La seguridad en código es como las medidas de higiene y seguridad en una cocina profesional. No guardas ingredientes crudos junto con los cocidos (separación de datos), verificas que los ingredientes sean frescos antes de usarlos (validación de entrada), y nunca dejas las llaves de la cocina al alcance de cualquiera (protección de secretos). Un pequeño descuido puede contaminar toda la comida (comprometer toda la aplicación). La seguridad no es algo que agregas al final, es parte de cómo trabajas desde el principio.
:::

:::info Para principiantes
**Vulnerabilidades comunes a evitar:**
- Contraseñas en texto plano: siempre usa hashing
- Inyección de código: valida y sanitiza toda la entrada
- Exposición de secretos: nunca hardcodees API keys o tokens
- Validación insuficiente: verifica todos los datos de entrada

**Este capítulo cubre:** Cómo manejar contraseñas de forma segura, proteger secretos, y validar entrada del usuario.
:::
- Mejores prácticas para código seguro

**Importante:** La seguridad es un proceso continuo, no algo que agregas al final. Piensa en seguridad desde el diseño.

> **Antes de continuar**: Asegúrate de entender [Manejo de Errores](../05_Manejo_de_Errores_y_Buenas_Practicas/01_excepciones.md) y [Funciones](../03_Funciones_y_Modulos/01_funciones.md).

## Conceptos Básicos

### Manejo Seguro de Contraseñas

**⚠️ NUNCA guardes contraseñas en texto plano.** Si alguien accede a tu base de datos, vería todas las contraseñas. En su lugar, guarda un "hash" (versión irreversible) de la contraseña.

**¿Qué es un hash?**
- Es una función matemática que convierte texto en un valor fijo
- Es unidireccional: no puedes obtener la contraseña original del hash
- Mismo texto siempre produce el mismo hash
- Pequeños cambios producen hashes completamente diferentes

**Biblioteca recomendada: `bcrypt`**

```bash
pip install bcrypt
```

```python
import bcrypt

def hash_password(password: str) -> bytes:
    """
    Hashea una contraseña de forma segura usando bcrypt.

    bcrypt automáticamente:
    - Genera un salt único (evita que dos contraseñas iguales tengan el mismo hash)
    - Usa un algoritmo seguro y lento (dificulta ataques de fuerza bruta)
    """
    salt = bcrypt.gensalt()  # Genera un salt aleatorio
    return bcrypt.hashpw(password.encode(), salt)  # Hashea la contraseña con el salt

def verify_password(password: str, hashed: bytes) -> bool:
    """
    Verifica si una contraseña coincide con su hash.

    Esto es lo que haces cuando un usuario intenta iniciar sesión:
    1. El usuario ingresa su contraseña
    2. Hasheas esa contraseña con el mismo salt
    3. Comparas con el hash guardado
    """
    return bcrypt.checkpw(password.encode(), hashed)
```

**Uso:**
```python
# Al registrar un usuario
password_plain = "mi_contraseña_secreta"
password_hashed = hash_password(password_plain)
# Guardas password_hashed en la base de datos, NUNCA password_plain

# Al verificar login
entrada_usuario = "mi_contraseña_secreta"
if verify_password(entrada_usuario, password_hashed):
    print("Contraseña correcta")
else:
    print("Contraseña incorrecta")
```

**¿Por qué bcrypt y no MD5 o SHA?**
- MD5 y SHA son rápidos → fáciles de atacar con fuerza bruta
- bcrypt es lento por diseño → hace los ataques inviables
- bcrypt incluye salt automático → protege contra rainbow tables

### Manejo de Secretos
```python
from cryptography.fernet import Fernet
import os

class SecretManager:
    def __init__(self):
        self.key = os.getenv('ENCRYPTION_KEY')
        if not self.key:
            self.key = Fernet.generate_key()
        self.cipher = Fernet(self.key)

    def encrypt(self, data: str) -> bytes:
        """
        Encripta datos sensibles.

        Args:
            data: Datos a encriptar

        Returns:
            Datos encriptados
        """
        return self.cipher.encrypt(data.encode())

    def decrypt(self, encrypted_data: bytes) -> str:
        """
        Desencripta datos.

        Args:
            encrypted_data: Datos encriptados

        Returns:
            Datos desencriptados
        """
        return self.cipher.decrypt(encrypted_data).decode()
```

## Seguridad Web

### Sanitización de Entrada
```python
import html
import re

def sanitize_input(user_input: str) -> str:
    """
    Sanitiza entrada de usuario.

    Args:
        user_input: Entrada del usuario

    Returns:
        Entrada sanitizada
    """
    # Escapar caracteres HTML
    sanitized = html.escape(user_input)

    # Remover scripts
    sanitized = re.sub(r'<script.*?>.*?</script>', '', sanitized, flags=re.DOTALL)

    return sanitized
```

### Protección CSRF
```python
from flask import Flask, session
import secrets

app = Flask(__name__)
app.secret_key = secrets.token_hex(16)

def generate_csrf_token():
    if 'csrf_token' not in session:
        session['csrf_token'] = secrets.token_hex(16)
    return session['csrf_token']

@app.route('/form', methods=['POST'])
def handle_form():
    if request.form.get('csrf_token') != session.get('csrf_token'):
        return 'Error CSRF', 403
    # Procesar formulario
```

## Seguridad de Archivos

### Validación de Archivos
```python
import os
from typing import List

ALLOWED_EXTENSIONS: List[str] = ['.txt', '.pdf', '.doc']

def is_safe_file(filename: str) -> bool:
    """
    Verifica si un archivo es seguro.

    Args:
        filename: Nombre del archivo

    Returns:
        True si el archivo es seguro
    """
    # Verificar extensión
    ext = os.path.splitext(filename)[1].lower()
    if ext not in ALLOWED_EXTENSIONS:
        return False

    # Verificar nombre
    if '..' in filename or '/' in filename:
        return False

    return True
```

### Manejo Seguro de Archivos
```python
import tempfile
import shutil
from pathlib import Path

def process_file(file_path: Path) -> None:
    """
    Procesa un archivo de forma segura.

    Args:
        file_path: Ruta al archivo
    """
    # Crear directorio temporal
    with tempfile.TemporaryDirectory() as temp_dir:
        # Copiar archivo a directorio temporal
        temp_file = Path(temp_dir) / file_path.name
        shutil.copy2(file_path, temp_file)

        # Procesar archivo
        process_safe_file(temp_file)
```

## Seguridad de Base de Datos

### Consultas Parametrizadas
```python
import sqlite3
from typing import List, Any

def execute_query(query: str, params: List[Any]) -> List[tuple]:
    """
    Ejecuta una consulta SQL de forma segura.

    Args:
        query: Consulta SQL
        params: Parámetros de la consulta

    Returns:
        Resultados de la consulta
    """
    with sqlite3.connect('database.db') as conn:
        cursor = conn.cursor()
        cursor.execute(query, params)
        return cursor.fetchall()
```

### Conexión Segura
```python
import psycopg2
from psycopg2 import pool

class DatabasePool:
    def __init__(self):
        self.pool = pool.ThreadedConnectionPool(
            minconn=1,
            maxconn=10,
            host='localhost',
            database='mydb',
            user='user',
            password='password',
            sslmode='require'
        )

    def get_connection(self):
        return self.pool.getconn()

    def release_connection(self, conn):
        self.pool.putconn(conn)
```

## Seguridad de API

### Autenticación JWT
```python
import jwt
from datetime import datetime, timedelta

class JWTAuth:
    def __init__(self, secret_key: str):
        self.secret_key = secret_key

    def create_token(self, user_id: int) -> str:
        """
        Crea un token JWT.

        Args:
            user_id: ID del usuario

        Returns:
            Token JWT
        """
        payload = {
            'user_id': user_id,
            'exp': datetime.utcnow() + timedelta(days=1)
        }
        return jwt.encode(payload, self.secret_key, algorithm='HS256')

    def verify_token(self, token: str) -> dict:
        """
        Verifica un token JWT.

        Args:
            token: Token JWT

        Returns:
            Payload del token
        """
        return jwt.decode(token, self.secret_key, algorithms=['HS256'])
```

### Rate Limiting
```python
from flask import Flask, request
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)
limiter = Limiter(
    app,
    key_func=get_remote_address,
    default_limits=["200 per day", "50 per hour"]
)

@app.route("/api/resource")
@limiter.limit("10 per minute")
def limited_route():
    return "Resource"
```

## Buenas Prácticas

1. **Manejo de Errores**
```python
import logging
from typing import Optional

logger = logging.getLogger(__name__)

def safe_operation() -> Optional[str]:
    """
    Realiza una operación de forma segura.

    Returns:
        Resultado de la operación o None si hay error
    """
    try:
        # Operación sensible
        return "resultado"
    except Exception as e:
        logger.error(f"Error en operación: {e}")
        return None
```

2. **Configuración Segura**
```python
import os
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()

# Configuración
config = {
    'SECRET_KEY': os.getenv('SECRET_KEY'),
    'DATABASE_URL': os.getenv('DATABASE_URL'),
    'DEBUG': os.getenv('DEBUG', 'False').lower() == 'true'
}
```

3. **Logging Seguro**
```python
import logging
from logging.handlers import RotatingFileHandler

def setup_logging():
    """
    Configura logging de forma segura.
    """
    handler = RotatingFileHandler(
        'app.log',
        maxBytes=10000000,
        backupCount=5
    )

    formatter = logging.Formatter(
        '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    )
    handler.setFormatter(formatter)

    logger = logging.getLogger()
    logger.addHandler(handler)
    logger.setLevel(logging.INFO)
```

## Consejos
1. Nunca almacenes contraseñas en texto plano
2. Usa HTTPS para todas las comunicaciones
3. Valida y sanitiza todas las entradas
4. Mantén las dependencias actualizadas
5. Implementa logging seguro

## Recursos Adicionales

### Documentación Oficial
- [OWASP Python Security](https://owasp.org/www-project-python-security/)
- [Python Security Best Practices](https://docs.python.org/3/library/security.html)
- [Cryptography Documentation](https://cryptography.io/)
- [JWT Documentation](https://pyjwt.readthedocs.io/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

### Bibliografía Recomendada
- **Black Hat Python** (Justin Seitz) - Python para seguridad
- **The Web Application Hacker's Handbook** (Stuttard & Pinto) - Seguridad web
- **Effective Python** (Brett Slatkin) - Item 85: Use Packages to Organize Modules and Provide Stable APIs
- **Secure Coding in Python** (Various) - Mejores prácticas de seguridad

### Conceptos Relacionados
- [Manejo de Errores](../05_Manejo_de_Errores_y_Buenas_Practicas/01_excepciones.md) - No expongas información sensible
- [Logging](../05_Manejo_de_Errores_y_Buenas_Practicas/03_logging.md) - Logging seguro
- [Testing](./03_testing.md) - Prueba la seguridad de tu código

---

## Siguiente paso
¡Felicitaciones! Has completado las herramientas profesionales. Continúa explorando otros temas del curso o revisa los proyectos prácticos en la carpeta `Proyectos_y_Ejercicios` del repositorio para aplicar lo aprendido.
