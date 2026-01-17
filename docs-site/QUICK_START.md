# 🚀 Inicio Rápido - Docusaurus

## Instalación y Prueba Local

```bash
# 1. Ir a la carpeta de Docusaurus
cd docs-site

# 2. Instalar dependencias (si no están instaladas)
npm install

# 3. Iniciar servidor de desarrollo
npm start
```

El sitio estará disponible en: **http://localhost:3000**

## 🔧 Ajustes Necesarios

### 1. Configuración de GitHub (ya configurado)

```javascript
url: 'https://pixelead0.github.io',
baseUrl: '/trucos_programacion/',
organizationName: 'pixelead0',
projectName: 'trucos_programacion',
```

✅ **Ya está configurado** con la información del repositorio.

### 2. Verificar Navegación

Si hay errores sobre IDs no encontrados:
- Verifica que los archivos existan en `docs/`
- Los IDs en `sidebars.js` deben coincidir exactamente con las rutas (sin `.md`)

### 3. Personalizar

- **Colores**: Edita `src/css/custom.css`
- **Logo**: Coloca `logo.svg` en `static/img/`
- **Favicon**: Coloca `favicon.ico` en `static/img/`

## 📦 Construir para Producción

```bash
cd docs-site
npm run build
```

El sitio se generará en `docs-site/build/`

## 🚀 Desplegar

### GitHub Pages
```bash
cd docs-site
npm run deploy
```

### Netlify/Vercel
- Conecta tu repositorio
- Build: `cd docs-site && npm install && npm run build`
- Publish: `docs-site/build`

---

**¡Listo para empezar!** 🎉
