const gulp = require('gulp');
const gulp_svgo = require('gulp-svgo');
const svg_inline = require('gulp-svg-inline-css');

gulp.task('default', () => {
  gulp.src('./icons/*.svg')
  .pipe(gulp_svgo())
  .pipe(svg_inline({
    className: '.icon-%s:before',
  }))
  .pipe(gulp.dest('./output_styles'));
});
