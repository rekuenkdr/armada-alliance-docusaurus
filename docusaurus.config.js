/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Armada Alliance Docs',
  tagline: 'ARM powered Cardano Stake Pool Guides',
  url: 'https://docs.armada-alliance.com/', // URL for your website. This can also be considered the top-level hostname
  baseUrl: '/', // Change this to match your projectName if deploying to Github Pages or / if deploying to a top level domain
  onBrokenLinks: 'throw', // Change this to 'throw' for production CI pipelines
  onBrokenMarkdownLinks: 'throw', 
  favicon: 'img/armada-alliance-logo.png',
  organizationName: 'armada-alliance', // Change this to your GitHub org/user name.
  projectName: 'armada-alliance-docusaurus', // Change this to your repo name.
  i18n: {  // We are using crowdin to translate the site https://docusaurus.io/docs/i18n/crowdin
    defaultLocale: 'en',
    locales: ['en'], // Add locales, run locales and translate https://docusaurus.io/docs/i18n/tutorial
  },
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl'),
    },
    navbar: {
      title: 'Armada Alliance',
      logo: {
        alt: 'Armada Alliance',
        src: 'img/armada-alliance-logo.png',
      },
      items: [
        {
          type: 'localeDropdown', // Locale Dropdown
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'README',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://armada-alliance.com',
          label: 'Armada Alliance Website',
          position: 'left',
          target: '_blank',
        },
        {
          href: 'https://github.com/armada-alliance/armada-alliance-docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Website',
              href: 'https://armada-alliance.com/',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/joinchat/FeKTCBu-pn5OUZUz4joF2w',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCligunhcmbMYaBUMvONsKwg',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/Sqc398qk5a',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/alliance_armada',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/armada-alliance/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contribute',
              to: '/docs/how-to-contribute/',
            },
            {
              label: 'Donate',
              href: 'https://cointr.ee/armada-alliance',
            },
            {
              label: 'Project Catalyst',
              to: 'https://cardano.ideascale.com/c/idea/397744',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Armada Alliance, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/armada-alliance/armada-alliance-docusaurus/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
