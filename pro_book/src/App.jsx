import React from 'react'
import './App.css'
import { AuthProvider } from './contexts/AuthContext.jsx'


import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

function App() {

  return (
    <AuthProvider>
      <>
        <Header />
        <Main />
      </>
    </AuthProvider>
  )
}

export default App
