/* eslint import/no-extraneous-dependencies: ["off", {"devDependencies": false}] */

const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const server = require('gulp-server-livereload');

gulp.task('webserver', () => {
  gulp.src('./dist')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('css', () =>
  gulp.src(['./src/public/css/reset.css', './src/public/css/global.css'])
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(concat('master.css'))
  .pipe(cleanCSS())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist/css'))
);

gulp.task('html', () => gulp.src('./src/public/**/*.html')
  .pipe(htmlmin({
    collapseWhitespace: true
  }))
  .pipe(gulp.dest('./dist'))
);

gulp.task('images', () => gulp.src('./src/public/img/**.*')
  .pipe(gulp.dest('./dist/img'))
);

gulp.task('javascript', () => browserify('./src/public/js/app.js', {
  debug: true
})
  .transform(babelify)
  .bundle()
  .pipe(source('whiteboard.bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({
    loadMaps: true
  }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dist/js'))
);

gulp.task('default', ['webserver', 'html', 'css', 'javascript', 'images'], () => {
  gulp.watch('./src/public/css/**/*.css', ['css']);
  gulp.watch('./src/public/src/img/**.*', ['images']);
  gulp.watch('./src/public/js/**/*.js*', ['javascript']);
  gulp.watch('./src/public/**/*.html', ['html']);
});
