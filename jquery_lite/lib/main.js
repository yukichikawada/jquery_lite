const JqueryLite = require('./jquery_lite');
const DOMNodeCollection = require('./dom_node_collection');

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
