# Curso de Python - Docusaurus

Este es el sitio web del curso de Python generado con Docusaurus.

## 🚀 Inicio Rápido

### Instalación

```bash
cd docs-site
npm install
```

### Desarrollo

Inicia el servidor de desarrollo:

```bash
npm start
```

El sitio estará disponible en `http://localhost:3000`

### Construcción

Genera el sitio estático:

```bash
npm run build
```

El sitio se generará en la carpeta `build/`

### Despliegue

Para desplegar en GitHub Pages:

```bash
npm run deploy
```

## 📁 Estructura

- `docs/` - Contiene todos los archivos Markdown del curso
- `src/` - Código fuente (CSS, componentes React)
- `static/` - Archivos estáticos (imágenes, etc.)
- `docusaurus.config.js` - Configuración principal
- `sidebars.js` - Configuración de la navegación lateral

## 🔧 Configuración

Edita `docusaurus.config.js` para:
- Cambiar el título y descripción
- Configurar la URL base
- Personalizar el navbar y footer
- Ajustar temas y colores

Edita `sidebars.js` para:
- Reorganizar la navegación
- Agregar nuevas secciones
- Cambiar el orden de los módulos
