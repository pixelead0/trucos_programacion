# Guía de Contribución

¡Gracias por tu interés en contribuir a este proyecto! Esta guía te ayudará a entender cómo puedes participar.

## 🎯 Formas de Contribuir

Hay muchas formas de contribuir, no solo código:

- 🐛 **Reportar bugs**: Encuentra un error? Abre un issue
- 💡 **Sugerir mejoras**: Tienes una idea? Compártela
- 📝 **Mejorar documentación**: Corrige errores tipográficos, mejora explicaciones
- 🔧 **Agregar ejemplos**: Añade más ejemplos prácticos
- ✨ **Nuevas lecciones**: Propón nuevos temas o módulos
- 🌐 **Traducciones**: Ayuda a traducir el contenido

## 🚀 Cómo Empezar

### 1. Fork y Clone

```bash
# Fork el repositorio en GitHub, luego:
git clone https://github.com/TU_USUARIO/pyquiles-al-pastor.git
cd pyquiles-al-pastor
```

### 2. Crea una Rama

```bash
git checkout -b mi-contribucion
```

### 3. Haz tus Cambios

- Asegúrate de seguir las convenciones del proyecto
- Escribe código claro y bien documentado
- Agrega comentarios cuando sea necesario

### 4. Commit

```bash
git add .
git commit -m "Descripción clara de tus cambios"
```

**Convenciones de commits:**
- Usa mensajes descriptivos
- Prefijo opcional: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`

### 5. Push y Pull Request

```bash
git push origin mi-contribucion
```

Luego crea un Pull Request en GitHub con:
- Descripción clara de los cambios
- Referencia a issues relacionados (si aplica)
- Capturas de pantalla (si es relevante)

## 📝 Estándares de Código

### Python

- Sigue [PEP 8](https://www.python.org/dev/peps/pep-0008/)
- Usa type hints cuando sea posible
- Escribe docstrings para funciones y clases
- Mantén líneas bajo 88 caracteres (Black)

### Markdown

- Usa encabezados apropiados
- Mantén el formato consistente
- Agrega ejemplos de código cuando sea relevante
- Verifica que los enlaces funcionen

### Estructura de Archivos

```
01_Introduccion_y_Fundamentos/
├── 00_zen_of_python.md
├── 01_variables_y_tipos.md
└── ...
```

## 🧪 Testing

Si agregas código Python:

1. Asegúrate de que funcione en Python 3.8+
2. Prueba los ejemplos antes de commitear
3. Verifica que no rompas nada existente

## 📚 Agregar Nuevas Lecciones

Si quieres agregar una nueva lección:

1. Decide en qué módulo encaja
2. Sigue el formato de las lecciones existentes
3. Incluye:
   - Introducción clara
   - Ejemplos prácticos
   - Ejercicios
   - Enlaces a lecciones relacionadas

## 🔍 Proceso de Revisión

1. Tu PR será revisado por los mantenedores
2. Puede haber sugerencias de mejora
3. Una vez aprobado, será mergeado
4. ¡Gracias por contribuir!

## ❓ Preguntas?

Si tienes dudas:
- Abre un issue con la etiqueta `question`
- Revisa issues existentes
- Consulta la documentación del proyecto

## 📋 Checklist Antes de Enviar

- [ ] He leído y seguido esta guía
- [ ] Mi código sigue los estándares del proyecto
- [ ] He probado mis cambios
- [ ] He actualizado la documentación si es necesario
- [ ] Mis commits tienen mensajes descriptivos
- [ ] He agregado comentarios donde es necesario

---

¡Gracias por hacer este proyecto mejor! 🎉
