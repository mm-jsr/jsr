import typescript from '@rollup/plugin-typescript';
import ttypescript from 'ttypescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'build',
    format: 'iife',
    name: 'JSR',
  },
  plugins: [
    typescript({
      typescript: ttypescript,
    }),
  ],
};