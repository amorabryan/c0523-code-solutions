# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  They are used to handle asynchronus operations and make asynchronous code look more synchronous and readable.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  `Promise.then` and `Promise.catch` rely on Promises; `async` and `await` lets you write more asynchronous code

- When do you use `async`?
  You use async when you want to define functions for use in asynchronous functions.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You use `await` when you wait for a Promise to settle inside an `async` function. If you `await` a synchronous function, the execution won't actually be paused because there is no Promise involved.

- How do you handle errors with `await`?
  Use a `try/catch` block. Wrap the `await` statement inside the `try` block, and if the Promise is rejected, the `catch` block will allow you to handle the error.

- What do `try`, `catch` and `throw` do? When do you use them?
  `Try`: encloses a block of code that might throw an exception.
  `Catch`: handles the error
  `Throw`: manually throw an exception or error
  Use them during error handling.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  The code will continue to execute, but there will be no error capture.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await; the code is easier to read and follow.

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
