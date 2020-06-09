'use strict';
//是否需要压缩
const compress = false;
const {parallel,series,src,dest,watch} = require('gulp');
const fileinclude = require("gulp-file-include");
const rev  = require('gulp-rev-append');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');


function moveHtml(cb)
{
    console.log('movehtml');

    return src('src/pages/**/*.html')
        .pipe(rev())
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('dist/pages/'));
    cb();
}
function moveCss(cb)
{
    console.log('movecss');
    return src('src/**/*.css').pipe(dest('dist/'));
    cb();
}
function moveJs(cb)
{
    console.log('movejs');
    //.pipe(uglify())
    return src('src/**/*.js').pipe(dest('dist/'));
    cb();
}
function translateSass(cb)
{
    console.log('translateSass');
    return src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('src/'));
    cb();
}
function moveResources(cb)
{
    return src('src/resources/**/*.*').pipe(dest('dist/resources/'));
    cb();
}
const watcher = watch(['src/pages/*.html','src/js/*.js','src/css/*.scss']);
watcher.on('change',series(translateSass,parallel(moveCss,moveJs,moveResources,moveHtml)));
exports.default = series(translateSass,parallel(moveCss,moveJs,moveResources,moveHtml));