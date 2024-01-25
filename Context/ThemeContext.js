'use client'
import { createContext, useState } from "react";

export const ThemeContext = createContext()
const getFromLocalStorage = ()=>{
    if (typeof window !== 'undefined') {
      const value = localStorage.getItem("isDark");
      return value || 'false';
    }
    }
export const ThemeContextProvider = ({children}) =>{
    
    const [theme, setTheme] = useState('light')
        const [isDark, setIsDark] = useState(()=>{
             const storedValue = getFromLocalStorage();
             const theme = storedValue? 'dark' : 'light'
             setTheme(theme)
             return  getFromLocalStorage()
            });
        
    
    
    return <ThemeContext.Provider value ={{isDark, setIsDark, theme, setTheme}}>{children}</ThemeContext.Provider>
}