My Very Own Development Environment
===

*Wayne Parker*  
*wayne@wparker.io>*  
*Project begun: 2016-05-26*

Current Status
---

* Use `gulp-concat-vendor` instead of my own code
* Got `babel installed` and apparently working; **need some ES6 code to monkey with**.

Priorities, in order:

* Add gulp tasks to copy static assets
* Flesh out source files with comments, SassDoc/JssDoc, etc.
* Add gulp-todo to extract tasks
* Add gulp-strip-debug for production JS
* Add JSDoc &amp; SassDoc to generate documentation
* Add CSS/JS hash-naming and HTML replacement
* Incorporate `browsersync`

Done:

* (√) Folder structure: /src > /dev > /dist, styles/ > css/, scripts/ > js/, etc.
* (√) Stub files for CSS, JS, HTML
* (√) Add gulp copy tasks and gulp watch
* (√) File copies to /dev: css/, js/, files/, media/, fonts/
* (√) Add sass/scss compilation
* (√) CSS sourcemaps
* (√) Minified &amp; sourcemapped CSS to staging
* (√) Compile ES6 / multiple JS to app.js, with `gulp-babel` & `gulp-uglify`
* (√) Fix `gulp-uglify`! (Not sure what happened, but it's working now.)
* (√) Add gulp tasks to collect vendor CSS &amp; JS from `bower_components`, and push to staging & production
* (√) Replace separate staging / production tasks with `--production` flag & `gulp-util`
* (√) Add gulp task to optimize / copy image assets (ONLY changed!!!)



Purpose &amp; Goals
---

Practice setting up a complex project infrastructure from scratch, and to use the results as a template for future projects.

Also, I have too much time on my hands.

Tools I’d like to incorporate:

* **gulp**, to automate the build steps
* **sass**, duh
* **browsersync**, to auto-refresh browsers
* **eslint** (rather than jshint, which has been problematic)
* **babel** + es2015
* unit testing (jasmine? mocha?)
* jade?
* auto-versioning via git?


Directory Structure
---

(Two popular standards: src / dev / dist, and assets / staging / production)
- **/assets/**		(source files for *everything*)  
	- index.html
	- styles/ 	(.sass, .scss, .less, .stylus, whatevs)
	- scripts/	(.js, .es6, .coffee, whatevs)
		- main.*	
		- app/
		- components/
		- vendor/	(or, compile from /bower_components/?)
		- …etc
	- css/			(.css; compiled from /assets/styles/)
		- styles.css
		- styles.css.map
	- js/			(.js; compiled from /assets/scripts/)
		- app.js
		- app.js.map
		- vendor.js
		- vendor.js.map
	- templates/	(.jade, .kit, whatevs)
	- images/		(source images)
	- img/			(optimized images)
	- docs/		(binary files: .pdf, .docx, etc.)
	- media/		(audio, video, etc.)
	- fonts/		(web fonts)
- **/staging/**		(local compiled site for testing &amp; review)
	- index.html
	- pages/		(partials for SPA views, compiled from /assets/templates)
	- css/			(minified & sourcemapped)
		- styles.min.css
		- styles.min.css.map
	- js/			(uglified & sourcemapped)
		- app.min.js
		- app.min.js.map
		- vendor.min.js
		- vendor.min.js.map
	- img/			(optimized from /assets/img/)
	- …etc
- **/production/**	(final optimized site, ready for deployment)
	- index.html
	- pages/		(minified)
	- css/			(NO sourcemaps!!!)
		- styles.min.css
	- js/			(NO sourcemaps!!!)
		- app.min.js
		- vendor.min.js
	- img/
	- …etc
- /bower_components/
- /node_modules/
- .gitignore
- .editorconfig
- package.json
- README.md (you’re lookin’ at it)


Step by Step Set-up
---

1. Create `README.md` at the project root. (You're lookin’ at it.)
1. Set up version control: `git init`.  
   WebStorm/PhpStorm will kvetch about an “Unregistered VCS root detected”; go ahead and click “Add root” and get on with your life.
1. Install “The Compleat `.gitignore`.”  It includes tons of exclusions for crap files created by lots of OSes, IDEs and other software.
1. Set up node & npm. I have it installed globally, so all we need is:  
   `npm init` and answer the questions. We can always edit `package.json` later.
1. Set up bower: `npm install -D bower`   
1. Install gulp: `npm install -D gulp`
1. Create a “starter” `gulpfile.js`:  
	> 'use strict';  
	> var gulp = require('gulp');  
	> gulp.task('default', function() {  
	>     // place code for your default task here  
	> });
1. This would be a good point do do an initial commit to `git`.
