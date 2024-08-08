import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Hello World</h1>
    <Card username="About HP"/>
    <Card username="About acer" />
    <Card username="About Dell"/>
    </>
  )
}

export default App
