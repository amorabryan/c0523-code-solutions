# array-filter-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- `Array.forEach`:

  - What does `Array.forEach` do?
    .forEach executes the provided function once for each array element.

  - What should the callback function do?
    The callback function executes like a loop; it utilizes each array element in its callback function.

  - What is `Array.forEach` useful for?
    Its easier to read when reading through code and for scope.

- `Array.map`: - What does `Array.map` do?
  It creates a new array populated with the results of calling a provided function on every element in the calling array.

      - What should the callback function return?

  It should return a new array with each element being the result of the callback function.

      - What is `Array.map` useful for?

  Its useful when you want to transform elements in an array.

- `Array.filter`: - What does `Array.filter` do?
  It creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

      - What should the callback function return?

  A shallow copy of a portion of the given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. If no elements pass the test, an empty array will be returned.

      - What is `Array.filter` useful for?

  Its useful when you want to select a subset of multiple elements from an array.

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
