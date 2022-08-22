import { tns } from 'tiny-slider'

export default class Slider {
	public static init() {
		const sliderEl = document.getElementById('slider')
		if (sliderEl) {
			tns({
				container: sliderEl,
				slideBy: 1,
				speed: 400,
				fixedWidth: 280,
				mouseDrag: true,
				arrowKeys: true,
				loop: true,
				controlsContainer: '#slider-controls',
				gutter: 50,
				center: true,
			})
		}
	}
}
