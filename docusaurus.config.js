// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FTW Swap',
  tagline: 'Building some cool decentralized stuff on NEO blockchain',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Forthewin', // Usually your GitHub org/user name.
  projectName: 'FTW', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
	        routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Forthewin Docs',
        logo: {
          alt: 'Forthewin logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ForTheWinn',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Forthewin Network',
            // items: [
            //   {
            //     label: 'Tutorial',
            //     to: '/docs/intro',
            //   },
            // ],
          },
	        {
		        title: 'Links',
		        items: [
			        {
				        label: 'Website',
				        href: 'https://www.forthewin.network/#/',
			        },
			        {
				        label: 'GitHub',
				        href: 'https://github.com/ForTheWinn',
			        },
		        ],
	        },
          {
            title: 'Community',
            items: [
	            {
		            label: 'Website',
		            href: 'https://www.forthewin.network/#/',
	            },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/A83mtQqsfP',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@Forthewin_network',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/N3_FTW_NETWORK',
              },
            ],
          }
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
