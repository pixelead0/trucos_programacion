# 📖 Estructura Estándar de Lecciones

## 🎯 Objetivo

Esta guía define la estructura estándar que todas las lecciones deben seguir para garantizar una experiencia educativa consistente, progresiva y multinivel.

---

## 📐 Estructura Completa

```markdown
---
title: [Título de la Lección]
description: [Descripción breve para SEO]
---

import LessonMeta from '@site/src/components/LessonMeta';
import LessonMap from '@site/src/components/LessonMap';
import Checkpoint from '@site/src/components/Checkpoint';
import NextStep from '@site/src/components/NextStep';
import TryIt from '@site/src/components/TryIt';
import ExpectedOutput from '@site/src/components/ExpectedOutput';
import LevelTabs from '@site/src/components/LevelTabs';
import ProgressIndicator from '@site/src/components/ProgressIndicator';

<LessonMeta
  level="beginner|intermediate|advanced"
  time="X minutos/horas"
  prereqs={['Lección 1', 'Lección 2']}
/>

<ProgressIndicator
  module="Módulo 01"
  lesson={3}
  total={6}
/>

# [Título de la Lección]

<LessonMap
  objectives={[
    "Objetivo 1",
    "Objetivo 2",
    "Objetivo 3"
  ]}
  useCases={[
    "Caso de uso 1",
    "Caso de uso 2"
  ]}
  time="X minutos"
/>

## 🎯 Qué vas a lograr

Lista clara y específica de lo que el estudiante podrá hacer después de esta lección:

- [Objetivo medible 1]
- [Objetivo medible 2]
- [Objetivo medible 3]

## 🌍 Casos reales donde se usa

Contexto del mundo real donde se aplica este concepto:

- **Ejemplo 1**: Descripción breve
- **Ejemplo 2**: Descripción breve
- **Ejemplo 3**: Descripción breve

**Ejemplo concreto**: [Descripción detallada de un caso real]

## 💡 Concepto base

Explicación simple y accesible del concepto, usando analogías cuando sea posible.

**Analogía**: [Si aplica]

**Lo genial de Python:** [Si aplica, destacar qué hace único a Python]

:::info Para principiantes
Explicación adicional para quienes nunca han visto este concepto.
:::

## 📚 Paso a paso

### 1. [Concepto Básico]

Explicación del concepto con ejemplos.

```python
# Código comentado paso a paso
```

**¿Qué está pasando aquí?**
- Punto 1
- Punto 2

**Ejemplo Simple:**

```python
# Ejemplo mínimo viable
```

<LevelTabs>
  <div label="🟢 Principiante">
    Explicación detallada para principiantes
    Ejemplos simples
    Conceptos básicos
  </div>
  <div label="🟡 Intermedio">
    Variaciones y casos de uso
    Mejores prácticas
    Patrones comunes
  </div>
  <div label="🔵 Avanzado">
    Edge cases
    Trade-offs
    Optimizaciones
    Buenas prácticas avanzadas
  </div>
</LevelTabs>

### 2. [Siguiente Concepto]

[Continuar con la misma estructura]

## 🎓 Ejemplo Práctico Completo

Ejemplo que integra todos los conceptos de la lección:

```python
# Código completo y comentado
```

<ExpectedOutput>
```
Salida esperada
```
</ExpectedOutput>

## ⚠️ Errores comunes

### 1. [Error Común 1]

```python
# ❌ Error común
codigo_incorrecto()

# ✅ Correcto
codigo_correcto()
```

:::warning Error típico
**Descripción del error**: Explicación de por qué ocurre y cómo evitarlo.
:::

### 2. [Error Común 2]

[Continuar...]

## ✅ Buenas Prácticas

### [Categoría 1]

```python
# ✅ Buenas prácticas
codigo_limpio()
```

### [Categoría 2]

[Continuar...]

## 🧪 Ejercicios Prácticos

<TryIt>
### Ejercicio 1: [Nombre del Ejercicio]

Descripción del ejercicio:

```python
# Código inicial o plantilla
```
</TryIt>

<TryIt>
### Ejercicio 2: [Nombre del Ejercicio]

[Continuar...]
</TryIt>

## 🎯 Checkpoint

<Checkpoint
  items={[
    "Puedes hacer X",
    "Entiendes Y",
    "Sabes cómo Z",
    "Estás listo para [siguiente lección]"
  ]}
/>

## 📚 Recursos Adicionales

### Documentación Oficial
- [Enlace 1](url)
- [Enlace 2](url)

### Bibliografía Recomendada
- **Libro 1** (Autor) - Capítulo relevante
- **Libro 2** (Autor) - Sección relevante

### Conceptos Relacionados
- [Lección relacionada 1](./ruta)
- [Lección relacionada 2](./ruta)

## 🚀 Siguiente paso

<NextStep
  to="/ruta/siguiente-leccion"
  label="Siguiente: [Nombre de la Lección] →"
  project="[Proyecto relacionado opcional]"
/>
```

