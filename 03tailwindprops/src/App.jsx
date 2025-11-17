import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let myArray = [1,2,3,4,5];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card productName='Apple Air Pods' someArr={myArray} price={1000}> </Card>

      <Card productName='Samsung Phone' someArr={myArray} price={4000}> </Card>

      {/* Suppose we have not given any product name, then we will get he product name as "No product name given" as we have set it as default value for the product. */}
      <Card someArr={myArray} price={4000}> </Card>
          
    </>
  )
}

export default App