export default {
	title: 'Nexus Ecosystem',
	description: 'Documentation for Nexus',
	cleanUrls: true,
	appearance: "dark",
	themeConfig: {
		head: [
			['link',{ rel: 'icon', href: '/favicon.ico' }],
			// ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
			// ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
		],
		nav: [
			{ text: 'About', link: '/about/' },
			{
			  text: 'Nexus Book',
			  items: [
				{
				  items: [
					{ text: 'Introduction', link: '/nexus-book/' },
				  ]
				},
				{
				  text: 'Chapters',
				  items: [
					{ text: 'Laravel', link: '/nexus-book/laravel/' },
					{ text: 'Vue', link: '/nexus-book/laravel/' },
					{ text: 'Git', link: '/nexus-book/laravel/' },
					{ text: 'Server', link: '/nexus-book/laravel/' },
				  ]
				},
			  ]
			},
			{
			  text: 'Nexus Base',
			  items: [
				{
				  items: [
					{ text: 'Introduction', link: '/nexus-base/' },
				  ]
				},
				{
				  text: 'Modules',
				  items: [
					{ text: 'Laravel', link: '/nexus-base/laravel/' },
					{ text: 'Vue Admin', link: '/packages/' },
					{ text: 'Vue Web', link: '/packages/' },
				  ]
				},
			  ]
			},
			{
			  text: 'Others',
			  items: [
				{
				  items: [
					{ text: 'VScode ShortCut', link: '/packages/' },
					{ text: 'Packages', link: '/packages/' },
				  ]
				}
			  ]
			},
			// { text: 'Changelog', link: 'https://github.com/...' }
		],
		// Sidebar
		sidebar: {
			"/about/": [
				{
					text: "Introduction",
					collapsible: true,
					items: [
						{ text: "What is Nexus?", link: "/about/" },
						{ text: "about3", link: "/about/about3" },
						{ text: "standardization", link: "/about/project-standardization " },
					],
				}
			],
			"/nexus-base/": [
				{
					text: "Nexus Base",
					collapsible: true,
					items: [
						{ text: "What is Nexus?", link: "/about/" },
					],
				},
				{
					text: "Laravel",
					collapsible: false,
					items: [
						{ text: "Index", link: "/nexus-base/laravel/" },
						{ text: "Seeder", link: "/nexus-base/laravel/seeder" },
						{ text: "Model", link: "/nexus-base/laravel/model" },
					],
				},
			],
			"/packages/": [
				{
					text: "Database",
					collapsible: false,
					items: [
						{ text: "Index", link: "/packages/" },
						{ text: "about2", link: "/packages/about2" },
						{ text: "VSCode Shorcut", link: "/packages/about2" },
					],
				}
			],
		},
		footer: {
			message: "Released under the MIT License.",
			copyright: 'Powered by <a href="https://github.com/Kyrax324">Kyrax324</a>',
			// copyright: "Copyright © 2022-present Nexus",
		},
	},
}