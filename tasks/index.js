// Modules.
let gulp = require('gulp'),
    requireDir = require('require-dir'),
    runSequence = require('gulp-run-sequence');

// Require all tasks within tasks directory, including subfolders.
requireDir('./build', { recurse: true });
requireDir('./copy', { recurse: true });
requireDir('./test', { recurse: true });

// gulp command.
gulp.task('default', () => {
    'use strict';

    runSequence(
        'build'
    );
});

// gulp build command.
gulp.task('build', () => {
    'use strict';

    runSequence(
        'copy:lib',
        'build:less',
        'browserify:js'
    );
});

// gulp test command.
gulp.task('test', () => {
    'use strict';

    runSequence(
        'test:checkstyle',
        'test:lint',
        'test:karma'
    );
});
