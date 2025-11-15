

In this session, we have learned, how to create custom react library, where we have created the customReact. 

-> how to render the element using the custom method to render "customRender()"
function customRender(reactElement, container)
{
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop == 'children') continue;
        domElement.setAttribute(prop, reactElement,props[prop])
    }

    container.appendChild(domElement) 
}



-> how we can append the main container (where we are having the root element) with the custom react element?
    container.appendChild(domElement) 

-> how we can use the React.createElement() method and how it is different from the customRender() method?
const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  "click me to Visit google",
  // we can also add more children like below, but it will be addded as Evaluated Expression
  anotherElement
)

How we can create a custom element and how to use it with React.createElement.
const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Visit google</a>
)