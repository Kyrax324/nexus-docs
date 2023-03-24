export const sidebar = {
	"/about/": [
		{
			text: "Introduction",
			collapsible: true,
			items: [
				{ text: "What is Nexus?", link: "/about/" },
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
	"/nexus-book/": [
		{
			text: "Nexus Book",
			collapsible: false,
			items: [
				{ text: "About", link: "/nexus-book/" },
				{ text: "General Practices", link: "/nexus-book/general-practices" },
				{ text: "Project Flow", link: "/nexus-book/project-flow" },
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
	"/nexus-book/laravel/": [
		{
			text: "Laravel",
			collapsible: false,
			items: [
				{ text: "Ideology", link: "/nexus-book/laravel/" },
				{ text: "Best Practice", link: "/nexus-book/laravel/best-practice" },
			],
		},
		{
			text: "Topic",
			collapsible: false,
			items: [
				{ text: "Overwatch Panel", link: "/nexus-book/laravel/topic-1" },
				{ text: "Config & Env", link: "/nexus-book/laravel/topic-1" },
				{ text: "Database & Migration", link: "/nexus-book/laravel/topic-1" },
				{ text: "Seeder", link: "/nexus-book/laravel/topic-1" },
				{ text: "File System & Storage", link: "/nexus-book/laravel/topic-1" },
				{ text: "HTTP Request (API)", link: "/nexus-book/laravel/topic-1" },
			],
		},
		{
			text: "Cases",
			collapsible: false,
			items: [
				{ text: "Mobile App Development Flow", link: "/nexus-book/laravel/case-1" },
			],
		}
	],
}