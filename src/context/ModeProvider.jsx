import { useState } from 'react';
import ModeContext from './ModeContext';

const ModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)
    const value = {darkMode, setDarkMode}
  return (
    <ModeContext.Provider value={value}>
      <div className={`${darkMode && 'bg-oxfordBlue text-light'} transition delay-300 duration-100 ease-in-out`}>
        {children}
      </div>
    </ModeContext.Provider>
  )
}

export default ModeProvider
