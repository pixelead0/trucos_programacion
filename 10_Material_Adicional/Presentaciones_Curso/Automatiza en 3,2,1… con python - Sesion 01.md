## SPEECH — PARTE 1: INTRODUCCIÓN Y MOTIVACIÓN

### Diapositiva: *Automatiza en 3,2,1… con Python*

Buenas tardes.
Antes de que entremos al mágico mundo del código, quiero pedirles algo raro: **paciencia**.

---

### Diapositiva: *Antes de programar…*

Sí, paciencia.
Porque hoy no vamos a programar... todavía.
Hoy vamos a entender **por qué y para qué programar bien**.
Hoy vamos a hablar de **teoría**.

Antes de escribir una sola línea de código, tenemos que entrenar la mente.
Así como en el deporte se empieza con respiración, técnica básica y movimientos controlados…

...en programación empezamos aprendiendo a **pensar**, **estructurar** y **decidir**.

---

### Diapositiva: *Nadie corre 42 km...*

> “Nadie corre 42 km sin haber recorrido muchos más entrenando.”

Y nadie —créanme— construye automatizaciones eficientes sin antes conocer los principios que hacen que el código sea **mantenible, legible y escalable**.

Aprender teoría puede parecer aburrido, pero es lo que te va a ahorrar tiempo, errores y frustraciones en el futuro.

---

### Diapositiva: *DISCLAIMER — alerta máxima de sesión aburrida*

¡Sí! Esta sesión va a estar **llena de teoría**.
Nada de código, puro conocimiento que se queda contigo para siempre.

Prepárate un café extra fuerte porque hablaremos de:

* Historia de Python
* Filosofía Zen
* venv
* Git
* Principios de diseño

Pero te lo prometo: esta tortura teórica va a ser la base sobre la cual vas a construir soluciones reales y profesionales.

---

## �️SPEECH — PARTE 2: SOBRE MÍ

---

### Diapositiva: *Sobre mí (profesional)*

Soy ingeniero en computación, desarrollador backend en Python, zurdo y 100% chilango.

Colaboro con comunidades como Python CDMX y PyMX.
Pueden encontrarme en GitHub, Medium, Wikipedia y varios espacios donde hablo (y escribo) de programación y software libre.

---

### Diapositiva: *Sobre mí (humor y filosofía)*


---

### Diapositiva: *Sobre mí (lección de vida)*

Aprendí a manejar a mis 41 años.
Nunca es tarde para empezar.
Y eso aplica también para aprender a programar.

> “Tienes que aprender las reglas del juego.
> Y luego tienes que jugar mejor que nadie.”
> — Dianne Feinstein

---

## �️SPEECH — PARTE 3: HISTORIA Y FILOSOFÍA DE PYTHON

---

### Diapositiva: *Historia de Python (cita Guido)*

> “En diciembre de 1989, estaba buscando un proyecto de hobby para Navidad…”

Imaginen esto:
Es diciembre de 1989.
Guido van Rossum —sí, un nombre que suena a villano de película— estaba aburrido en vacaciones de Navidad.

No tenía acceso a su oficina, solo a su computadora personal.
Así que decidió hacer lo que cualquier geek con tiempo libre haría:
crear un nuevo lenguaje de programación.

Y no lo hizo para cambiar el mundo.
Lo hizo por diversión.
Por eso, Python nació con una característica muy especial:
está pensado para que programar no sea un martirio.

---

### Diapositiva: *HIstoria*

Aquí viene lo bueno:
No lo nombró por la serpiente.

Lo llamó Python por un grupo de comedia británica:
Monty Python’s Flying Circus.

Sí.
Así de informal, así de raro, así de genial.


---

### Diapositiva: *Línea del tiempo de versiones*

Desde esa primera versión, llamada 0.9.0, Python ha evolucionado:

    En la v1.0, ya tenía clases, excepciones y funciones.

    Con la v2.0, llegaron cosas como el recolector de basura y las listas por comprensión.

    Pero en la v3.0, Python se puso serio: corrigió errores históricos… aunque rompió compatibilidad con la versión anterior.

Y desde entonces, las versiones 3.x siguen refinando el lenguaje, haciéndolo más moderno, más coherente… y más poderoso.

