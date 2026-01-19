# Política de Seguridad

## Versiones Soportadas

Actualmente mantenemos y proporcionamos actualizaciones de seguridad para las siguientes versiones:

| Versión | Soportada          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reportar una Vulnerabilidad

Si descubres una vulnerabilidad de seguridad, por favor **NO** abras un issue público. En su lugar, sigue estos pasos:

### Proceso de Reporte

1. **Contacto Directo**: Envía un email a los mantenedores del proyecto o abre un issue privado
2. **Proporciona Detalles**:
   - Descripción de la vulnerabilidad
   - Pasos para reproducir
   - Impacto potencial
   - Sugerencias de mitigación (si las tienes)

### Qué Esperar

- **Respuesta Inicial**: Recibirás una confirmación en 48 horas
- **Evaluación**: Revisaremos el reporte en 7 días
- **Actualización**: Te mantendremos informado del progreso
- **Resolución**: Trabajaremos en una solución y te notificaremos cuando esté disponible

### Recompensas

Actualmente no ofrecemos un programa de recompensas por reportes de seguridad, pero agradecemos enormemente tu contribución para mantener el proyecto seguro.

## Buenas Prácticas de Seguridad

### Para Usuarios

- Mantén tus dependencias actualizadas
- Usa entornos virtuales para aislar proyectos
- No compartas credenciales o información sensible
- Revisa el código antes de ejecutarlo en producción

### Para Desarrolladores

- Sigue las mejores prácticas de seguridad de Python
- Valida todas las entradas de usuario
- No hardcodees secretos o credenciales
- Usa variables de entorno para configuración sensible
- Mantén las dependencias actualizadas
- Revisa regularmente los advisories de seguridad

## Áreas de Preocupación

Si encuentras vulnerabilidades en estas áreas, por favor repórtalas:

- Ejecución de código arbitrario
- Exposición de información sensible
- Inyección de código (SQL, comandos, etc.)
- Vulnerabilidades en dependencias
- Problemas de autenticación/autorización
- Cross-Site Scripting (XSS) en la documentación web

## Actualizaciones de Seguridad

Las actualizaciones de seguridad se publicarán:
- En el [CHANGELOG.md](CHANGELOG.md)
- Como releases etiquetadas
- En los issues de GitHub (después de la resolución)

## Recursos Adicionales

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Python Security Best Practices](https://python.readthedocs.io/en/stable/library/security.html)
- [GitHub Security Advisories](https://github.com/advisories)

---

**Gracias por ayudar a mantener este proyecto seguro para todos.** 🔒
