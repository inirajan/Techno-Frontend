## React

- A JavaScript library for building user interfaces.
- Official website: [https://reactjs.org/](https://reactjs.org/)
- React is libaray for web and natvie interface development.
- It allows developers to create reusable UI components.
- Used to bild single-page applications (SPAs) with dynamic and interactive user interfaces.]
- Built by Facebook and maintained by a community of developers.
- React uses a virtual DOM to efficiently update and render components.
- It follows a component-based architecture, where the UI is divided into small, reusable components.
- React supports both class-based and functional components.
- It uses JSX (JavaScript XML) syntax to define components and their structure.
- React has a rich ecosystem of libraries and tools for state management, routing, and testing.

## Virtual DOM

- Uses virtual DOM for rendering.
- Virtual DOM is a lightweight copy of the actual DOM.
- Whenever state change occurs:
  -React updates the virtual DOM first.
- Then it compares the virtual DOM with the previous actual DOM (Diffing algorithm).
- Update the only changed parts in the actual DOM (Reconciliation).
- This process improves performance and efficiency.

## components

- UI block, reusable code.
- Functional (stateless) or class-based(Stateful).
- Functional components can be made stateful using hooks.
- Example of a functional component:

  ```jsx
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  ```

- Example of a class-based component:

  ```jsx
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
  ```

- Statless Components: UI cannot be updated, state can be updated.
- Stateful Components: UI can be updated, state can be updated.
  Components can have its own properties (props) and state.
- A component must alwaus return one and only one parent element.
- Example:

  ```jsx
  function App() {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
  ```

## Props

- Props (short for properties) are used to pass data from parent to child components.
- Props are read-only and cannot be modified by the child component.
- Example:
  ```jsx
  function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
  }
  ```

## JSX

- JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.
- JSX is used to define the structure and appearance of React components.
- Js + HTML
- JSX code is transpiled into regular JavaScript using tools like Babel.
- JSX allows you to embed expressions and JavaScript logic within the markup.
- JSX elements are represented as objects in JavaScript.
- Syntax:

  ```jsx
  const element = <h1>Hello, world!</h1>;
  ```

- Example:
  ```jsx
  function App() {
    const name = "John";
    return <h1>Hello, {name}!</h1>;
  }
  ```

## State

- State is a built-in object that allows components to manage their own data.
- State can be modified using the `setState` method in class components or the `useState` hook in functional components.
  eg:

  ```jsx
  class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    increment = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.increment}>Increment</button>
        </div>
      );
    }
  }
  ```

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

## Link, route, NavLink, Navigate, browserRouter, Routes,

- `Link`: Used to create navigational links between different routes.
- `NavLink`: Similar to `Link`, but provides additional styling options for active links.
- `Route`: Used to define a route and specify the component to render for that route.
- `Navigate`: Used to programmatically navigate to a different route.
- `BrowserRouter`: A router component that uses the HTML5 history API to keep the UI in sync with the URL.
- `HashRouter`: A router component that uses the URL hash to keep the UI in sync with the URL.
- `Routes`: A container component that holds all the `Route` components and renders the matching route based on the URL.
- Example:

  ```jsx
  import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
    Navigate,
  } from "react-router-dom";

  function App() {
    return (
      <Router>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    );
  }
  ```

- In this example, we use `NavLink` for navigation, define routes using `Route`, and use `Navigate` to redirect any unknown routes to the home page.

## react-icon

- A popular library for adding icons to React applications.
- Official website: [https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)
- It provides a wide range of icons from various icon libraries, such as Font Awesome, Material Design, and more.
- To install react-icons, use the following command:

  ```bash
  npm install react-icons
  ```

- Example of using react-icons:

  ```jsx
  import { FaBeer } from "react-icons/fa";
  function App() {
    return (
      <div>
        <h1>Welcome to React Icons!</h1>
        <FaBeer />
      </div>
    );
  }
  ```
