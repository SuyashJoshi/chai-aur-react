import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  )
}

const anotherUser = "Chai aur react user"

// below is an example of creating a custom element.
const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Visit google</a>
)

// Below is an example of creating the element using React.createElement
// The transpiler Babel injects the React.createElement code for the JSX code.
const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  "click me to Visit google",
  // we can also add more children like below, but it will be addded as Evaluated Expression
  anotherElement
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  
  //Note: if we are not using StrictMode, we can directly render App like below
  //App()
  // Or we can call our own component
  // MyApp()\

  ///We can also render the elements directly
  //anotherElement

  // we can rember the reactElement created using React.createElement function
  reactElement
)
