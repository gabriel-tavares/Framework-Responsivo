var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");

gulp.task('scss', function() {
   gulp.src('sass/style.scss')
       .pipe(sass())
       .pipe(autoprefixer('last 20 version'))
       .pipe(gulp.dest('assets/css'))
       .pipe(minifycss())
       .pipe(rename("style.css"))
       .pipe(gulp.dest('assets/css'));

});

gulp.task('watch', function() {
   gulp.watch('sass/**/*.scss', ['scss']);
});

gulp.task('default', ['scss']);