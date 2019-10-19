const {cleanCss, cleanJs} = require('./clean');
const {css} = require('./css');
const {pug} = require('./pug');
const {js, js_vendor} = require('./js');
const {images} = require('./images');
const {favicon} = require('./favicon');
const {fonts} = require('./fonts');

module.exports = {
    cleanCss,
    cleanJs,
    css,
    pug,
    js,
    js_vendor,
    images,
    favicon,
    fonts
}