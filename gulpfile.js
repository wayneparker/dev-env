'use strict';

// Imports
var gulp = require('gulp');

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

// TODO: Add scripts to compile / concat Scripts and Styles


// Push compiled / static assets to Staging

// TODO: Replace with gulp-minify with sourcemaps
gulp.task('css', function() {
	return gulp.src([paths.src.css + '/**.*'])
		.pipe(gulp.dest(paths.dev.css));
});

// TODO: Replace with gulp-uglify with sourcemaps
gulp.task('js', function() {
	return gulp.src([paths.src.js + '/**.*'])
		.pipe(gulp.dest(paths.dev.js));
});

gulp.task('img', function() {
	return gulp.src([paths.src.img + '/**.*'])
		.pipe(gulp.dest(paths.dev.img));
});

gulp.task('fonts', function() {
	return gulp.src([paths.src.fonts + '/**.*'])
		.pipe(gulp.dest(paths.dev.fonts));
});

gulp.task('docs', function() {
	return gulp.src([paths.src.docs + '/**.*'])
		.pipe(gulp.dest(paths.dev.docs));
});

gulp.task('media', function() {
	return gulp.src([paths.src.media + '/**.*'])
		.pipe(gulp.dest(paths.dev.media));
});


// Push to Production for deployment

// TODO: Replace with gulp-minify-css, NO source maps
gulp.task('css-prod', function() {
	return gulp.src([paths.src.css + '/**.*'])
		.pipe(gulp.dest(paths.prod.css));
});

// TODO: Replace with gulp-uglify, NO sourcemaps
gulp.task('js-prod', function() {
	return gulp.src([paths.src.js + '/**.*'])
		.pipe(gulp.dest(paths.prod.js));
});

gulp.task('img-prod', function() {
	return gulp.src([paths.src.img + '/**.*'])
		.pipe(gulp.dest(paths.prod.img));
});

gulp.task('fonts-prod', function() {
	return gulp.src([paths.src.fonts + '/**.*'])
		.pipe(gulp.dest(paths.prod.fonts));
});

gulp.task('docs-prod', function() {
	return gulp.src([paths.src.docs + '/**.*'])
		.pipe(gulp.dest(paths.prod.docs));
});

gulp.task('media-prod', function() {
	return gulp.src([paths.src.media + '/**.*'])
		.pipe(gulp.dest(paths.prod.media));
});



gulp.task('default', ['css', 'js', 'img', 'fonts', 'docs', 'media'], function() {
  // place code for your default task here
});
