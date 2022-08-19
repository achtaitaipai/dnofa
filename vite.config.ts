import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		outDir: './docs',
		rollupOptions: {
			input: {
				main: 'index.html',
				magazine: './magazine/index.html',
				equipe: './equipe/index.html',
				leclubdesfondus: './clubdesfondus/index.html',
				mentionslegales: './mentionslegales/index.html',
				cgu: './conditionsgeneralesutilisation/index.html',
			},
		},
	},
	base: '/',
})
