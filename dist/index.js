// src/Console/index.ts
function readFormat(data) {
  return originalConsole[data.method].apply(console, data.args);
}
var consoleHistory = [];
var originalConsole = {};
for (const key in console) {
  if (typeof console[key] === "function") {
    originalConsole[key] = console[key];
  }
}
for (const key in console) {
  if (typeof console[key] === "function") {
    console[key] = (...args) => {
      readFormat({ method: key, args });
      consoleHistory.push({ method: key, args });
    };
  }
}

export { readFormat, originalConsole, consoleHistory };
