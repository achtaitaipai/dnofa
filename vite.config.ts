import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		outDir: './docs',
		rollupOptions: {
			input: {
				main: 'index.html',
				magazine: './magazine/index.html',
				equipe: './equipe/index.html',
				boutique: './boutique/index.html',
				leclubdesfondus: './clubdesfondus/index.html',
			},
		},
	},
	base: '/dnofa/',
})
