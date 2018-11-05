import gulp from 'gulp';
import watch from 'gulp-watch';
import concat from 'gulp-concat';
import scss from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import del from 'del';
import babel from 'gulp-babel';

import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';

import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import rigger from 'gulp-rigger';
import sequence from 'run-sequence';

const reload = browserSync.reload;
const dirs = {
  src: 'src',
  dest: 'build'
};

const path = {
  build: {
    html: `${dirs.dest}/`,
    css: `${dirs.dest}/css/`,
    js: `${dirs.dest}/js/`,
    img: `${dirs.dest}/images/`,
    fonts: `${dirs.dest}/fonts/`
  },
  src: {
    html: `${dirs.src}/*.html`,
    scss: `${dirs.src}/scss/style.scss`,
    js: `${dirs.src}/js/app.js`,
    jsVendors: `${dirs.src}/js/vendor/*.js`,
    img: `${dirs.src}/images/**/*.*`,
    fonts: `${dirs.src}/fonts/**/*.*` 
  },
  watch: {
    html: `${dirs.src}/**/*.html`,
    scss: `${dirs.src}/scss/**/*.*`,
    js: `${dirs.src}/**/*.js`
  },

};

const config = {
  server: {
    baseDir: './build',
    directory: true
  },
  host: 'localhost',
  port: 4300
};

gulp.task('clean', () => del([path.build.html, path.build.css]) );

gulp.task('html:build', () => {
  gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({ stream: true }));
});

gulp.task('images:build', () => {
  gulp.src(path.src.img)
    .pipe(gulp.dest(path.build.img));
});

gulp.task('fonts:build', () => {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts));
});

gulp.task('scss:build', () => {
  gulp.src(path.src.scss)
    .pipe(plumber())
    .pipe(scss())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({ stream: true }));
});

gulp.task('js:bundle', () =>
    browserify({
      entries: [path.src.js],
      debug: true
    })
    .transform(babelify.configure({
      presets: ['env']
    }))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({ stream: true }))
  );

gulp.task('js:vendors', () =>
    gulp.src(path.src.jsVendors)
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({ stream: true }))
);

gulp.task('webserver', () => browserSync(config) );

gulp.task('build', (cb) => {
  sequence('clean',
    [
      'html:build',
      'images:build',
      'fonts:build',
      'scss:build',
      'js:bundle',
      'js:vendors'
    ],
    cb
  );
});

gulp.task('watch', () => {
  gulp.start('webserver');
  gulp.watch([path.watch.html], ['html:build']);
  gulp.watch([path.watch.scss], ['scss:build']);
  gulp.watch([path.watch.js], ['js:bundle']);

});

gulp.task('default', (cb) => {
  sequence('build', 'watch', cb);
});
