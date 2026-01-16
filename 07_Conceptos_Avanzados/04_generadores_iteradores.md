# Generadores y Yield en Python

## Yield
`yield` es una instrucción muy similar a `return`, con una gran diferencia: **pausa la ejecución de tu función y guarda el estado de la misma** hasta que decidas usarla de nuevo.

[Más información sobre Yield](https://alvarohurtado.es/2020/06/08/que-hace-yield-en-python/)

## Generadores
Los generadores son funciones que nos permiten obtener resultados poco a poco. Es decir, cada vez que llamamos a la función nos entrega un nuevo resultado.

**Ejemplo:**
Una función para generar números pares. Si quisiéramos obtener *todos* los números pares, no podríamos hacerlo con una lista normal (sería infinita), pero sí con un generador.

### Referencias
- [Generadores en Python (Alvaro Hurtado)](https://alvarohurtado.es/2013/08/31/generadores-en-python/)
- [Introduction to Python Generators (Real Python)](https://realpython.com/introduction-to-python-generators/)
