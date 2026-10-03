import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = new URL('./', import.meta.url);
const output = new URL('dist/', root);

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const entry of ['index.html', 'style.css', 'script.js', 'assets']) {
  cpSync(new URL(entry, root), fileURLToPath(new URL(entry, output)), {
    recursive: true,
  });
}
