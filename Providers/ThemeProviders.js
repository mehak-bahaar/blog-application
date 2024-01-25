'use client'
import React, { useContext } from 'react'
import { ThemeContext } from "@/Context/ThemeContext";
const ThemeProviders = ({children}) => {
      const { isDark, setIsDark, theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      {children}
    </div>
  )
}

export default ThemeProviders
