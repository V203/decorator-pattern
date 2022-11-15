
import Paint from "./Paint";
import Rims from "./Rims";
import {Car} from "./Car"


let bmw = new Car();
console.log(bmw.specs());// prints : make : BMW

let paint = new Paint(bmw);
console.log(paint.specs());// prints :| Chrome paint| make : BMW

let rims = new Rims(paint) //prints :| Chrome paint| make : BMW| 16 inch rims ?
console.log(rims.specs());




