# Git y Control de Versiones en Python

## ¿Qué es Git?
Git es un sistema de control de versiones que permite rastrear cambios en tu código a lo largo del tiempo. Es como tener un registro detallado de todos los cambios en tu proyecto, permitiéndote "viajar en el tiempo" para ver versiones anteriores o deshacer errores.

## Conceptos Fundamentales

### Repositorio
Un repositorio es donde se almacena todo el historial de tu proyecto.

```bash
# Crear un nuevo repositorio
git init mi-proyecto
cd mi-proyecto

# Clonar un repositorio existente
git clone https://github.com/usuario/proyecto.git
```

### Commit
Un commit es como guardar un punto de control en tu proyecto. Registra un cambio específico.

```bash
# Ver el estado de los archivos
git status

# Agregar archivos al área de staging
git add archivo.py

# Hacer commit con un mensaje descriptivo
git commit -m "Agregar función de cálculo"
```

## Flujo de Trabajo Básico

### 1. Configuración inicial
```bash
# Configurar tu identidad
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Verificar configuración
git config --list
```

### 2. Trabajar en tu código
```bash
# Crear archivo Python
echo "print('Hola mundo')" > hola.py

# Crear archivo de requisitos
echo "requests==2.28.0" > requirements.txt
```

### 3. Revisar cambios
```bash
# Ver qué archivos han cambiado
git status

# Ver los cambios específicos
git diff

# Ver cambios en archivos específicos
git diff hola.py
```

### 4. Hacer commit
```bash
# Agregar archivos al staging
git add hola.py requirements.txt

# Hacer commit con mensaje descriptivo
git commit -m "Inicializar proyecto con saludo y dependencias"
```

## Ramas: Trabajar en Paralelo

Las ramas (branches) te permiten trabajar en nuevas características sin afectar el código principal.

### Crear y cambiar ramas
```bash
# Crear una nueva rama
git branch nueva-funcionalidad

# Cambiar a la nueva rama
git checkout nueva-funcionalidad

# Crear y cambiar de rama en un comando (atajo)
git checkout -b experimento-datos

# Ver todas las ramas
git branch

# Ver ramas remotas
git branch -r
```

### Trabajar en ramas
```bash
# Estar en la rama experimento-datos
git checkout experimento-datos

# Hacer cambios
echo "def procesar_datos(data):" >> procesador.py
echo "    return data * 2" >> procesador.py

# Hacer commit en la rama
git add procesador.py
git commit -m "Implementar procesador de datos básico"
```

## Merge: Unir Cambios

Cuando tu nueva funcionalidad está lista, es hora de unirla con la versión principal (main).

### Merge básico
```bash
# Cambiar a la rama principal
git checkout main

# Unir la rama experimental
git merge experimento-datos

# Eliminar la rama ya no necesaria
git branch -d experimento-datos
```

### Merge con conflictos
```bash
# Si hay conflictos, Git te avisará
git merge experimento-datos

# Resolver conflictos manualmente editando los archivos
# Luego agregar archivos resueltos
git add archivo_resuelto.py

# Completar el merge
git commit -m "Resolver conflictos en merge"
```

## Trabajar con Repositorios Remotos

### GitHub/GitLab: El hogar de tu código en la nube
```bash
# Agregar repositorio remoto
git remote add origin https://github.com/tu-usuario/proyecto.git

# Ver repositorios remotos
git remote -v

# Subir cambios al repositorio remoto
git push origin main

# Descargar cambios del repositorio remoto
git pull origin main
```

### Clonar y contribuir
```bash
# Clonar un repositorio
git clone https://github.com/organizacion/proyecto-opensource.git
cd proyecto-opensource

# Crear rama para tu contribución
git checkout -b mi-contribucion

# Hacer cambios y commits
git add .
git commit -m "Mejorar documentación"

# Subir tu rama
git push origin mi-contribucion
```

## Comandos Avanzados

### Historial y logs
```bash
# Ver historial de commits
git log

# Ver historial con gráfico (muy útil)
git log --graph --oneline

# Ver cambios en un commit específico
git show commit_hash

# Ver diferencias entre commits
git diff commit1 commit2
```

### Deshacer cambios
```bash
# Deshacer último commit (mantener cambios en archivos)
git reset --soft HEAD~1

# Deshacer último commit (eliminar cambios permanentemente)
git reset --hard HEAD~1

# Deshacer cambios en archivo específico (restaurar a último commit)
git checkout -- archivo.py

# Sacar archivo del área de staging
git reset HEAD archivo.py
```

