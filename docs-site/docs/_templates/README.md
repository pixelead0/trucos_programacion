# Plantilla de Lecciones

Esta carpeta contiene plantillas y guías para crear lecciones consistentes y bien estructuradas.

## 📄 Plantilla Principal

### `lesson-template.mdx`

Plantilla completa para crear nuevas lecciones siguiendo el patrón de "capas" (principiante/intermedio/avanzado).

**Cómo usarla:**

1. Copia `lesson-template.mdx` a la carpeta correspondiente del módulo
2. Renombra el archivo según la convención (ej: `01_nombre_leccion.md`)
3. Completa todas las secciones según el contenido
4. Ajusta los imports y rutas según sea necesario

## 🎯 Estructura de una Lección

### 1. Metadata (Frontmatter)
```yaml
---
title: Título de la Lección
description: Breve descripción de lo que se aprende
---
```

### 2. Imports de Componentes
```tsx
import LessonMeta from '@site/src/components/LessonMeta';
import Checkpoint from '@site/src/components/Checkpoint';
import NextStep from '@site/src/components/NextStep';
import TryIt from '@site/src/components/TryIt';
import ExpectedOutput from '@site/src/components/ExpectedOutput';
```

### 3. LessonMeta
Muestra nivel, tiempo estimado y prerequisitos:
```tsx
<LessonMeta
  level="beginner" // o "intermediate" o "advanced"
  time="45 minutos"
  prereqs={['Lección anterior']}
/>
```

### 4. Secciones Obligatorias

- **¿Por qué aprender [concepto]?** (Recomendado): Sección de motivación que conecta con conocimientos previos
- **Casos reales donde se usa** (Recomendado): Lista de casos de uso prácticos
- **Concepto base**: Explicación simple y directa con código de ejemplo
- **Paso a paso**: Instrucciones claras con código progresivo
- **Errores comunes**: Admonitions con warnings y soluciones
- **Buenas prácticas**: Consejos para escribir código mejor
- **Checkpoint**: Lista de "ya puedes..."
- **Siguiente paso**: Componente NextStep

### 5. Estructura del "Concepto base" (Formato Mejorado)

El formato recomendado para la sección "Concepto base" sigue este orden:

1. **Explicación del concepto** (1-2 párrafos)
2. **Código de ejemplo** con `<ExpectedOutput>`
3. **Analogía culinaria** en callout `:::tip 🌮`
4. **Información para principiantes** en callout `:::info`

Este formato mejora el flujo de lectura: primero el concepto, luego el ejemplo práctico, después la analogía visual, y finalmente información adicional.

### 6. Secciones Opcionales (Capas)

- **Comparaciones visuales**: Tablas comparativas (ej: Tuplas vs Listas)
- **Ejemplos prácticos completos**: Sistemas o proyectos que demuestran múltiples conceptos
- **Ejercicios interactivos**: Múltiples bloques `<TryIt>` con ejercicios progresivos
- **Si eres principiante...**: Información adicional para principiantes
- **Si ya programas...**: Información para quienes vienen de otros lenguajes
- **Notas pro / Edge cases**: Información avanzada

## 🧩 Componentes Disponibles

### LessonMeta
Muestra metadatos de la lección (nivel, tiempo, prerequisitos).

```tsx
<LessonMeta
  level="beginner"
  time="45 minutos"
  prereqs={['Variables y Tipos']}
/>
```

### Checkpoint
Lista de logros al completar la lección.

```tsx
<Checkpoint
  items={[
    "Puedes hacer X",
    "Entiendes el concepto Y",
    "Puedes aplicar Z"
  ]}
/>
```

### NextStep
Botón para continuar a la siguiente lección.

```tsx
<NextStep
  to="/ruta/a/siguiente/leccion"
  label="Siguiente: Nombre de la Lección →"
  project="/ruta/al/proyecto/relacionado" // opcional
/>
```

### ExpectedOutput
Muestra el resultado esperado de ejecutar código.

```tsx
<ExpectedOutput>
Resultado que deberías ver al ejecutar el código.
</ExpectedOutput>
```

### TryIt
Ejercicio práctico para que el estudiante pruebe.

```tsx
<TryIt>
Ejercicio práctico para que el estudiante pruebe por sí mismo.
</TryIt>
```

## 📝 Admonitions (Callouts)

Docusaurus incluye admonitions nativas. Usa el tipo apropiado según el contexto:

