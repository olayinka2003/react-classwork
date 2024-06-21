import {React, useContext} from 'react'
import { Themecontext } from './Themeprovider'

export const Themetogglebutton = () => {
    const { theme, toggleTheme } = useContext(Themecontext);

    return (
        <>
    <button onClick={toggleTheme}>
        Toggle to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
    <p>{theme}</p>
    </>
);

}
 