import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

export default class ImagesViewer {
	private static _galleryElement: HTMLUListElement | null
	private static _imgs: HTMLImageElement[]

	static init() {
		this._galleryElement = document.querySelector<HTMLUListElement>('#images-gallery-js')
		this._imgs = Array.from(document.querySelectorAll<HTMLImageElement>('[data-gallery]'))
		if (this._galleryElement) {
			const gallery = new Viewer(this._galleryElement, {
				inline: false,
				title: false,
				toolbar: {
					zoomIn: true,
					zoomOut: true,
					oneToOne: false,
					reset: false,
					prev: false,
					play: false,
					next: false,
					rotateLeft: false,
					rotateRight: false,
					flipHorizontal: false,
					flipVertical: false,
				},
			})
			this._imgs.forEach(img => {
				const imgNumber = parseInt(img.getAttribute('data-gallery') ?? '0')
				img.addEventListener('click', () => {
					gallery.view(imgNumber)
				})
			})
		}
	}
}