---

## 📋 Guía de Uso por Sección

### 1. Frontmatter y Metadatos

```yaml
---
title: Título claro y descriptivo
description: 1-2 frases para SEO y previews
---
```

**Recomendaciones**:
- Título: máximo 60 caracteres
- Description: máximo 160 caracteres
- Incluir palabras clave relevantes

---

### 2. LessonMeta Component

```tsx
<LessonMeta
  level="beginner|intermediate|advanced"
  time="X minutos" // o "X horas"
  prereqs={['Lección 1', 'Lección 2']} // opcional
/>
```

**Recomendaciones**:
- `level`: Basado en el nivel mínimo requerido
- `time`: Tiempo realista de lectura + práctica
- `prereqs`: Solo lecciones estrictamente necesarias

---

### 3. ProgressIndicator Component

```tsx
<ProgressIndicator
  module="Módulo 01"
  lesson={3}
  total={6}
/>
```

**Propósito**: Mostrar progreso dentro del módulo para motivar al estudiante.

---

### 4. LessonMap Component

```tsx
<LessonMap
  objectives={["Objetivo 1", "Objetivo 2"]}
  useCases={["Caso 1", "Caso 2"]}
  time="45 minutos"
/>
```

**Propósito**: Vista previa rápida de la lección (qué aprenderás, para qué sirve, cuánto tiempo).

---

### 5. LevelTabs Component

```tsx
<LevelTabs>
  <div label="🟢 Principiante">
    Contenido para principiantes
  </div>
  <div label="🟡 Intermedio">
    Contenido para intermedios
  </div>
  <div label="🔵 Avanzado">
    Contenido para avanzados
  </div>
</LevelTabs>
```

**Cuándo usar**:
- Cuando un concepto tiene profundidad variable
- Cuando hay variaciones por nivel
- Cuando hay optimizaciones avanzadas

**Cuándo NO usar**:
- Conceptos muy básicos (solo principiante)
- Conceptos muy avanzados (solo avanzado)
- Cuando añade complejidad innecesaria

---

### 6. Sección "Qué vas a lograr"

**Formato**: Lista de objetivos medibles y específicos.

**Buen ejemplo**:
- Crear y usar variables en Python
- Entender los tipos de datos básicos (str, int, float, bool)
- Convertir entre tipos usando int(), float(), str()

**Mal ejemplo**:
- Aprender sobre variables
- Entender Python
- Ser mejor programador

---

### 7. Sección "Casos reales donde se usa"

**Propósito**: Contexto del mundo real para motivar y conectar con experiencias del estudiante.

**Formato**:
- Lista de casos de uso breves
- Un ejemplo concreto detallado

**Ejemplo**:
```markdown
- **Formularios web**: Capturar nombre, email, edad del usuario
- **Cálculos financieros**: Precios, descuentos, totales, impuestos
- **Sistemas de autenticación**: Validar credenciales (usuario, contraseña)

**Ejemplo real**: Cuando compras algo online, el sistema guarda tu nombre (string),
el precio del producto (float), la cantidad (int), y si el pago fue exitoso (bool).
```

---

### 8. Sección "Concepto base"

**Propósito**: Explicación simple y accesible, usando analogías.

**Estructura**:
1. Explicación simple (2-3 párrafos)
2. Analogía (si aplica)
3. Lo genial de Python (si aplica)
4. Admonition para principiantes (si aplica)

**Ejemplo**:
```markdown
Las variables son como etiquetas que pones a valores para poder usarlos después.
Piensa en una variable como una caja con un nombre donde guardas algo.

**Lo genial de Python:** No necesitas decirle qué tipo de dato vas a guardar.
Python lo descubre automáticamente cuando le asignas un valor.

:::info Para principiantes
Si esto te suena raro, es normal. Quédate con la idea: "una variable es una caja
con un nombre donde guardas algo". El tipo de dato Python lo descubre solo.
:::
```

---

### 9. Sección "Paso a paso"

**Estructura para cada concepto**:

