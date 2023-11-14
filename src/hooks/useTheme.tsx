import { useContext } from 'react'
import { ThemeContext } from '@/context/themeContext'

export function useTheme() {
  const { isDark, onToggleTheme } = useContext(ThemeContext)

  return {
    isDark,
    onToggleTheme,
  }
}
