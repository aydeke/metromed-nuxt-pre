require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0);
const { Nuxt, Builder } = __webpack_require__(2);
const api = __webpack_require__(3);

const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

app.set('port', port);

// Import API Routes
app.use('/api', api);

app.post('/appointment', (req, res) => {
  console.log('/appointment ===============================>');
});

// Import and Set Nuxt.js options
let config = __webpack_require__(5);
config.dev = !("development" === 'production');

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  console.log('Server listening on http://' + host + ':' + port); // eslint-disable-line no-console
}
start();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const { Router } = __webpack_require__(0);

const users = __webpack_require__(4);

const router = Router();

// Add USERS Routes
router.use(users);

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const { Router } = __webpack_require__(0);

const router = Router();

// Mock Users
const users = [{ name: 'Alexandre' }, { name: 'Pooya' }, { name: 'Sébastien' }];

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users);
});

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < users.length) {
    res.json(users[id]);
  } else {
    res.sendStatus(404);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const nodeExternals = __webpack_require__(6);

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-vuetify',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }]
  },

  router: {
    middleware: 'i18n'
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/vuetify', '~/plugins/i18n.js'],

  generate: {
    routes: ['/', '/about', '/ru', '/ru/about']
  },

  css: ['~/assets/style/app.styl'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Nuxt.js modules
  */
  modules: [
  // Doc: https://github.com/nuxt-community/axios-module#usage
  '@nuxtjs/axios'],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['~/plugins/vuetify.js'],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      if (ctx.isServer) {
        config.externals = [nodeExternals({ whitelist: [/^vuetify/] })];
      }
    }
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(7);

var scopedModuleRegex = new RegExp('@[a-zA-Z0-9][\\w-.]+\/[a-zA-Z0-9][\\w-.]+([a-zA-Z0-9.\/]+)?', 'g');

function getModuleName(request, includeAbsolutePaths) {
    var req = request;
    var delimiter = '/';

    if (includeAbsolutePaths) {
        req = req.replace(/^.*?\/node_modules\//, '');
    }
    // check if scoped module
    if (scopedModuleRegex.test(req)) {
        // reset regexp
        scopedModuleRegex.lastIndex = 0;
        return req.split(delimiter, 2).join(delimiter);
    }
    return req.split(delimiter)[0];
}

module.exports = function nodeExternals(options) {
    options = options || {};
    var whitelist = [].concat(options.whitelist || []);
    var binaryDirs = [].concat(options.binaryDirs || ['.bin']);
    var importType = options.importType || 'commonjs';
    var modulesDir = options.modulesDir || 'node_modules';
    var modulesFromFile = !!options.modulesFromFile;
    var includeAbsolutePaths = !!options.includeAbsolutePaths;

    // helper function
    function isNotBinary(x) {
        return !utils.contains(binaryDirs, x);
    }

    // create the node modules list
    var nodeModules = modulesFromFile ? utils.readFromPackageJson(options.modulesFromFile) : utils.readDir(modulesDir).filter(isNotBinary);

    // return an externals function
    return function(context, request, callback){
        var moduleName = getModuleName(request, includeAbsolutePaths);
        if (utils.contains(nodeModules, moduleName) && !utils.containsPattern(whitelist, request)) {
            if (typeof importType === 'function') {
                return callback(null, importType(request));
            }
            // mark this module as external
            // https://webpack.js.org/configuration/externals/
            return callback(null, importType + " " + request);
        };
        callback();
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(8);
var path = __webpack_require__(9);

exports.contains = function contains(arr, val) {
    return arr && arr.indexOf(val) !== -1;
}

var atPrefix = new RegExp('^@', 'g');
exports.readDir = function readDir(dirName) {
    if (!fs.existsSync(dirName)) {
        return [];
    }

    try {
        return fs.readdirSync(dirName).map(function(module) {
            if (atPrefix.test(module)) {
                // reset regexp
                atPrefix.lastIndex = 0;
                try {
                    return fs.readdirSync(path.join(dirName, module)).map(function(scopedMod) {
                        return module + '/' + scopedMod;
                    });
                } catch (e) {
                    return [module];
                }
            }
            return module
        }).reduce(function(prev, next) {
            return prev.concat(next);
        }, []);
    } catch (e) {
        return [];
    }
}

exports.readFromPackageJson = function readFromPackageJson(options) {
    if(typeof options !== 'object') {
        options = {};
    }
    // read the file
    var packageJson;
    try {
        var fileName = options.fileName || 'package.json';
        var packageJsonString = fs.readFileSync(path.join(process.cwd(), './' + fileName), 'utf8');
        packageJson = JSON.parse(packageJsonString);
    } catch (e){
        return [];
    }
    // sections to search in package.json
    var sections = ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies'];
    if(options.include) {
        sections = [].concat(options.include);
    }
    if(options.exclude) {
        sections = sections.filter(function(section){
            return [].concat(options.exclude).indexOf(section) === -1;
        });
    }
    // collect dependencies
    var deps = {};
    sections.forEach(function(section){
        Object.keys(packageJson[section] || {}).forEach(function(dep){
            deps[dep] = true;
        });
    });
    return Object.keys(deps);
}

exports.containsPattern = function containsPattern(arr, val) {
    return arr && arr.some(function(pattern){
        if(pattern instanceof RegExp){
            return pattern.test(val);
        } else if (typeof pattern === 'function') {
            return pattern(val);
        } else {
            return pattern == val;
        }
    });
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map