import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

const formats = ['esm', 'umd'] // 'cjs' ?
function rollupPlugins() {
  return [babel({exclude: 'node_modules/**'}), commonjs()]
}

export default [
  {
    input: 'src/index.js',
    plugins: rollupPlugins(),
    external: ['@primer/blueprints'],
    output: formats.map(format => ({
      file: `dist/index.${format}.js`,
      format,
      name: 'primer'
    }))
  },
  {
    input: 'src/next-components/index.js',
    plugins: rollupPlugins(),
    output: {
      format: 'umd',
      file: 'dist/next-components-index.js',
      name: 'primer'
    }
  }
]
