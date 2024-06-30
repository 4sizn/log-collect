// src/Console/index.ts
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
      originalConsole[key].apply(console, args);
      consoleHistory.push({ method: key, args });
    };
  }
}
export {
  originalConsole,
  consoleHistory
};
