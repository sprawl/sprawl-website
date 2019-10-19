const gulp = require('gulp');
const { reload } = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const gulpif = require('gulp-if');
const minify = require('gulp-clean-css');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rev = require('gulp-rev');

const config = require('../config.json');
const env = require('../env');
const browserSync = require('browser-sync');


module.exports = {
    css: () => {
        return gulp
            .src(`${config.root.src}/${config.css.src}`)
            .pipe(gulpif(!env.production, sourcemaps.init()))
            .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
            .pipe(sass({
                includePaths: ['./node_modules'],
                outputStyle: 'compressed',
                sourceMap: true,
                errLogToConsole: true,
            }))
            .pipe(autoprefixer())
            .pipe(minify({
                keepSpecialComments: 0,
            }))
            .pipe(rev())
            .pipe(gulpif(!env.production, sourcemaps.write()))
            .pipe(gulp.dest(`${config.root.dist}/${config.css.dist}`))
            .pipe(rev.manifest('css-manifest.json'))
            .pipe(gulp.dest(`${config.root.dist}/${config.css.dist}`))
            .pipe(browserSync.stream())
    }
}