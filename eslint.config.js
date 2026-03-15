import eslintPluginAstro from 'eslint-plugin-astro';

export default [
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			// override/add rules settings here, such as:
			// "astro/no-set-html-directive": "error"
		},
		ignores: [
			// build outputs
			'/build',
			'/dist',
			// generated types
			'/.astro',
			// dependencies
			'node_modules/',
			// pnpm, npm and yarn
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock',
			// environment variables
			'.env',
			'.env.*',
			// macOS-specific files
			'.DS_Store',
		],
	},
];
