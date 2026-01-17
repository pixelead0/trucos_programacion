# 📚 Instrucciones para Docusaurus

## ✅ Estado Actual

Se ha creado la estructura básica de Docusaurus en el branch `feature/docusaurus`.

## 📁 Estructura Creada

```
docs-site/
├── docs/                    # Contenido del curso (Markdown)
│   ├── README.md           # Página de inicio
│   ├── 01_Introduccion_y_Fundamentos/
│   ├── 02_Estructuras_de_Datos/
│   └── ... (todos los módulos)
├── src/
│   └── css/
│       └── custom.css      # Estilos personalizados
├── static/                 # Archivos estáticos (imágenes, etc.)
├── docusaurus.config.js    # Configuración principal
├── sidebars.js             # Navegación lateral
└── package.json           # Dependencias

```

## 🚀 Próximos Pasos

### 1. Probar Localmente

```bash
cd docs-site
npm start
```

Abre `http://localhost:3000` para ver el sitio.

### 2. Ajustar Configuración

Edita `docusaurus.config.js`:
- Cambia `url` y `baseUrl` según tu despliegue
- Personaliza el navbar y footer
- Ajusta colores y tema

### 3. Ajustar Navegación

Edita `sidebars.js` para:
- Reorganizar el orden de los módulos
- Agregar nuevas secciones
- Cambiar etiquetas

### 4. Personalizar Estilos

Edita `src/css/custom.css` para:
- Cambiar colores
- Ajustar tipografías
- Personalizar componentes

### 5. Desplegar

**Opción A: GitHub Pages**
```bash
cd docs-site
npm run deploy
```

**Opción B: Netlify/Vercel**
- Conecta el repositorio
- Configura build: `cd docs-site && npm install && npm run build`
- Publish: `docs-site/build`

## 🔧 Ajustes Necesarios

1. **Actualizar rutas en archivos Markdown:**
   - Los enlaces relativos pueden necesitar ajuste
   - Docusaurus maneja rutas automáticamente, pero verifica

2. **Configurar dominio:**
   - Actualiza `url` y `baseUrl` en `docusaurus.config.js`
   - Configura GitHub Pages o tu hosting

3. **Agregar logo/favicon:**
   - Coloca `logo.svg` en `static/img/`
   - Coloca `favicon.ico` en `static/img/`

## 📝 Notas

- Los archivos Markdown se copiaron a `docs-site/docs/`
- La navegación está configurada en `sidebars.js`
- El blog está deshabilitado (solo docs)
- El tema Material está configurado por defecto

## 🐛 Solución de Problemas

Si hay errores al iniciar:
```bash
cd docs-site
rm -rf node_modules .docusaurus
npm install
npm start
```
