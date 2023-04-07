import path from 'path';
import { defineConfig, normalizePath } from 'vite';
import dts from 'vite-plugin-dts';
import viteEslint from 'vite-plugin-eslint';

export default defineConfig(({ command, mode }) => {
  const dir = path.join(__dirname, 'packages', mode);
  const outDir = path.join(dir, 'dist');
  const entry = path.join(dir, 'src', 'index.ts');

  return {
    root: dir,
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(dir, 'src')
        }
      ]
    },
    build: {
      outDir: outDir,
      lib: {
        entry: entry,
        fileName: 'index',
        name: 'Lssue',
        formats: ['umd']
      }
    },
    plugins: [dts(), viteEslint()]
  };
});
