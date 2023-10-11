import { useState } from 'react'
import reactLogo from './assets/buddha.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRouter from './Components/Router/Router.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainRouter />
    </>
  )
}

export default App
