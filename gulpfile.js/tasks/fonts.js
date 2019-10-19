const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');

const config = require('../config');

module.exports = {
    fonts: () => {
        return gulp
            .src(`${config.root.src}/${config.fonts.src}`)
            .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
            .pipe(changed(`${config.root.dist}/${config.fonts.dist}`))
            .pipe(gulp.dest(`${config.root.dist}/${config.fonts.dist}`))
    }
}