function ExampleConstructor() {}
console.log(
  'value of ExampleConstructor.prototype:',
  ExampleConstructor.prototype
);
console.log(
  'typeof ExampleConstructor.prototype:',
  typeof ExampleConstructor.prototype
);

const exampleConstructor = new ExampleConstructor();
console.log('value of exampleConstructor:', exampleConstructor);

const instanceExample = exampleConstructor instanceof ExampleConstructor;
console.log('value of instanceExample:', instanceExample);
