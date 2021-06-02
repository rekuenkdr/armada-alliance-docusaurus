/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Armada Alliance Docs',
  tagline: 'ARM powered Cardano Stake Pool Guides',
  url: 'https://rekuenkdr.github.io/', // URL for your website. This can also be considered the top-level hostname
  baseUrl: '/armada-alliance-docusaurus/', // Change this to match your projectName if deploying to Github Pages or / if deploying to a top level domain
  onBrokenLinks: 'warn', // Change this to 'throw' for production CI pipelines
  onBrokenMarkdownLinks: 'warn', 
  favicon: 'img/armada-alliance-logo.png',
  organizationName: 'rekuenkdr', // Change this to your GitHub org/user name.
  projectName: 'armada-alliance-docusaurus', // Change this to your repo name.
  i18n: {  // We are using crowdin to translate the site https://docusaurus.io/docs/i18n/crowdin
    defaultLocale: 'en',
    locales: ['en', 'es', 'fi'], // Add locales, run locales and translate https://docusaurus.io/docs/i18n/tutorial
  },
  themeConfig: {
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
          href: 'https://github.com/armada-alliance/master',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Beginner Guides',
              to: '/docs/README',
            },
            {
              label: 'Intermediate Guides',
              to: '/docs/README',
            },
            {
              label: 'Advance Guides',
              to: '/docs/README',
            },
            {
              label: 'Cardano Developer Guides',
              to: '/docs/README',
            },
          ],
        },
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
              label: 'Discord',
              href: 'https://discord.com/channels/815680220827746364/815680224460931074',
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
              to: '/docs/how-to-contribute/README',
            },
            {
              label: 'Donate',
              href: 'https://cointr.ee/armada-alliance',
            },
            {
              label: 'Project Catalyst',
              to: 'https://cardano.ideascale.com/a/dtd/ARMing-Cardano/340480-48088#idea-tab-comments',
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
            'https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
