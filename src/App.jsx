import { useState } from 'react'
import './App.css'

import Landing from './components/Landing'
import Thanks from './components/Thanks'

function App() {
  const [next, setNext] = useState(false)
  console.log('boton', next)
  return (
    <>
    {
      !next ?  
      <Landing next={next} setNext={setNext}/> :
      <Thanks />
    }
      
      
    </>
  )
}

export default App
