"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
describe("Test for the decorator pattern", () => {
    it("Dummy test 1 + 1", () => {
        let actual = "1";
        let expected = "1";
        (0, assert_1.default)(actual, expected);
    });
});