---

### Diapositiva: *Características*

Python es diferente porque apuesta por:

* **Una forma clara de hacer las cosas**
* **Practicidad sobre pureza**
* **Una filosofía que prefiere lo legible a lo rebuscado**

Y además, viene con *“baterías incluidas”*.
Es decir, una librería estándar robusta para hacer casi todo, sin necesidad de paquetes externos.

---

### Diapositiva: *Ventajas de Python*

* **Versátil**: web, scripts, data, automatización, IA, ciencia… lo que quieras.
* **Fácil**: sintaxis limpia que no te estorba.
* **Ecosistema gigante**: pandas, Flask, Django, FastAPI, NumPy, etc.
* **Se lleva bien con otros lenguajes**: puedes integrar código en C, Bash, etc.
* **Comunidad global**: millones de desarrolladores, toneladas de recursos.

---

## �️SPEECH — PARTE 4: LIMITACIONES DE PYTHON

---

### Diapositiva: *Limitaciones de Python (broma)*

> ¿Limitaciones?
> No tiene.
> ¡Python es perfecto!

(Jajaja… ojalá.)

---

### Diapositiva: *Limitaciones reales*

* **Rendimiento**: es más lento que C o Rust.
* **GIL**: el famoso *Global Interpreter Lock* limita la ejecución paralela real.
* **Tipado dinámico**: útil, pero propenso a errores si no se es cuidadoso.
* **Desarrollo móvil**: no es su fuerte.
* **Uso de recursos**: más memoria que un lenguaje de bajo nivel.


Perfecto, seguimos con:

---

## �️SPEECH – PARTE 4

### �‍♂️ **El Zen de Python**

*(Mientras se proyecta `>>> import this` en pantalla)*

¿Listos para una clase de filosofía, cortesía de un comando?

Abre una consola de Python y escribe:

```python
>>> import this
```

Y pum... aparece una lista de 19 frases.
Se llama el **Zen de Python**, y es como un manifiesto para escribir buen código.

---

### � ¿Qué dice ese Zen?

> “Hermoso es mejor que feo.”
> “Explícito es mejor que implícito.”
> “Simple es mejor que complejo.”
> “La legibilidad cuenta.”

No es poesía.
Es sentido común convertido en reglas que millones de desarrolladores usan a diario.

---

### � Ejemplos

#### � *Hermoso es mejor que feo*

No te lo tomes literal.
No es que tu código deba desfilar en la pasarela,
pero sí debe ser **limpio**, **ordenado**, **agradable de leer**.

---

#### � *Explícito es mejor que implícito*

No escondas magia en tu código.
Si algo se hace, que se vea.
Los bugs viven en lo implícito.

---

#### � *Simple es mejor que complejo*

No sobrepienses la solución.
¿Puedes resolverlo en dos líneas claras?
Entonces no escribas un algoritmo que necesita un máster para entenderlo.

---

#### � *Complejo es mejor que complicado*

Si algo es complejo, que al menos tenga estructura.
Nada de caos disfrazado de genialidad.

---

#### � *La legibilidad cuenta*

Esta es LA regla.
Porque si tú no puedes entender tu propio código en dos semanas…
estás creando deuda técnica.

---

### � ¿Y por qué importa esto?

Porque automatizar no es solo escribir scripts que funcionan.
Es escribir scripts que *otros puedan entender, mantener y mejorar*.

El Zen de Python es tu guía silenciosa.
No compila errores, pero previene dolores de cabeza.


Perfecto, seguimos con la siguiente parte, que cambia de tono hacia algo más reflexivo: **el profesionalismo**.

---
### � (Diapositiva: Libros recomendados)

Antes de entrar al tema del profesionalismo, quiero recomendarte algunos libros que pueden cambiar tu forma de ver el código:

* *Clean Code*
* *The Clean Coder*
* *Clean Architecture*
* *El libro negro del programador*
* *The Pragmatic Programmer*
* *97 Things Every Programmer Should Know*

No son libros de sintaxis, son libros sobre cómo **pensar como un profesional**.

---

## �️SPEECH – PARTE 5 (CORREGIDO)

### �️ (Diapositiva: Teradyne, 1979 – Contexto)

