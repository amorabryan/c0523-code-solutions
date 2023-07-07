import { writeFile, readFile } from 'node:fs/promises';

async function cp() {
  try {
    const contents = await readFile(process.argv[2]);
    const copyFile = process.argv[3];
    await writeFile(copyFile, `${contents}`);
  } catch (error) {
    console.log('Error:', error);
  }
}

cp();
