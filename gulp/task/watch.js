const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('watch', () => {    
    watch('./app/assets/styles/**/*.css', () => gulp.start('styles'));
});