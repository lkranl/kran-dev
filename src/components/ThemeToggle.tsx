import {useEffect, useState} from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function getTheme() {
  const theme = localStorage.getItem(STORAGE_KEY)
  if (theme === 'light' || theme === 'dark') return theme as Theme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getTheme())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const isDarkMode = theme === 'dark'
  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  
  return (
    <button
        type="button"
        onClick={toggleTheme}
        className="fixed z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary bottom-4 left-4 md:bottom-auto md:left-auto md:top-4 md:right-4"
        aria-label="Toggle theme"
        title={isDarkMode ? 'Light mode' : 'Dark mode'}
      >
        <svg className="w-5 h-5" aria-hidden="true">
          <use href={isDarkMode ? '/icons.svg#sun' : '/icons.svg#moon'} />
        </svg>
      </button>
  )
}