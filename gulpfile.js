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

// TODO: Add scripts to compile / concat Scripts and Styles


// Push compiled / static assets to Staging

gulp.task('html', function() {
	return gulp.src(paths.src.root + '/**.*.html')
		.pipe(gulp.dest(paths.dev.root));
});

// TODO: Replace with gulp-minify with sourcemaps
gulp.task('css', function() {
	return gulp.src(paths.src.css + '/**.*')
		.pipe(gulp.dest(paths.dev.css));
});

// TODO: Replace with gulp-uglify with sourcemaps
gulp.task('js', function() {
	return gulp.src(paths.src.js + '/**.*')
		.pipe(gulp.dest(paths.dev.js));
});

gulp.task('img', function() {
	return gulp.src(paths.src.img + '/**.*')
		.pipe(gulp.dest(paths.dev.img));
});

gulp.task('docs', function() {
	return gulp.src(paths.src.docs + '/**.*')
		.pipe(gulp.dest(paths.dev.docs));
});

gulp.task('fonts', function() {
	return gulp.src(paths.src.fonts + '/**.*')
		.pipe(gulp.dest(paths.dev.fonts));
});

gulp.task('media', function() {
	return gulp.src(paths.src.media + '/**.*')
		.pipe(gulp.dest(paths.dev.media));
});


// Push to Production for deployment

gulp.task('html', function() {
	return gulp.src(paths.src.root + '/**.*.html')
		.pipe(gulp.dest(paths.prod.root));
});

// TODO: Replace with gulp-minify-css, NO source maps
gulp.task('css-prod', function() {
	return gulp.src(paths.src.css + '/**.*')
		.pipe(gulp.dest(paths.prod.css));
});

// TODO: Replace with gulp-uglify, NO sourcemaps
gulp.task('js-prod', function() {
	return gulp.src(paths.src.js + '/**.*')
		.pipe(gulp.dest(paths.prod.js));
});

gulp.task('img-prod', function() {
	return gulp.src(paths.src.img + '/**.*')
		.pipe(gulp.dest(paths.prod.img));
});

gulp.task('docs-prod', function() {
	return gulp.src(paths.src.docs + '/**.*')
		.pipe(gulp.dest(paths.prod.docs));
});

gulp.task('fonts-prod', function() {
	return gulp.src(paths.src.fonts + '/**.*')
		.pipe(gulp.dest(paths.prod.fonts));
});

gulp.task('media-prod', function() {
	return gulp.src(paths.src.media + '/**.*')
		.pipe(gulp.dest(paths.prod.media));
});


//
//## Watch for Changes

gulp.task('watch', function () {
	gulp.watch([paths.src.root + '**/*.html'], ['html']);
	gulp.watch([paths.src.css + '**/*'],       ['css']);
	gulp.watch([paths.src.js + '**/*'],        ['js']);
	gulp.watch([paths.src.img + '**/*'],       ['img']);
	gulp.watch([paths.src.docs + '**/*'],      ['docs']);
	gulp.watch([paths.src.fonts + '**/*'],     ['fonts']);
});


gulp.task('default', ['html', 'css', 'js', 'img', 'fonts', 'docs', 'media'], function() {
  // place code for your default task here
});
