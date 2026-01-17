# 🚀 Guía de Despliegue de Docusaurus

## Opciones de Despliegue

### 1. GitHub Pages (Recomendado)

#### Configuración Inicial

1. **Instala gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Configuración en `docusaurus.config.js` (ya configurado):**
   - `url`: `'https://pixelead0.github.io'`
   - `baseUrl`: `'/trucos_programacion/'`
   - `organizationName`: `'pixelead0'`
   - `projectName`: `'trucos_programacion'`

3. **Despliega:**
```bash
npm run deploy
```

Esto creará una rama `gh-pages` y desplegará el sitio.

#### Configuración en GitHub

1. Ve a Settings > Pages en tu repositorio
2. Selecciona la rama `gh-pages` como fuente
3. El sitio estará disponible en `https://pixelead0.github.io/trucos_programacion/`

---

### 2. Netlify (Alternativa Fácil)

1. Conecta tu repositorio de GitHub a Netlify
2. Configuración de build:
   - **Build command:** `cd docs-site && npm install && npm run build`
   - **Publish directory:** `docs-site/build`
3. Netlify desplegará automáticamente en cada push

---

### 3. Vercel (Alternativa Moderna)

1. Instala Vercel CLI: `npm i -g vercel`
2. Desde la carpeta `docs-site`:
```bash
vercel
```
3. Sigue las instrucciones interactivas

---

## Desarrollo Local

```bash
cd docs-site
npm install
npm start
```

Abre `http://localhost:3000` en tu navegador.

---

## Construcción para Producción

```bash
cd docs-site
npm run build
```

El sitio se generará en `docs-site/build/`

---

## Solución de Problemas

### Error: Cannot find module
```bash
cd docs-site
rm -rf node_modules package-lock.json
npm install
```

### Error: Port 3000 already in use
```bash
npm start -- --port 3001
```

### Los enlaces no funcionan
- Verifica que `baseUrl` en `docusaurus.config.js` sea correcto
- Asegúrate de que las rutas en `sidebars.js` coincidan con los archivos
