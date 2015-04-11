module.exports = function(grunt) {
  grunt.initConfig({
    'connect': {
      demo: {
        options: {
          port: 8123,
          base: 'app',
          open: true,
          keepalive: true
        }
      }
    },
    'gh-pages': {
      options: {
        base: 'demos'
      },
      src: [
        '**'
      ]
    },
    'copy': {
      'demos-bower': {
        expand: true,
        cwd: 'app/bower_components',
        src: ['**'],
        dest: 'demos'
      },
      'demos-images': {
        expand: true,
        cwd: 'app',
        src: ['images/**', 'models/**'],
        dest: 'demos'
      },
      'demos-styles': {
        expand: true,
        cwd: 'app',
        src: ['*.css'],
        dest: 'demos'
      },
      'demos-vendors': {
        expand: true,
        cwd: 'app',
        src: ['vendors/three.js/examples/**'],
        dest: 'demos'
      },
      'dist-bower': {
        expand: true,
        cwd: 'app/bower_components',
        src: [
          'core-component-page/core-component-page.html',
          'polymer/layout.html',
          'polymer/polymer.html',
          'polymer/polymer.js',
          'three.js-controls/src/*.js',
          'threejs/build/three.js'
        ],
        dest: 'dist'
      },
      'dist-vendors': {
        expand: true,
        cwd: 'app',
        src: ['vendors/three.js/examples/js/**'],
        dest: 'dist'
      }
    },
    'replace': {
      'demos-html': {
        src: ['app/*.html'],
        dest: 'demos/',
        replacements: [{
          from: 'bower_components',
          to: '.'
        }]
      },
      'dist-html': {
        src: ['app/three-canvas.html'],
        dest: 'dist/',
        replacements: [{
          from: 'bower_components',
          to: '.'
        }]
      }
    },
    pkg: grunt.file.readJSON('package.json'),
    release: {
      options: {
        file: 'bower.json', 
        npm: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-release');

  grunt.registerTask('build-demos',  ['copy:demos-bower', 'copy:demos-images', 'copy:demos-styles', 'copy:demos-vendors', 'replace:demos-html']);
  grunt.registerTask('build-dist',  ['copy:dist-bower', 'copy:dist-vendors', 'replace:dist-html']);
  grunt.registerTask('build',  ['build-demos', 'build-dist']);
  grunt.registerTask('deploy', ['gh-pages']);
  grunt.registerTask('server', ['connect']);
};
