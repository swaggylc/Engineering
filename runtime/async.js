// 使用async、await语法糖的函数
async function asyncFunction() {
  const result = await someAsyncOperation();
  console.log(result);
}

function someAsyncOperation() {
  return Promise.resolve("异步操作完成");
}

// 调用async函数
asyncFunction();
