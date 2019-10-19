const gulp = require('gulp');
const path = require('path');
const clean = require('gulp-clean');

const config = require('../config');

module.exports = {
    cleanCss: () => {
        return gulp.src(`${config.root.dist}/${config.css.dist}/*.{css,map}`, {read: false})
            .pipe(clean());
    },
    cleanJs: () => {
        return gulp.src([
                    `${config.root.dist}/${config.js.dist}/*.{js,json,map}`,
                    `!${config.root.dist}/${config.js.dist}/vendor.js`
                ],
                {read: false}
            )
            .pipe(clean());
    }
}
