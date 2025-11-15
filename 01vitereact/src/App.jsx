// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Chai from './chai.jsx';

function App() {
  // const [count, setCount] = useState(0)

  const username = "Suyash Joshi";

  return (
    
    <>
      <Chai />
      {/* We can add the username variable value inside JSX using {} */}
      {/* in the belo code {username} is known as expression and here it is evaluated expression. */}
      {/* here we are calling it as evaluated expression because the final outpput of the javascript will go at this place. */}
      <h1>Chai aur React with vite! | {username}</h1>
    </>
    
  )
}

export default App
