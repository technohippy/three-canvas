module.exports = function(grunt) {
  grunt.initConfig({
    'connect': {
      local: {
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
        clone: 'bower_components/three-canvass'
      },
      src: [
        'app/**/*',
        '!app/bower_components/three-canvass/**/*'
      ]
    },
    'replace': {
      example: {
        src: ['app/*'],
        dest: 'dist/',
        replacements: [{
          from: 'bower_components',
          to: '..'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-text-replace');

  grunt.registerTask('build',  ['replace']);
  grunt.registerTask('deploy', ['gh-pages']);
  grunt.registerTask('server', ['connect']);
};
