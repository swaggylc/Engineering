const obj = {
  a: 1,
  b: 2,
};

obj?.a?.b;

const newArr = [1, 2].flatMap((item) => [item * 2]);
console.log(newArr);
