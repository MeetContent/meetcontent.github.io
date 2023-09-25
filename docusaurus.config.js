// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const githubLink = 'https://github.com/MeetContent/meetcontent.github.io';
const organizationName = 'MeetContent';
const slackLink =
  'https://join.slack.com/t/meetcontent/shared_invite/enQtNDUyNDI2ODY2MTEyLTJmMjkxMGYwZjgwOTJhYjNjMzU5MWVjODNkYmZiNThkMDE4MDQzOTA0ODRhZTM2MDRkNmRiMTE3NWM4MmU2NzI';
const linkedInIberia = 'https://www.linkedin.com/company/100016156/'

function sortSidebarItemsByDate(items, idsWithDates) {
  const result = items.map((item) => {
    if (item.type === 'category') {
      return { ...item, items: sortSidebarItemsByDate(item.items) };
    }
    return item;
  });

  result.sort((a, b) => {
    const aDate = idsWithDates[a.id];
    const bDate = idsWithDates[b.id];

    return bDate - aDate;
  });

  return result;
}

async function sidebarItemsGenerator({
  defaultSidebarItemsGenerator,
  ...args
}) {
  const idsWithDates = [];
  args.docs.forEach((doc) => {
    idsWithDates[doc.id] = new Date(doc.frontMatter.date).getTime();
  });

  const sidebarItems = await defaultSidebarItemsGenerator(args);
  return sortSidebarItemsByDate(sidebarItems, idsWithDates);
}

function getMenu(id, name) {
  if (id == 'iberia') {
    return {
      label: name,
      position: 'left',
      items: [
        {
          label: 'Sobre nosotros',
          to: id,
        },
        {
          type: 'docSidebar',
          sidebarId: `events${id.charAt(0).toUpperCase() + id.slice(1)}`,
          label: 'Meetups',
        },
        {
          label: 'Artículos/Blog',
          to: `iberia/blog`,
        },
      ],
    };
  }
  else {
    return {
      label: name,
      position: 'left',
      items: [
        {
          label: 'About us',
          to: id,
        },
        {
          type: 'docSidebar',
          sidebarId: `events${id.charAt(0).toUpperCase() + id.slice(1)}`,
          label: 'Meetups',
        },
        {
          label: 'Articles/Blog',
          to: `blog/tags/${id}`,
        },
      ],
    };
  }
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: organizationName,
  tagline: 'Your content meetups',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://meetcontent.github.io',
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
          path: 'events',
          routeBasePath: 'events',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/MeetContent/meetcontent.github.io/tree/main',
          sidebarItemsGenerator,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/MeetContent/meetcontent.github.io/tree/main',
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
      image: 'img/meet-content-blue.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        style: 'primary',
        title: organizationName,
        logo: {
          alt: 'MeetContent Logo',
          src: 'img/meet-content-white.png',
          srcDark: 'img/meet-content-white.png',
        },
        items: [
          getMenu('krakow', 'Kraków'),
          getMenu('wroclaw', 'Wrocław'),
          getMenu('iberia', 'Iberia'),
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            label: 'Facebook',
            href: 'https://www.facebook.com/meetcontentcommunity/',
          },
          {
            label: 'Slack',
            href: slackLink,
          },
          {
            label: 'LinkedIn (KRK, WRO)',
            href: 'https://www.linkedin.com/company/17989901/',
          },
          {
            label: 'LinkedIn (Iberia)',
            href: 'https://www.linkedin.com/company/100016156/',
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
  customFields: {
    slackLink,
    linkedInIberia,
  },
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'blog-iberia',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'iberia/blog',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './blog-iberia',
        blogSidebarTitle: 'Otros artículos',
        blogTitle: 'Blog de MeetContent Iberia',
        blogDescription: 'Artículos y otros textos de MeetContent Iberia',
      },
    ],
  ],
};

module.exports = config;
