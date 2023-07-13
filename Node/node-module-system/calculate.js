import add from './add.js';
import subtract from './subtract.js';
import divide from './divide.js';
import multiply from './multiply.js';

let result;
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);

switch (process.argv[3]) {
  case 'plus':
    result = add(num1, num2);
    break;
  case 'minus':
    result = subtract(num1, num2);
    break;
  case 'times':
    result = multiply(num1, num2);
    break;
  case 'over':
    result = divide(num1, num2);
    break;
}

console.log('result:', result);
