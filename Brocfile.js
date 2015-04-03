'use strict';
/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
    storeConfigInMeta: false
});

var isProductionBuild = (app.env === 'production');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

/* C3 js */
app.import({
    development: 'bower_components/c3/c3.css',
    production: 'bower_components/c3/c3.min.css'
});


app.import({
    development: 'bower_components/d3/d3.js',
    production: 'bower_components/d3/d3.min.js'
});


app.import({
    development: 'bower_components/c3/c3.js',
    production: 'bower_components/c3/c3.min.js'
});



/* Animate.css */
app.import('bower_components/animate.css/animate.css');


/* materializer assets */
app.import({
    development: 'bower_components/materialize/dist/css/materialize.css',
    production: 'bower_components/materialize/dist/css/materialize.min.css'
});
app.import({
    development: 'bower_components/materialize/dist/js/materialize.js',
    production: 'bower_components/materialize/dist/js/materialize.min.js'
});

var materializeFontFiles = pickFiles('bower_components/materialize/dist/font', {
    srcDir: '/',
    files: ['**/*.woff', '**/*.eot', '**/*.svg', '**/*.ttf'],
    destDir: '/font'
});



/* Broccolli trees */
var appTree = app.toTree();
module.exports = mergeTrees([appTree, materializeFontFiles]);
