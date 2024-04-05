import { useState } from 'react'
import './App.css'

import Header from './components/HomePage.jsx'
imort
import Main from './components/Main.jsx'
imort

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Main />
    </>
  )
}

export default App
