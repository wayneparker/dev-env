'use strict';

//
// ## Imports

// General
var gulp = require('gulp');
var concat = require('gulp-concat');

// Styles
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Scripts
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');

//
// ## Paths
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
				 '!' + src + '/styles/**/*_.sass', // TODO: do I need to manually exclude Sass partials?
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


//
// ## Task Definitions

// push static / compiled HTML to staging
gulp.task('html', function() {
	return gulp.src(paths.src.root + '/**/*.html')
		.pipe(gulp.dest(paths.dev.root));
});

// Styles

// compile sass/scss source to css
gulp.task('sass', function() {
	return gulp.src(paths.src.styles.sass)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('styles.css'))
		.pipe(autoprefixer('last 2 versions')) // TODO: Read autoprefixer docs, want finer control over browser compat
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.src.css));
});
// could do the same for Less source if I wanted

// push CSS to Staging
gulp.task('css', ['sass'], function() {
	return gulp.src(paths.src.css + '/**/*.css') // Don’t need to concat, done by `gulp sass` already
		.pipe(sourcemaps.init())
		.pipe(concat('styles.min.css'))
		.pipe(cleancss())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.dev.css));
});

// Scripts v1.0

// lint JS source with ESLint
gulp.task('lint', function () {
	return gulp.src([
		paths.src.scripts.js,
		paths.src.scripts.es6,
		'gulpfile.js' // add any other JS-format config files as needed
	])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

// compile JS / ES6 source to JS (ES5)
gulp.task('scripts', ['lint'], function() {
	return gulp.src([
		paths.src.scripts.js,
		paths.src.scripts.es6
	])
		.pipe(sourcemaps.init())
		.pipe(babel({ presets: ['es2015'] }))
		.pipe(concat('app.js'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.src.js))
});

// push JavaScript to Dev
gulp.task('js', ['scripts'], function() {
	return gulp.src([paths.src.js + '/**/*']) // TODO: need to exclude vendor, process separately
		.pipe(sourcemaps.init())
		//.pipe(uglify()) // TODO: why is uglify børked?!?!?!?
		.pipe(concat('app.min.js')) // TODO: `gulp scripts` is already concatting app JS; delete from `gulp js`
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.dev.js));
});

// Static Assets

// Push to Production

// push CSS to Production
gulp.task('css-prod', ['sass'], function() {
	return gulp.src(paths.src.css + '/**/*.css')
		.pipe(concat('styles.min.css'))
		.pipe(cleancss())
		.pipe(gulp.dest(paths.prod.css));
});


//
// ## Watch for Changes

gulp.task('watch', function () {
	gulp.watch(paths.src.root + '/**/*.html', ['html']);
	gulp.watch(paths.src.styles.sass, ['sass', 'css']);
	gulp.watch(paths.src.css + '/**/*', ['css']);
	gulp.watch(paths.src.scripts.js, ['js']);
	gulp.watch(paths.src.scripts.es6, ['js']);
	gulp.watch(paths.src.js + '/**/*', ['js']);
	//gulp.watch(paths.src.img + '/**/*', ['img']);
});


gulp.task('default', ['html', 'css', 'js', 'img', 'fonts', 'docs', 'media'], function() {
  // place code for your default task here
});
