const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const mixins = require('postcss-mixins');

gulp.task("styles", () => {
    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))        
        .pipe(gulp.dest('./app/temp/styles'));
});

