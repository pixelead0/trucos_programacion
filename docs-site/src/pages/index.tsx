import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ModuleCard } from '../components';

export default function Home(): JSX.Element {
  const routes = [
    {
      title: 'Empezar desde cero',
      description: 'Nunca has programado antes',
      time: '4-6 semanas',
      prereqs: ['Ninguno'],
      to: '/Introduccion_y_Fundamentos/zen_of_python',
      color: 'success',
    },
    {
      title: 'Vengo de otro lenguaje',
      description: 'Ya sabes programar, quieres aprender Python',
      time: '2-3 semanas',
      prereqs: ['Conocimientos básicos de programación'],
      to: '/Estructuras_de_Datos/listas',
      color: 'warning',
    },
    {
      title: 'Modo pro',
      description: 'Dominas Python básico, quieres avanzar',
      time: '3-4 semanas',
      prereqs: ['Python básico', 'POO', 'Funciones'],
      to: '/Conceptos_Avanzados/decorators',
      color: 'danger',
    },
  ];

  const modules = [
    {
      moduleNumber: '01',
      title: 'Fundamentos',
      level: 'beginner' as const,
      objectives: [
        'Entender la filosofía de Python',
        'Dominar variables, tipos y operadores',
        'Usar condicionales y bucles efectivamente',
      ],
      time: '2-3 semanas',
      prereqs: [],
      to: '/Introduccion_y_Fundamentos/zen_of_python',
    },
    {
      moduleNumber: '02',
      title: 'Estructuras de Datos',
      level: 'beginner' as const,
      objectives: [
        'Trabajar con listas, tuplas y diccionarios',
        'Comprender cuándo usar cada estructura',
        'Aplicar métodos y operaciones comunes',
      ],
      time: '1 semana',
      prereqs: ['Fundamentos'],
      to: '/Estructuras_de_Datos/listas',
    },
    {
      moduleNumber: '03',
      title: 'Funciones y Módulos',
      level: 'intermediate' as const,
      objectives: [
        'Crear funciones reutilizables',
        'Organizar código en módulos y paquetes',
        'Aplicar buenas prácticas de estructura',
      ],
      time: '1-2 semanas',
      prereqs: ['Estructuras de Datos'],
      to: '/Funciones_y_Modulos/funciones',
    },
    {
      moduleNumber: '04',
      title: 'Programación Orientada a Objetos',
      level: 'intermediate' as const,
      objectives: [
        'Entender clases y objetos en Python',
        'Usar dataclasses para simplificar código',
        'Aplicar principios POO',
      ],
      time: '1-2 semanas',
      prereqs: ['Funciones'],
      to: '/Programacion_Orientada_a_Objetos/clases_objetos',
    },
    {
      moduleNumber: '05',
      title: 'Calidad y Robustez',
      level: 'intermediate' as const,
      objectives: [
        'Manejar errores y excepciones',
        'Implementar logging profesional',
        'Usar type hints y herramientas de calidad',
      ],
      time: '1-2 semanas',
      prereqs: ['POO'],
      to: '/Manejo_de_Errores_y_Buenas_Practicas/excepciones',
    },
    {
      moduleNumber: '06',
      title: 'Datos y Formatos',
      level: 'advanced' as const,
      objectives: [
        'Trabajar con archivos usando pathlib',
        'Procesar JSON, XML y YAML',
        'Implementar serialización avanzada',
      ],
      time: '2 semanas',
      prereqs: ['Calidad y Robustez'],
      to: '/Manejo_de_Archivos_y_Formatos/pathlib',
    },
    {
      moduleNumber: '07',
      title: 'Conceptos Avanzados',
      level: 'advanced' as const,
      objectives: [
        'Dominar decoradores y context managers',
        'Optimizar rendimiento',
        'Usar generadores e iteradores',
      ],
      time: '2-3 semanas',
      prereqs: ['Datos y Formatos'],
      to: '/Conceptos_Avanzados/decorators',
    },
    {
      moduleNumber: '08',
      title: 'Herramientas Profesionales',
      level: 'advanced' as const,
      objectives: [
        'Gestionar entornos virtuales',
        'Crear paquetes distribuibles',
        'Implementar testing y seguridad',
      ],
      time: '2 semanas',
      prereqs: ['Conceptos Avanzados'],
      to: '/Herramientas_Profesionales/virtual_envs',
    },
    {
      moduleNumber: '09',
      title: 'Ciencia de Datos Básica',
      level: 'advanced' as const,
      objectives: [
        'Introducción a pandas',
        'Manipular datos estructurados',
        'Aplicar análisis básico',
      ],
      time: '1-2 semanas',
      prereqs: ['Herramientas Profesionales'],
      to: '/Ciencia_de_Datos_Basica/pandas_basico',
    },
  ];

  return (
    <Layout
      title="Pyquiles al Pastor - Curso Completo de Python"
      description="Autoaprendizaje desde cero hasta profesional">
      <div className="homePage">
        <div className="container margin-vert--xl">
          {/* Hero Section */}
          <div className="row">
            <div className="col col--12">
              <div className="homePage__hero">
                <h1 className="homePage__title">🍽️ Pyquiles al Pastor</h1>
                <p className="homePage__tagline">
                  Curso completo de Python - Autoaprendizaje desde cero hasta profesional
                </p>
                <p className="homePage__description">
                  Como los chilaquiles al pastor combinan ingredientes básicos con este toque especial, este curso combina fundamentos de Python con técnicas profesionales. Un curso diseñado para guiarte paso a paso, con rutas personalizadas según tu nivel y proyectos prácticos que evolucionan contigo.
                </p>
              </div>
            </div>
          </div>

          {/* Route Cards */}
          <div className="row margin-vert--lg">
            <div className="col col--12">
              <h2 className="homePage__sectionTitle">Elige tu ruta de aprendizaje</h2>
            </div>
          </div>
          <div className="row margin-vert--lg">
            {routes.map((route, index) => (
              <div key={index} className="col col--12 col--4-lg">
                <div className={`routeCard__content routeCard--${route.color}`}>
                  <h3 className="routeCard__title">{route.title}</h3>
                  <p className="routeCard__description">{route.description}</p>
                  <div className="routeCard__meta">
                    <span className="muted">⏱ {route.time}</span>
                    <div className="muted">
                      <strong>Prerequisitos:</strong> {route.prereqs.join(', ')}
                    </div>
                  </div>
                  <Link
                    className="button button--primary button--block routeCard__button"
                    to={route.to}>
                    Continuar →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Module Cards */}
          <div className="row margin-vert--lg">
            <div className="col col--12">
              <h2 className="homePage__sectionTitle">Módulos del curso</h2>
            </div>
          </div>
          <div className="row margin-vert--lg">
            {modules.map((module) => (
              <div key={module.moduleNumber} className="col col--12 col--6-lg">
                <ModuleCard {...module} />
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="row margin-vert--lg">
            <div className="col col--12">
              <div className="homePage__quickLinks">
                <Link className="button button--outline button--primary button--lg" to="/rutas">
                  🧭 Ver rutas por nivel
                </Link>
                <Link className="button button--outline button--secondary button--lg" to="/Material_Adicional/bibliografia_y_recursos">
                  📚 Recursos adicionales
                </Link>
                <Link className="button button--outline button--primary button--lg" to="/sobre-el-autor">
                  👨‍💻 Sobre el Autor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
