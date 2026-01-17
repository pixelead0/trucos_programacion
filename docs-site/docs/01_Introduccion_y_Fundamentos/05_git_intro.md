---
title: Git y Control de Versiones
description: Aprende a versionar tus proyectos con Git
---

import LessonMeta from '@site/src/components/LessonMeta';
import Checkpoint from '@site/src/components/Checkpoint';
import NextStep from '@site/src/components/NextStep';
import TryIt from '@site/src/components/TryIt';

<LessonMeta
  level="beginner"
  time="1 hora"
  prereqs={['Bucles']}
/>

# Git y Control de Versiones

## Qué vas a lograr

- Crear y gestionar repositorios Git
- Hacer commits y trabajar con ramas
- Sincronizar código con repositorios remotos (GitHub/GitLab)
- Resolver conflictos y deshacer cambios

## Concepto base

Git es un sistema de control de versiones que permite rastrear cambios en tu código a lo largo del tiempo. Es como tener un registro detallado de todos los cambios en tu proyecto, permitiéndote "viajar en el tiempo" para ver versiones anteriores o deshacer errores.

Aunque Git no es específico de Python, es una herramienta esencial para cualquier programador profesional. Te permite:
- Guardar versiones de tu código
- Trabajar en equipo sin conflictos
- Experimentar sin miedo a romper tu código
- Revertir cambios si algo sale mal

:::info Para principiantes
Piensa en Git como un "sistema de respaldo inteligente" para tu código. Cada vez que haces un commit, guardas una "foto" de tu proyecto en ese momento. Puedes volver a cualquier foto cuando quieras.
:::

## Paso a paso

### 1. Conceptos Fundamentales

**Repositorio:** Es donde se almacena todo el historial de tu proyecto.

```bash
# Crear un nuevo repositorio
git init mi-proyecto
cd mi-proyecto

# Clonar un repositorio existente
git clone https://github.com/usuario/proyecto.git
```

**Commit:** Es como guardar un punto de control en tu proyecto. Registra un cambio específico.

```bash
# Ver el estado de los archivos
git status

# Agregar archivos al área de staging
git add archivo.py

# Hacer commit con un mensaje descriptivo
git commit -m "Agregar función de cálculo"
```

### 2. Flujo de Trabajo Básico

**1. Configuración inicial:**

```bash
# Configurar tu identidad (solo una vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Verificar configuración
git config --list
```

**2. Trabajar en tu código:**

```bash
# Crear archivo Python
echo "print('Hola mundo')" > hola.py

# Crear archivo de requisitos
echo "requests==2.28.0" > requirements.txt
```

**3. Revisar cambios:**

```bash
# Ver qué archivos han cambiado
git status

# Ver los cambios específicos
git diff

# Ver cambios en archivos específicos
git diff hola.py
```

**4. Hacer commit:**

```bash
# Agregar archivos al staging
git add hola.py requirements.txt

# Hacer commit con mensaje descriptivo
git commit -m "Inicializar proyecto con saludo y dependencias"
```

### 3. Ramas: Trabajar en Paralelo

Las ramas (branches) te permiten trabajar en nuevas características sin afectar el código principal.

```bash
# Crear y cambiar a una nueva rama
git checkout -b nueva-funcionalidad

# Ver todas las ramas
git branch

# Trabajar en la rama
echo "def nueva_funcion():" >> app.py
git add app.py
git commit -m "Implementar nueva funcionalidad"
```

### 4. Merge: Unir Cambios

Cuando tu nueva funcionalidad está lista, únela con la versión principal:

```bash
# Cambiar a la rama principal
git checkout main

# Unir la rama experimental
git merge nueva-funcionalidad

# Eliminar la rama ya no necesaria
git branch -d nueva-funcionalidad
```

:::tip Tip pro
Trabaja en ramas separadas para cada nueva característica. Esto te permite experimentar sin romper tu código principal.
:::

### 5. Trabajar con Repositorios Remotos

**GitHub/GitLab:** El hogar de tu código en la nube.

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

### 6. Comandos Avanzados

**Historial y logs:**

```bash
# Ver historial de commits
git log

# Ver historial con gráfico (muy útil)
git log --graph --oneline

# Ver cambios en un commit específico
git show commit_hash
```

**Deshacer cambios:**

```bash
# Deshacer último commit (mantener cambios en archivos)
git reset --soft HEAD~1

# Deshacer cambios en archivo específico (restaurar a último commit)
git checkout -- archivo.py

# Sacar archivo del área de staging
git reset HEAD archivo.py
```

**Stash: Guardar cambios temporalmente**

```bash
# Guardar cambios temporalmente
git stash

# Ver stashes guardados
git stash list

# Recuperar último stash
git stash pop
```

## Errores comunes

### 1. Hacer commit de archivos sensibles

```bash
# ❌ Error común
git add keys.py  # Contiene claves API
git commit -m "Subir claves"

# ✅ Correcto
echo "keys.py" >> .gitignore
# Usar variables de entorno en lugar de archivos hardcodeados
```

:::warning Error típico
**Nunca subas secretos a Git**: Claves API, contraseñas, tokens. Una vez que están en Git, es muy difícil eliminarlos completamente. Usa `.gitignore` y variables de entorno.
:::

### 2. Commit de archivos temporales

```bash
# ❌ Error común
git add .  # Agrega TODO, incluyendo temporales
git commit -m "Todo"

# ✅ Correcto
# Configurar .gitignore primero
echo "*.pyc" > .gitignore
echo "__pycache__/" >> .gitignore
echo "*.log" >> .gitignore
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

## Ejercicios Prácticos

<TryIt>
### Ejercicio 1: Flujo Local Completo

Practica el flujo completo de Git localmente:

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
</TryIt>

<TryIt>
### Ejercicio 2: Configurar .gitignore

Crea un `.gitignore` apropiado para un proyecto Python:

```bash
# Crear .gitignore
cat > .gitignore << EOF
# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*$py.class

# Virtual environments
venv/
env/
ENV/

# IDE
.vscode/
.idea/
*.swp

# Logs
*.log

# Environment variables
.env
.env.local

# OS
.DS_Store
Thumbs.db
EOF

git add .gitignore
git commit -m "Agregar .gitignore para proyecto Python"
```
</TryIt>

## Checkpoint

<Checkpoint
  items={[
    "Puedes crear y gestionar repositorios Git",
    "Sabes hacer commits con mensajes descriptivos",
    "Entiendes cómo trabajar con ramas",
    "Puedes hacer merge de ramas",
    "Sabes configurar .gitignore para proteger secretos",
    "Entiendes el flujo básico de trabajo con Git",
    "Estás listo para versionar tus proyectos Python"
  ]}
/>

## Recursos Adicionales

### Documentación Oficial
- [Documentación oficial de Git](https://git-scm.com/doc)
- [Git Flight Rules (Guía de soluciones)](https://github.com/k88hudson/git-flight-rules)
- [Pro Git Book (Gratuito)](https://git-scm.com/book)

### Herramientas Recomendadas
- **GitHub Desktop**: Interfaz gráfica para Git
- **GitKraken**: Cliente Git visual
- **VS Code Git Integration**: Integración de Git en el editor

### Conceptos Relacionados
- [Estructuras de Datos](../02_Estructuras_de_Datos/01_listas_tuplas_diccionarios.md) - Continúa aprendiendo Python
- [Testing](../08_Herramientas_Profesionales/03_testing.md) - Integra Git con pruebas

## Siguiente paso

<NextStep
  to="/Estructuras_de_Datos/listas_tuplas_diccionarios"
  label="Siguiente: Estructuras de Datos →"
/>
