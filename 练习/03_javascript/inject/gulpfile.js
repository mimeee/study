const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const idify = require('hy-gulp-require-idify');

gulp.task('build', function () {
    return browserify('src/index.js')
    .transform(babelify.configure({
        babelrc: false,
        presets: [
            ['env', {
                loose: true
            }]
        ],
        plugins: [
            ["transform-runtime", {
                helpers: false,
                polyfill: false,
                moduleName: "babel-runtime"
            }]
        ]
    }), {
        global: true
    })
    .bundle()
    .pipe(source('inject.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('../../../../../chrome-self-plugin'))
    .pipe(rename('inject.min.js'))
    .pipe(idify())
    .pipe(uglify({
        compress: {
            drop_console: false
        }
    }))
    .pipe(gulp.dest('dist'));
});