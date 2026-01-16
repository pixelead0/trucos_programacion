Automatiza en 3,2,1…
con Python

DISCLAIMER:
¡ALERTA DE SESIÓN
"SEMI- ABURRIDA"! �
Esta sesión es como ir al gimnasio y solo hacer técnica frente al espejo.
Pero si aguantas esto, mañana estarás escribiendo código que da gusto ver.

Prepárate para:
	Activar entornos
	Versionar con Git sin romper nada
	Escribir código que no te dé pena mostrar
Y recuerda:
	No se construyen automatizaciones profesionales con código improvisado.

3
curso

4

Sobre mi:
5
�‍� Ingeniero en Computación� Desarrollador Backend Python�️ CDMX ��✍️ Zurdo� Colaboro en:




https://www.meetup.com/python-mexico/events/307557668/https://es.wikipedia.org/wiki/Usuario_discusi%C3%B3n:Pixelead0

Redes:
https://github.com/pixelead0
https://gist.github.com/pixelead0 https://pixelead0.blogspot.com/
https://www.linkedin.com/in/pixelead0/
https://medium.com/@pixelead0

Sobre mi:
6
Mi superpoder es transformar hojas de cálculo confusas en archivos JSON limpios, y hacerlo con código que alguien más pueda entender mañana sin querer prenderme fuego.

He sobrevivido a 11,394 bugs y sigo contando

Firme creyente de que cualquier problema puede resolverse con suficiente café y Python


Sobre mi:
7
Aprendí a manejar a mis 41 años,
Nunca es tarde para iniciar.

Tienes que aprender
las reglas del juego.

Y luego tienes que jugar
 mejor que nadie.
Dianne Feinstein, la primera alcaldesa mujer de San Francisco,
durante una entrevista en 1985 para la revista Cosmopolitan


Historia y filosofía de Python.
El Zen: escribir código limpio y simple.
Principios de diseño: SOLID, KISS, DRY

Por qué automatizar no es solo "que funcione"
9
En nuestro capítulo anterior…

10

11

12

Cómo preparar un entorno profesional
Cómo versionar y estructurar tus scripts
Cómo escribir código reutilizable y legible
Y un ejercicio práctico para cerrar
Hoy pasamos de la teoría a la acción
13
¿Qué veremos hoy?

Entornos virtuales con venvEntender cómo preparar un entorno profesional para programar en Python.

Son espacios aislados donde podemos instalar dependencias de Python sin afectar al sistema global ni a otros proyecto
Ventajas:
Gestionar dependencias específicas para cada proyecto.
Evitar conflictos entre versiones de paquetes.
Reproducir fácilmente el entorno de desarrollo en otras máquinas.
15
Entornos Virtuales

# Crear un entorno virtual
python -m venv .venv

# Activar el entorno virtual
# En Linux/Mac:
source .venv/bin/activate

# Verificar activación (el prompt cambia y muestra el entorno)
which python  # Debe mostrar el python del entorno virtual


16
Creación y activación con venv
https://docs.python.org/3/tutorial/venv.html


17
Creación y activación con venv

El archivo requirements.txt se utiliza para gestionar las dependencias de un proyecto Python.Especifica las librerías necesarias para ejecutar el proyecto.

Facilita la instalación de todas las dependencias con un solo comando
pip install -r requirements.txt

Permite reproducir el entorno de desarrollo fácilmente en diferentes máquinas o entornos.Es una forma estándar de asegurar que cualquier persona que trabaje en el proyecto tenga las mismas dependencias instaladas.


18
Gestión de Dependencias
con requirements.txt

Generar archivo requirements.txt
pip freeze > requirements.txt
Instalar dependencias
pip install -r requirements.txt
19
Gestión de Dependencias
con requirements.txt
Compartir tu código sin requirements.txt es como entregar una receta sin ingredientes.

“Tu entorno es tu laboratorio.
No lo contamines.”
20
Entornos Virtuales

CONTROL DE VERSIONESEl control de versiones es una herramienta esencial para todo desarrollador.
Permite registrar, comparar, revertir y colaborar en los cambios de código a lo largo del tiempo.

Control de Versiones
22
“Automatizar sin control de versiones… es vivir al borde del abismo.”

git pull
git status
git add .
git commit -m "feat: agregar validador de IPs"
git branch
git push
23
Comandos esenciales:

Son una especificación para dar estructura a los mensajes de commit en Git. Esta convención proporciona un conjunto fácil de reglas para crear un historial de commits explícito, lo que facilita la creación de herramientas automatizadas y la generación de changelogs.VENTAJAS:
Generación automática de changelogs
Determinación automática de incrementos de versión semántica
Comunicar la naturaleza de los cambios a compañeros de equipo y otros interesados
Facilitar la contribución a proyectos al estandarizar la estructura de commits
Hacer más útil el historial de commits y facilitar la navegación


24
Commits Convencionales

Control de Versiones
25
https://imgs.xkcd.com/comics/git_commit.png

Tips principales:
26
Commits Convencionales
Feat
Nueva característica
Docs
Cambios en documentación
Style
Cambios que no afectan al significado del código (espaciado, formato, etc.)
Refactor
Cambio de código que no corrige error ni añade funcionalidad
Perf
Mejora de rendimiento
Test
Añadir o corregir pruebas
Build
Cambios en sistema de build o dependencias externas
Chore
Otros cambios que no modifican src o test

Control de Versiones
27
"Esto es GIT. Rastrea el trabajo colaborativo en proyectos a través de un hermoso modelo de árbol basado en teoría de grafos distribuidos."
"Genial. ¿Cómo lo usamos?""Ni idea. Solo memoriza estos comandos de terminal y escríbelos para sincronizar. Si obtienes errores, guarda tu trabajo en otro lugar, borra el proyecto, clónalo de nuevo y descarga una copia nueva."
https://img.devrant.com/devrant/rant/r_2329045_c5v7p.jpg

Recordatorio:
Tomar agua.

Facilita la lectura y el mantenimiento
Permite separar responsabilidades
Es la base para crecer con orden


29
¿Por qué importa la estructura?

proyecto/
├── .venv/
├── main.py
├── helpers.py
├── requirements.txt
└── .gitignore
30
Ejemplo
Bonus:
incluye README.md y GUIDE.md si tu proyecto crece


GENERADOR DE CONTRASEÑASObjetivo:
Crear una función que genere contraseñas aleatorias y seguras con opciones personalizadas.
32
EJERCICIO PRÁCTICO

FILTROS Y OPCIONES

Objetivo:
Agregar flexibilidad al generador de contraseñas.
33
 EXTENSIÓN DEL EJERCICIO

LONGITUD PERSONALIZADA CON input()

Objetivo:
Permitir al usuario definir la longitud de la contraseña desde la terminal.
34
MEJORA:

OPCIONES PERSONALIZADAS CON input()

Objetivo:
Pedir al usuario dos entradas:
	Longitud de la contraseña
	Si desea incluir caracteres especiales
35
INTERACTIVO:

✔️Crear entornos virtuales con venv
✔️ Versionar el código con Git
✔️ Estructurar un proyecto Python
✔️ Escribir funciones reutilizables
✔️ ¡Y construir un generador de contraseñas pro!
36
¿Qué aprendimos hoy?

Guarda las contraseñas generadas en un archivo .txt

O crea una opción para generar varias contraseñas de golpe
37
Reto opcional


¿Qué sigue?
Validaciones, manejo de errores y pruebas automáticas
Para que tu script funcione siempre… incluso cuando todo sale mal.
