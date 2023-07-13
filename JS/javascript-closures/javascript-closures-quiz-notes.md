# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  Scope is determined at the time of the function creation; the placement of functions and the code blocks determines the scope.

- What allows JavaScript functions to "remember" variables from their surroundings?
  Closures allow functions to retain references to variables from their lexical environment, even after the outer function is done executing.

- What values does a closure contain?
  The closure is a collection of all the variables in scope at the time of creation of the function.

- When is a closure created?
  A closure is created whenever a function is defined inside of another function.

- How can you tell if a function will be created with a closure?
  If the function references veriables from its outer scope.

- In React, what is one important case where you need to know if a closure was created?
  When working with event handlers and callbacks; since event handlers are defined inside components but executed outside of them, closures help with storing the information for use inside of the component.

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
