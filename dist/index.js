"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    specs() {
        return `Make: BMW`;
    }
}
exports.Car = Car;
// class Pain 
// class Modify implements IcarModification{
//     constructor(private icarModification:IcarModification){
//     }
//     specs(): string {
//         return `out ${this.icarModification.specs()}\n`
//     }
// }
class Paint {
    //   private  icarModification: IcarModification
    constructor(icarModification) {
        this.icarModification = icarModification;
    }
    specs() {
        //    console.log( this.icarModification.specs());       
        return " Chrome paint " + this.icarModification.specs();
    }
}
class Rims {
    constructor(icarModification) {
        this.icarModification = icarModification;
    }
    specs() {
        console.log();
        return " 16 inch rims " + this.icarModification.specs();
    }
}
let bmw = new Car();
let paint = new Paint(bmw);
let rims = new Rims(paint);
// console.log(bmw.specs());
console.log(rims.specs());
