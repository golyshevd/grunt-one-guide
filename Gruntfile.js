'use strict';

var gruntTask = require('./grunt-one-guide');
var lintConf = require('./tools/lint-conf');

module.exports = function (grunt) {
    grunt.registerTask('lint', 'Lint\'N\'Style JavaScript', gruntTask);
    grunt.registerTask('default', ['lint']);

    grunt.initConfig({
        lint: {
            options: {
                patterns: lintConf.patterns,
                excludes: lintConf.excludes
            }
        }
    });
};
