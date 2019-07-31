'use strict';

require('../../gulp/gulp-init.js');

const { sync, syncInit } = require('../../gulp/tasks/sync.js');
const { comb } = require('../../gulp/tasks/comb.js');
const { scss, scssDev, scssDC } = require('../../gulp/tasks/scss.js');
const { createStructure } = require('../../gulp/tasks/create-structure.js');

function watchFiles() {
    syncInit();
    $.gulp.watch($.path.scssFiles, $.gulp.series(scssDC));
    $.gulp.watch($.path.lessFiles, sync);
    $.gulp.watch($.path.jsFiles, sync);
    $.gulp.watch($.path.cssFiles, sync);
    $.gulp.watch($.path.htmlFiles, sync);
};

$.gulp.task('cs', createStructure);
$.gulp.task('scss', scssDC);
$.gulp.task('combScss', comb);
$.gulp.task('scssDev', scssDev);
$.gulp.task('watch', watchFiles);