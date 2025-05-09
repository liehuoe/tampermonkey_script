import * as esbuild from 'esbuild';
import { readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const srcDir = 'src';
const outDir = 'dist';
const modName = process.argv[2];

await esbuild.build({
  bundle: true,
  entryPoints: [join(srcDir, modName, 'index.js')],
  outfile: join(outDir, modName + '.js'),
  banner: { js: readFileSync(join(srcDir, modName, 'meta.js'), { encoding: 'utf-8' }) },
  alias: {
    '@': resolve(srcDir),
  },
  minify: true,
});
