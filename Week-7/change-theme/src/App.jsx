import { useState } from 'react'
import { ThemeContext } from './context.jsx';
import { ChildA } from './components/ChildA';
import './App.css'

function App() {
  const [Theme, setTheme] = useState('light');

  return (
    <div>
      <ThemeContext.Provider value={{Theme, setTheme}}>
        <div id='container' style={{backgroundColor :Theme ==='light' ? "beige" : "black" }}>
          <ChildA></ChildA>
        </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
