"use strict";

require("core-js/modules/es.array.flat-map.js");
require("core-js/modules/es.array.unscopables.flat-map.js");
require("core-js/modules/es.object.to-string.js");
var _obj$a;
var obj = {
  a: 1,
  b: 2
};
obj === null || obj === void 0 || (_obj$a = obj.a) === null || _obj$a === void 0 || _obj$a.b;
var newArr = [1, 2].flatMap(function (item) {
  return [item * 2];
});
console.log(newArr);