Y ahora sí…
Déjenme contarles una historia real.
Una historia que me marcó cuando la leí por primera vez.

Estamos en 1979.
Robert C. Martin —el Tío Bob— trabajaba en una empresa llamada **Teradyne**.
Ahí, su software controlaba un sistema de diagnóstico para líneas telefónicas.

¿La lógica?
Una minicomputadora se conectaba por teléfono a computadoras satélite.
Cada noche se hacían pruebas automáticas sobre miles de líneas.
Cada mañana, los gerentes recibían reportes con errores detectados.

---

### �‍� (Diapositiva: ¿Quién lo usaba?)

Este sistema no era un juguete.
Lo usaban los **gerentes de servicio de compañías telefónicas**, para prevenir quejas de los clientes.

Cada fallo detectado a tiempo era **una llamada de queja menos**.
Y esas quejas influían directamente en las tarifas que podían cobrar las empresas.
Sí, dinero real. Impacto real.

---

### ⚠️ (Diapositiva: ¿Por qué era tan sensible?)

Si la rutina nocturna fallaba, no había reportes.

* Técnicos sin trabajo asignado.
* Clientes molestos sin información.
* Métricas regulatorias afectadas.
* Reparaciones tardías.

Todo por **una noche sin datos**.

---

### �‍♂️ (Diapositiva: Historia del error – El envío apresurado)

Y adivinen qué pasó.

Tío Bob tenía que entregar una nueva versión del sistema.
Una función prometida, una fecha límite.
No había probado la rutina nocturna… pero pensó:

> “Eso no lo toqué, debe funcionar.”

No probó. Entregó. Falló.

---

### � (Diapositiva: Tensión con el equipo)

El gerente de campo, Tom, empezó a recibir llamadas.
Clientes molestos.
Sistema inservible.

Bob trató de arreglarlo a las prisas… pero falló dos veces más.
Mientras tanto, Tom lidiaba con la presión.

---

### � (Diapositiva: Consecuencias inmediatas)

* Los reportes no se generaron.
* Los clientes no pudieron trabajar.
* Tuvieron que **revertir a una versión anterior**.
* Perdieron funcionalidad nueva… y credibilidad.

Todo por asumir que “seguro funciona”.

---

### � (Diapositiva: Lo que NO se hizo bien)

Aquí está la lista negra:

* Cumplir con la fecha fue más importante que asegurar calidad.
* No se comunicó que las pruebas no estaban completas.
* Se asumió que nada se rompería.
* Se pensó más en la entrega que en el impacto.

---

### ✅ (Diapositiva: Lo que se debió hacer)

Y ahora la lista que sí debió seguir:

* Decir con claridad: *“No está listo”*.
* Pensar en el **cliente**, no solo en el código.
* Probar y validar, aunque cueste tiempo.
* Asumir el error, arreglarlo y aprender.

Eso… es **ser profesional**.

---

### � (Diapositiva: El verdadero profesionalismo – No hacer daño)

> “Primero, no hacer daño.”

No es suficiente que tu código funcione.
Debe **funcionar sin causar daño**.

Un error en producción puede:

* Borrar datos
* Generar trabajo innecesario
* Hacer quedar mal a tu equipo
* Romper la confianza

---

### �‍♂️ (Diapositiva: La responsabilidad es nuestra)

Como desarrolladores, **la responsabilidad es nuestra**.

* No se trata solo de escribir código bonito.
* Se trata de probar. Validar. Documentar.
* De decir “esto aún no está listo” cuando sea necesario.

Y sobre todo, de pensar más allá del código.
Pensar en **quién depende de lo que hacemos**.

---

### � (Diapositiva: Profesionalismo ≠ Perfección)

Y para cerrar esta parte:

**Ser profesional no es ser perfecto.**
Todos cometemos errores.
Pero el profesional **responde con integridad**, no con excusas.

> “La confianza no se construye con código brillante,
> sino con decisiones éticas.”


## �️SPEECH – PARTE 6

### � **Principios de diseño: construir software que resista el tiempo**

Después de hablar de profesionalismo, es hora de hablar de cómo lo aplicamos en el código.

