/**
 * An environment provides predefined global variables.
 *
 * @see [Environments](https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments)
 */
export interface Environments extends Partial<Record<string, boolean>> {
  /**
   * Browser global variables.
   */
  browser?: boolean;

  /**
   * Node.js global variables and Node.js scoping.
   */
  node?: boolean;

  /**
   * CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
   */
  commonjs?: boolean;

  /**
   * Globals common to both Node.js and Browser.
   */
  'shared-node-browser'?: boolean;

  /**
   * Enable all ECMAScript 6 features except for modules (this automatically sets the `ecmaVersion` parser option to 6).
   */
  es6?: boolean;

  /**
   * Adds all ECMAScript 2016 globals and automatically sets the `ecmaVersion` parser option to 7.
   */
  es2016?: boolean;

  /**
   * Adds all ECMAScript 2017 globals and automatically sets the `ecmaVersion` parser option to 8.
   */
  es2017?: boolean;

  /**
   * Adds all ECMAScript 2018 globals and automatically sets the `ecmaVersion` parser option to 9.
   */
  es2018?: boolean;

  /**
   * Adds all ECMAScript 2019 globals and automatically sets the `ecmaVersion` parser option to 10.
   */
  es2019?: boolean;

  /**
   * Adds all ECMAScript 2020 globals and automatically sets the `ecmaVersion` parser option to 11.
   */
  es2020?: boolean;

  /**
   * Adds all ECMAScript 2021 globals and automatically sets the `ecmaVersion` parser option to 12.
   */
  es2021?: boolean;

  /**
   * Adds all ECMAScript 2022 globals and automatically sets the `ecmaVersion` parser option to 13.
   */
  es2022?: boolean;

  /**
   * Adds all ECMAScript 2023 globals and automatically sets the `ecmaVersion` parser option to 14.
   */
  es2023?: boolean;

  /**
   * Web workers global variables.
   */
  worker?: boolean;

  /**
   * Defines `require()` and `define()` as global variables as per the amd spec.
   */
  amd?: boolean;

  /**
   * Adds all of the Mocha testing global variables.
   */
  mocha?: boolean;

  /**
   * Adds all of the Jasmine testing global variables for version 1.3 and 2.0.
   */
  jasmine?: boolean;

  /**
   * Jest global variables.
   */
  jest?: boolean;

  /**
   * PhantomJS global variables.
   */
  phantomjs?: boolean;

  /**
   * Protractor global variables.
   */
  protractor?: boolean;

  /**
   * QUnit global variables.
   */
  qunit?: boolean;

  /**
   * jQuery global variables.
   */
  jquery?: boolean;

  /**
   * Prototype.js global variables.
   */
  prototypejs?: boolean;

  /**
   * ShellJS global variables.
   */
  shelljs?: boolean;

  /**
   * Meteor global variables.
   */
  meteor?: boolean;

  /**
   * MongoDB global variables.
   */
  mongo?: boolean;

  /**
   * AppleScript global variables.
   */
  applescript?: boolean;

  /**
   * Java 8 Nashorn global variables.
   */
  nashorn?: boolean;

  /**
   * Service Worker global variables.
   */
  serviceworker?: boolean;

  /**
   * Atom test helper globals.
   */
  atomtest?: boolean;

  /**
   * Ember test helper globals.
   */
  embertest?: boolean;

  /**
   * WebExtensions globals.
   */
  webextensions?: boolean;

  /**
   * GreaseMonkey globals.
   */
  greasemonkey?: boolean;
}
