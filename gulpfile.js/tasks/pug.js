const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const path = require('path');
// const { reload } = require('browser-sync');

const config = require('../config');

function requireUncached(module){
    delete require.cache[require.resolve(module)]
    return require(module)
}

module.exports = {
    pug: () => {
        var css_manifest = requireUncached(`../.${config.root.dist}/${config.css.dist}` + '/css-manifest.json');
        var js_manifest = requireUncached(`../.${config.root.dist}/${config.js.dist}` + '/js-manifest.json');

        return gulp.src([`${config.root.src}/${config.pug.src}`, `!${config.root.src}/${config.pug.exclude}`])
            .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
            .pipe(pug({
                pretty: true,
                locals: {
                    css_main: css_manifest['app.css'],
                    js_app: js_manifest['app.js']
                }
            }))
            .pipe(gulp.dest(`${config.root.dist}/${config.pug.dist}`));
    }
};