1. **Título descriptivo** (### 1. [Concepto])
2. **Explicación breve** (1-2 párrafos)
3. **Código comentado** con explicación
4. **"¿Qué está pasando aquí?"** (desglose línea por línea)
5. **Ejemplo simple** (código mínimo viable)
6. **LevelTabs** (si aplica para diferentes niveles)
7. **Tips y advertencias** (si aplica)

**Recomendaciones**:
- Máximo 5-7 conceptos por lección
- Cada concepto debe ser independiente pero progresivo
- Incluir código ejecutable
- Comentar código extensivamente

---

### 10. Sección "Ejemplo Práctico Completo"

**Propósito**: Integrar todos los conceptos en un ejemplo realista.

**Estructura**:
- Código completo y comentado
- ExpectedOutput component con la salida
- Explicación de por qué este ejemplo es útil

---

### 11. Sección "Errores comunes"

**Formato**:
```markdown
### 1. [Nombre del Error]

```python
# ❌ Error común
codigo_incorrecto()

# ✅ Correcto
codigo_correcto()
```

:::warning Error típico
**Descripción del error**: Explicación de por qué ocurre y cómo evitarlo.
:::
```

**Recomendaciones**:
- Máximo 3-5 errores por lección
- Incluir código antes/después
- Explicar por qué ocurre el error
- Dar solución clara

---

### 12. Sección "Buenas Prácticas"

**Propósito**: Enseñar no solo cómo hacer algo, sino cómo hacerlo bien.

**Formato**: Similar a "Errores comunes" pero enfocado en hacerlo bien.

---

### 13. Sección "Ejercicios Prácticos"

**Estructura**:
- Usar TryIt component para cada ejercicio
- 2-3 ejercicios por lección
- Progresión: fácil → medio → desafiante
- Incluir código inicial o plantilla
- Dar pistas si es necesario

**Recomendaciones**:
- Ejercicios deben ser prácticos y realistas
- Deben aplicar conceptos de la lección
- Incluir solución o pistas (opcional)

---

### 14. Checkpoint Component

```tsx
<Checkpoint
  items={[
    "Puedes hacer X",
    "Entiendes Y",
    "Sabes cómo Z",
    "Estás listo para [siguiente lección]"
  ]}
/>
```

**Propósito**: Autoevaluación y confirmación de aprendizaje.

**Recomendaciones**:
- 4-6 items por checkpoint
- Items deben ser específicos y medibles
- Incluir preparación para siguiente lección

---

### 15. Sección "Recursos Adicionales"

**Estructura**:
- Documentación Oficial (enlaces a docs.python.org)
- Bibliografía Recomendada (libros con capítulos específicos)
- Conceptos Relacionados (enlaces a otras lecciones)

---

### 16. NextStep Component

```tsx
<NextStep
  to="/ruta/siguiente-leccion"
  label="Siguiente: [Nombre] →"
  project="[Proyecto relacionado]" // opcional
/>
```

**Propósito**: Navegación clara al siguiente paso.

---

## 📏 Longitud Recomendada

- **Lecciones básicas**: 300-400 líneas
- **Lecciones intermedias**: 400-500 líneas
- **Lecciones avanzadas**: 500-700 líneas

**Si una lección excede 700 líneas**: Considerar dividirla en dos lecciones.

---

## ✅ Checklist de Calidad

Antes de publicar una lección, verificar:

- [ ] Tiene todos los componentes estándar
- [ ] Los objetivos son medibles y específicos
- [ ] Hay casos de uso del mundo real
- [ ] El concepto base es accesible
- [ ] Hay ejemplos paso a paso
- [ ] Hay diferenciación por nivel (si aplica)
- [ ] Los errores comunes están documentados
- [ ] Hay ejercicios prácticos
- [ ] El checkpoint es completo
- [ ] Los recursos adicionales son relevantes
- [ ] El tiempo estimado es realista
- [ ] El código es ejecutable y probado
- [ ] No hay conceptos sin preparación previa

---

## 🎨 Estilo y Tono

### Tono de Voz

- **Amigable pero profesional**: "Tú" en lugar de "el usuario"
- **Claro y directo**: Evitar jerga innecesaria
- **Motivador**: Celebrar logros, reconocer dificultades
- **Respetuoso**: Asumir inteligencia, no experiencia

### Ejemplos de Frases

✅ **Buenas**:
- "Puedes crear variables así..."
- "Esto te permitirá..."
- "Si llegaste aquí, ya puedes..."
- "Es normal que esto te suene raro al principio"

❌ **Evitar**:
- "El usuario debe..."
- "Es obvio que..."
- "Cualquiera puede hacer esto..."
- "Si no entiendes esto, no deberías programar"

---

## 📚 Ejemplos de Lecciones

Ver:
- `docs/01_Introduccion_y_Fundamentos/01_variables_y_tipos.md` (ejemplo actual)
- `docs/01_Introduccion_y_Fundamentos/02_condicionales_y_logica.md` (ejemplo actual)

---

## 🚀 Próximos Pasos

1. Implementar componentes faltantes (LessonMap, LevelTabs, ProgressIndicator)
2. Transformar lecciones existentes a esta estructura
3. Crear plantilla MDX reutilizable
4. Documentar mejores prácticas de código en ejemplos
