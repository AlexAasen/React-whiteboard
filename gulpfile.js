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
const browserSync = require('browser-sync').create();

gulp.task('browserSync', () =>
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
);

gulp.task('css', () =>
  gulp.src(['./public/css/reset.css', './public/css/global.css'])
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(concat('master.css'))
  .pipe(cleanCSS())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
);

gulp.task('html', () => gulp.src('./public/**/*.html')
  .pipe(htmlmin({
    collapseWhitespace: true
  }))
  .pipe(gulp.dest('./dist'))
  .pipe(browserSync.reload({
    stream: true
  }))
);

gulp.task('images', () => gulp.src('./public/img/**.*')
  .pipe(gulp.dest('./dist/img'))
);

gulp.task('javascript', () => browserify('./public/js/app.js', {
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
  .pipe(browserSync.reload({
    stream: true
  }))
);

gulp.task('default', ['browserSync', 'html', 'css', 'javascript', 'images'], () => {
  gulp.watch('./public/css/**/*.css', ['css']);
  gulp.watch('./public/src/img/**.*', ['images']);
  gulp.watch('./public/js/**/*.js*', ['javascript']);
  gulp.watch('./public/**/*.html', ['html']);
});
