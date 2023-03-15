module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@assets': './src/assets',
          '@common': './src/common',
          '@components': './src/components',
          '@screen': './src/screen',
          '@store': './src/store',
          '@styles': './src/styles',
          '@types': './src/types',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
