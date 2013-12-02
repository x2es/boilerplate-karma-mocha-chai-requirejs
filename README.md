
Boilerplate for Karma-runner + mocha + chai + requirejs
=======================================================

This is boilerplate with ready to TDD:
 * karma-runner: http://karma-runner.github.io/0.8/index.html
 * mocha: http://visionmedia.github.io/mocha/
 * chai: http://chaijs.com/
 * RequireJS: http://requirejs.org/

See details: http://karma-runner.github.io/0.8/plus/RequireJS.html

## Directories layout

    $ tree
    .
    ├── js
    │   ├── lib         => place for source files
    │   ├── spec        => place for *_spec.js files
    │   │   └── sample_spec.js
    │   └── vendor      => place for vendor libs
    ├── karma.conf.js   => karma-runner configuration
    ├── karma_html      => html-reporter output (appears after first run)
    ├── package.json
    ├── test            => according to mocha.opts specific this directory contains:
    │   ├── mocha.opts    >> default ARGV opts for mocha console command (not used for front-end js)
    │   └── test-main.js  >> requirejs entry point for tests
    ├── README.md
    └── UserStories.md  => mind-set for building this project

## Setup

    $ npm install

## Start karma

    $ karma start



