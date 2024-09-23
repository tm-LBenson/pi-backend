import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url)).split('src')[0];
export async function createFile(req, res, next) {
  try {
    const { fileName, content } = req.body;
    const directoryPath = path.join(__dirname, 'markdownFiles');
    await fs.mkdir(directoryPath, { recursive: true });
    const filePath = path.join(directoryPath, `${fileName}.md`);
    await fs.writeFile(filePath, content, 'utf8');
    res.send('File created successfully');
  } catch (err) {
    console.error(err);
    next(err);
  }
}
