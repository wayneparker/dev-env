My Very Own Development Environment
==============================================

*Wayne Parker  
<wayne@wparker.io>  
Project begun: 2016-05-26*

Purpose
------------

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

Priorities, in order:

* (√) folder structure: /src > /dev > /dist, styles/ > css/, scripts/ > js/, etc.
* Stub files for CSS, JS, HTML
* gulp copy tasks and gulp watch
* file copies to /dev: css/, js/, files/, media/, fonts/, 
* production file push to /dist
* sass, including vendor CSS and sourcemaps


Directory Structure
-------------------

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
- **/staging/**		(local compiled site for testing & review)
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
-------------------

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
