# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  They are logical operators that combine conditions and determine if a value is truthy. They can be used outside of `if` statements to perform conditional executions or evaluation of expressions.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Its where the second operand is not evaluated if the result can be determined solely by the value of the first operand.
  && - If the result of one conversion is found to be false, the AND operator stops and returns the original value of that falsy operand; it does NOT evaluate any of the remaining operands.
  || - If the left operand is true, then the right side will not be evaluated.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. It differs because it only considers null and undefined as falsy values, whereas || considers all falsy values falsy.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  It takes the conditinal, then an expression to execute if the condition is truthy followed by a colon, then an expression to execute if the condition is falsy. Ternary operators is a single statement, while if/else statements are blocks of code.

- What is the `?.` (optional chaining) operator? When would you use it?
  It accesses an objects property or calls a function; if the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error. It is used to access nested properties without throwing an error if any intermediate value is null or undefined.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  myFunction(a, ...iterableObj, b)
  [1, ...iterableObj, '4', 'five', 6]
  { ...obj, key: 'value' }
  It allows an iterable, such as a string or array, to be expanded in places where zero or more arguments (or function calls) or elements (for array literals) are expected. It copies the object or array attached to the '...' and copies it into the new object or array.

Objects:
const sObj = {...v1, foo: 'bar'};
sObj = {value: 'Something', foo: 'bar'};

Arrays:
const sArr = [100, ...v4];
sArr = (5) [100, 3, 5, 7, 9];

- What data types can be spread into an array? Into an object?
  Array:
  let array1 = [1, 2, 3];
  let array2 = [...array1, 4, 5];

String:
let str = "hello";
let chars = [...str]; // chars becomes ["h", "e", "l", "l", "o"]

- How does spread syntax differ from rest syntax?
  The spread syntax is the opposite from the rest syntax. Spread takes the value attached to the operator and inserts that value into the new array/object.
  let array1 = [1, 2, 3];
  let array2 = [...array1, 4, 5];
  array2 = [1, 2, 3, 4, 5];

The rest syntax destructures the rest of the argument into a single variable.
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
