"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const Paint_1 = __importDefault(require("./Paint"));
const Rims_1 = __importDefault(require("./Rims"));
class Car {
    specs() {
        return `Make: BMW`;
    }
}
exports.Car = Car;
let bmw = new Car();
let paint = new Paint_1.default(bmw);
let rims = new Rims_1.default(paint);
// console.log(bmw.specs());
console.log(rims.specs());
