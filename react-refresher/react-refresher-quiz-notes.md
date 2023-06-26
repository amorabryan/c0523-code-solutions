# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  Componenets are like JavaScript functions: they accept arbitrary inputs (called 'props') and return React elements describing what should appear on the screen.

1. Export the component (export default)
2. Define the function (function FunctionName() {}) - not camelCase, but with Bookcase for the name of the function to be read by JSX and React

- How do you use JSX in a React component?
  With JSX, an expression can be written using the syntax, { expression }.

- How do you declare the props a React component needs?
  You declare them by using them as parameters inside the Component. To access props, you need to use them as variables within the component.

- How do you pass props to a React component?
  To access props in a component, you can use them as attributes when rendering the component.

- How do you include JavaScript expressions in JSX?
  {} - e.g. const element = <img src={user.avatarUrl}></img>;

- What are React hooks and what are the three "Rules of Hooks"?
  They are functions that allow you to use state and other React features in functional components; they provide a way to add and manage stateful behavior in React components without the need for class components. Hooks should only be called at the top level of a function component or from other custom hooks and should be called from within React functional components, not JavaScript functions.

- How do you manage state in a React component?

1. The state variable is updated with the new value you pass to the setter function.
2. React schedules a re-render of the component that uses the state, ensuring that the component reflects the updated state.

- How do you handle events in React?
  Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

React events are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.

- How do you let a parent component know that an event happened?
  You create a child component with some function, then import the child component into the parent component. The props declared in the child component will be used in the parent component where the props will be defined. Once the event happens in the parent, the props will read the event and push the event through the child and back to the parent.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
