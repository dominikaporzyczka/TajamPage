const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
});

gulp.task('copy-html', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-styles', function() {
    gulp.src(['src/css/**/*', 'src/vendors/**/*.css'])
        .pipe(gulp.dest('dist/css'))
});

gulp.task('copy-img', function() {
    gulp.src('src/img/**/*')
        .pipe(gulp.dest('dist/img'));
});

gulp.task('sass-to-css', function() {
    gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
});

gulp.task('copy-js', function() {
    gulp.src(['src/js/**/*', 'src/vendors/**/*.js'])
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch-files', function() {
    browserSync.init({
        server: 'dist'
    });
    gulp.watch('src/index.html').on('change', browserSync.reload);
    gulp.watch('src/css/**/*').on('change', browserSync.reload);
    gulp.watch('src/js/**/*').on('change', browserSync.reload);

    gulp.watch('src/sass/**/*.scss', ['sass-to-css']);
    gulp.watch('src/index.html', ['copy-html']);
    gulp.watch('src/css/**/*', ['copy-styles']);
    gulp.watch('src/img/**/*', ['copy-img']);
    gulp.watch('src/js/**/*', ['copy-js']);
});

gulp.task('default', ['copy-html', 'copy-styles', 'copy-img', 'copy-js', 'watch-files']);