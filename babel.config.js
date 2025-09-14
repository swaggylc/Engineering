module.exports = {
  // 预设
  presets: [
    [
      "@babel/preset-env",
      {
        // 配置项
        targets: {
          chrome: "88",
          ie: "11",
        },
        // 插件
        useBuiltIns: "usage", // 按需引入
        corejs: "3.45.1", // core-js版本
      },
    ],
  ],
};