```md
:::info Para principiantes
Información adicional para principiantes. Usa este para explicaciones simples y contexto adicional.
:::

:::tip 🌮 Analogía culinaria
[Recomendado] Usa este formato para las analogías culinarias relacionadas con el tema del curso.
El emoji 🌮 ayuda a identificarlas visualmente.
:::

:::tip Tip pro
Consejo para quienes ya tienen experiencia. Tips y trucos avanzados.
:::

:::warning Error típico
Descripción del error común y cómo evitarlo. Incluye siempre el código incorrecto (❌) y la solución (✅).
:::

:::danger Atención
Si te falla, revisa que [condición específica]. Para errores críticos o advertencias importantes.
:::
```

**Mejores prácticas para callouts:**

- **Analogías culinarias**: Siempre usa `:::tip 🌮` para mantener consistencia visual
- **Errores comunes**: Incluye código con ❌ y ✅ para mostrar el error y la solución
- **Para principiantes**: Colócalo después de la analogía en la sección "Concepto base"

## ✅ Checklist para Nueva Lección

### Estructura Básica
- [ ] Metadata completa (title, description)
- [ ] Imports de componentes necesarios (LessonMeta, Checkpoint, NextStep, TryIt, ExpectedOutput, ProgressIndicator, LessonMap)
- [ ] LessonMeta con nivel, tiempo y prerequisitos correctos
- [ ] ProgressIndicator con módulo, lección y total correctos
- [ ] LessonMap con objetivos, casos de uso, tiempo y nivel

### Contenido Principal
- [ ] Sección "¿Por qué aprender [concepto]?" (motivación)
- [ ] Sección "Casos reales donde se usa" (aplicaciones prácticas)
- [ ] "Concepto base" con formato mejorado:
  - [ ] Explicación del concepto
  - [ ] Código de ejemplo con `<ExpectedOutput>`
  - [ ] Analogía culinaria en `:::tip 🌮`
  - [ ] Información para principiantes en `:::info`
- [ ] "Paso a paso" con código progresivo y ejemplos claros
- [ ] Al menos 2-3 bloques `<ExpectedOutput>` para feedback inmediato
- [ ] Al menos 2-3 bloques `<TryIt>` con ejercicios prácticos

### Secciones de Apoyo
- [ ] Sección "Errores comunes" con:
  - [ ] Código incorrecto (❌) y correcto (✅)
  - [ ] Explicación clara del problema
  - [ ] Soluciones prácticas
- [ ] Sección "Buenas prácticas" con explicación del "por qué"
- [ ] Comparaciones visuales (tablas) si aplica
- [ ] Ejemplo práctico completo que demuestre múltiples conceptos
- [ ] Checkpoint con lista detallada de logros
- [ ] NextStep con ruta correcta

### Opcionales pero Recomendados
- [ ] Enlaces a recursos adicionales
- [ ] Enlaces a conceptos relacionados
- [ ] Secciones de capas (principiante/avanzado) si aplica

## 🎨 Ejemplos Completos

- **Formato mejorado (recomendado)**: Ver `02_Estructuras_de_Datos/02_tuplas.md` para un ejemplo completo con el nuevo formato mejorado de UX
- **Formato estándar**: Ver `01_Introduccion_y_Fundamentos/01_variables_y_tipos.md` para un ejemplo completo de lección que aplica todos los componentes y el patrón de capas

## 🎯 Mejoras de UX Aplicadas

El formato mejorado incluye las siguientes mejoras de experiencia de usuario:

### 1. Motivación y Contexto
- Sección "¿Por qué aprender [concepto]?" que conecta con conocimientos previos
- Casos de uso reales antes de entrar en detalles técnicos

### 2. Estructura del Concepto Base
- **Orden mejorado**: Concepto → Código → Analogía → Info adicional
- **Analogías culinarias** en callout `tip` para mayor visibilidad
- **Feedback inmediato** con `<ExpectedOutput>` después de cada ejemplo

### 3. Progresión del Aprendizaje
- Ejemplos progresivos: de simple a complejo
- Múltiples ejercicios prácticos con `<TryIt>`
- Ejemplo práctico completo que integra múltiples conceptos

### 4. Errores Comunes Mejorados
- Cada error con código ❌ y solución ✅
- Explicación clara del problema y por qué ocurre
- Múltiples soluciones cuando aplica

### 5. Comparaciones Visuales
- Tablas comparativas para conceptos relacionados (ej: Tuplas vs Listas)
- Ayuda a tomar decisiones informadas sobre qué usar

### 6. Buenas Prácticas
- Cada práctica con explicación del "por qué"
- Beneficios claros de seguir cada práctica
- Ejemplos de código correcto e incorrecto
