/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Generar sidebar automáticamente desde la estructura de carpetas
  tutorialSidebar: [
    'README',
    {
      type: 'category',
      label: '🟢 Módulo 01: Fundamentos',
      collapsed: false,
      items: [
        'Introduccion_y_Fundamentos/zen_of_python',
        'Introduccion_y_Fundamentos/variables_y_tipos',
        'Introduccion_y_Fundamentos/condicionales_y_logica',
        'Introduccion_y_Fundamentos/condicionales_avanzados',
        'Introduccion_y_Fundamentos/bucles',
        'Introduccion_y_Fundamentos/git_intro',
      ],
    },
    {
      type: 'category',
      label: '🟢 Módulo 02: Estructuras de Datos',
      collapsed: false,
      items: [
        'Estructuras_de_Datos/listas_tuplas_diccionarios',
      ],
    },
    {
      type: 'category',
      label: '🟡 Módulo 03: Funciones y Módulos',
      collapsed: false,
      items: [
        'Funciones_y_Modulos/funciones',
        'Funciones_y_Modulos/modulos_paquetes',
      ],
    },
    {
      type: 'category',
      label: '🟡 Módulo 04: Programación Orientada a Objetos',
      collapsed: false,
      items: [
        'Programacion_Orientada_a_Objetos/clases_objetos',
        'Programacion_Orientada_a_Objetos/dataclasses',
      ],
    },
    {
      type: 'category',
      label: '🟡 Módulo 05: Calidad y Robustez',
      collapsed: false,
      items: [
        'Manejo_de_Errores_y_Buenas_Practicas/excepciones',
        'Manejo_de_Errores_y_Buenas_Practicas/logging',
        'Manejo_de_Errores_y_Buenas_Practicas/type_hints',
        'Manejo_de_Errores_y_Buenas_Practicas/quality',
      ],
    },
    {
      type: 'category',
      label: '🔴 Módulo 06: Datos y Formatos',
      collapsed: false,
      items: [
        'Manejo_de_Archivos_y_Formatos/pathlib',
        'Manejo_de_Archivos_y_Formatos/xml',
        'Manejo_de_Archivos_y_Formatos/json',
        'Manejo_de_Archivos_y_Formatos/yaml',
        'Manejo_de_Archivos_y_Formatos/serialization_advanced',
      ],
    },
    {
      type: 'category',
      label: '🔴 Módulo 07: Conceptos Avanzados',
      collapsed: false,
      items: [
        'Conceptos_Avanzados/decorators',
        'Conceptos_Avanzados/context_managers',
        'Conceptos_Avanzados/performance',
        'Conceptos_Avanzados/generadores_iteradores',
        'Conceptos_Avanzados/decoradores_wrappers',
      ],
    },
    {
      type: 'category',
      label: '🟣 Módulo 08: Herramientas Profesionales',
      collapsed: false,
      items: [
        'Herramientas_Profesionales/virtual_envs',
        'Herramientas_Profesionales/packaging',
        'Herramientas_Profesionales/testing',
        'Herramientas_Profesionales/security',
      ],
    },
    {
      type: 'category',
      label: '🟣 Módulo 09: Ciencia de Datos Básica',
      collapsed: false,
      items: [
        'Ciencia_de_Datos_Basica/pandas_basico',
      ],
    },
    {
      type: 'category',
      label: '📚 Recursos Adicionales',
      collapsed: false,
      items: [
        'Material_Adicional/bibliografia_y_recursos',
      ],
    },
  ],
};

module.exports = sidebars;
