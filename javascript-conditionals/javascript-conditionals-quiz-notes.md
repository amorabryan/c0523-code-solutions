# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Give 6 examples of comparison operators.
  == (equal to)
  === (strictly equal to)
  != (is not equal to)
  !== (is strictly not equal to)
  < (less than)

  > (greater than)

- What data type do comparison expressions evaluate to?
  They evaluate conditions.

- What is the purpose of an `if` statement?
  It evaluates or checks a condition. If the condition evaluates to true, then any statements in the subsequent code block are executed.

- Is `else` required in order to use an `if` statement?
  Else is not required.

- Describe the syntax (structure) of an `if` statement.
  if (condition) {
  // block of code to be executed if the condition is true
  }

- What are the three logical operators?
  && (logical and) - tests more than one condition
  if both expressions are true, it returns true. If any one of them are false, then it returns false.
  true && true returns true
  true && false returns false
  false && true returns false
  false && false returns false

|| (logical or) - tests at least one condition
If either expression evaluates to true, then the expression returns true. If both return false, then it returns false.
true || true returns true
true || false returns true
false || true returns true
false || false returns false

! (logical not) - takes a single boolean value and inverts it
!true returns false
!false returns true

- How do you compare two different expressions in the same condition?
  Comparison operators and logical operators.

- What is the purpose of a `switch` statement?
  Switch statements evaluates an expression, matching the expressions value against a series of case clauses, and executes statements after the Nth case clause with a matching value, until a break statement is reached. As long as any of the case clauses are met, it will return a matching value. If the case does not match the expressions value, then the default clause of a switch statement will be jumped to.

- Is a `default` clause required in order to use a `switch` statement?
  No, the default clause is optional.

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
