# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  It is the element that was activated, interacted with or clicked on.

- What is the affect of setting an element to `display: none`?
  The element will not appear on the page; it acts as if they're not even on the page. It will still take the height and width of the page, but it will not be visible.

- What does the `element.matches()` method take as an argument and what does it return?
  Argument - CSS Selectors
  Return - a boolean if the Element matches the selector

- How can you retrieve the value of an element's attribute?
  .getAttribute();

- At what steps of the solution would it be helpful to log things to the console?
  Every addition to the code that could possibly break.

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  In order to navigate to that tab, you could use event listeners to each of the tabs and remove the active attribute in order to hide the tab again without using event delegation.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  You would need to add event listeners to the entire page and each tab to listen for an interaction on the tabs and change the classes for both the tab and view window.

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
