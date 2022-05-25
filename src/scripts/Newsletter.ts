import MicroModal from 'micromodal'

export default class Newsletter {
	static endPoint =
		'https://0b252bd2.sibforms.com/serve/MUIEAPETmDG0I0c7TpXMSu8FGnlhjbEBdXnKWOHiZ5ONq44yhGToZkR0UIJs467qo9JWDPF4szw0CuiuHzOaBBwmoi7Lh4Ybd9KL9fvZ86bNDQVJX8igXwbRFlPF4Q3xevkV5RJpVL1jCUtcx-VnGKv82Ffl-Gi-QPficBqNoWroLyUSTcJYkKsdj-MDpVmaC0JK_NO9g3ZfwiV4?isAjax=1'

	static init() {
		const form = document.querySelector<HTMLFormElement>('#newsletter-js')
		form?.addEventListener('submit', this.onSubmit)
		MicroModal.init()
	}

	static async onSubmit(e: SubmitEvent) {
		e.preventDefault()
		const input = document.querySelector<HTMLInputElement>('#newsletterInput-js')!
		console.log(input?.value)
		const formData = new FormData()
		formData.append('EMAIL', input.value)
		try {
			const res = await fetch(Newsletter.endPoint, {
				body: formData,
				method: 'POST',
			})
			const json = await res.json()
			if (!json?.success) throw Error
			MicroModal.show('modal-success')
		} catch (error) {
			MicroModal.show('modal-error')
		}
	}
}
