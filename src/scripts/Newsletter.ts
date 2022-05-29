import MicroModal from 'micromodal'

export default class Newsletter {
	static endPoint =
		'https://8bb72497.sibforms.com/serve/MUIEADyvPYf60YflDxW4RB4NxMQsmiYIZSrrZFweX_cTa8jjt5VYrlGygJQq4hjT923GQpiF601Ho8OMQbZkUfr18giW8EljUSn7ccl5iGmwiibg36DGYgTvCUojL1ztxzNO9ZzgEtgoIZBqn8Avbya2MbxZfX2LxSyahXnhGj7l9MGMMP_pxyKYExzzCMQGmzTin8jSLC_TVx7T?isAjax=1'

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
