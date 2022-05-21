export default class Menu {
	private _openBtn: HTMLButtonElement
	private _closeBtn: HTMLButtonElement
	private _menu: HTMLElement
	private _firstFocusableElement: HTMLElement
	private _lastFocusableElement: HTMLElement

	constructor() {
		this._openBtn = document.querySelector<HTMLButtonElement>('#openBtn-js')!
		this._closeBtn = document.querySelector<HTMLButtonElement>('#closeBtn-js')!
		this._menu = document.querySelector<HTMLButtonElement>('#menu-principal')!
		const focusableElements = Array.from(
			this._menu.querySelectorAll<HTMLElement>(
				'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
			)
		)
		this._firstFocusableElement = focusableElements[0]
		this._lastFocusableElement = focusableElements[focusableElements.length - 1]
		console.log(this._firstFocusableElement)
		this._openBtn.addEventListener('click', e => this._open(e))
		this._closeBtn.addEventListener('click', e => this._close(e))
		this._menu.addEventListener('keydown', e => this._keyDown(e))
	}
	private _keyDown(e: KeyboardEvent) {
		if (e.code === 'Escape') this._close()
		else if (e.code === 'Tab') {
			if (e.shiftKey && document.activeElement === this._firstFocusableElement) {
				this._lastFocusableElement.focus()
				e.preventDefault()
			} else if (document.activeElement === this._lastFocusableElement) {
				this._firstFocusableElement.focus()
				e.preventDefault()
			}
		}
	}
	private _open(e: MouseEvent) {
		e.preventDefault()
		this._menu.style.setProperty('display', 'flex')
		this._menu.classList.remove('nav-closed')
		this._menu.classList.add('nav-open')
		this._firstFocusableElement.focus()
		this._openBtn.setAttribute('aria-expanded', 'true')
		this._closeBtn.setAttribute('aria-expanded', 'true')
		document.body.style.setProperty('overflow-y', 'hidden')
	}
	private _close(e?: MouseEvent) {
		e?.preventDefault()
		this._menu.style.setProperty('animation-play-state', 'running')
		this._menu.classList.remove('nav-open')
		this._menu.classList.add('nav-closed')
		this._openBtn.setAttribute('aria-expanded', 'false')
		this._closeBtn.setAttribute('aria-expanded', 'false')
		this._openBtn.focus()
		document.body.style.setProperty('overflow-y', 'auto')
	}
}
