# Trucos Programación

El objetivo de este repo, es compartir conocimiento sobre algunos trucos y mejores practicas de programación.

Sientete libre de agregar y modificar lo que creas necesario.

# Zen de python

Definición: https://es.wikipedia.org/wiki/Zen_de_Python [consultado 2020-11-04]

> El **Zen de Python** es una colección de 20 principios de software que influyen en el diseño del Lenguaje de Programación Python, de los cuales 19 fueron escritos por Tim Peters en junio de 1999. El texto es distribuido como dominio público.

## Tim Peters

> **Tim Peters** es un desarrollador de software estadounidense conocido por la creación del algoritmo de ordenación híbrido Timsort y por sus importantes contribuciones al lenguaje de programación Python y su implementación original CPython.
>
> Peters también escribió el Zen de Python, pensado como una declaración de la filosofía de diseño de Python, que se incorporó a la literatura oficial de Python como Propuesta de Mejora 20 de Python y en el intérprete de Python como un easter egg.
> https://es.wikipedia.org/wiki/Tim_Peters [consultado 2020-11-04]

Se puede mostrar desde el interprete de python con la siguiente instrucción

```python
>>> import this
```

Explicación de cada principio del Zen de python: https://inventwithpython.com/blog/2018/08/17/the-zen-of-python-explained/ [consultado 2020-11-04]

Zen de python con código de ejemplo: https://gist.github.com/evandrix/2030615 [consultado 2020-11-04]

| #   | Descripcion                                                                            | Ejemplo                                                                     |
| --- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 1   | Bello es mejor que feo. -                                                              | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L72-L90   |
| 2   | Explícito es mejor que implícito. -                                                    | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L92-L112  |
| 3   | Simple es mejor que complejo.                                                          | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L113-L155 |
| 4   | Complejo es mejor que complicado. -                                                    | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L157-L214 |
| 5   | Plano es mejor que anidado. -                                                          | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L216-L264 |
| 6   | Espaciado es mejor que denso.                                                          | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L266-L301 |
| 7   | La legibilidad es importante.                                                          | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L303-L355 |
| 8   | Los casos especiales no son lo suficientemente especiales como para romper las reglas. | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L357-L393 |
| 9   | Sin embargo la practicidad le gana a la pureza.                                        | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L357-L393 |
| 10  | Los errores nunca deberían pasar silenciosamente.                                      | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L394-L411 |
| 11  | A menos que se silencien explícitamente.                                               | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L394-L411 |
| 12  | Frente a la ambigüedad, evitar la tentación de adivinar.                               | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L413-L426 |
| 13  | Debería haber una, y preferiblemente solo una, manera obvia de hacerlo.                | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L428-L455 |
| 14  | A pesar de que eso no sea obvio al principio a menos que seas Holandés.                | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L428-L455 |
| 15  | Ahora es mejor que nunca.                                                              | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L457-L466 |
| 16  | A pesar de que nunca es muchas veces mejor que _ahora_ mismo.                          | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L457-L466 |
| 17  | Si la implementación es difícil de explicar, es una mala idea.                         | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L68-L507  |
| 18  | Si la implementación es fácil de explicar, puede que sea una buena idea.               | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L468-L507 |
| 19  | Los espacios de nombres son una gran idea, ¡tengamos más de esos!                      | https://gist.github.com/evandrix/2030615#file-pep20_by_example-py-L509-L528 |

---

**Yield en python**

> **yield** es una orden muy similar a un return, con una gran diferencia, yield pausará la ejecución de tu función y guardará el estado de la misma hasta que decidas usarla de nuevo. ¿Confuso? Vamos a verlo en un ejemplo.

https://alvarohurtado.es/2020/06/08/que-hace-yield-en-python/ [consultado 2020-11-04]

**Generadores en Python**

> Son funciones que nos permitirán obtener sus resultados poco a poco. Es decir, cada vez que llamemos a la función nos darán un nuevo resultado. Por ejemplo, una función para generar todos los números pares que cada vez que la llamemos nos devuelva el siguiente número par. ¿Podemos construir una función que nos devuelva todos los números pares? Esto no es posible si no usamos generadores. Como sabemos los números pares son infinitos.

