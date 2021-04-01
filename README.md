# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

The goal here is to try to reproduce the conditions that led to
https://github.com/sonatype-nexus-community/copy-modules-webpack-plugin/issues/25 . I am not familiar with newer
versions of angular, and the necessary configuration here is slightly off of the standard (well documented) path, so
it's a bit rough. It doesn't currently build to a point where the demo UI loads in the browser, but it does build
in the sense that webpack doesn't report errors, and the copy-module-webpack-plugin does get run.

This repo DOES NOT currently succeed in reproducing the issue reported against copy-modules-webpack-plugin. I will
work with the reporter of that issue to try and find the discrepancy.

## Development server

Run `npm run webpack-serve` for a dev server. Navigate to `http://localhost:4043/`. Note that the app does not
actually display currently, but the webpack build runs successfully.
