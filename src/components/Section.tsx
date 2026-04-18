import React from 'react'

interface Props {
  title: string
  children: React.ReactNode
}

const Section: React.FC<Props> = ({ title, children }) => (
  <section className="section">
    <div className="container">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  </section>
)

export default Section
