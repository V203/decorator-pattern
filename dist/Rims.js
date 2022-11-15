"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rims {
    constructor(icarModification) {
        this.icarModification = icarModification;
    }
    specs() {
        console.log();
        return " 16 inch rims " + this.icarModification.specs();
    }
}
exports.default = Rims;
