## React

- A JavaScript library for building user interfaces.
- Official website: [https://reactjs.org/](https://reactjs.org/)
- React is libaray

## components

- Components are the building blocks of a React application.
- They can be functional or class-based.

## Props

- Props (short for properties) are used to pass data from parent to child components.
- Props are read-only and cannot be modified by the child component.
- Example:
  ```jsx
  function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
  }
  ```

## State

- State is a built-in object that allows components to manage their own data.
- State can be modified using the `setState` method in class components or the `useState` hook in functional components.

## Hooks

- Hooks are functions that let you use state and other React features in functional components.
- Commonly used hooks include `useState`, `useEffect`, and `useContext`.
- Example:

  ````jsx
  import React, { useState, useEffect } from 'react';

  function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  ```State and effect hooks are examples of how hooks can be used to manage state and side effects in functional components.
  ````

## useState Hook

- The `useState` hook is used to add state to functional components.
- it returns an array with two elements: the current state value and a function to update it.

- it takes the initial state as an argument.
- first element: current state value.
- second element: function to update the state.

- Syntax:

  ```jsx
  const [state, setState] = useState(initialState);
  ```

- Example:

  ````jsx
  import React, { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  ``` maintained by Facebook and a community of individual developers and companies.
  ````

## useEffect Hook

- The `useEffect` hook is used to perform side effects in functional components.
- It takes a function ( it is 1st parameter) as an argument that contains the side-effect logic.
- second argument (optional): array of dependencies that determine when the effect should re-run.
- If the dependencies change, the effect will re-run.
- If no dependencies are provided, the effect will run after every render.
- If an empty array is provided, the effect will run only once after the initial render.
- If an array of dependencies is provided, the effect will run only when those dependencies change.

- Syntax:

  ```jsx
  useEffect(() => {
    // Side-effect logic here
  }, [dependencies]);
  ```

- Example:

  ```jsx
  import React, { useState, useEffect } from "react";

  function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
  ```

## useRef Hook

- The `useRef` hook is used to create a mutable reference that persists across renders.
- It returns a ref object with a `current` property that can be used to store a value.
- The ref object can be used to access DOM elements or store any mutable value.
- Syntax:

  ```jsx
  const refContainer = useRef(initialValue);
  ```

- Example:

  ```jsx
  import React, { useRef } from "react";
  function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }
  ```

- Example usage: managing focus, text selection, or integrating with third-party libraries that require direct DOM manipulation.

## Routing

- React Router is a popular library for handling routing in React applications.
- It is Url end point
- /: Home page, /about: About page, /contact: Contact page
- Used to define which page or component to show or load based on the URL path.
- React Router provides components like `BrowserRouter`, `Route`, `Switch`, and `Link` to manage routing in a React application.

## Installation

- To install React Router Dom, use the following command:

  ```bash
  npm install react-router-dom

  ```

## React Router

- React Router is a library for routing in React applications.
- Official website: [https://reactrouter.com/](https://reactrouter.com/)
- It allows you to define routes and navigate between different components based on the URL.
  npm install react-router

- Syntax:
  ```jsx
  <Router>
    <Switch>
      <Route path="/path" component={Component} />
    </Switch>
  </Router>
  ```

## React Router Dom

- React Router Dom is a package that provides routing capabilities for React applications.
- Official website: [https://reactrouter.com/](https://reactrouter.com/)
- It allows you to define routes and navigate between different components based on the URL.
- Syntax:

  ```jsx
  <Router>
    <Switch>
      <Route path="/path" component={Component} />
    </Switch>
  </Router>
  ```

- Example:

  ```jsx
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
  import Home from "./Home";
  import About from "./About";
  import Contact from "./Contact";

  function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
  ```

  ## Grouping Routes

- You can group routes using the `Route` component to create nested routes.
-
- Example:

  ```jsx
  <Router>
  <route path="dashboard">

    <Route path="profile" component={Profile} />
    <Route path="settings" component={Settings} />
  </Router>

  ```

  ## Outlet

- The `Outlet` component is used to render child routes in a parent route.
- It acts as a placeholder for the child routes to be rendered.
- it will be used to make fixed layout with changing content based on the route.
- Syntax:

  ```jsx
  <Outlet />
  ```

- Example:

  ```jsx
  import { Outlet } from "react-router-dom";

  function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Outlet />
      </div>
    );
  }
  ```
