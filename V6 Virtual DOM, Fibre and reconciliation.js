// In this session we are going to learn about Virtual DOM, Fiber and Reconcilation in React.js
// Virtual DOM is a concept where a virtual representation of the UI is kept in memory and synced with the real DOM by a library such as ReactDOM. This process is called reconciliation.
// Now the Virtual DOM allows React to do efficient updates to the real DOM by minimizing the number of changes that need to be made.
// Fiber is the new reconciliation engine in React 16. It is a reimplementation of the React core algorithm. The main goal of Fiber is to enable incremental rendering of the virtual DOM. This means that React can split the rendering work into smaller chunks and spread it out over multiple frames. This allows React to be more responsive and to handle animations and gestures more smoothly.
// Fiber also introduces the concept of priorities. This means that React can prioritize certain updates over others. For example, user interactions can be given a higher priority than background updates. This allows React to be more responsive to user input.
// Overall, Virtual DOM and Fiber are important concepts in React.js that help to improve the performance and responsiveness of React applications.

// So is the Virtual DOM not in use now and only fiber is used?
// No, the Virtual DOM is still in use in React.js. Fiber is just a new reconciliation engine that works with the Virtual DOM. The Virtual DOM is still used to represent the UI in memory, and Fiber is used to efficiently update the real DOM based on changes to the Virtual DOM.

// Why do we need reconciliation?
// Reconciliation is needed to ensure that the UI is always in sync with the underlying data. When the data changes, React needs to update the UI to reflect those changes. Reconciliation is the process of determining what changes need to be made to the UI based on changes to the data.
// Without reconciliation, React would have to re-render the entire UI every time the data changes. This would be inefficient and would lead to poor performance. Reconciliation allows React to only update the parts of the UI that have changed, which improves performance and responsiveness.

// How does reconciliation work?
// Reconciliation works by comparing the current Virtual DOM with the previous Virtual DOM. When a change is made to the data, React creates a new Virtual DOM that represents the updated UI. React then compares the new Virtual DOM with the previous Virtual DOM to determine what changes need to be made to the real DOM.
// React uses a diffing algorithm to compare the two Virtual DOMs. The diffing algorithm looks for differences between the two Virtual DOMs and generates a list of changes that need to be made to the real DOM. React then applies those changes to the real DOM in an efficient manner.
// Fiber allows React to break down the reconciliation process into smaller chunks, which can be spread out over multiple frames. This allows React to be more responsive and to handle animations and gestures more smoothly.

// Note: This is just a brief overview of Virtual DOM, Fiber and reconciliation in React.js. There is much more to learn about these concepts, and I encourage you to explore them further on your own.

// primary goal of Fiber is to enable React to talke advantage of scheduling to split rendering work into smaller units and spread it out over multiple frames, allowing for more responsive user interfaces.
// what do you mean by multiple frames?
// In the context of web development, a frame refers to a single update cycle of the browser's rendering engine. The browser typically aims to render at a rate of 60 frames per second (fps), which means it has about 16.67 milliseconds to complete all the work needed to render a frame.
// When we say that Fiber allows React to spread rendering work out over multiple frames, we mean that React can break down the work of updating the UI into smaller chunks that can be completed within the time available for each frame. This allows React to avoid blocking the main thread for long periods of time, which can lead to janky or unresponsive user interfaces.
// By spreading out the work over multiple frames, React can ensure that it remains responsive to user input and can handle animations and gestures smoothly. This is especially important for complex applications that may have a lot of UI elements to update or that need to respond quickly to user interactions.


//Note: Reconcilation is an algorithm begind what is popularly understood as "Virtual DOM" in react.

