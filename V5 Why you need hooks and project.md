

In this session, I have learned learned why the hooks are needed and why we are calling react as react. Hooks are used for updating the data on the page

The hooks are present in the React core library and in that React->src-> (We can find hooks in this place).

I have used the (useState and useEffect) hook and they are helping us to do the reactive changes at all the places where we are using the variable.

I have also learned that we are calling React as react because it help the webpage to react to the changes done to one variable and reflect that change at all the places in the web page without using document.getelementbyid.

Note: While doing the assignment:
We have also learned how we can use useEffect hook to retrieve the updated value of the counter and how to put some logic in it.




Below the code that I have learned.

// Note: We have not imported the React, but still the JSX code works because bable transpiler automatically imports the React in the background when it encounters JSX code.

// What is babel transpiler? Bable is a JavaScript transpiler that converts modern JavaScript code(ES6 and beyond) into a backword-compatible version of JavaScript that can run in older browsers or environments that do not support the latest JavaScript features.

import { useState, useEffect } from 'react' //We need to import useState from react to use state in functional component.

import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'

import './App.css'



function App() {



&nbsp; //let counter = 5



&nbsp; // function addValue() {

&nbsp; //   console.log("Button Clicked: {counter}");

&nbsp; //   counter = counter + 1;

&nbsp; // }



&nbsp; //Note: We can write the above function as arrow function also.

const addValue = () => {

&nbsp; 

&nbsp; setCounter(counter + 1); // we are using the setCounter function to update the counter state variable.

&nbsp; //console.log("value added: ", counter); // here we are not getting the updated valiue of the counter because the state update is asunchronous.

&nbsp; //To get the update value, we can use useEffect hook to track the changes in counter variable.



&nbsp; //Now, to get the



&nbsp; //counter = counter + 1;

}



const removeValue = () => {

&nbsp; 

&nbsp; setCounter(counter - 1); // we are using the set Counter function to update the counter state variable.

&nbsp; //console.log("value removed: ", counter); // here we are not getting the updated valiue of the counter because the state update is asunchronous.

&nbsp;   //To get the update value, we can use useEffect hook to track the changes in counter variable.

}



//Note: If we do not use the hook, then we will observe that even after clicking the button, the UI will not re-render to reflect the updated counter value.

//This is because React done not track the changes made to normal variables. To make React track the changes, we need to use the useState hook.

//Using useState hook



// const \[counter, setCounter] = useState(5);

let \[counter, setCounter] = useState(5); // we will have to use let here because we are updating the counter variable. We cannot use const here because const variable cannot be reassigned.

//Here, counter is the state variable, and setCounter is the function to update the state variable. useState(5) initializes the counter with 5.





// Use the useEffect hook to track the changes in counter variable and log the updated value.

useEffect(() => {

&nbsp; console.log("Updated counter value: ", counter);

&nbsp; if(counter > 20){

&nbsp;   alert("Counter exceeded 20")

&nbsp;   setCounter(20); // reset the counter to 20 if it exceeds 20

&nbsp; }

&nbsp; if(counter < 0){

&nbsp;   alert("Counter cannot be negative")

&nbsp;   setCounter(0); // reset the counter to 0 if it goes negative

&nbsp; }

})



&nbsp; return (

&nbsp;   <>

&nbsp;     <h1>Chai or React</h1>

&nbsp;     <h2>Counter Value : {counter}</h2>



&nbsp;     <button onClick={addValue}>Add Value {counter}</button>

&nbsp;     <br />

&nbsp;     <button onClick={removeValue}>Remove Value {counter}</button>

&nbsp;     <p>footer: {counter}</p>

&nbsp;   </>

&nbsp; )

}



export default App





