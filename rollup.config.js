import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

export default {
  // This `main.js` file we wrote
  input: './src/main.js',
  output: {
    // The destination for our bundled JavaScript
    file: './dist/bundle.js',
    // Our bundle will be an Immediately-Invoked Function Expression
    format: 'iife',
    // The IIFE return value will be assigned into a variable called `app`
    name: 'app',
  },
  plugins: [
    svelte({
        preprocess: autoPreprocess(),
      // Tell the svelte plugin where our svelte files are located
      include: './src/**/*.svelte',
      css: css => {
        css.write('dist/bundle.css')
      },
    }),
    typescript({sourceMap: !production}),
    // Tell any third-party plugins that we're building for the browser
    resolve({ browser: true }),
  ],
};