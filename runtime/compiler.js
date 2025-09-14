const generator = require("regenerator");
const fs = require("fs");
const path = require("path");

const source = fs.readFileSync(path.resolve(__dirname, "./async.js"), "utf-8");

const result = generator.compile(source, {
  includeRuntime: true,
});

fs.writeFileSync(path.resolve(__dirname, "./async-compiled.js"), result.code);
