# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The most deeply nested element that caused the event is called a target element, accessible as event.target.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Through bubbling: When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

- What DOM element property tells you what type of element it is?
  event.tagName

- What does the `element.closest()` method take as its argument and what does it return?
  argument: the class/id you are trying to find
  return: the closest item from the relative element

- How can you remove an element from the DOM?
  .remove();

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  Using event event lister to the parent element and it'll catch any click events on the child elements

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
