import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

export const ThemeContext = createContext(
  {} as { isDark: boolean; onToggleTheme: () => void },
)

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    localStorage.getItem('isDark') ? setIsDark(true) : setIsDark(false)
  }, [])

  function onToggleTheme() {
    if (localStorage.getItem('isDark')) {
      localStorage.removeItem('isDark')
      setIsDark(false)
    } else {
      localStorage.setItem('isDark', JSON.stringify(true))
      setIsDark(true)
    }
  }

  return (
    <ThemeContext.Provider value={{ isDark, onToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const { isDark, onToggleTheme } = useContext(ThemeContext)

  return {
    isDark,
    onToggleTheme,
  }
}
