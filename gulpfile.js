var gulp = require('gulp');
var webpack = require('webpack-stream');
var babel = require('gulp-babel');
var sass = require('gulp-sass');

gulp.task('sass:dev', function() {
  return gulp.src('./app/sass/**.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('build/css'));
})

gulp.task('webpack:dev', function() {
  return gulp.src('app/js/entry.jsx')
  .pipe(webpack({
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['react']
          }
        }
      ]
    },
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('build/'));
});

