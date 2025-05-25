import { FormEvent, useState } from 'react'
import { RevealOnScroll } from '../RevealOnScroll'
import emailjs from 'emailjs-com'
import * as Yup from 'yup'
import { Icon } from '@iconify/react/dist/iconify.js'
import { toast } from 'react-toastify'

export const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	function resetForm() {
		setFormData({ name: '', email: '', message: '' })
	}

	const [formError, setFormError] = useState('')

	const [isSendingEmail, setIsSendingEmail] = useState(false)

	const schema = Yup.object().shape({
		name: Yup.string().required(),
		email: Yup.string().email().required(),
		message: Yup.string()
			.required()
			.min(11, 'Message must contain at least 11 characters'),
	})

	const disableSubmission =
		isSendingEmail || Object.values(formData).some((field) => !field)

	async function handleSubmit(e: FormEvent) {
		setFormError('')
		e.preventDefault()

		try {
			await schema.validate(formData)
		} catch (error) {
			setFormError(error?.message || 'Something went wrong')
			return
		}

		const { VITE_APP_SERVICE_ID, VITE_APP_TEMPLATE_ID, VITE_APP_PUBLIC_KEY } =
			import.meta.env

		setIsSendingEmail(true)

		try {
			await emailjs.sendForm(
				VITE_APP_SERVICE_ID,
				VITE_APP_TEMPLATE_ID,
				e.target as HTMLFormElement,
				VITE_APP_PUBLIC_KEY
			)

			toast.success('Message Sent!', {
				autoClose: 3000,
			})
			resetForm()
		} catch (error) {
			toast.error('Oops! Something went wrong. Please try again', {
				autoClose: 3000,
			})
		} finally {
			setIsSendingEmail(false)
		}
	}

	return (
		<section
			id="contact"
			className="min-h-screen flex items-center justify-center py-20"
		>
			<RevealOnScroll>
				<div className="px-4 w-150">
					<h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
						Get in touch
					</h2>
					{formError && (
						<div className="text-red-600 text-sm mb-2">{formError}</div>
					)}
					<form
						className="space-y-6"
						onSubmit={handleSubmit}
					>
						<div className="relative">
							<input
								type="text"
								id="name"
								name="name"
								required
								placeholder="Name..."
								value={formData.name}
								onChange={(ev) =>
									setFormData({ ...formData, name: ev.target.value })
								}
								className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
							/>
						</div>

						<div className="relative">
							<input
								type="email"
								id="email"
								name="email"
								required
								value={formData.email}
								onChange={(ev) =>
									setFormData({ ...formData, email: ev.target.value })
								}
								placeholder="example@gmail.com"
								className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
							/>
						</div>

						<div className="relative">
							<textarea
								id="message"
								name="message"
								required
								rows={5}
								value={formData.message}
								onChange={(ev) =>
									setFormData({ ...formData, message: ev.target.value })
								}
								placeholder="Your message"
								className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
							/>
						</div>

						<button
							type="submit"
							disabled={disableSubmission}
							aria-disabled={disableSubmission}
							className="w-full cursor-pointer inline-flex justify-center items-center gap-2 bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:not-disabled:-translate-y-0.5 hover:not-disabled:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:cursor-not-allowed disabled:opacity-30"
						>
							Send Message
							{isSendingEmail && (
								<Icon
									icon="line-md:loading-twotone-loop"
									fontSize="18"
								/>
							)}
						</button>
					</form>
				</div>
			</RevealOnScroll>
		</section>
	)
}
