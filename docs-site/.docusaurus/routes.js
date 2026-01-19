import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/pyquiles-al-pastor/__docusaurus/debug',
    component: ComponentCreator('/pyquiles-al-pastor/__docusaurus/debug', 'ad3'),
    exact: true
  },
  {
    path: '/pyquiles-al-pastor/__docusaurus/debug/config',
    component: ComponentCreator('/pyquiles-al-pastor/__docusaurus/debug/config', '481'),
    exact: true
  },
  {
    path: '/pyquiles-al-pastor/__docusaurus/debug/content',
    component: ComponentCreator('/pyquiles-al-pastor/__docusaurus/debug/content', '32e'),
    exact: true
  },
  {
    path: '/pyquiles-al-pastor/__docusaurus/debug/globalData',
    component: ComponentCreator('/pyquiles-al-pastor/__docusaurus/debug/globalData', '0e0'),
    exact: true
  },
  {
    path: '/pyquiles-al-pastor/__docusaurus/debug/metadata',
    component: ComponentCreator('/pyquiles-al-pastor/__docusaurus/debug/metadata', '615'),
    exact: true
  },
  {
    path: '/pyquiles-al-pastor/__docusaurus/debug/registry',
    component: ComponentCreator('/pyquiles-al-pastor/__docusaurus/debug/registry', '712'),
    exact: true
  },
  {
    path: '/pyquiles-al-pastor/__docusaurus/debug/routes',
    component: ComponentCreator('/pyquiles-al-pastor/__docusaurus/debug/routes', '2c3'),
    exact: true
  },
  {
    path: '/pyquiles-al-pastor/rutas',
    component: ComponentCreator('/pyquiles-al-pastor/rutas', '62a'),
    exact: true
  },
  {
    path: '/pyquiles-al-pastor/sobre-el-autor',
    component: ComponentCreator('/pyquiles-al-pastor/sobre-el-autor', 'e98'),
    exact: true
  },
  {
    path: '/pyquiles-al-pastor/',
    component: ComponentCreator('/pyquiles-al-pastor/', '866'),
    exact: true
  },
  {
    path: '/pyquiles-al-pastor/',
    component: ComponentCreator('/pyquiles-al-pastor/', 'ead'),
    routes: [
      {
        path: '/pyquiles-al-pastor/',
        component: ComponentCreator('/pyquiles-al-pastor/', 'e47'),
        routes: [
          {
            path: '/pyquiles-al-pastor/',
            component: ComponentCreator('/pyquiles-al-pastor/', '4ed'),
            routes: [
              {
                path: '/pyquiles-al-pastor/Ciencia_de_Datos_Basica/pandas_basico',
                component: ComponentCreator('/pyquiles-al-pastor/Ciencia_de_Datos_Basica/pandas_basico', '48d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Conceptos_Avanzados/context_managers',
                component: ComponentCreator('/pyquiles-al-pastor/Conceptos_Avanzados/context_managers', '828'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Conceptos_Avanzados/decorators',
                component: ComponentCreator('/pyquiles-al-pastor/Conceptos_Avanzados/decorators', '3fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Conceptos_Avanzados/generadores_iteradores',
                component: ComponentCreator('/pyquiles-al-pastor/Conceptos_Avanzados/generadores_iteradores', 'fe0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Conceptos_Avanzados/performance',
                component: ComponentCreator('/pyquiles-al-pastor/Conceptos_Avanzados/performance', '508'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Estructuras_de_Datos/diccionarios_sets',
                component: ComponentCreator('/pyquiles-al-pastor/Estructuras_de_Datos/diccionarios_sets', '506'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Estructuras_de_Datos/listas',
                component: ComponentCreator('/pyquiles-al-pastor/Estructuras_de_Datos/listas', '83e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Estructuras_de_Datos/operaciones_avanzadas',
                component: ComponentCreator('/pyquiles-al-pastor/Estructuras_de_Datos/operaciones_avanzadas', '699'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Estructuras_de_Datos/tuplas',
                component: ComponentCreator('/pyquiles-al-pastor/Estructuras_de_Datos/tuplas', '8a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Funciones_y_Modulos/funciones',
                component: ComponentCreator('/pyquiles-al-pastor/Funciones_y_Modulos/funciones', '5b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Funciones_y_Modulos/modulos_paquetes',
                component: ComponentCreator('/pyquiles-al-pastor/Funciones_y_Modulos/modulos_paquetes', 'acb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Herramientas_Profesionales/git_intro',
                component: ComponentCreator('/pyquiles-al-pastor/Herramientas_Profesionales/git_intro', '6d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Herramientas_Profesionales/packaging',
                component: ComponentCreator('/pyquiles-al-pastor/Herramientas_Profesionales/packaging', 'b84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Herramientas_Profesionales/security',
                component: ComponentCreator('/pyquiles-al-pastor/Herramientas_Profesionales/security', 'c41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Herramientas_Profesionales/testing',
                component: ComponentCreator('/pyquiles-al-pastor/Herramientas_Profesionales/testing', '362'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Herramientas_Profesionales/virtual_envs',
                component: ComponentCreator('/pyquiles-al-pastor/Herramientas_Profesionales/virtual_envs', '39a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/introduccion',
                component: ComponentCreator('/pyquiles-al-pastor/introduccion', '7bf'),
                exact: true
              },
              {
                path: '/pyquiles-al-pastor/Introduccion_y_Fundamentos/bucles',
                component: ComponentCreator('/pyquiles-al-pastor/Introduccion_y_Fundamentos/bucles', '752'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Introduccion_y_Fundamentos/condicionales_avanzados',
                component: ComponentCreator('/pyquiles-al-pastor/Introduccion_y_Fundamentos/condicionales_avanzados', '86e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Introduccion_y_Fundamentos/condicionales_y_logica',
                component: ComponentCreator('/pyquiles-al-pastor/Introduccion_y_Fundamentos/condicionales_y_logica', '782'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Introduccion_y_Fundamentos/variables_y_tipos',
                component: ComponentCreator('/pyquiles-al-pastor/Introduccion_y_Fundamentos/variables_y_tipos', 'aca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Introduccion_y_Fundamentos/zen_of_python',
                component: ComponentCreator('/pyquiles-al-pastor/Introduccion_y_Fundamentos/zen_of_python', '8d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Manejo_de_Archivos_y_Formatos/json',
                component: ComponentCreator('/pyquiles-al-pastor/Manejo_de_Archivos_y_Formatos/json', '7e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Manejo_de_Archivos_y_Formatos/pathlib',
                component: ComponentCreator('/pyquiles-al-pastor/Manejo_de_Archivos_y_Formatos/pathlib', '657'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Manejo_de_Archivos_y_Formatos/serialization_advanced',
                component: ComponentCreator('/pyquiles-al-pastor/Manejo_de_Archivos_y_Formatos/serialization_advanced', 'f5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Manejo_de_Archivos_y_Formatos/xml',
                component: ComponentCreator('/pyquiles-al-pastor/Manejo_de_Archivos_y_Formatos/xml', '162'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Manejo_de_Archivos_y_Formatos/yaml',
                component: ComponentCreator('/pyquiles-al-pastor/Manejo_de_Archivos_y_Formatos/yaml', 'e88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Manejo_de_Errores_y_Buenas_Practicas/excepciones',
                component: ComponentCreator('/pyquiles-al-pastor/Manejo_de_Errores_y_Buenas_Practicas/excepciones', 'beb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Manejo_de_Errores_y_Buenas_Practicas/logging',
                component: ComponentCreator('/pyquiles-al-pastor/Manejo_de_Errores_y_Buenas_Practicas/logging', 'ec3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Manejo_de_Errores_y_Buenas_Practicas/quality',
                component: ComponentCreator('/pyquiles-al-pastor/Manejo_de_Errores_y_Buenas_Practicas/quality', 'b39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Manejo_de_Errores_y_Buenas_Practicas/type_hints',
                component: ComponentCreator('/pyquiles-al-pastor/Manejo_de_Errores_y_Buenas_Practicas/type_hints', 'ebe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Material_Adicional/bibliografia_y_recursos',
                component: ComponentCreator('/pyquiles-al-pastor/Material_Adicional/bibliografia_y_recursos', '3af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Programacion_Orientada_a_Objetos/clases_objetos',
                component: ComponentCreator('/pyquiles-al-pastor/Programacion_Orientada_a_Objetos/clases_objetos', '748'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pyquiles-al-pastor/Programacion_Orientada_a_Objetos/dataclasses',
                component: ComponentCreator('/pyquiles-al-pastor/Programacion_Orientada_a_Objetos/dataclasses', '354'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
