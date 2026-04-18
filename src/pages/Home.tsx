import React from 'react'
import Section from '../components/Section'
import Card from '../components/Card'

const Home: React.FC = () => {
  return (
    <div>
      <Section title="Welcome">
        <p>Welcome to my personal website. This is the home page.</p>
      </Section>

      <Section title="Highlights">
        <div className="grid">
          <Card title="Projects">
            <p>Short description of projects and highlights.</p>
          </Card>
          <Card title="Skills">
            <p>React, TypeScript, Vite, CSS</p>
          </Card>
          <Card title="Contact">
            <p>Get in touch via the Contact page.</p>
          </Card>
        </div>
      </Section>
    </div>
  )
}

export default Home
