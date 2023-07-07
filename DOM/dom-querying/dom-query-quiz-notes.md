# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  We log things into the console to help identify errors and find issues with the code because it can tell us in real time what type of error occurs. We can also output function calls, variable values, and other information to the console.

- What is a "model"?
  A 'model' is an abstraction of a system that is used to represent it in a simplified and more manageable form.

- Which "document" is being referred to in the phrase Document Object Model?
  The 'document' being referred to in the phrase Document Object Model is the HTML document that is loaded to the browser window.

- What is the word "object" referring to in the phrase Document Object Model?
  In DOM, the 'object' are HTML tags, elements, attributes, and text.

- What is a DOM Tree?
  A DOM tree is a representation of the HTML document that looks like a tree. Each 'branch' of the tree is a nested element or attribute, while the 'root' is the HTML document object.

- Give two examples of `document` methods that retrieve a single element from the DOM.

1. getElementById() - retrieves an element with the specified ID attribute
2. querySelector() - retrieves the first element that matches a specified CSS selector.

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

1. querySelectorAll() - retrieves all elements that match a specified CSS selector and returns them as a NodeList object.

- Why might you want to assign the return value of a DOM query to a variable?
  Assigning the return value to a variable is useful if you need to manipulate the same element or set of elements multiple times.

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  If the script tag is placed at the top, it will delay the loading the HTML page. If the script tag is placed at the bottom, the HTML page will load and the script can be downloaded and executed in the background.

- What does `document.querySelector()` take as its argument and what does it return?
  The 'document.querySelector()' takes the 'selector' as its argument, which is a string containing one or more selectors to match.

e.g. const hint = document.querySelector('.hint');

- What does `document.querySelectorAll()` take as its argument and what does it return?
  The 'document.querySelectorAll()' takes the 'selector' as its argument, which is a string containing one or more selectors to match against, and it must be a CSS selector or else it will throw a SyntaxError.

e.g. const p = document.querySelectorAll('p');

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
