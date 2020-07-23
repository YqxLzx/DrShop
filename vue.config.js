var path = require('path')

function resolve (dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('public', resolve('public')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('components',resolve('src/components'))
      .set('common',resolve('src/components/common'))
      .set('assets',resolve('assets'))
      .set('fns',resolve('src/fns'))
    }
}