import { readFile } from 'node:fs/promises';

async function cat() {
  try {
    const commandArray = process.argv.slice(2);
    const promiseArray = commandArray.map((file) => readFile(file, 'utf8'));
    const fileContents = await Promise.all(promiseArray);
    fileContents.forEach((fileContent) => {
      console.log(fileContent);
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

cat();
