# Seguridad en Python

## ¿Qué es la Seguridad en Python?
La seguridad en Python se refiere a las prácticas y técnicas para proteger aplicaciones contra vulnerabilidades comunes, como inyección de código, exposición de datos sensibles y ataques de seguridad.

## Conceptos Básicos

### Manejo Seguro de Contraseñas
```python
import hashlib
import os
import bcrypt

def hash_password(password: str) -> bytes:
    """
    Hashea una contraseña de forma segura.

    Args:
        password: Contraseña en texto plano

    Returns:
        Contraseña hasheada
    """
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode(), salt)

def verify_password(password: str, hashed: bytes) -> bool:
    """
    Verifica una contraseña contra su hash.

    Args:
        password: Contraseña en texto plano
        hashed: Contraseña hasheada

    Returns:
        True si la contraseña coincide
    """
    return bcrypt.checkpw(password.encode(), hashed)
```

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
- [OWASP Python Security](https://owasp.org/www-project-python-security/)
- [Python Security Best Practices](https://docs.python.org/3/library/security.html)
- [Cryptography Documentation](https://cryptography.io/)
- [JWT Documentation](https://pyjwt.readthedocs.io/)
