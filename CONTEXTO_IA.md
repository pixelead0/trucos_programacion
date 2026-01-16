# Contexto y Guía de Estilo para Agentes IA

Este documento define el estilo, tono y enfoque que debe seguir cualquier agente IA al trabajar en este curso de Python.

## Propósito del Curso

Este es un **curso colaborativo de Python** que busca enseñar programación de manera práctica y conversacional. No es un curso académico formal, sino más bien un taller colaborativo donde se explican conceptos con contexto real y ejemplos que tienen sentido.

## Principios Fundamentales

### 1. Tono Conversacional y Colaborativo
- Escribe como si estuvieras en un taller o sesión de pair programming
- Usa un lenguaje cercano, no formal ni académico
- Haz preguntas al lector para que piense: "¿Qué está pasando aquí?", "¿Cuándo usarías esto?"
- Evita frases como "En este capítulo aprenderás..." o "El objetivo de esta sección es..."

### 2. Explicaciones con Contexto
**NUNCA** pongas código sin explicar:
- **QUÉ hace el código** (línea por línea si es necesario)
- **POR QUÉ es útil** (casos de uso reales)
- **CUÁNDO usarlo** (y cuándo NO usarlo)
- **QUÉ está pasando** (el flujo de ejecución)

**Ejemplo BUENO:**
```python
# append() - agrega al final (más común)
bebidas.append("Refresco")
# Resultado: ["Agua", "Café", "Té", "Jugo", "Refresco"]

# insert() - agrega en una posición específica
bebidas.insert(1, "Leche")
# Resultado: ["Agua", "Leche", "Café", "Té", "Jugo"]
#            (inserta en posición 1, desplaza el resto)
```

**Ejemplo MALO:**
```python
bebidas.append("Refresco")
bebidas.insert(1, "Leche")
```

### 3. Desarrollo de Conceptos
No solo expliques "cómo", también:
- **Por qué existe** este concepto
- **Cuándo usarlo** vs otras alternativas
- **Qué problemas resuelve**
- **Analogías del mundo real** cuando sea útil

### 4. Introducciones Naturales
En lugar de:
> "## Introducción
> Las funciones son bloques de código reutilizables..."

Usa:
> "## ¿Qué son las funciones y por qué las necesitas?
> Imagina que tienes que calcular el área de un rectángulo 10 veces..."

O:
> "## ¿Por qué necesitas estructuras de datos?
> Hasta ahora has trabajado con variables individuales: `nombre = "Ana"`, `edad = 25`. Pero ¿qué pasa cuando necesitas guardar 100 nombres?"

### 5. Ejemplos con Propósito
Cada ejemplo debe:
- Tener un contexto claro (¿qué problema resuelve?)
- Mostrar la salida esperada cuando sea relevante
- Incluir comentarios explicativos
- Ser práctico y realista (no solo "foo", "bar", "baz")

**Ejemplo BUENO:**
```python
# Calcular el total de una compra con impuestos
precio_base = 100.0
impuesto = 0.16  # 16% de IVA
total = precio_base * (1 + impuesto)
print(f"Total a pagar: ${total:.2f}")  # Total a pagar: $116.00
```

**Ejemplo MALO:**
```python
a = 100
b = 0.16
c = a * (1 + b)
print(c)
```

## Estructura de Contenido

### Títulos y Secciones
- Usa preguntas como títulos cuando sea natural: "¿Qué es X?", "¿Cuándo usar Y?"
- Evita títulos genéricos como "Conceptos Básicos" sin contexto
- Cada sección debe tener un propósito claro

### Código
- **Siempre** explica qué hace el código
- Muestra la salida cuando sea relevante
- Usa comentarios para explicar, no solo para decorar
- Agrupa código relacionado con explicaciones entre bloques

### Ejercicios Prácticos
- Deben ser problemas realistas
- Incluir contexto: "Imagina que trabajas en..."
- Mostrar ejemplos de salida esperada
- Sugerir mejoras o extensiones

## Lenguaje y Expresiones

### Usa:
- "Imagina que..." para crear contexto
- "¿Qué está pasando aquí?" para hacer pensar
- "En la práctica..." para dar consejos reales
- "¿Cuándo usar esto?" para ayudar a decidir
- Analogías del mundo real cuando ayuden

### Evita:
- Lenguaje académico formal
- Frases como "Es importante notar que..."
- Definiciones de diccionario sin contexto
- Código sin explicación
- Ejemplos abstractos sin propósito

## Ejemplos de Buen Estilo

### ✅ BUENO - Con contexto y explicación:
```markdown
## ¿Qué son las funciones y por qué las necesitas?

Imagina que tienes que calcular el área de un rectángulo 10 veces en tu código. Podrías escribir `base * altura` 10 veces, pero ¿qué pasa si te equivocas en una? Tienes que corregir 10 lugares.

**Las funciones resuelven esto:** escribes la lógica una vez, la nombras, y la reutilizas cuando la necesites.

**Beneficios reales:**
- **Evitas repetir código**: Escribes una vez, usas muchas veces
- **Más fácil de corregir**: Si hay un error, lo arreglas en un solo lugar
- **Código más legible**: `calcular_total()` es más claro que 15 líneas de código
```

### ❌ MALO - Sin contexto:
```markdown
## Introducción

Las funciones son bloques de código reutilizables que realizan una tarea específica. Nos ayudan a organizar nuestro código, evitar repeticiones y hacerlo más legible y mantenible.
```

## Prerequisitos y Referencias

- Menciona prerequisitos de forma natural: "Si ya conoces X, esto te resultará familiar"
- Usa enlaces a otros capítulos cuando sea relevante
- No asumas conocimiento previo sin mencionarlo

## Transiciones

En lugar de:
> "## Siguiente paso
> Ahora que conoces X, continúa con Y"

Usa algo más natural cuando sea posible, o mantén las transiciones simples y directas.

## Checklist para Agentes IA

Antes de agregar o modificar contenido, verifica:

- [ ] ¿El código tiene explicaciones claras de qué hace?
- [ ] ¿Se explica POR QUÉ es útil este concepto?
- [ ] ¿Se menciona CUÁNDO usarlo (y cuándo NO)?
- [ ] ¿El tono es conversacional, no académico?
- [ ] ¿Los ejemplos tienen contexto y propósito?
- [ ] ¿Se muestran salidas esperadas cuando es relevante?
- [ ] ¿Hay analogías o ejemplos del mundo real?
- [ ] ¿Las introducciones son naturales, no formales?

## Recordatorio Final

Este curso es como un **taller colaborativo**, no una clase universitaria. El lector debe sentir que está aprendiendo junto a alguien, no siendo evaluado. El código debe tener sentido en contextos reales, y cada concepto debe explicarse con el "por qué" y el "cuándo", no solo el "cómo".

---

**Última actualización:** 2026
**Versión:** 1.0
