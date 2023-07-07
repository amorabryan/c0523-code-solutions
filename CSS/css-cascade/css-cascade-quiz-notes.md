# css-cascade-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the four components of "the Cascade".
  Importance, specificity, source order, and inheritance.

- What does the term "source order" mean with respect to CSS?
  The order in which styles are declared in a CSS file. When two or more selectors have the same specificity and importance, the one that appears later in the file takes precedence.

- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
  CSS styles re inherited by an element's children by default. If you apply a style to the parent element, the style will be applied to the children as well, unless there is a conflicting style rule that overrides it.

- List the three selector types in order of increasing specificity.

1. Type selectors - 'p', 'div', 'h2'
2. Class selectors - '.first-class'
3. ID selectors - #verou

- Why is using `!important` considered bad practice?
  Using '!important' is bad practice because it can make the cascade hard to maintain and override because the important declaration is applied no matter the specificity or source order; it also reverses the cascade order of stylesheets. If you must use '!important', comment the usage in order for future code maintainers understand why the declaration was marked important and know not to override it.

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
