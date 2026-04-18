import React from 'react'
import Section from '../components/Section'
import Card from '../components/Card'

const About: React.FC = () => {
  return (
    <div>
      <Section title="About Me">
        <p>I am a student building a small React + TypeScript site.</p>
      </Section>

      <Section title="Background">
        <Card title="Education">
          <p>Computer Science student — learning modern web development.</p>
        </Card>
      </Section>
    </div>
  )
}

export default About
