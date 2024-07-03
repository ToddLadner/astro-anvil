module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env'),
    require('postcss-size'),
    require('postcss-font-magician'),
    require('postcss-jit-props')({files: ['./src/css/props.css']}),
    require('autoprefixer'),
  ],
}
