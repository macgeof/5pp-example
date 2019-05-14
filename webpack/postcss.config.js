const postcssCustomMedia = require('postcss-custom-media');

module.exports = {
    plugins: {
      'postcss-import': {},
      'postcss-preset-env': {
        autoprefixer: {
          grid: true,
          browsers: ['>1%'],
          grid: true,
          stage: 0,
          features: {
          },
        }
        
      },
      'postcss-custom-media':{postcssCustomMedia},
    }
};