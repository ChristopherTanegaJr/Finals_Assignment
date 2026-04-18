
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const Header: React.FC = () => (
  <header className="site-header">
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h1>My Personal Website</h1>
        <p className="tagline">A small React + TypeScript site for finals</p>
      </div>
      <ThemeSwitcher />
    </div>
  </header>
)

export default Header
