"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Paint_1 = __importDefault(require("./Paint"));
const Rims_1 = __importDefault(require("./Rims"));
const Car_1 = require("./Car");
let bmw = new Car_1.Car();
console.log(bmw.specs()); // prints : make : BMW
let paint = new Paint_1.default(bmw);
console.log(paint.specs()); // prints :| Chrome paint| make : BMW
let rims = new Rims_1.default(paint); //prints :| Chrome paint| make : BMW| 16 inch rims ?
console.log(rims.specs());
