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

- **Qué vas a lograr**: 2-3 bullets con objetivos claros
- **Concepto base**: Explicación simple y directa
- **Paso a paso**: Instrucciones claras con código
- **Errores comunes**: Admonitions con warnings
- **Checkpoint**: Lista de "ya puedes..."
- **Siguiente paso**: Componente NextStep

### 5. Secciones Opcionales (Capas)

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

Docusaurus incluye admonitions nativas:

```md
:::info Para principiantes
Información adicional para principiantes.
:::

:::tip Tip pro
Consejo para quienes ya tienen experiencia.
:::

:::warning Error típico
Descripción del error común y cómo evitarlo.
:::

:::danger Atención
Si te falla, revisa que [condición específica].
:::
```

## ✅ Checklist para Nueva Lección

- [ ] Metadata completa (title, description)
- [ ] Imports de componentes necesarios
- [ ] LessonMeta con nivel, tiempo y prerequisitos correctos
- [ ] Sección "Qué vas a lograr" con 2-3 bullets
- [ ] "Concepto base" explicado de forma simple
- [ ] "Paso a paso" con código y ejemplos
- [ ] Al menos un ExpectedOutput o TryIt
- [ ] Sección "Errores comunes" con warnings
- [ ] Secciones de capas (principiante/avanzado) si aplica
- [ ] Checkpoint con lista de logros
- [ ] NextStep con ruta correcta
- [ ] Enlaces a recursos adicionales (opcional)
- [ ] Enlaces a conceptos relacionados (opcional)

## 🎨 Ejemplo Completo

Ver `01_Introduccion_y_Fundamentos/01_variables_y_tipos.md` para un ejemplo completo de lección que aplica todos los componentes y el patrón de capas.
