(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.promx = factory());
}(this, (function () { 'use strict';

  function promix(promise) {
    return new Promise((resolve, reject) => {
      promise.then((res = null) => resolve([null, res]), (err = new Error('promix')) => resolve([err, null]));
    });
  }

  return promix;

})));
