# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  NPM (Node Package Manager) is a package manager for JavaScript used for managing and sharing packages of code in the Node.js ecosystem

- What is a package?
  A reusable piece of code or software module that can be installed and used in prjects.

- What are some other popular package managers?
  Yarn and PNPM

- How can you create a `package.json` with `npm`?
  npm init

- What is a dependency and how do you add one to a package?
  A dependency is a package or module that is required for a project to function correctly. Dependencies are specified in the package.json file under the "dependencies" field. To add a dependency using NPM, you can use the following command: npm install <package-name>

- What happens when you add a dependency to a package with `npm`?
  The package gets added to node_modules folder and also updates the dependencies in the package.json

- What is a devDependency and how do you add one to a package?
  Its a package that is required during the development process but not necessary for the production deployment of the project. To add a devDependency using NPM, you can use the following command: npm install --save-dev <package-name>

- How do you define and run `npm` scripts? Why are these useful?
  NPM scripts allow you to define custom scripts or commands within the package.json file that can be executed using the npm run command. They are useful for automating repetitive tasks, running build processes, starting servers, or executing any custom command related to your project.

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
