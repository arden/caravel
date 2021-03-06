module.exports = function (grunt) {
    'use strict';

    var version = '0.1.1';

    // Project configuration
    grunt.initConfig({
        coffee: {
            dist: {
                options: {
                    bare: true,
                    sourceMap: true
                },
                files: {
                    'caravel.js': 'caravel.coffee'
                }
            }
        },
        coffeelint: {
            dist: {
                options: {

                },
                files: {
                    src: [ 'caravel.coffee' ]
                }
            }
        },
        uglify: {
            dist: {
                options: {
                    mangle: false,
                    compression: true,
                    preserveComments: false,
                    banner: '/** Caravel ' + version + ' - https://github.com/coshx/caravel */\n'
                },
                files: {
                    'caravel.min.js': 'caravel.js'
                }
            }
        },
        watch: {
            coffee: {
                options: {
                    atBegin: true,
                    interrupt: true
                },
                files: '*.coffee'
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-coffeelint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task
    grunt.registerTask('default', ['coffeelint', 'coffee']);
    grunt.registerTask('release', ['default', 'uglify']);
};

