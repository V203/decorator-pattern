"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Paint {
    constructor(icarModification) {
        this.icarModification = icarModification;
    }
    specs() {
        return " Chrome paint " + this.icarModification.specs();
    }
}
exports.default = Paint;