Porque escribir scripts que funcionan es fácil.
Lo difícil es escribir **código que funcione hoy… y siga funcionando mañana.**

Para eso existen los **principios de diseño**.

---

### � (Diapositiva: ¿Qué son los principios de diseño?)

No son modas.
Son técnicas tan útiles, que se convirtieron en principios.
Se usan porque han demostrado funcionar durante años.

Y lo que buscan es:

* Que el código sea más comprensible
* Que tolere cambios sin romperse
* Que sea más fácil de mantener y extender

---

### �‍� (Diapositiva: No es solo técnica, es responsabilidad)

Aplicar principios no es para impresionar en entrevistas.
Es una **muestra de responsabilidad profesional**.

Vamos a ver tres pilares que uso cada vez que automatizo algo:

* **SOLID**
* **KISS**
* **DRY**

---

## � SOLID

Empecemos con el más famoso:

**SOLID** no es una librería ni un framework.
Es un acrónimo que agrupa cinco principios que te ayudan a escribir **software mantenible y profesional**.

---

### � (Diapositiva: ¿Por qué SOLID?)

Porque en la vida real, no basta con que tu código funcione.
Tiene que poder **modificarse, escalarse, entenderse y confiarse**.

---

### S – *Single Responsibility Principle*

> "Una clase debe tener una sola razón para cambiar."

Esto aplica a funciones, clases, scripts, lo que sea.

No mezcles todo en un mismo lugar:
no pongas lógica de negocio, de presentación y de acceso a datos en la misma función.

Divide, estructura, **responsabiliza a cada parte de lo suyo**.

Así es más fácil mantener, probar y colaborar.

---

### O – *Open/Closed Principle*

> “Abierto para extensión, cerrado para modificación.” — Bertrand Meyer

Tu código debe poder **crecer sin romperse**.

¿Quieres agregar nueva lógica? Perfecto.
Pero no toques lo que ya funciona.
Extiende, no modifiques.

Así proteges lo que ya fue probado y no introduces regresiones.

---

### L – *Liskov Substitution Principle*

> “Los objetos de una subclase deben poder sustituir a los de su clase base.”

Si vas a heredar… que funcione igual o mejor.
No crees subclases que rompan el comportamiento esperado.

Este principio **evita sorpresas** cuando se usa polimorfismo.

---

### I – *Interface Segregation Principle*

> “Una clase no debe estar obligada a implementar métodos que no necesita.”

No crees interfaces gigantes con métodos para todo.
Mejor interfaces **enfocadas, pequeñas y coherentes**.

Así tus clases solo usan lo que realmente necesitan.
Menos ruido. Más claridad.

---

### D – *Dependency Inversion Principle*

> “Depende de abstracciones, no de implementaciones concretas.”

¿Quieres hacer pruebas automatizadas fácilmente?
¿Cambiar tu base de datos sin romper todo?

Entonces no acoples tu código a cosas específicas.
Usa abstracciones: interfaces, clases base, inyección de dependencias.

Eso te da libertad de evolución.

---

### � (Diapositiva: ¿Qué significa SOLID?)

Resumamos:

* **S**: Una sola responsabilidad
* **O**: Extiende sin modificar
* **L**: Herencia coherente
* **I**: Interfaces específicas
* **D**: Menos acoplamiento, más flexibilidad

SOLID es **tu chaleco antibalas contra el caos**.

---

## � DRY – Don’t Repeat Yourself

> "Cada pieza de conocimiento debe tener una única representación no ambigua y definitiva." — Andy Hunt & Dave Thomas

Cada vez que repites código, repites esfuerzo.
Y duplicas el riesgo de errores.

Si algo cambia y lo copiaste en tres lugares… ¿te vas a acordar de actualizar los tres?

No copies.
Reutiliza. Extrae funciones. Usa estructuras.

Menos código = menos errores.

---

### � Ejemplo DRY

(*Proyectas el código repetitivo vs. la versión DRY*)

Una lista copiada y pegada puede funcionar…
pero si haces que viva en un solo lugar, será más limpio, más mantenible, más profesional.

---

## � KISS – Keep It Simple, Stupid

> “La simplicidad es la máxima sofisticación.” — Leonardo da Vinci

