# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is React?
  It is a a development server that uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files.

- What is a React component?
  Componenets are like JavaScript functions: they accept arbitrary inputs (called 'props') and return React elements describing what should appear on the screen.

function Welcome(props) {
return <h1>Hello, {props.name}</h1>;
}

You can tell a React component because the function is defined with a capital case instead of a intial lowercase, used in JavaScript (e.g. welcome instead of Welcome). This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element.

- How do you mount a React app (root component) to the DOM?
  ReactDOM.render()

- What are some other popular frontend frameworks?
  Angular, Bootstrap, Ruby on Rails, Vue.js

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