### Stash: Guardar cambios temporalmente
```bash
# Guardar cambios temporalmente (limpiar directorio de trabajo)
git stash

# Ver stashes guardados
git stash list

# Recuperar último stash
git stash pop

# Recuperar stash específico
git stash apply stash@{0}
```

## Ejercicios Prácticos

### Ejercicio 1: Flujo Local
```bash
# 1. Crear repositorio
mkdir proyecto-demo
cd proyecto-demo
git init

# 2. Configurar identidad (si no lo has hecho)
git config user.name "Demo User"
git config user.email "demo@example.com"

# 3. Crear archivo inicial
echo "print('Versión 1.0')" > app.py
git add app.py
git commit -m "Commit inicial: Versión 1.0"

# 4. Crear rama para mejora
git checkout -b mejora-rendimiento
echo "def optimizar(): pass" >> app.py
git add app.py
git commit -m "Agregar función de optimización"

# 5. Volver a main y hacer merge
git checkout main
git merge mejora-rendimiento
git branch -d mejora-rendimiento

# 6. Ver historial
git log --oneline
```

### Ejercicio 2: Simulación de Colaboración
```bash
# 1. Simular clonado
# git clone <url>

# 2. Crear rama para nueva feature
git checkout -b feature-autenticacion
echo "def login(): print('Iniciando sesión')" >> auth.py
git add auth.py
git commit -m "Implementar módulo de autenticación"

# 3. Subir rama (simulado)
# git push origin feature-autenticacion

# 4. Crear Pull Request (en plataforma web)
```

### Ejercicio 3: Resolver conflictos
```bash
# 1. Crear archivo base
echo "config = 'PROD'" > config.py
git add config.py
git commit -m "Configuración base"

# 2. Crear rama y modificar
git checkout -b rama-dev
echo "config = 'DEV'" > config.py
git add config.py
git commit -m "Cambiar config a DEV"

# 3. Volver a main y modificar diferente
git checkout main
echo "config = 'TEST'" > config.py
git add config.py
git commit -m "Cambiar config a TEST"

# 4. Intentar merge (conflicto)
git merge rama-dev

# 5. Resolver conflicto manualmente
# Editar config.py, decidir qué línea queda
git add config.py
git commit -m "Resolver conflicto de configuración"
```

## Buenas Prácticas

### Mensajes de commit
```bash
# ✅ Buenos mensajes
git commit -m "Implementar validación de usuarios"
git commit -m "Corregir bug en cálculo de totales"
git commit -m "Actualizar documentación del API"

# ❌ Malos mensajes
git commit -m "cambios"
git commit -m "fix"
git commit -m "listo"
```

### Estructura de commits
```bash
# Hacer commits atómicos (una sola tarea lógica por commit)
git add login_form.py
git commit -m "Crear formulario de login"

git add db_connector.py
git commit -m "Configurar conexión a base de datos"
```

### Ignorar archivos
```bash
# Crear archivo .gitignore para no subir basura
echo "*.pyc" > .gitignore
echo "__pycache__/" >> .gitignore
echo "*.log" >> .gitignore
echo ".env" >> .gitignore  # ¡Nunca subir secretos!

git add .gitignore
git commit -m "Agregar .gitignore"
```

## Errores Comunes y Cómo Evitarlos

### 1. Hacer commit de archivos sensibles
```bash
# ❌ Error común
git add keys.py  # Contiene claves API
git commit -m "Subir claves"

# ✅ Correcto
echo "keys.py" >> .gitignore
# Usar variables de entorno en lugar de archivos hardcodeados
```

### 2. Commit de archivos temporales
```bash
# ❌ Error común
git add .  # Agrega TODO, incluyendo temporales
git commit -m "Todo"

# ✅ Correcto
# Configurar .gitignore primero
# O usar git add archivo_especifico.py
```

### 3. Merge sin revisión
```bash
# ❌ Error común
git merge rama-grande  # Sin saber qué trae

# ✅ Correcto
git diff main rama-grande  # Revisar cambios antes
git merge rama-grande
```

## Recursos Adicionales
- [Documentación oficial de Git](https://git-scm.com/doc)
- [Git Flight Rules (Guía de soluciones)](https://github.com/k88hudson/git-flight-rules)
- [Pro Git Book (Gratuito)](https://git-scm.com/book)

