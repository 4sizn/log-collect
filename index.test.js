import { describe, beforeEach, expect, test } from "bun:test";
import { consoleHistory } from "./src/Console/index.ts";
describe("Console history tracking", () => {
    beforeEach(() => {
        // Reset consoleHistory before each test
        consoleHistory.length = 0;
    });
    test("should track console.log calls", () => {
        console.log("Test log");
        expect(consoleHistory).toHaveLength(1);
        expect(consoleHistory[0]).toEqual({ method: "log", args: ["Test log"] });
    });
    test("should track console.error calls", () => {
        console.error("Test error");
        expect(consoleHistory).toHaveLength(1);
        expect(consoleHistory[0]).toEqual({
            method: "error",
            args: ["Test error"],
        });
    });
    test("should track console.warn calls", () => {
        console.warn("Test warn");
        expect(consoleHistory).toHaveLength(1);
        expect(consoleHistory[0]).toEqual({ method: "warn", args: ["Test warn"] });
    });
    test("should track console.info calls", () => {
        console.info("Test info");
        expect(consoleHistory).toHaveLength(1);
        expect(consoleHistory[0]).toEqual({ method: "info", args: ["Test info"] });
    });
    test("should track console.count calls", () => {
        console.count("Counter");
        console.count("Counter");
        expect(consoleHistory).toHaveLength(2);
        expect(consoleHistory[0]).toEqual({ method: "count", args: ["Counter"] });
        expect(consoleHistory[1]).toEqual({ method: "count", args: ["Counter"] });
    });
    test("should track multiple console method calls", () => {
        console.log("Test log");
        console.error("Test error");
        console.warn("Test warn");
        console.info("Test info");
        console.count("Counter");
        expect(consoleHistory).toHaveLength(5);
        expect(consoleHistory[0]).toEqual({ method: "log", args: ["Test log"] });
        expect(consoleHistory[1]).toEqual({
            method: "error",
            args: ["Test error"],
        });
        expect(consoleHistory[2]).toEqual({ method: "warn", args: ["Test warn"] });
        expect(consoleHistory[3]).toEqual({ method: "info", args: ["Test info"] });
        expect(consoleHistory[4]).toEqual({ method: "count", args: ["Counter"] });
    });
});
