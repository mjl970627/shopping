//导入模块
const gulp = require('gulp'),
      html = require('gulp-htmlmin'),
      css = require('gulp-cssnano'),
      uglify = require('gulp-uglify'),
      sass = require('gulp-sass'),
      rename = require('gulp-rename'),
      image = require('gulp-imagemin'),
      concat = require('gulp-concat'),
      babel = require('gulp-babel');
//发布任务
function fnCopyIndex(){
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
}
//处理css
function fnCss(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    // .pipe(cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'));
}
//处理js的任务
function fnJS(){
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    // .pipe(concat('index.js'))
    // .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/js'));
}
//处理图片
function fnImg(){
    return gulp.src('./src/img/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/img'));
}
function fnHTML(){
    return gulp.src('./src/pages/*.html')
        // .pipe(html())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/pages'));

}
//监听任务
function fnWatch(){
    gulp.watch('./src/index.html',fnCopyIndex);
    gulp.watch('./src/sass/*.scss',fnCss);
    gulp.watch('./src/js/*.js',fnJS);
    gulp.watch('./src/pages/*.html',fnHTML);
}

//导出模块
exports.copy = fnCopyIndex;
exports.css = fnCss;
exports.js = fnJS;
exports.img = fnImg;
exports.copyhtml = fnHTML;
exports.default = fnWatch;