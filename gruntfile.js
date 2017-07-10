module.exports = function(grunt){
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        mustache_render: {
            options: {
            // Task global options go here 
            },
            your_target: {
            options: {
                // Target specific options go here 
            },
            files : [
                {
                data: "assets/icons-4-7-0.json", 
                template: "index.mustache",
                dest: "index.html" 
                }
            ]
            },
        },
        
        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: ['*.html']
            }
        },
        
    uglify: {
        build: {
            files: {
                'build/js/fa-cheatsheet.min.js': ['assets/js/*.js']
            }
        }
    }, 
        
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'build/css',
          ext: '.min.css'
        }]
      }
    },
                     
   watch: {
    mustache: {
        files: ['*.mustache'],
        tasks: ['mustache_render']
    },
    html: {
        files: ['*.html'],
        tasks: ['htmlhint']
    },
    js: {
        files: ['assets/js/*.js'],
        tasks: ['uglify']
    },
    css: {
        files: ['assets/css/*.css'],
        tasks: ['cssmin']
    }
}   

    });

    grunt.loadNpmTasks('grunt-mustache-render');
    grunt.registerTask('default', []);

};