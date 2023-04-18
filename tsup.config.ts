import { Options } from 'tsup';

const defaultOptions: Options = {
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  splitting: true,
  sourcemap: true,
  treeshake: true,
  // for the type maps to work, we use tsc's declaration-only command
  dts: false,
  clean: true,
  target: 'es6',
};
export default defaultOptions;
