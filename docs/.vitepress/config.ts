import { navbar } from "./config/navbar";
import { sidebar } from "./config/sidebar";
import { UserConfig } from 'vitepress'

const config: UserConfig = {
	title: 'Nexus Ecosystem',
	description: 'Documentation for Nexus',
	cleanUrls: true,
	appearance: "dark",
	themeConfig: {
		head: [
			['link',{ rel: 'icon', href: '/favicon.ico' }],
		],
		logo: "/logo-small.png",
		nav: navbar,
		sidebar: sidebar,
		footer: {
			message: "Released under the MIT License.",
			copyright: 'Powered by <a href="https://github.com/Kyrax324">Kyrax324</a>',
			// copyright: "Copyright © 2022-present Nexus",
		},
	},
}

export default config