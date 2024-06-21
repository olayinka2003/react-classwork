import {React, useContext} from 'react'
import { Themecontext } from './Themeprovider'

export const CurrentTheme = () => {
    const { theme } = useContext(Themecontext);
  return (
   
         
    <div>
         <p>Current Theme: {theme}</p>

    </div>
  )
}
