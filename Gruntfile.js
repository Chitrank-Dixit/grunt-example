// this is the grunt file
module.exports = function(grunt) {
	// 1. All configuration goes her
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		concat: {
			dist: {
				src: [
					'bower_components/bootstrap/dist/js/*.js', // All JS in the libs folder
					'bower_components/bootstrap/js/*.js'
					//'js/global.js'  // This specific file
				],
				dest: 'js/build/production.js',
			}
		},
		uglify: {
			build: {
				src: 'js/build/production.js',
				dest: 'js/build/production.min.js'
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'bower_components/images/',
					src: ['**/*.{png, jpg, gif}'],
					dest: 'images/build/'
				}]
			}
		},
		replace: {
			example: {
				src: ['bower_components/bootstrap/js/test_replace.js'],
				dest: 'replace/build/test_replace/',
				replacements: [{
					from: 'localhost:8000',
					to: '/'
				}]
			}
		},
		watch: {
			scripts: {
				files: ['js/*.js'], 
				tasks: ['concat','uglify'],
				options: {
					spawn: false,
				},
			}
		}
		
    });
    
    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-text-replace');
    
    // 4. Where we tell Grunt what to do when we type  "grunt" into the command shell
    grunt.registerTask('default',['concat', 'uglify', 'imagemin','replace', 'watch']);
};
