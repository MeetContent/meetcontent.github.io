// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const githubLink = 'https://github.com/MeetContent/meetcontent.github.io';
const organizationName = 'MeetContent';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: organizationName,
  tagline: 'Your content meetups',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://meetcontent.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'meetcontent.github.io', // Usually your GitHub org/user name.
  projectName: 'meetcontent.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
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
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        style: 'primary',
        title: organizationName,
        logo: {
          alt: 'MeetContent Logo',
          src: 'img/meet-content-blue.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: githubLink,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'Facebook',
            href: 'https://www.facebook.com/meetcontentcommunity/',
          },
          {
            label: 'Meetup',
            href: 'https://www.meetup.com/MeetContent/',
          },
          {
            label: 'Slack',
            href: 'https://join.slack.com/t/meetcontent/shared_invite/enQtNDUyNDI2ODY2MTEyLTJmMjkxMGYwZjgwOTJhYjNjMzU5MWVjODNkYmZiNThkMDE4MDQzOTA0ODRhZTM2MDRkNmRiMTE3NWM4MmU2NzI',
          },
          {
            label: 'Linkedin',
            href: 'https://www.linkedin.com/company/17989901/',
          },
          {
            label: 'GitHub',
            href: githubLink,
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} by ${organizationName}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
