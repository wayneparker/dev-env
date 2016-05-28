'use strict';

// Imports
var gulp = require('gulp');

// Styles
var sass = require('gulp-sass');

// Paths
var
	src =  'assets',
	dev =  'staging',
	prod = 'production'
	;
var paths = {
	src: {
		root:      src,
		styles: {
			sass: [
				       src + '/styles/**/*.sass',
				       src + '/styles/**/*.scss',
				 '!' + src + '/styles/**/*_.sass',
				 '!' + src + '/styles/**/*_.scss'
			],
			less:    src + '/styles/**/*.less'
		},
		css:       src + '/css',
		scripts: {
			es6:     src + '/scripts/**/*.es6',
			js:      src + '/scripts/**/*.js',
			coffee:  src + '/scripts/**/*.coffee'
		},
		js:        src + '/js',
		images:    src + '/images',
		img:       src + '/img',
		docs:      src + '/docs',
		fonts:     src + '/fonts',
		media:     src + '/media',
		templates: src + '/templates'
	},

	dev: {
		root:      dev,
		css:       dev + '/css',
		js:        dev + '/js',
		img:       dev + '/img',
		docs:      dev + '/docs',
		fonts:     dev + '/fonts',
		media:     dev + '/media'
	},

	prod: {
		root:     prod,
		css:      prod + '/css',
		js:       prod + '/js',
		img:      prod + '/img',
		docs:     prod + '/docs',
		fonts:    prod + '/fonts',
		media:    prod + '/media'
	}
};


// Task Definitions

// Push compiled / static assets to Staging

gulp.task('html', function() {
	return gulp.src(paths.src.root + '/**/*.html')
		.pipe(gulp.dest(paths.dev.root));
});

// push CSS up to staging
gulp.task('css', function() {
	return gulp.src(paths.src.css + '/**/*.css')
		.pipe(gulp.dest(paths.dev.css));
});

// TODO: Add gulp-uglify with sourcemaps
gulp.task('js', function() {
	return gulp.src(paths.src.js + '/**/*')
		.pipe(gulp.dest(paths.dev.js));
});


//
//## Watch for Changes

gulp.task('watch', function () {
	gulp.watch(paths.src.root + '/**/*.html', ['html']);
	gulp.watch(paths.src.sass, ['sass']);
	gulp.watch(paths.src.css + '/**/*', ['css']);
	gulp.watch(paths.src.js + '/**/*', ['js']);
	//gulp.watch(paths.src.img + '/**/*', ['img']);
});


gulp.task('default', ['html', 'css', 'js', 'img', 'fonts', 'docs', 'media'], function() {
  // place code for your default task here
});