- https://alvarohurtado.es/2013/08/31/generadores-en-python/ [consultado 2020-11-08]
- https://realpython.com/introduction-to-python-generators/ [consultado 2020-11-08]

**Decoradores**

> Un decorador es básicamente un patrón de diseño. Estos alteran de forma dinámica la funcionalidad de una función, un método o una clase, sin necesidad de añadir subclases o modificar el código fuente de la clase que se desea decorar.

- http://46.101.4.154/Art%C3%ADculos%20t%C3%A9cnicos/Python/Wrappers%20y%20decoradores.pdf [consultado 2020-11-08]
- https://realpython.com/primer-on-python-decorators/ [consultado 2020-11-08]

**Excepciones en python**

https://realpython.com/python-exceptions/ [consultado 2020-11-10]

**Revista `The Original Hacker`**

> The Original Hacker número 1 es la primera publicación de esta revista electrónica que viene de la mano de su autora Eugenia Bahit, GLAMP Hacker y programadora extrema, como ella gusta nombrarse. El espíritu de la revista se basa en la libertad y el verdadero hacking con el objetivo de retroalimentar a hacker avanzados y darle un empujoncito a programadores que quieran convertirse en hackers. https://www.espaciolinux.com/2013/11/original-hacker-numero-1-nueva-revista-sobre-hacking-y-programacion/ [consultado 2021-11-08]

- Descargar revistas: https://www.mclibre.org/consultar/documentacion/revistas-titulos/revistas-the-original-hacker.html [consultado 2020-11-08]

**Articulos técnicos sobre python escritos por Eugenia Bahit**

http://46.101.4.154/Art%c3%adculos%20t%c3%a9cnicos/Python/ [consultado 2020-11-08]

- ArgParse
- Beaker (Sesiones sobre WSGI)
- ConfigParser
- Distribución de aplicaciones propias en PyPi
- Lambdas y Closures
- Manipulación de WebForms y Upload de Archivos con Python desde Apache con WSGI
- Paramiko - Conexiones SSH y SFTP
- Text User Interfaces (TUI)
- Wrappers y decoradores
 
**MCLIBRE - MATERIAL CURRICULAR LIBRE**

Página que contienen enlaces a revistas, libros y manuales dedicados al software libre, a las distribuciones GNU/Linux y a los contenidos libres.

https://www.mclibre.org/consultar/documentacion/  [consultado 2020-11-11]


## Libros:

| Libro                                                                      | Autor                         | Descripción                  |
| -------------------------------------------------------------------------- | ----------------------------- | ---------------------------- |
| El libro negro del programador                                             | Rafael Gómez Blanes           |                              |
| The Pragmatic Programmer: Your Journey to Mastery.                         | David Thomas, Andrew Hunt     |                              |
| Scrum: El Arte de Hacer El Doble de Trabajo En La Mitad de Tiempo.         | Jeff Sutherland               |                              |
| Python Tricks: A Buffet of Awesome Python Features.                        | Dan Bader.                    |                              |
| Python Cookbook, 3rd Edition                                               | David Beazley, Brian K. Jones |                              |
| Automate the Boring Stuff with Python                                      | Al Sweigart                   |                              |
| Effective Python: 59 Specific Ways to Write Better Python                  | Brett Slatkin                 |                              |
| Python Projects                                                            | Alan Gauld, Laura Cassell     |                              |
| Violnet Python                                                             | TJ O'Connor                   |                              |
| Black Hat Python                                                           | Justin Seitz                  |                              |
| Learn Python the Hard Way                                                  | Zed A. Shaw                   |                              |
| Learn More Python 3 the Hard Way: The Next Step for New Python Programmers | Zed A. Shaw                   |                              |
| The Clean Coder                                                            | Rober C. Martin               | **General programming book** |
| Pragmatic Thinking and Learning                                            | Andy Hunt                     | **General programming book** |
| Cracking the Coding Interview: 189 Programming Questions and Solutions     | Gayle Laamann McDowell        | **General programming book** |
