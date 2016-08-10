var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function() {
    return gulp.src('./public/css/sass/theme-min.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(csso())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./public/css/'));
});