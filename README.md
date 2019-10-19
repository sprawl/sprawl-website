# html-template

##Requirement
* Node v10+


##Setup
Get the files

Install gulp-cli globally

```shell
npm i gulp-cli -g
```

Make a copy of `.env.example` to `.env`

Install dependencies
```shell
npm install
```


##Running
To start using the template to develop you can run
```shell
npm run start
```
this will execute `gulp` and `gulp watch` commands. Depending on the key `BROWSERSYNC_ENABLE` on your `.env` file the gulp
watch will trigger the [browser-sync](https://github.com/BrowserSync/browser-sync) opening your browser on
`http://localhost:3000` by default. If you choose to, you can disable it but then you'll have to enter the url manually
on your browser and press refresh to see the changes.

To have a ready to production version use
```shell
npm run build
```
This will compress the css/js files and uglify your JS.


##Directories
* `/src`: Under this directory you would place all your source files. Each folder can have nested directories.
* `/gulpfile.js`: This gulp setup separate each task on their own file. Check the `gulpfile.js/config.json` file to add
  js third-party libraries.
* `/dist`: All your `/src` files destination once processed. This can be changed from the `config.json` file un
  `root->dist`.
