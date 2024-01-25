'use client'
import React, { useContext, useState } from 'react'
import styles from './ThemeToggle.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from '@/Context/ThemeContext';

const ThemeToggle = () => {
  const {isDark, setIsDark, theme, setTheme} = useContext(ThemeContext);
  const onClick = () =>{
    console.log(isDark)
    console.log(theme)
    if(isDark){
      setTheme('dark')
    } else{
      setTheme('light')
    }
    if(theme=='light'){
      setIsDark(false)
    } else{
      setIsDark(true)
    }
    setIsDark(!isDark)

  }
  return (
    <div className={styles.container}>
      {theme == "light" ? (
        <FontAwesomeIcon
          icon={faMoon}
          size="lg"
          className={styles.moon}
          onClick={onClick}
        />
      ) : (
        <FontAwesomeIcon
          icon={faSun}
          size="lg"
          className={styles.sun}
          onClick={onClick}
        />
      )}
    </div>
  );
}

export default ThemeToggle
