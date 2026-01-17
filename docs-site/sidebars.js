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
    {
      type: 'link',
      label: '🏁 Start here',
      href: '/',
    },
    {
      type: 'link',
      label: '🧭 Rutas por nivel',
      href: '/rutas',
    },
    {
      type: 'html',
      value: '<hr style="margin: 0.5rem 0;" />',
    },
    'README',
    {
      type: 'category',
      label: '🟢 Módulo 01: Fundamentos',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Introduccion_y_Fundamentos/zen_of_python',
          label: 'El Zen de Python',
        },
        {
          type: 'doc',
          id: 'Introduccion_y_Fundamentos/variables_y_tipos',
          label: 'Variables y Tipos',
        },
        {
          type: 'doc',
          id: 'Introduccion_y_Fundamentos/condicionales_y_logica',
          label: 'Condicionales y Lógica',
        },
        {
          type: 'doc',
          id: 'Introduccion_y_Fundamentos/condicionales_avanzados',
          label: 'Condicionales Avanzados',
        },
        {
          type: 'doc',
          id: 'Introduccion_y_Fundamentos/bucles',
          label: 'Bucles',
        },
        {
          type: 'doc',
          id: 'Introduccion_y_Fundamentos/git_intro',
          label: 'Git Básico',
        },
      ],
    },
    {
      type: 'category',
      label: '🟢 Módulo 02: Estructuras de Datos',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Estructuras_de_Datos/listas_tuplas_diccionarios',
          label: 'Listas, Tuplas y Diccionarios',
        },
      ],
    },
    {
      type: 'category',
      label: '🟡 Módulo 03: Funciones y Módulos',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Funciones_y_Modulos/funciones',
          label: 'Funciones',
        },
        {
          type: 'doc',
          id: 'Funciones_y_Modulos/modulos_paquetes',
          label: 'Módulos y Paquetes',
        },
      ],
    },
    {
      type: 'category',
      label: '🟡 Módulo 04: Programación Orientada a Objetos',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Programacion_Orientada_a_Objetos/clases_objetos',
          label: 'Clases y Objetos',
        },
        {
          type: 'doc',
          id: 'Programacion_Orientada_a_Objetos/dataclasses',
          label: 'Dataclasses',
        },
      ],
    },
    {
      type: 'category',
      label: '🟡 Módulo 05: Calidad y Robustez',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Manejo_de_Errores_y_Buenas_Practicas/excepciones',
          label: 'Manejo de Errores',
        },
        {
          type: 'doc',
          id: 'Manejo_de_Errores_y_Buenas_Practicas/logging',
          label: 'Logging',
        },
        {
          type: 'doc',
          id: 'Manejo_de_Errores_y_Buenas_Practicas/type_hints',
          label: 'Type Hints',
        },
        {
          type: 'doc',
          id: 'Manejo_de_Errores_y_Buenas_Practicas/quality',
          label: 'Calidad de Código',
        },
      ],
    },
    {
      type: 'category',
      label: '🔴 Módulo 06: Datos y Formatos',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Manejo_de_Archivos_y_Formatos/pathlib',
          label: 'Pathlib',
        },
        {
          type: 'doc',
          id: 'Manejo_de_Archivos_y_Formatos/xml',
          label: 'XML',
        },
        {
          type: 'doc',
          id: 'Manejo_de_Archivos_y_Formatos/json',
          label: 'JSON',
        },
        {
          type: 'doc',
          id: 'Manejo_de_Archivos_y_Formatos/yaml',
          label: 'YAML',
        },
        {
          type: 'doc',
          id: 'Manejo_de_Archivos_y_Formatos/serialization_advanced',
          label: 'Serialización Avanzada',
        },
      ],
    },
    {
      type: 'category',
      label: '🔴 Módulo 07: Conceptos Avanzados',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Conceptos_Avanzados/decorators',
          label: 'Decoradores',
        },
        {
          type: 'doc',
          id: 'Conceptos_Avanzados/context_managers',
          label: 'Context Managers',
        },
        {
          type: 'doc',
          id: 'Conceptos_Avanzados/performance',
          label: 'Performance',
        },
        {
          type: 'doc',
          id: 'Conceptos_Avanzados/generadores_iteradores',
          label: 'Generadores e Iteradores',
        },
        {
          type: 'doc',
          id: 'Conceptos_Avanzados/decoradores_wrappers',
          label: 'Decoradores y Wrappers',
        },
      ],
    },
    {
      type: 'category',
      label: '🟣 Módulo 08: Herramientas Profesionales',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Herramientas_Profesionales/virtual_envs',
          label: 'Entornos Virtuales',
        },
        {
          type: 'doc',
          id: 'Herramientas_Profesionales/packaging',
          label: 'Empaquetado',
        },
        {
          type: 'doc',
          id: 'Herramientas_Profesionales/testing',
          label: 'Testing',
        },
        {
          type: 'doc',
          id: 'Herramientas_Profesionales/security',
          label: 'Seguridad',
        },
      ],
    },
    {
      type: 'category',
      label: '🟣 Módulo 09: Ciencia de Datos Básica',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Ciencia_de_Datos_Basica/pandas_basico',
          label: 'Pandas Básico',
        },
      ],
    },
    {
      type: 'category',
      label: '📚 Recursos Adicionales',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Material_Adicional/bibliografia_y_recursos',
          label: 'Bibliografía y Recursos',
        },
      ],
    },
  ],
};

module.exports = sidebars;
