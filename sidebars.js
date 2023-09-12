// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  eventsIberia: [
    {
      type: 'category',
      label: 'Iberia meetups',
      link: {
        type: 'generated-index',
        title: 'MeetContent Iberia',
        description: 'Meetups in Spain and Portugal',
        slug: '/iberia',
        keywords: ['iberia'],
      },
      items: [{ type: 'autogenerated', dirName: 'iberia' }],
    },
  ],
  eventsKrakow: [
    {
      type: 'category',
      label: 'Kraków meetups',
      link: {
        type: 'generated-index',
        title: 'MeetContent Kraków',
        description: 'Meetups in Kraków',
        slug: '/krakow',
        keywords: ['krakow'],
      },
      items: [
        {
          type: 'category',
          label: '2023',
          collapsed: false,
          items: ['krakow/2023/15', 'krakow/2023/14', 'krakow/2023/13'],
        },
        {
          type: 'category',
          label: '2020',
          items: ['krakow/12'],
        },
        {
          type: 'category',
          label: '2019',
          items: ['krakow/11'],
        },
        {
          type: 'category',
          label: '2018',
          items: ['krakow/7', 'krakow/8', 'krakow/9'],
        },
        {
          type: 'category',
          label: '2017',
          items: ['krakow/1'],
        },
      ],
    },
  ],
  eventsWroclaw: [
    {
      type: 'category',
      label: 'Wrocław meetups',
      link: {
        type: 'generated-index',
        title: 'MeetContent Wrocław',
        description: 'Meetups in Wrocław',
        slug: '/wroclaw',
        keywords: ['wroclaw'],
      },
      items: [{ type: 'autogenerated', dirName: 'wroclaw' }],
    },
  ],
};

module.exports = sidebars;