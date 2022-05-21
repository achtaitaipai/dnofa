import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		outDir: './docs',
		rollupOptions: {
			input: {
				main: 'index.html',
				magazine: './magazine/index.html',
			},
		},
	},
	base: '/dnofa/',
})
