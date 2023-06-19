# es6-destructuring-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is destructuring, conceptually?
  Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables.

- What is the syntax for `Object` destructuring?
  let { property1: variable1, property2: variable2 } = object;
  (if you use the property without the : variable1, then you can still use it as long as no other Object is called with the same property.)

- What is the syntax for `Array` destructuring?
  let [x, y, z] = object;
  Each variable is assigned to each index of the array. If the index does not exist, then the variable is undefined. If the variable does not exist/isnt defined, then the index is not defined and is dropped.

- How can you tell the difference between destructuring and creating `Object`/`Array` literals?
  Array destructuring extracts values from an array. But object destructuring extracts values from a JavaScript object.

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
