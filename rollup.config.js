import uglify from 'rollup-plugin-uglify'

export default {
    input: 'js/index.js',
    output: {
        file: 'dist/main.js',
        format: 'iife'
    },
    watch: {
      include: 'js/**'
    },
    plugins: [
      uglify()
    ]
};