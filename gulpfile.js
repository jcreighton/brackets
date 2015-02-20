var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');


gulp.task('lint', function() {
  return gulp.src('./components/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


gulp.task('less', function() {
  gulp.src(['shared/styles/variables.less', 'shared/styles/global.less'])
    .pipe(concat('app.css'))
    .pipe(less({compress: true}))
    .pipe(gulp.dest('./public/css'));
});


// gulp.task('connect', function() {
//   connect.server({
//     livereload: true
//   })
// });


gulp.task('default', ['less', 'lint']);

// gulp.task('serve', []);