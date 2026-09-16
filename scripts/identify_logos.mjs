import fs from 'fs';
import path from 'path';

const dir = 'src/assets/logos/clients';
const files = fs.readdirSync(dir);
console.log('Total files:', files.length);

// Let's print the file sizes and check each one
for (const file of files) {
  const filePath = path.join(dir, file);
  const stat = fs.statSync(filePath);
  console.log(`${file}: ${stat.size} bytes`);
}
