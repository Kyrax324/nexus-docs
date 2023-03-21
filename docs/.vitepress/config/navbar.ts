export const navbar = [
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
					{ text: 'Vue', link: '/nexus-book/vue/' },
					{ text: 'Git', link: '/nexus-book/git/' },
					{ text: 'Server', link: '/nexus-book/server/' },
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
					{ text: '@Laravel', link: '/nexus-base/laravel/' },
				]
			},
			{
				text: 'SPA',
				items: [
					{ text: 'Vue Admin', link: '/nexus-base/vue-admin' },
					{ text: 'Vue Web', link: '/nexus-base/vue-web' },
				]
			},
		]
	},
	{
		text: 'External Tools',
		items: [
			{
				items: [
					// { text: 'VScode ShortCut', link: '/packages/' },
					{ text: 'VS Code | Code Editor', link: '/coming-soon' },
					{ text: 'Laragon | Localhost Server', link: '/coming-soon' },
					// { text: 'Packages', link: '/coming-soon' },
				]
			}
		]
	},
	// { text: 'Changelog', link: 'https://github.com/...' }
]

