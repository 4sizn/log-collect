// @ts-nocheck
/**
 * 사유 : ecma의 console과 node의 console log는 비슷해보이지만, 메서드 및 매개변수, 반환값들이 달라 타입정의가 불문명함.
 * 방안1: 환경별 프로젝트 별도구현.
 * 방안2: @ts-nocheck
 * 결론: 큰 소스가 아님으로 방안 2채택.
 */

/**
 * console 매서드를 여기서 가공하지 않고, method와 인수를 받아, consumer쪽에서 가공하도록 처리하자.
 */

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const consoleHistory = [] as { method: string; args: any[] }[];
export const originalConsole = {};

for (const key in console) {
  if (typeof console[key] === "function") {
    originalConsole[key] = console[key];
  }
}

for (const key in console) {
  if (typeof console[key] === "function") {
    console[key as keyof Console] = (...args) => {
      originalConsole[key as keyof Console].apply(console, args);
      consoleHistory.push({ method: key, args });
    };
  }
}
