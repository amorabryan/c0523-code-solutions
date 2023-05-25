# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
  No it does not, it only creates an element.

- How do you add an element as a child to another element?
  You need to use object.appendChild(), with the child as the parameter and the parent as the object.

- What do you pass as the arguments to the `element.setAttribute()` method?
  name of the attribute you are trying to assign (e.g. class), then the value of the attribute (e.g. container)

- What steps do you need to take in order to insert a new element into the page?
  Create a new element using .createElement() and storing that into a variable, then using the .appendChild() method of the variable you created in order to add the new element to the page.

- What is the `textContent` property of an element object for?
  textContent sets the text content for the HTML element or gets the text content written inside the element.

- Name two ways to set the `class` attribute of a DOM element.
  classList, setAttribute

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  You can use the function for many different purposes
  You can control when the data appears

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
