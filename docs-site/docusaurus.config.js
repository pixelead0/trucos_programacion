// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Curso Completo de Python',
  tagline: 'Autoaprendizaje desde cero hasta profesional',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://pixelead0.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployments, it is often '/<projectName>/'
  baseUrl: '/trucos_programacion/',

  // GitHub pages deployment config.
  organizationName: 'pixelead0', // Usually your GitHub org/user name.
  projectName: 'trucos_programacion', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you may
  // want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/pixelead0/trucos_programacion/tree/main/',
          routeBasePath: '/', // Serve the docs at the site's root
          // Generar sidebar automáticamente desde la estructura de archivos
          // sidebarCollapsible: true,
        },
        blog: false, // Deshabilitar blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Curso de Python',
        logo: {
          alt: 'Python Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Curso',
          },
          {
            to: '/rutas',
            position: 'left',
            label: 'Rutas',
          },
          {
            to: '/sobre-el-autor',
            position: 'left',
            label: 'Sobre el Autor',
          },
          {
            href: 'https://www.buymeacoffee.com/pixelead0',
            label: '☕ Buy Me A Coffee',
            position: 'right',
            className: 'navbar__item--coffee',
          },
          {
            href: 'https://github.com/pixelead0/trucos_programacion',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Curso',
            items: [
              {
                label: 'Inicio',
                to: '/',
              },
              {
                label: 'Fundamentos',
                to: '/Introduccion_y_Fundamentos/zen_of_python',
              },
            ],
          },
          {
            title: 'Recursos',
            items: [
              {
                label: 'Bibliografía',
                to: '/Material_Adicional/bibliografia_y_recursos',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Sobre el Autor',
                to: '/sobre-el-autor',
              },
              {
                label: '☕ Buy Me A Coffee',
                href: 'https://www.buymeacoffee.com/pixelead0',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pixelead0/trucos_programacion',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Curso de Python. Construido con Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['python', 'bash'],
      },
    }),
};

module.exports = config;
