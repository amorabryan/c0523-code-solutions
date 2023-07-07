import { writeFile, readFile } from 'node:fs/promises';

async function cp() {
  try {
    const contents = await readFile(process.argv[2], 'utf8');
    const copyFile = String(process.argv[3]);
    await writeFile(copyFile, `${contents}\n`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

cp();
