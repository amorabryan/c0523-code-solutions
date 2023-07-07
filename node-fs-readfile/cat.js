import { readFile } from 'node:fs/promises';

async function cat() {
  try {
    const commandArray = process.argv.slice(2);
    const promiseArray = commandArray.map(async (file) => {
      const filePath = new URL(file, import.meta.url);
      const contents = await readFile(filePath, { encoding: 'utf8' });
      return contents;
    });
    const fileContents = await Promise.all(promiseArray);
    fileContents.forEach((fileContent) => {
      console.log(fileContent);
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

cat();
