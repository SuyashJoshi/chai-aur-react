

// In this session, I have created a new project to showcase the code for background color changes.

// 1. I have created new project using Vite: "04bgChanger” and put the project name as "04bgChanger".

// I have installed Tailwind CSS in this project by following the official documentation of Tailwind CSS.
// Then in the App.jsx file, I have created 3 buttons and used useState hook to change the background color of the entire screen when any button is clicked.
// Note: In the onClick event handler of the button, I had to use arrow function to pass the argument to the setColor function. This is because if I directly call the setColor function with argument, it will be called immediately during the render phase, causing an infinite loop of re-render.

// By default the background color will be olive because I have initialized the color state variable with 'olive' value in the useState hook.