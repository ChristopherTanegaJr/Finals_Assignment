import React from 'react'
import { useForm } from 'react-hook-form'

export interface ContactFormData {
  name: string
  message: string
}

interface Props {
  onSubmit: (data: ContactFormData) => void
}

const ContactForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>()

  const submit = async (data: ContactFormData) => {
    onSubmit(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="contact-form">
      <div>
        <label>Name</label>
        <input {...register('name', { required: 'Name is required' })} />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <div>
        <label>Message</label>
        <textarea {...register('message', { required: 'Message is required' })} />
        {errors.message && <p className="error">{errors.message.message}</p>}
      </div>

      <div>
        <button type="submit" disabled={isSubmitting} className="btn-primary">
          Send
        </button>
      </div>
    </form>
  )
}

export default ContactForm
