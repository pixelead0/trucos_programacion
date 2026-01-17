# 🚀 Guía de Implementación

Esta guía te ayudará a implementar las mejoras propuestas en el curso.

---

## 📋 Índice

1. [Componentes Nuevos](#componentes-nuevos)
2. [Estructura de Lecciones](#estructura-de-lecciones)
3. [Reordenamiento del Curso](#reordenamiento-del-curso)
4. [Mejores Prácticas](#mejores-prácticas)
5. [Proceso de Migración](#proceso-de-migración)

---

## 🧩 Componentes Nuevos

### 1. LessonMap

**Propósito**: Vista previa rápida de la lección (objetivos, casos de uso, tiempo).

**Uso**:
```tsx
import LessonMap from '@site/src/components/LessonMap';

<LessonMap
  objectives={[
    "Objetivo 1",
    "Objetivo 2"
  ]}
  useCases={[
    "Caso de uso 1",
    "Caso de uso 2"
  ]}
  time="45 minutos"
  level="beginner"
/>
```

**Cuándo usar**: En todas las lecciones, especialmente las largas o complejas.

---

### 2. LevelTabs

**Propósito**: Diferenciar contenido por nivel (principiante/intermedio/avanzado).

**Uso**:
```tsx
import LevelTabs from '@site/src/components/LevelTabs';

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
- ✅ Cuando un concepto tiene profundidad variable
- ✅ Cuando hay variaciones significativas por nivel
- ✅ Cuando hay optimizaciones avanzadas

**Cuándo NO usar**:
- ❌ Conceptos muy básicos (solo principiante)
- ❌ Conceptos muy avanzados (solo avanzado)
- ❌ Cuando añade complejidad innecesaria

---

### 3. ProgressIndicator

**Propósito**: Mostrar progreso dentro del módulo.

**Uso**:
```tsx
import ProgressIndicator from '@site/src/components/ProgressIndicator';

<ProgressIndicator
  module="Módulo 01: Fundamentos"
  lesson={3}
  total={6}
/>
```

**Cuándo usar**: En todas las lecciones dentro de un módulo.

---

## 📖 Estructura de Lecciones

### Plantilla MDX Completa

Ver `ESTRUCTURA_LECCIONES.md` para la plantilla completa.

### Orden de Secciones (Obligatorio)

1. Frontmatter (title, description)
2. Imports de componentes
3. LessonMeta
4. ProgressIndicator
5. Título H1
6. LessonMap
7. "Qué vas a lograr"
8. "Casos reales donde se usa"
9. "Concepto base"
10. "Paso a paso" (con subsecciones)
11. "Ejemplo Práctico Completo"
12. "Errores comunes"
13. "Buenas Prácticas"
14. "Ejercicios Prácticos"
15. Checkpoint
16. "Recursos Adicionales"
17. NextStep

---

## 🔄 Reordenamiento del Curso

### Cambios Propuestos

#### 1. Módulo 01: Fundamentos

**Cambio**: Mover "Git Básico" a Módulo 08.

**Acción**:
1. Mover archivo: `01_Introduccion_y_Fundamentos/05_git_intro.md` → `08_Herramientas_Profesionales/00_git_intro.md`
2. Actualizar `sidebars.js`
3. Actualizar `README.md`
4. Actualizar enlaces en otras lecciones

---

#### 2. Módulo 02: Estructuras de Datos

**Cambio**: Dividir lección larga en 4 lecciones.

**Acción**:
1. Crear nuevas lecciones:
   - `02_Estructuras_de_Datos/01_listas.md`
   - `02_Estructuras_de_Datos/02_tuplas.md`
   - `02_Estructuras_de_Datos/03_diccionarios_sets.md`
   - `02_Estructuras_de_Datos/04_operaciones_avanzadas.md`
2. Dividir contenido de `01_listas_tuplas_diccionarios.md`
3. Actualizar `sidebars.js`
4. Actualizar `README.md`
5. Actualizar enlaces

---

#### 3. Módulo 05: Calidad y Robustez

**Cambio**: Reordenar lecciones.

**Orden nuevo**:
1. Manejo de Errores
2. Type Hints (mover antes de Logging)
3. Logging
4. Calidad de Código

**Acción**:
1. Renombrar archivos si es necesario
2. Actualizar `sidebars.js`
3. Actualizar `README.md`

---

#### 4. Módulo 07: Conceptos Avanzados

**Cambio**: Reordenar y consolidar decoradores.

**Orden nuevo**:
1. Generadores e Iteradores
2. Decoradores (consolidar 01 y 05)
3. Context Managers
4. Performance

**Acción**:
1. Consolidar `01_decorators.md` y `05_decoradores_wrappers.md`
2. Reordenar en `sidebars.js`
3. Actualizar `README.md`

---

## ✅ Mejores Prácticas

### 1. Escritura de Contenido

**Tono**:
- ✅ "Puedes crear variables así..."
- ✅ "Esto te permitirá..."
- ✅ "Si llegaste aquí, ya puedes..."
- ❌ "El usuario debe..."
- ❌ "Es obvio que..."

**Longitud**:
- Lecciones básicas: 300-400 líneas
- Lecciones intermedias: 400-500 líneas
- Lecciones avanzadas: 500-700 líneas
- Si excede 700 líneas: dividir

**Código**:
- Todo el código debe ser ejecutable
- Comentar cuando es necesario
- Seguir PEP 8
- Probar antes de publicar

---

### 2. Uso de Componentes

**LessonMeta**: Siempre incluir
```tsx
<LessonMeta
  level="beginner|intermediate|advanced"
  time="X minutos"
  prereqs={['Lección 1']} // opcional
/>
```

**LevelTabs**: Solo cuando hay diferencia significativa
```tsx
<LevelTabs>
  <div label="🟢 Principiante">...</div>
  <div label="🟡 Intermedio">...</div>
  <div label="🔵 Avanzado">...</div>
</LevelTabs>
```

**TryIt**: Para todos los ejercicios
```tsx
<TryIt>
### Ejercicio 1: Nombre
Descripción...
```python
codigo
```
</TryIt>
```

---

### 3. Navegación

**NextStep**: Siempre al final
```tsx
<NextStep
  to="/ruta/siguiente"
  label="Siguiente: Nombre →"
  project="/ruta/proyecto" // opcional
/>
```

**Prerequisitos**: Solo lecciones estrictamente necesarias
```tsx
prereqs={['Variables y Tipos', 'Condicionales']}
```

---

## 🔧 Proceso de Migración

### Fase 1: Preparación (1-2 días)

1. **Backup**
   ```bash
   git checkout -b feature/curso-mejorado
   git commit -am "Backup antes de migración"
   ```

2. **Instalar/Verificar componentes**
   - Verificar que todos los componentes están en `src/components/`
   - Verificar que están exportados en `index.ts`
   - Verificar estilos en `custom.css`

3. **Crear plantilla**
   - Copiar estructura de `ESTRUCTURA_LECCIONES.md`
   - Guardar como `TEMPLATE_LECCION.mdx`

---

### Fase 2: Reordenamiento (2-3 días)

1. **Mover archivos**
   - Git Básico: Módulo 01 → Módulo 08
   - Verificar que no se rompen enlaces

2. **Actualizar sidebars.js**
   - Reordenar según propuesta
   - Verificar IDs correctos

3. **Actualizar README.md**
   - Actualizar rutas
   - Actualizar descripciones

---

### Fase 3: Transformación de Lecciones (1-2 semanas)

**Prioridad**:
1. Módulo 01 (Fundamentos) - Alta
2. Módulo 02 (Estructuras) - Alta (dividir)
3. Módulo 03-04 - Media
4. Módulo 05-09 - Baja

**Proceso por lección**:
1. Leer lección actual
2. Identificar qué falta según checklist
3. Agregar componentes faltantes
4. Mejorar secciones existentes
5. Agregar LevelTabs si aplica
6. Verificar código ejecutable
7. Revisar con checklist
8. Commit: `feat: mejorar lección [nombre]`

---

### Fase 4: Testing (3-5 días)

1. **Testing técnico**
   ```bash
   npm run build
   npm run serve
   ```
   - Verificar que todo compila
   - Verificar que componentes renderizan
   - Verificar que enlaces funcionan

2. **Testing pedagógico**
   - Revisar con checklist
   - Leer como estudiante
   - Verificar progresión lógica

3. **Testing de UX**
   - Probar en diferentes navegadores
   - Probar en móvil
   - Probar dark mode

---

### Fase 5: Deploy (1 día)

1. **Pre-deploy**
   ```bash
   npm run build
   # Verificar que no hay errores
   ```

2. **Deploy**
   ```bash
   git add .
   git commit -m "feat: transformación completa del curso"
   git push origin feature/curso-mejorado
   # Crear PR
   ```

3. **Post-deploy**
   - Verificar en producción
   - Monitorear métricas
   - Recopilar feedback

---

## 📊 Checklist de Implementación

### Componentes
- [ ] LessonMap implementado y estilizado
- [ ] LevelTabs implementado y estilizado
- [ ] ProgressIndicator implementado y estilizado
- [ ] Todos exportados en index.ts
- [ ] Estilos en custom.css

### Estructura
- [ ] Plantilla creada
- [ ] Guía de estructura documentada
- [ ] Ejemplos creados

### Reordenamiento
- [ ] Git movido a Módulo 08
- [ ] Estructuras de Datos divididas
- [ ] Módulo 05 reordenado
- [ ] Módulo 07 reordenado y consolidado
- [ ] sidebars.js actualizado
- [ ] README.md actualizado

### Migración
- [ ] Módulo 01 transformado
- [ ] Módulo 02 transformado y dividido
- [ ] Resto de módulos transformados
- [ ] Todos los enlaces funcionan
- [ ] Código probado

### Testing
- [ ] Build exitoso
- [ ] Componentes funcionan
- [ ] Checklist de calidad pasado
- [ ] UX probada

---

## 🐛 Troubleshooting

### Problema: Componente no renderiza

**Solución**:
1. Verificar import correcto
2. Verificar que está exportado en index.ts
3. Verificar sintaxis MDX
4. Revisar consola del navegador

### Problema: Estilos no aplican

**Solución**:
1. Verificar que estilos están en custom.css
2. Verificar nombres de clases
3. Verificar especificidad CSS
4. Limpiar cache: `npm run clear`

### Problema: Enlaces rotos

**Solución**:
1. Verificar rutas en sidebars.js
2. Verificar IDs de documentos
3. Usar rutas relativas cuando sea posible
4. Verificar que archivos existen

---

## 📚 Recursos Adicionales

- **Docusaurus Docs**: https://docusaurus.io/docs
- **MDX Guide**: https://mdxjs.com/
- **React Components**: https://react.dev/
- **TypeScript**: https://www.typescriptlang.org/

---

## 🎯 Próximos Pasos

1. Revisar esta guía con el equipo
2. Crear issues en GitHub para cada fase
3. Asignar responsables
4. Establecer timeline
5. Comenzar implementación

---

## 💡 Tips Finales

- **Itera gradualmente**: No intentes transformar todo de una vez
- **Prueba frecuentemente**: Build y test después de cada cambio grande
- **Documenta decisiones**: Si cambias algo, documenta por qué
- **Pide feedback**: Involucra a estudiantes en el proceso
- **Mide resultados**: Usa métricas para validar mejoras

---

**¡Buena suerte con la implementación! 🚀**
