# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  When the component gets successfully inserted into the DOM and becomes visible.

- What is a React Effect?
  They are side effects caused by rendering; they allow the user to perform actions like fetching data, updating the DOM, or subscribing to events.

- When should you use an Effect and when should you not use an Effect?
  Effects should be used when you need to perform side effects that cant be handled synchronously during rendering.
  Effects should not be used if you need to update a components' state directly during a prop change.

- When do Effects run?
  Effects run when the component completely renders. It runs after the initial render and after every re-render.

- What function is used to declare an Effect?
  the `useEffect()` function.

- What are Effect dependencies and how do you declare them?
  They are an optional array of values that you can add as the second argument in `useEffect()`. The dependencies define values that the effect depends on. To declare, after the callback function, you can pass an array of values set for the dependencies:
  `useEffect(callback function, [dependency1, dependency2])`

- Why would you want to clean up from an Effect?
  Cleaning up side effects in React is a way of stopping side effects that do not need to be executed anymore

- How do you clean up from an Effect?
  you can return another callback function to clean up the requests made by the useEffect function, commonly for subscriptions and fetch requests.

- When does the cleanup function run?
  When the component is unmounted from the DOM and before the next execution of the effect if the dependencies change.

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
