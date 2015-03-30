var Promise = require('promise'),
  gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  karma = require('karma').server;

cachebust = new $.cachebust;

var startServer = function () {
  return new Promise(function (fulfil) {
    gulp.src('./lib')
      .pipe($.webserver({
        port: 9000,
        livereload: true,
        fallback: 'index.html'
      }))
      .on('end', fulfil);
  });
};

gulp.task('default',
  function () {
    startServer();
  }
);

gulp.task('bust-config', function () {
  return gulp.src('lib/config.js')
    .pipe(cachebust.resources())
    .pipe($.uglify())
    .pipe(gulp.dest('lib'));
});

gulp.task('build-index', ['bust-config'], function () {
  return gulp.src('lib/index.html')
    .pipe(cachebust.references())
    .pipe($.htmlmin({
      collapseWhitespace: true,
      conservativeCollapse: true,
      minifyJS: true,
      minifyCSS: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeComments: true
    }))
    .pipe(gulp.dest('lib'));
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});
