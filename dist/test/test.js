"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const Car_1 = require("../Car");
const Paint_1 = __importDefault(require("../Paint"));
const Rims_1 = __importDefault(require("../Rims"));
describe("Car alterations using the decorator pattern", () => {
    it("The specs method should return the type of 'Make : BMW'", () => {
        let bmwStandardEdition = new Car_1.Car();
        let actual = bmwStandardEdition.specs();
        let expected = "| Make: BMW ";
        assert_1.default.strictEqual(actual, expected);
    });
    it("The the specs method should return make and paint type of the vehicle", () => {
        let bmwStandardEdition = new Car_1.Car();
        let bmwPainted = new Paint_1.default(bmwStandardEdition);
        let actual = bmwPainted.specs();
        let expected = " | Chrome paint | Make: BMW  | ";
        assert_1.default.strictEqual(actual, expected);
    });
    it("The specs Method should state that the bmw has 16-inch rims and that the exterior of the car is coated in chrome.", () => {
        let bmwStandardEdition = new Car_1.Car();
        let bmwPainted = new Paint_1.default(bmwStandardEdition);
        let bmwPaintedWithRims = new Rims_1.default(bmwPainted);
        let actual = bmwPaintedWithRims.specs();
        let expected = "| 16 inch rims  | Chrome paint | Make: BMW  | |";
        assert_1.default.strictEqual(actual, expected);
    });
    it("The specs method should only return chrome painting .", () => {
        let icar = { specs() { return ""; } };
        let ChromePainted = new Paint_1.default(icar);
        let actual = ChromePainted.specs();
        let expected = " | Chrome paint  | ";
        assert_1.default.strictEqual(actual, expected);
    });
    it("The specs method should only return 16 inch rims.", () => {
        let icar = { specs() { return ""; } };
        let rims = new Rims_1.default(icar);
        let actual = rims.specs();
        let expected = "| 16 inch rims |";
        assert_1.default.strictEqual(actual, expected);
    });
});
