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
