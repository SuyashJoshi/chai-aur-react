/* The below code in the function customRender is having the problem
    We will have to set the attributes again and again.
    To mitigate it, we will write a new function and in that we will try the loop based operation. */

// function customRender(reactElement, container)
// {
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)

//     container.appendChild(domElement)
// }

//Version 2 with loop to set attributes
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

function customRender(reactElement, container)
{
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google.'
}

//Now similar to the other React Library where we were grabbing the root element. We are doing the same in our custom react.

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);