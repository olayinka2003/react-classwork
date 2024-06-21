import {React, createContext, useState} from 'react'
 const Themecontext = createContext()
 const Themeprovider = ({children}) => {
 const [theme, settheme] = useState('light')
 const toggleTheme = () => {
  settheme((prevTheme)=>prevTheme  === 'light'? 'dark' : 'light')
 }
  return (
   <Themecontext.Provider value={{theme, toggleTheme}}>
        {children}
   </Themecontext.Provider>
  )
}

export {Themeprovider, Themecontext}
