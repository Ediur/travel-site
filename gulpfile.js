const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('default', () => console.log("Hooray - you created a Gulp task"));

gulp.task("html", () => console.log("Imagine smth usefull done to HTML"));
gulp.task("styles", () => console.log("Imagine SASS or PostCSS tasks running here"));

gulp.task('watch', () => {
    watch('./app/index.html', () => gulp.start('html'));
    watch('./app/assets/styles/**/*.css', () => gulp.start('styles'));
});