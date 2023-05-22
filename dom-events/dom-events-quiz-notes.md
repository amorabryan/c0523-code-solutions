# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  We log things into the console to help identify errors and find issues with the code because it can tell us in real time what type of error occurs. We can also output function calls, variable values, and other information to the console.

- What is the purpose of events and event handling?
  They enable interactivity on web pages. Events are actions that happen in the browser (e.g. clicking a button, typing on the keyboard), while event handling is the process of writing code to respond to these events (e.g. changing the color of a button when its clicked).

- Are all possible parameters required to use a JavaScript method or function?
  No, some parameters have default values and some are optional; it depends on the specific method or function.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  The 'addEventListenter()' method lets you set up a function to be called when a specific type of event occurs.

- What is a callback function?
  It is a function that is passed as an argument to another function that is meant to be called later.

- What object is passed into an event listener callback when the event fires?
  When an event fires, an object representing the event is passed into the event listener callback as an argument.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  It is a reference to the element that triggered the event. It can be used to determine which element on the page was clicked.
  To check what 'event.target' is, you can log it in the console from inside an event listener callback.

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

1. Both code snippets set up a 'click' event on an element
2. The first one specifies a function to be called when the event occurs
3. The second one immediately calls the 'handleClick' function and passes its return value as the callback. The 'handleClick' function is executed immediately, rather than waiting for the event to occur.

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
