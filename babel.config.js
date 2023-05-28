module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@utils': './src/utils',
            '@errors': './src/errors',
            '@hooks': './src/hooks',
            '@components': './src/components'
          }
        }
      ]
    ]
  }
}
