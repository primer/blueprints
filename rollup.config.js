import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

const formats = ['esm', 'umd'] // 'cjs' ?
const plugins = [babel({exclude: 'node_modules/**'}), commonjs()]

export default [
  {
    input: 'src/index.js',
    plugins,
    external: ['@primer/blueprints'],
    output: formats.map(format => ({
      file: `dist/index.${format}.js`,
      format,
      name: 'blueprints'
    }))
  },
  {
    input: 'next-components/index.js',
    plugins,
    output: {
      file: `dist/next-components.js`,
      format: 'esm',
      name: 'blueprints-next'
    }
  }
]
