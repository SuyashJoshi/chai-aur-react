In the react app, we have a public folder and the important file in this is Index.html. (This is the main HTML page that will be loaded to the browser. As this is a single page, we call the apps created by react as SPA (Single page application).



2\. It is not necessary to name the file as index.js. we can rename it as any other file name. index.js is the default file name for this file.



3\. In this file, we have imported React and React DOM as these two libraries are used to manipulate DOM on WEB.

&nbsp;	-> React is the core foundational library. It will be used for getting foundational references.

&nbsp;	-> ReactDOM is react's implementation for web.

&nbsp;	-> React creates its own DOM.

&nbsp;	-> In ReactDOM, we have a method, "createRoot()" which gets the root element by id.

&nbsp;	-> it is not required to keep the name of root element id s "root" we can change it to any other name.

&nbsp;	-> Now the root variable in the index.js file will render the <App /> (Which is actually we are calling the App component using JSX.) in the index.html page root element.

&nbsp;	-> Note: Even if we remove the </React.StrictMode>, the App will still render. The StrictMode is primarily used for doing performance optimization while development.

4\. Note: In the Index.html, we are not using the <script> tag, and then also the index.js (which is a javascript file) is rendering. It is happening because in React we are having one more package called "**react-scripts**" (We can find it in the package.json)



5\. In **Vite** Project, we are not having the "**react-scripts**" in the package.json. But we are directly using <script> tag in Index.html and adding the javascript source.

**Best Practices:**


1. When we are creating the component, then the component name should start with Capital letter (It is the naming convention and Mandatory)

2\. The file name in which the component is been created also starts with the capital letter. (Note: It is not mandatory but it is a good practice)

3\. If we are returning the HTML from the component then the file type should be .JSX instead on .JS (Note: It is not mandatory, but it is a good practice)



