import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/trucos_programacion/__docusaurus/debug',
    component: ComponentCreator('/trucos_programacion/__docusaurus/debug', '726'),
    exact: true
  },
  {
    path: '/trucos_programacion/__docusaurus/debug/config',
    component: ComponentCreator('/trucos_programacion/__docusaurus/debug/config', '0f3'),
    exact: true
  },
  {
    path: '/trucos_programacion/__docusaurus/debug/content',
    component: ComponentCreator('/trucos_programacion/__docusaurus/debug/content', 'df8'),
    exact: true
  },
  {
    path: '/trucos_programacion/__docusaurus/debug/globalData',
    component: ComponentCreator('/trucos_programacion/__docusaurus/debug/globalData', '445'),
    exact: true
  },
  {
    path: '/trucos_programacion/__docusaurus/debug/metadata',
    component: ComponentCreator('/trucos_programacion/__docusaurus/debug/metadata', 'fbf'),
    exact: true
  },
  {
    path: '/trucos_programacion/__docusaurus/debug/registry',
    component: ComponentCreator('/trucos_programacion/__docusaurus/debug/registry', 'db9'),
    exact: true
  },
  {
    path: '/trucos_programacion/__docusaurus/debug/routes',
    component: ComponentCreator('/trucos_programacion/__docusaurus/debug/routes', '9fb'),
    exact: true
  },
  {
    path: '/trucos_programacion/rutas',
    component: ComponentCreator('/trucos_programacion/rutas', 'be9'),
    exact: true
  },
  {
    path: '/trucos_programacion/',
    component: ComponentCreator('/trucos_programacion/', '6ef'),
    exact: true
  },
  {
    path: '/trucos_programacion/',
    component: ComponentCreator('/trucos_programacion/', '1f9'),
    routes: [
      {
        path: '/trucos_programacion/',
        component: ComponentCreator('/trucos_programacion/', '42c'),
        routes: [
          {
            path: '/trucos_programacion/',
            component: ComponentCreator('/trucos_programacion/', '04a'),
            routes: [
              {
                path: '/trucos_programacion/Ciencia_de_Datos_Basica/pandas_basico',
                component: ComponentCreator('/trucos_programacion/Ciencia_de_Datos_Basica/pandas_basico', '42f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Conceptos_Avanzados/context_managers',
                component: ComponentCreator('/trucos_programacion/Conceptos_Avanzados/context_managers', '211'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Conceptos_Avanzados/decorators',
                component: ComponentCreator('/trucos_programacion/Conceptos_Avanzados/decorators', '92f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Conceptos_Avanzados/generadores_iteradores',
                component: ComponentCreator('/trucos_programacion/Conceptos_Avanzados/generadores_iteradores', '9b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Conceptos_Avanzados/performance',
                component: ComponentCreator('/trucos_programacion/Conceptos_Avanzados/performance', 'e97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Estructuras_de_Datos/diccionarios_sets',
                component: ComponentCreator('/trucos_programacion/Estructuras_de_Datos/diccionarios_sets', '5a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Estructuras_de_Datos/listas',
                component: ComponentCreator('/trucos_programacion/Estructuras_de_Datos/listas', '67e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Estructuras_de_Datos/operaciones_avanzadas',
                component: ComponentCreator('/trucos_programacion/Estructuras_de_Datos/operaciones_avanzadas', '608'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Estructuras_de_Datos/tuplas',
                component: ComponentCreator('/trucos_programacion/Estructuras_de_Datos/tuplas', 'cc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Funciones_y_Modulos/funciones',
                component: ComponentCreator('/trucos_programacion/Funciones_y_Modulos/funciones', '45d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Funciones_y_Modulos/modulos_paquetes',
                component: ComponentCreator('/trucos_programacion/Funciones_y_Modulos/modulos_paquetes', '662'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Herramientas_Profesionales/git_intro',
                component: ComponentCreator('/trucos_programacion/Herramientas_Profesionales/git_intro', '40e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Herramientas_Profesionales/packaging',
                component: ComponentCreator('/trucos_programacion/Herramientas_Profesionales/packaging', '4da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Herramientas_Profesionales/security',
                component: ComponentCreator('/trucos_programacion/Herramientas_Profesionales/security', '5e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Herramientas_Profesionales/testing',
                component: ComponentCreator('/trucos_programacion/Herramientas_Profesionales/testing', 'd5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Herramientas_Profesionales/virtual_envs',
                component: ComponentCreator('/trucos_programacion/Herramientas_Profesionales/virtual_envs', 'f20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Introduccion_y_Fundamentos/bucles',
                component: ComponentCreator('/trucos_programacion/Introduccion_y_Fundamentos/bucles', 'd50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Introduccion_y_Fundamentos/condicionales_avanzados',
                component: ComponentCreator('/trucos_programacion/Introduccion_y_Fundamentos/condicionales_avanzados', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Introduccion_y_Fundamentos/condicionales_y_logica',
                component: ComponentCreator('/trucos_programacion/Introduccion_y_Fundamentos/condicionales_y_logica', '165'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Introduccion_y_Fundamentos/variables_y_tipos',
                component: ComponentCreator('/trucos_programacion/Introduccion_y_Fundamentos/variables_y_tipos', 'a0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Introduccion_y_Fundamentos/zen_of_python',
                component: ComponentCreator('/trucos_programacion/Introduccion_y_Fundamentos/zen_of_python', '769'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Manejo_de_Archivos_y_Formatos/json',
                component: ComponentCreator('/trucos_programacion/Manejo_de_Archivos_y_Formatos/json', '659'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Manejo_de_Archivos_y_Formatos/pathlib',
                component: ComponentCreator('/trucos_programacion/Manejo_de_Archivos_y_Formatos/pathlib', '64d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Manejo_de_Archivos_y_Formatos/serialization_advanced',
                component: ComponentCreator('/trucos_programacion/Manejo_de_Archivos_y_Formatos/serialization_advanced', '8ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Manejo_de_Archivos_y_Formatos/xml',
                component: ComponentCreator('/trucos_programacion/Manejo_de_Archivos_y_Formatos/xml', '958'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Manejo_de_Archivos_y_Formatos/yaml',
                component: ComponentCreator('/trucos_programacion/Manejo_de_Archivos_y_Formatos/yaml', 'bda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Manejo_de_Errores_y_Buenas_Practicas/excepciones',
                component: ComponentCreator('/trucos_programacion/Manejo_de_Errores_y_Buenas_Practicas/excepciones', 'bca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Manejo_de_Errores_y_Buenas_Practicas/logging',
                component: ComponentCreator('/trucos_programacion/Manejo_de_Errores_y_Buenas_Practicas/logging', '38c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Manejo_de_Errores_y_Buenas_Practicas/quality',
                component: ComponentCreator('/trucos_programacion/Manejo_de_Errores_y_Buenas_Practicas/quality', 'f6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Manejo_de_Errores_y_Buenas_Practicas/type_hints',
                component: ComponentCreator('/trucos_programacion/Manejo_de_Errores_y_Buenas_Practicas/type_hints', 'f86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Material_Adicional/bibliografia_y_recursos',
                component: ComponentCreator('/trucos_programacion/Material_Adicional/bibliografia_y_recursos', '741'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Programacion_Orientada_a_Objetos/clases_objetos',
                component: ComponentCreator('/trucos_programacion/Programacion_Orientada_a_Objetos/clases_objetos', '3cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/Programacion_Orientada_a_Objetos/dataclasses',
                component: ComponentCreator('/trucos_programacion/Programacion_Orientada_a_Objetos/dataclasses', '4e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trucos_programacion/',
                component: ComponentCreator('/trucos_programacion/', 'a9c'),
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
