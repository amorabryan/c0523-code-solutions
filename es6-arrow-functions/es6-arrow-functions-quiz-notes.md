# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  const functionName = (parameters) => {
  // function body
  };

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  It automatically returns the expression following the arrow

- When using _concise body syntax_, how do you return an object literal?
  Wrap the object literal in parentheses to distinguish it from the function body's curly braces.

- In the expression
  `js
    foo(() => 42);
    `

  - Identify the arrow function
    () => 42

  - How many arguments does the arrow function take?
    No arguments (the parentheses is empty)

  - What value does it return?
    Returns the value 42

  - How many arguments are passed to the function `foo`?
    The function is called with one argument, the arrow function

  - What type of argument is passed to the function `foo`?
    The type of argument passed to the function foo is a function

- In the expression
  `` js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
     `` - Identify the arrow function
  (y) => {console.log(`4y = ${4 * y}`); }

      - How many arguments does the arrow function take?

  One argument, `y`

      - What value does it return?

  It returns undefined because the function only has a console.log statement.

      - How many arguments are passed to the function `bar`?

  One argument, the arrow function

      - What type of argument is passed to the function `bar`?

  The type of argument passed is a function

      - When does the arrow function's code get executed?

  The arrow functions code is executed every time the bar() function is called.

- How does the value of `this` differ between standard functions and arrow functions?
  In arrow functions, "this" is lexically scoped and retains the value of the enclosing scope. In standard functions, "this" is dynamically scoped and its value is determined by how the function is called.

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
