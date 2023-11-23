// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  eventsIberia: [
    {
      type: 'category',
      label: 'Meetups en España y Portugal',
      link: {
        type: 'generated-index',
        title: 'MeetContent Iberia',
        description:
          'Aquí tienes información sobre nuestros meetups futuros, presentes, y pasados.',
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
          items: [
            'krakow/2023/17',
            'krakow/2023/16',
            'krakow/2023/15',
            'krakow/2023/14',
            'krakow/2023/13',
          ],
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
      items: [
        {
          type: 'category',
          label: '2023',
          collapsed: false,
          items: [
            'wroclaw/2023/meetcontentwro-24-unboxing-api-documentation',
            'wroclaw/2023/23',
          ],
        },
        {
          type: 'category',
          label: '2020',
          collapsed: false,
          items: [
            'wroclaw/2020/meetcontentwro-13-a-romance-of-many-dimensions',
            'wroclaw/2020/meetcontentwro-14-a-romance-of-many-dimensions-part-2',
            'wroclaw/2020/meetcontentwro-15-connecting-in-the-new-normal',
          ],
        },
        {
          type: 'category',
          label: '2019',
          collapsed: false,
          items: [
            'wroclaw/2019/meetcontentwro-10-simplified-technical-english',
            'wroclaw/2019/meetcontentwro-11-ar-documentation-our-experiments-with-microsoft-hololens',
            'wroclaw/2019/meetcontentwro-12-creating-spare-parts-catalogue',
            'wroclaw/2019/meetcontentwro-9-simplified-technical-english-12',
          ],
        },
        {
          type: 'category',
          label: '2018',
          collapsed: false,
          items: [
            'wroclaw/2018/327',
            'wroclaw/2018/grzegorz-kossobudzki',
            'wroclaw/2018/grzegorz-kossobudzki-2',
            'wroclaw/2018/grzegorz-kossobudzki-3',
            'wroclaw/2018/meetcontentwro-7',
          ],
        },
        {
          type: 'category',
          label: '2017',
          items: ['wroclaw/2017/402'],
        },
      ],
    },
  ],
};

module.exports = sidebars;
