export default class Menu {
	static openBtn: HTMLButtonElement
	static closeBtn: HTMLButtonElement
	static menuElement: HTMLElement
	static firstFocusableElement: HTMLElement
	static lastFocusableElement: HTMLElement

	static init() {
		Menu.openBtn = document.querySelector<HTMLButtonElement>('#openBtn-js')!
		Menu.closeBtn = document.querySelector<HTMLButtonElement>('#closeBtn-js')!
		Menu.menuElement = document.querySelector<HTMLButtonElement>('#menu-principal')!
		const focusableElements = Array.from(
			Menu.menuElement.querySelectorAll<HTMLElement>(
				'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
			)
		)
		Menu.firstFocusableElement = focusableElements[0]
		Menu.lastFocusableElement = focusableElements[focusableElements.length - 1]
		Menu.openBtn.addEventListener('click', e => Menu.openMenu(e))
		Menu.closeBtn.addEventListener('click', e => Menu.closeMenu(e))
		Menu.menuElement.addEventListener('keydown', e => Menu.handleKeyDown(e))
	}

	static handleKeyDown(e: KeyboardEvent) {
		if (e.code === 'Escape') Menu.closeMenu()
		else if (e.code === 'Tab') {
			if (e.shiftKey && document.activeElement === Menu.firstFocusableElement) {
				Menu.lastFocusableElement.focus()
				e.preventDefault()
			} else if (document.activeElement === Menu.lastFocusableElement) {
				Menu.firstFocusableElement.focus()
				e.preventDefault()
			}
		}
	}

	static openMenu(e: MouseEvent) {
		e.preventDefault()
		Menu.menuElement.style.setProperty('display', 'flex')
		Menu.menuElement.classList.remove('nav-closed')
		Menu.menuElement.classList.add('nav-open')
		Menu.firstFocusableElement.focus()
		Menu.openBtn.setAttribute('aria-expanded', 'true')
		Menu.closeBtn.setAttribute('aria-expanded', 'true')
		document.body.style.setProperty('overflow-y', 'hidden')
	}

	static closeMenu(e?: MouseEvent) {
		e?.preventDefault()
		Menu.menuElement.style.setProperty('animation-play-state', 'running')
		Menu.menuElement.classList.remove('nav-open')
		Menu.menuElement.classList.add('nav-closed')
		Menu.openBtn.setAttribute('aria-expanded', 'false')
		Menu.closeBtn.setAttribute('aria-expanded', 'false')
		Menu.openBtn.focus()
		document.body.style.setProperty('overflow-y', 'auto')
	}
}
