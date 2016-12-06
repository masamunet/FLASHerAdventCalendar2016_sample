var gulp = require('gulp'),
os = require('os'),
del = require('del'),
runSequence = require('run-sequence'),
webserver = require('gulp-webserver'),
pug = require('gulp-pug'),
sass = require('gulp-sass'),
coffee = require('gulp-coffee'),
slack = require('gulp-slack')({
  url: 'https://hooks.slack.com/services/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'
});

const config = {
  src: 'src',
  dist: 'public',
  assets: 'assets',
};


// IPアドレスを取得
getIPAddress = ()=>{
  var ifaces = os.networkInterfaces();
  var ipaddress;
  Object.keys(ifaces).forEach((ifname) =>{
    ifaces[ifname].forEach((iface)=>{
      if(iface.family !== 'IPv4' || iface.internal != false){
        return;
      }
      ipaddress = iface.address;
    });
  });
  return ipaddress;
};
var ipaddress = getIPAddress();


//Webサーバー
gulp.task('webserver', () => {
  return gulp.src(config.dist)
  .pipe(webserver({
    livereload: true, //ライブリロード
    host: '0.0.0.0' // IPアドレスで起動
  }))
  //slackにアドレスを通知。
  .pipe(slack(`http://${ipaddress}:8000/`));
});

//コピー
gulp.task('copy', ()=>{
  return gulp.src(`./${config.assets}/**`)
  .pipe(gulp.dest(`./${config.dist}`))
});

gulp.task('copy:watch', ()=>{
  gulp.watch(`${config.assets}/**`, ['copy']);
});

//pug
// _ アンダーバーから始まる、インクルードファイルをコンパイルしない
const watchPugFile = `${config.src}/**/*.pug`;
const pugFiles = [watchPugFile, `!./${config.src}/**/_*.pug`];
gulp.task('pug:dev', () => {
  return gulp.src(pugFiles)
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest(config.dist))
});

gulp.task('pug', () => {
  return gulp.src(pugFiles)
  .pipe(pug({
    pretty: false
  }))
  .pipe(gulp.dest(`./${config.dist}/`))
});

gulp.task('pug:watch', () =>{
  return gulp.watch(watchPugFile, ['pug:dev']);
});

//sass
const watchSassFile = `${config.src}/**/*.scss`;
const sassFiles = [watchSassFile, `!./${config.src}/**/_*.scss`];
gulp.task('sass', () => {
  return gulp.src(sassFiles)
  .pipe(sass.sync().on('errer', sass.logError))
  .pipe(gulp.dest(config.dist))
});

gulp.task('sass:watch', () =>{
  return gulp.watch(watchSassFile, ['sass']);
});


//coffee
const coffeeFiles = `${config.src}/**/*.coffee`;
gulp.task('coffee', () =>{
  return gulp.src(coffeeFiles)
  .pipe(coffee({bare:false}))
  .pipe(gulp.dest(config.dist));
});

gulp.task('coffee:watch', () =>{
  return gulp.watch(coffeeFiles, ['coffee']);
});


//clean
gulp.task('clean', ()=>{
  return del(config.dist);
});

//watch
gulp.task('watch', ['pug:watch', 'sass:watch', 'coffee:watch', 'copy:watch']);

//task
gulp.task('develop', ['webserver', 'watch']);
gulp.task('default', ['develop']);
gulp.task('build', ()=>{
  return runSequence(
    'clean',
    ['pug', 'sass', 'coffee', 'copy']
  );
});
