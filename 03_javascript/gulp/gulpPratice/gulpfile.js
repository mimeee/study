const gulp = require('gulp');
const babel = require('gulp-babel');
const pump = require('pump');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const base64 = require('gulp-base64');

// gulp.task('build', done => {
//     pump([
//         gulp.src('test.css'),
//         base64(),
//         gulp.dest('./dist/')
//     ], err => {
//         if (err) {
//             console.error(err);
//         }
//         done();
//     });
// });

gulp.task('build', done => {
    pump([
        gulp.src('test.js'),
        babel({
            presets: [
                ['@babel/env', {loose: true}]
            ],
            plugins: ['@babel/transform-runtime']
        }),
        uglify(),
        gulp.dest('./dist/')
    ], err => {
        if (err) {
            console.error(err);
        }
        done();
    });
});
