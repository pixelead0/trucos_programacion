# 🚀 Guía de Deployment a GitHub Pages

Esta guía explica cómo desplegar el sitio Docusaurus a GitHub Pages usando GitHub Actions.

## 📋 Prerequisitos

1. Repositorio en GitHub: `pixelead0/trucos_programacion`
2. GitHub Pages habilitado en el repositorio
3. Permisos de workflow configurados correctamente

## ⚙️ Configuración Inicial

### 1. Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. En "Source", selecciona **"GitHub Actions"**
4. Guarda los cambios

### 2. Configurar Permisos del Workflow

1. Ve a Settings → Actions → General
2. En "Workflow permissions":
   - Selecciona **"Read and write permissions"**
   - Marca **"Allow GitHub Actions to create and approve pull requests"**
3. Guarda los cambios

## 🔄 Proceso de Deployment Automático

El workflow se ejecuta automáticamente cuando:

- ✅ Se hace `push` a la rama `main` o `master`
- ✅ Se ejecuta manualmente desde la pestaña "Actions"

### Pasos del Workflow

1. **Checkout**: Descarga el código del repositorio
2. **Setup Node.js**: Configura Node.js 20 con cache de npm
3. **Install dependencies**: Instala dependencias con `npm ci`
4. **Build**: Construye el sitio Docusaurus
5. **Deploy**: Despliega el sitio a GitHub Pages

## 📍 URL del Sitio

Una vez desplegado, el sitio estará disponible en:

**https://pixelead0.github.io/trucos_programacion/**

## 🔍 Verificar el Deployment

1. Ve a la pestaña **"Actions"** en GitHub
2. Selecciona el workflow **"Deploy to GitHub Pages"**
3. Revisa los logs para verificar que todo se ejecutó correctamente
4. Espera unos minutos y visita la URL del sitio

## 🐛 Troubleshooting

### El workflow no se ejecuta

- Verifica que el archivo `.github/workflows/deploy.yml` esté en la rama `main` o `master`
- Verifica que GitHub Actions esté habilitado en Settings → Actions → General

### El deployment falla

1. **Error de permisos**:
   - Ve a Settings → Actions → General
   - Asegúrate de que "Workflow permissions" esté en "Read and write"

2. **Error de build**:
   - Revisa los logs en la pestaña "Actions"
   - Verifica que `package.json` tenga todas las dependencias necesarias
   - Ejecuta `npm run build` localmente para verificar errores

3. **GitHub Pages no muestra el sitio**:
   - Verifica que en Settings → Pages, la fuente sea "GitHub Actions"
   - Espera 5-10 minutos después del deployment (puede tardar en propagarse)

### Deployment Manual

Si necesitas desplegar manualmente:

1. Ve a la pestaña **"Actions"** en GitHub
2. Selecciona **"Deploy to GitHub Pages"**
3. Haz clic en **"Run workflow"**
4. Selecciona la rama (normalmente `main`)
5. Haz clic en **"Run workflow"**

## 📝 Notas Importantes

- El workflow usa Node.js 20 (especificado en `package.json`)
- El build se ejecuta en el directorio `docs-site/`
- El sitio se despliega desde `docs-site/build/`
- El `baseUrl` está configurado como `/trucos_programacion/` en `docusaurus.config.js`

## 🔗 Referencias

- [Documentación de GitHub Actions](https://docs.github.com/en/actions)
- [Documentación de GitHub Pages](https://docs.github.com/en/pages)
- [Documentación de Docusaurus Deployment](https://docusaurus.io/docs/deployment)
