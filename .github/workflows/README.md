# GitHub Actions Workflows

## Deploy to GitHub Pages

Este workflow se ejecuta automáticamente cuando:
- Se hace push a las ramas `main` o `master`
- Se ejecuta manualmente desde la pestaña "Actions" de GitHub

### Configuración Requerida

1. **Habilitar GitHub Pages en el repositorio**:
   - Ve a Settings → Pages
   - Source: "GitHub Actions"
   - Branch: Deja en blanco (el workflow maneja el deploy)

2. **Permisos del repositorio**:
   - Settings → Actions → General
   - Workflow permissions: "Read and write permissions"
   - Permite que GitHub Actions cree y apruebe pull requests

### Proceso de Deployment

1. **Build**: Instala dependencias y construye el sitio Docusaurus
2. **Deploy**: Sube el sitio construido a GitHub Pages

### Estructura del Workflow

- **Job `build`**: Construye el sitio en `docs-site/build`
- **Job `deploy`**: Despliega el artefacto a GitHub Pages

### Troubleshooting

Si el deployment falla:
1. Verifica que GitHub Pages esté habilitado con "GitHub Actions" como fuente
2. Verifica los permisos del workflow en Settings → Actions → General
3. Revisa los logs en la pestaña "Actions" para más detalles
