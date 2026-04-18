import React from 'react'
import { useTheme, Theme } from '../ThemeContext'

const options: Theme[] = ['light', 'dark', 'ocean']

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="theme-switcher">
      {options.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={t === theme ? 'theme-btn active' : 'theme-btn'}
          aria-pressed={t === theme}
        >
          {t}
        </button>
      ))}
    </div>
  )
}

export default ThemeSwitcher
