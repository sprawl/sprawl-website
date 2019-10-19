module.exports = {
    production: process.env.NODE_ENV === 'production',
    browserSync_enable: process.env.BROWSERSYNC_ENABLE === 'true',
    browserSync_proxy_on: process.env.BROWSERSYNC_PROXY_ON === 'true',
    browserSync_proxy_files: () => {
        let files = process.env.BROWSERSYNC_PROXY_FILES;
        if(files) {
            let temp = files.split(',');

            return [temp];
        }

        return [];
    }
};