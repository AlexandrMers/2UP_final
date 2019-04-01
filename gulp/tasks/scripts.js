let babel = require('gulp-babel'),
    scriptsPATH = {
        // "input": "./dev/static/js/modules/",
        "ouput": "./build/static/js/"
    },
    concat = require('gulp-concat');

module.exports = function () {

    $.gulp.task('js:dev', () => {
        return $.gulp.src(['./dev/static/js/modules/cleaner.js', './dev/static/js/modules/activeFlat.js', './dev/static/js/modules/globalObjectResidents.js', './dev/static/js/modules/validate.js', './dev/static/js/modules/addResident.js', './dev/static/js/modules/loadFromLocalStorage.js', './dev/static/js/modules/toInfoPopup.js', './dev/static/js/modules/filter.js'])
            .pipe(concat('main.js'))
            .pipe(babel())
            .pipe($.gulp.dest(scriptsPATH.ouput))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('js:build', () => {
        return $.gulp.src(['./dev/static/js/modules/cleaner.js', './dev/static/js/modules/activeFlat.js', './dev/static/js/modules/globalObjectResidents.js', './dev/static/js/modules/validate.js', './dev/static/js/modules/addResident.js', './dev/static/js/modules/loadFromLocalStorage.js', './dev/static/js/modules/toInfoPopup.js', './dev/static/js/modules/filter.js'])
            .pipe(concat('main.js'))
            .pipe(babel())
            .pipe($.gulp.dest(scriptsPATH.ouput))
    });

};
