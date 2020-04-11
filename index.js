const rename = require('gulp-rename')

const urlbuilder = (path) => {
  if ('index' !== path.basename) {
    path.dirname = path.basename.split('_').join('/')
    path.basename = 'index'
  }
}

module.exports = () => {
  return rename(urlbuilder);
};
