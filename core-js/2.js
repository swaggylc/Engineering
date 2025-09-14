// 引入core-js来提供flatMap等新特性的polyfill
require("core-js/features/array/flat-map");

// 现在可以安全地使用flatMap方法了
const newArr = [1, 2].flatMap((item) => [item * 2]);
console.log("使用core-js polyfill后的结果:", newArr);

// 也可以引入其他需要的特性
require("core-js/features/array/flat");
require("core-js/features/array/from");

// 测试其他新特性
const nestedArr = [1, [2, 3], [4, 5]];
const flatArr = nestedArr.flat();
console.log("使用flat方法的结果:", flatArr);

const arrayFromSet = Array.from(new Set([1, 2, 2, 3]));
console.log("使用Array.from方法的结果:", arrayFromSet);
