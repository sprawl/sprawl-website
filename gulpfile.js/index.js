require('dotenv').config()
const {watch, series, parallel} = require('gulp');
const {
    cleanJs,
    cleanCss,
    css,
    pug,
    js,
    js_vendor,
    images,
    favicon,
    fonts
} = require('./tasks');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();
const config = require('./config.json');
const env = require('./env');

module.exports.default = series(
    parallel(cleanCss, cleanJs, images, favicon, fonts),
    css,
    parallel(js, js_vendor),
    pug
);

module.exports.watch = () => {
    if(env.browserSync_enable) {
        var browserSyncConfig = {
            logPrefix: 'Sprawl',
            port: process.env.BROWSERSYNC_PORT,
            ui: {
                port: process.env.BROWSERSYNC_PORT + 1,
            },
        };

        if (env.browserSync_proxy_on) {
            browserSyncConfig.proxy = {
                target: process.env.BROWSERSYNC_PROXY_TARGET,
            };
            browserSyncConfig.files = env.browserSync_proxy_files();
        } else {
            browserSyncConfig.server = {
                baseDir: config.root.dist,
                reloadOnRestart: false,
                serveStaticOptions: {
                    cacheControl: false,
                    setHeaders: (res, path) => {
                        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
                        res.setHeader("Pragma", "no-cache");
                        res.setHeader("Expires", "0");
                    }
                }
            };
        }

        browserSync.init(browserSyncConfig);
    }

    watch(`${config.root.src}/${config.css.src}`, series(cleanCss, css, pug));
    watch(`${config.root.src}/${config.js.src}`, series(cleanJs, js, pug));
    watch(`${config.root.src}/${config.pug.src}`, series(pug));
    watch(`${config.root.src}/${config.img.src}`, series(images));
    watch(`${config.root.src}/${config.favicon.src}`, series(favicon));
    watch(`${config.root.src}/${config.fonts.src}`, series(fonts));

    if(env.browserSync_enable) {
        watch(`${config.root.dist}/*.html`).on('change', browserSync.reload)
    }
};
