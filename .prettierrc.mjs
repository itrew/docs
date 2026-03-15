// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	singleQuote: true,
	printWidth: 100,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
		{
			files: ['*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false,
			},
		},
	],
};
