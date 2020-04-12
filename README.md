# gulp-url-builder

A simple [`gulp-rename`](https://github.com/hparra/gulp-rename) wrapper to generate static urls from a flat file structure. Built for use with [`gulp-pug`](https://github.com/gulp-community/gulp-pug), allows a flat set of files to be easily expanded into directories based on a simple naming convention. Can be used with any type of file, and does not affect the file extension.

## Installation

`npm install gulp-url-builder --save-dev`

## Naming

The package automatically outputs every file as an `index.*` file inside a directory with the original file's name. Parent directories can be created by prepending parent directory names delimited by underscores. Files already named `index.*` are output as-is.

| Input | Output |
| --- | --- |
| `index.foo` | `index.foo` |
| `about.foo` | `about/index.foo` |
| `portfolio_project-a.foo` | `portfolio/project-a/index.foo` |

## Example

```javascript
const gulp       = require('gulp')
const pug        = require('gulp-pug')
const urlBuilder = require('gulp-url-builder')

gulp.task('pug', () => {
  return gulp.src([
    'src/pug/views/**/*.pug'
  ]).pipe( pug()             )
    .pipe( urlBuilder()      )
    .pipe( gulp.dest('dest') )
})
```

Given the following files in `src/pug/views`—

```
  .
  ├── index.pug
  ├── about.pug
  ├── about_our-team.pug
  ├── about_our-mission.pug
  ├── about_our-values.pug
  └── contact.pug
```

—the output in `dest` would be:

```
  .
  ├── index.html
  ├── about
  │   ├── index.html
  │   ├── our-team
  │   │   └── index.html
  │   ├── our-mission
  │   │   └── index.html
  │   └── our-values
  │       └── index.html
  └── contact
      └── index.html
```
