import { useState } from 'react'
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
