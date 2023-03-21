export const sidebar = {
	"/about/": [
		{
			text: "Introduction",
			collapsible: true,
			items: [
				{ text: "What is Nexus?", link: "/about/" },
				{ text: "Project Flow", link: "/about/project-flow" },
			],
		}
	],
	"/nexus-base/": [
		{
			text: "Nexus Base",
			collapsible: true,
			items: [
				{ text: "Introduction", link: "/nexus-base/" },
			],
		},
		{
			text: "@Laravel",
			collapsible: false,
			items: [
				{ text: "Index", link: "/nexus-base/laravel/" },
				{ text: "File Structure", link: "/nexus-base/laravel/file-structure" },
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
	"/nexus-book/git/": [
		{
			// text: "Database",
			collapsible: false,
			items: [
				{ text: "Git", link: "/nexus-book/git/" },
			],
		}
	],
	"/nexus-book/server/": [
		{
			// text: "Database",
			collapsible: false,
			items: [
				{ text: "Server", link: "/nexus-book/server/" },
			],
		}
	],
}