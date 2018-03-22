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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const JqueryLite = __webpack_require__(1);
const DOMNodeCollection = __webpack_require__(3);

window.$l = function (selector) {
  // if (selector instanceof 'HTMLElement') {
  //   const list = document.querySelectorAll(selector);
  // } else {
  //   // CSS selector
  //   const list = document.querySelectorAll(selector);
  // }
  const list = document.querySelectorAll(selector);
  const arr = Array.prototype.slice.call(list);
  return new DOMNodeCollection(arr);
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class JqueryLite {

}

module.exports = JqueryLite;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class DOMNodeCollection {

  constructor(elements) {
    this.elements = elements;
  }

  html(text) {
    if (typeof text === 'undefined') {
      return this.elements[0].innerHTML;
    } else {
      this.elements.forEach((el) => {
        el.innerHTML = text;
      });
    }
  }

  empty() {
    this.html('');
  }

  append(element) {
    let text = element.outerHTML;
    if (typeof element === 'string') {
      text = element;
    }
    if (typeof element === 'object') {
      text = this.appendDOMNodeElements(element.elements);
    }
    this.elements.forEach(el => {
      el.innerHTML += text;
    });
  }

  appendDOMNodeElements(elements) {
    let text = "";
    elements.forEach(el => {
      text += el.outerHTML;
    });

    return text;
  }
}

module.exports = DOMNodeCollection;

// const d = $l('.nav-list')
// d.html('str')
// d.empty()


/***/ })
/******/ ]);