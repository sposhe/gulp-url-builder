const rename = require('gulp-rename')

const urlbuilder = (path) => {
  if ('index' !== path.basename) {
    path.dirname = path.basename.split('_').join('/')
    path.basename = 'index'
  }
}

module.exports = () => {
<<<<<<< HEAD
  return rename(prettyUrl);
=======
  return rename(urlbuilder);
>>>>>>> 2fcb94c... Add index.js
};
