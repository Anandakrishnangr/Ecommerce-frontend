import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PublicLayout from './layout/publicLayout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <PublicLayout/>
    </>
  )
}

export default App
