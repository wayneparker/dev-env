'use strict';

// Imports
var gulp = require('gulp');

// Paths
var
	src = '/assets',
	dev = '/staging',
	prod = '/production'
	;
var paths = {
	src: {
		root:      src,
		styles: {
			sass: [
				       src + '/styles/**.*.sass',
				       src + '/styles/**.*.scss'
			],
			less:    src + '/styles/**.*.less'
		},
		css:       src + '/css',
		scripts: {
			es6:     src + '/scripts/**.*.es6',
			js:      src + '/scripts/**.*.js',
			coffee:  src + '/scripts/**.*.coffee'
		},
		js:        src + '/js',
		images:    src + '/images',
		img:       src + '/img',
		fonts:     src + '/fonts',
		docs:      src + '/docs',
		media:     src + '/media',
		templates: src + '/templates'
	},

	dev: {
		root:      dev,
		css:       dev + '/css',
		js:        dev + '/js',
		img:       dev + '/img',
		fonts:     dev + '/fonts',
		docs:      dev + '/docs',
		media:     dev + '/media'
	},

	prod: {
		root:     prod,
		css:      prod + '/css',
		js:       prod + '/js',
		img:      prod + '/img',
		fonts:    prod + '/fonts',
		docs:     prod + '/docs',
		media:    prod + '/media'
	}
};


// Task Definitions

gulp.task('default', function() {
  // place code for your default task here
});
