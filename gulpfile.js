'use strict'

/**
 *  Import Dependencies
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const plumber = require('gulp-plumber');

/**
 * Paths
 */
const paths = {
    scss: './sass/**.scss',
    cssDir: './css'
}

/**
 * Tasks
 */
gulp.task('browsersync', function () {
    browserSync.init({
        files: ['./**'],
        server: {
            baseDir: './'
        },
        port: 9000
    });
});

gulp.task('sass', function () {
    gulp.src(paths.scss)
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(paths.cssDir))
        .pipe(reload({ stream: true }))
});

gulp.task('watch', ['browsersync'], function () {
    gulp.watch(paths.scss, ['sass']);
});