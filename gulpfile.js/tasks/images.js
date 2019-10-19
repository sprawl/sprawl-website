const gulp = require('gulp');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');

const config = require('../config.json');

module.exports = {
    images: () => {
        return gulp
            .src(`${config.root.src}/${config.img.src}`)
            .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
            .pipe(changed(`${config.root.dist}/${config.img.dist}`))
            .pipe(imagemin({
                progressive: true,
                svgoPlugins: [
                    { removeViewBox: false },
                    { cleanupIDs: false },
                ],
            }))
            .pipe(gulp.dest(`${config.root.dist}/${config.img.dist}`));
    }
}