// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/itrew/docs' }],
			components: {
				Sidebar: './src/components/overrides/starlight/Sidebar.astro',
			},
			sidebar: [
				{
					label: 'Network',
					autogenerate: { directory: 'network' },
				},
				{
					label: 'Services',
					autogenerate: { directory: 'services' },
				},
			],
		}),
	],
});
