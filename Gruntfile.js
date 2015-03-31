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
        base: 'dist'
      },
      src: [
        '**'
      ]
    },
    'copy': {
      bower: {
        expand: true,
        cwd: 'app/bower_components',
        src: ['**'],
        dest: 'dist'
      },
      images: {
        expand: true,
        cwd: 'app',
        src: ['images/**'],
        dest: 'dist'
      }
    },
    'replace': {
      html: {
        src: ['app/*.html'],
        dest: 'dist/',
        replacements: [{
          from: 'bower_components',
          to: '.'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-text-replace');

  grunt.registerTask('build',  ['copy:bower', 'copy:images', 'replace']);
  grunt.registerTask('deploy', ['gh-pages']);
  grunt.registerTask('server', ['connect']);
};
