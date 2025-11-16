// Note: We have not imported the React, but still the JSX code works because bable transpiler automatically imports the React in the background when it encounters JSX code.
// What is babel transpiler? Bable is a JavaScript transpiler that converts modern JavaScript code(ES6 and beyond) into a backword-compatible version of JavaScript that can run in older browsers or environments that do not support the latest JavaScript features.
import { useState, useEffect } from 'react' //We need to import useState from react to use state in functional component.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //let counter = 5

  // function addValue() {
  //   console.log("Button Clicked: {counter}");
  //   counter = counter + 1;
  // }

  //Note: We can write the above function as arrow function also.
const addValue = () => {
  
  setCounter(counter + 1); // we are using the setCounter function to update the counter state variable.
  //console.log("value added: ", counter); // here we are not getting the updated valiue of the counter because the state update is asunchronous.
  //To get the update value, we can use useEffect hook to track the changes in counter variable.

  //Now, to get the

  //counter = counter + 1;
}

const removeValue = () => {
  
  setCounter(counter - 1); // we are using the set Counter function to update the counter state variable.
  //console.log("value removed: ", counter); // here we are not getting the updated valiue of the counter because the state update is asunchronous.
    //To get the update value, we can use useEffect hook to track the changes in counter variable.
}

//Note: If we do not use the hook, then we will observe that even after clicking the button, the UI will not re-render to reflect the updated counter value.
//This is because React done not track the changes made to normal variables. To make React track the changes, we need to use the useState hook.
//Using useState hook

// const [counter, setCounter] = useState(5);
let [counter, setCounter] = useState(5); // we will have to use let here because we are updating the counter variable. We cannot use const here because const variable cannot be reassigned.
//Here, counter is the state variable, and setCounter is the function to update the state variable. useState(5) initializes the counter with 5.


// Use the useEffect hook to track the changes in counter variable and log the updated value.
useEffect(() => {
  console.log("Updated counter value: ", counter);
  if(counter > 20){
    alert("Counter exceeded 20")
    setCounter(20); // reset the counter to 20 if it exceeds 20
  }
  if(counter < 0){
    alert("Counter cannot be negative")
    setCounter(0); // reset the counter to 0 if it goes negative
  }
})

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
