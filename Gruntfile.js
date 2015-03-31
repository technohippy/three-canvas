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
      src: [
        'dist/**/*',
        '!app/bower_components/three-canvass/**/*'
      ]
    },
    'copy': {
      bower: {
        expand: true,
        cwd: 'app/bower_components',
        src: ['**'],
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

  grunt.registerTask('build',  ['copy', 'replace']);
  grunt.registerTask('deploy', ['gh-pages']);
  grunt.registerTask('server', ['connect']);
};