No todo lo elegante es complejo.
A veces, la mejor solución es **la más simple**.

Evita:

* Reinvenciones innecesarias
* Agregar tecnologías por moda
* “Sobreingeniería”

Haz que tu código **hable claro y directo**.

---

### � Ejemplo KISS

(*Proyectas el código complicado vs. la solución simple con `or "Stranger"`*)

¿Para qué tres líneas, condiciones y estructuras…
si puedes resolverlo en una sola línea clara?


---

## �️SPEECH – PARTE 7

### � La Navaja de Ockham y el arte de no complicarte

Hay un principio que uso incluso fuera del código.
Se llama la **Navaja de Ockham**.

> “La explicación más simple, que requiere menos suposiciones, suele ser la correcta.”

Y en programación:

> “La solución más simple, que cumple con el objetivo, suele ser la mejor.”

No necesitas 3 microservicios, 2 colas y un contenedor…
si con un buen script en Python resuelves el problema.

No estás aquí para impresionar.
Estás aquí para **resolver, con claridad y elegancia**.

---

## � CONTROL DE VERSIONES

### (Diapositiva: Control de versiones)

Ahora sí.
Ya estás listo para escribir código… pero, ¿cómo lo gestionas?

Aquí entra una herramienta indispensable: **Git**.

Git no es opcional.
Es el **registro histórico de tu proyecto**, el mecanismo que te permite probar sin miedo, colaborar sin pisarte, y retroceder cuando algo sale mal.

---

### � ¿Por qué es tan importante?

* Porque vas a cometer errores (todos lo hacemos)
* Porque tu código va a cambiar
* Porque alguien más lo va a tocar después
* Porque automatizar sin control de versiones… es vivir al borde del abismo

---

## ✅ COMMITS CONVENCIONALES

¿Y cómo usamos Git de forma profesional?

Con **commits claros y estructurados**.

* `feat`: una nueva funcionalidad
* `fix`: una corrección
* `docs`, `style`, `refactor`, `test`, `build`, `chore`…

Si te tomas 10 segundos más para escribir bien tu mensaje,
te vas a ahorrar 2 horas de “¿quién cambió esto y por qué?”

---

### � Ejemplo real

```bash
git commit -m "feat: agregar validación de IPs en formato IPv4"
```

Eso es oro.
Cuando revises el historial meses después, vas a agradecerlo.

---

## � CICLO DE VIDA DE UN CAMBIO

Y así debería ser tu flujo de trabajo:

1. Crea una rama nueva
2. Trabaja con commits pequeños
3. Mantente actualizado con `main`
4. Haz un *Pull Request*
5. Revisa, aprueba y **mergea solo cuando todo esté en orden**

Esto **es colaboración profesional**.

---

## � ENTORNOS DE DESARROLLO

### (Diapositiva: El laboratorio…)

Aquí es donde ocurre la magia.

Tu máquina es tu laboratorio.
Y si contaminas tu sistema global con librerías, versiones y paquetes…

Estás provocando errores difíciles de rastrear.

La solución: **entornos virtuales**.

---

## � venv: Entornos virtuales en Python

```bash
python -m venv .venv
source .venv/bin/activate
```

Esto crea un espacio limpio, aislado, perfecto para trabajar sin afectar nada más.

Cada proyecto, su entorno.
Cada entorno, sus dependencias.

---

## � requirements.txt

Cuando tu script ya funciona…
¿cómo te aseguras de que otra persona pueda ejecutarlo?

Con este archivo mágico:

```bash
pip freeze > requirements.txt
```

Y para instalar todo:

```bash
pip install -r requirements.txt
```

Así se reproducen entornos.
Así se comparte trabajo **profesionalmente**.

---

## � ¿Y ahora?

Ya hablamos de historia.
De filosofía.
De principios.
De herramientas.

Ya no eres un improvisado.
Estás listo para automatizar con cabeza, con orden, y con propósito.

---

### � Lo que sigue…

Vamos a aplicar todo esto en un caso real:
convertir un archivo Excel lleno de información sucia, ambigua, repetitiva…
en un XML limpio, validado, profesional.

Porque automatizar **no es solo que funcione**.
Es que funcione **bien, siempre, para todos**.
