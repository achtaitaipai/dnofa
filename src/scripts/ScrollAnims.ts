export default class ScrollAnims {
	static ratio = 0.2

	static init() {
		if ('IntersectionObserver' in window) {
			const options = {
				root: null,
				rootMargin: '0px',
				threshold: ScrollAnims.ratio,
			}
			const observer = new IntersectionObserver(ScrollAnims.intersectionCallback.bind(this), options)
			const targets = document.querySelectorAll<HTMLElement>('[data-visible]')
			targets.forEach(el => {
				observer.observe(el)
			})
			document.body.classList.add('js-active')
		}
	}

	static intersectionCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
		entries.forEach(entry => {
			if (entry.intersectionRatio > ScrollAnims.ratio) {
				const target = entry.target as HTMLElement
				target.setAttribute('data-visible', 'true')
				observer.unobserve(target)
			}
		})
	}
}
