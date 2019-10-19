const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
// const webpack = require('webpack-stream');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const rev = require('gulp-rev');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');

const config = require('../config.json');
const env = require('../env');

module.exports = {
    js: () => {
        return gulp.src(`${config.root.src}/${config.js.src}`)
            .pipe(gulpif(!env.production, sourcemaps.init()))
            .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
            .pipe(babel({
                presets: [
                    ["@babel/preset-env", {
                        "targets": {
                            "browsers": ["last 2 versions"],
                        }
                    }]
                ],
                plugins: ["@babel/plugin-proposal-object-rest-spread"]
            }))
            .pipe(concat('app.js'))
            .pipe(rev())
            .pipe(gulpif(!env.production, sourcemaps.write('./')))
            .pipe(gulpif(env.production, uglify()))
            .pipe(gulp.dest(`${config.root.dist}/${config.js.dist}`))
            .pipe(rev.manifest('js-manifest.json'))
            .pipe(gulp.dest(`${config.root.dist}/${config.js.dist}`))
    },
    js_vendor: () => {
        return gulp.src(config.js_vendor.src)
            .pipe(concat('vendor.js'))
            .pipe(gulp.dest(`${config.root.dist}/${config.js_vendor.dist}`));
    }
};
