import React, { useState } from 'react'
import Section from '../components/Section'
import ContactForm, { ContactFormData } from '../components/ContactForm'
import Modal from '../components/Modal'

const Contact: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState<ContactFormData | null>(null)

  const handleSubmit = (data: ContactFormData) => {
    setSubmitted(data)
    setModalOpen(true)
  }

  return (
    <div>
      <Section title="Contact">
        <ContactForm onSubmit={handleSubmit} />
      </Section>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Message sent">
        {submitted && (
          <div>
            <p>
              <strong>Name:</strong> {submitted.name}
            </p>
            <p>
              <strong>Message:</strong>
            </p>
            <p>{submitted.message}</p>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Contact
