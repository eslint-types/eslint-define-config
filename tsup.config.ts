import type { Options } from 'tsup';
import { defineConfig } from 'tsup';

const baseOptions: Options = {
  entry: ['src/index.ts'],
  outDir: 'dist',
  clean: true,
  target: ['es2022', 'node18'],
  minify: true,
  sourcemap: false,
  splitting: true,
};

export default defineConfig([
  { ...baseOptions, format: 'esm', dts: true },
  { ...baseOptions, format: 'cjs', dts: false },
]);
