import React, { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'ocean'

interface ThemeContextValue {
  theme: Theme
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    return (stored as Theme) || 'light'
  })

  useEffect(() => {
    document.documentElement.classList.remove('theme-dark', 'theme-ocean')
    if (theme === 'dark') document.documentElement.classList.add('theme-dark')
    if (theme === 'ocean') document.documentElement.classList.add('theme-ocean')
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

export default ThemeContext
