export default class ScrollAnims {
	private _ratio = 0.2
	constructor() {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: this._ratio,
		}
		const observer = new IntersectionObserver(this._intersectionCallback.bind(this), options)
		const targets = document.querySelectorAll<HTMLElement>('[data-visible]')
		targets.forEach(el => {
			console.log(el.style.transform)
			observer.observe(el)
		})
	}
	private _intersectionCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
		entries.forEach(entry => {
			if (entry.intersectionRatio > this._ratio) {
				const target = entry.target as HTMLElement
				target.setAttribute('data-visible', 'true')
				observer.unobserve(target)
			}
		})
	}
}

// const ratio = 0.1
// const options = {
// 	root: null,
// 	rootMargin: '0px',
// 	threshold: ratio,
// }

// const observer = new IntersectionObserver((entries, observer) => {
// 	entries.forEach(entry => {
// 		if (entry.intersectionRatio > ratio) {
// 			console.log(entry.target)
// 			observer.unobserve(entry.target)
// 		}
// 	})
// }, options)

// const target = document.querySelector('.homeRules_img')!
// observer.observe(target)
