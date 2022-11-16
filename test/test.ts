import assert from "assert"
import { Car } from "../Car";

import Paint from "../Paint";
import Rims from "../Rims";
import IcarModification from "../IcarModification";



describe("Car alterations using the decorator pattern", () => {

    it("The specs method should return the type of 'Make : BMW'", () => {
        let bmwStandardEdition = new Car();

        let actual: string = bmwStandardEdition.specs();
        let expected: string = "| Make: BMW ";

        assert.strictEqual(actual, expected)
    })

    it("The the specs method should return make and paint type of the vehicle", () => {

        let bmwStandardEdition = new Car();
        let bmwPainted = new Paint(bmwStandardEdition)

        let actual: string = bmwPainted.specs();
        let expected: string = " | Chrome paint | Make: BMW  | ";

        assert.strictEqual(actual, expected)
    })

    it("The specs Method should state that the bmw has 16-inch rims and that the exterior of the car is coated in chrome.", () => {

        let bmwStandardEdition = new Car();
        let bmwPainted = new Paint(bmwStandardEdition)
        let bmwPaintedWithRims = new Rims(bmwPainted)

        let actual: string = bmwPaintedWithRims.specs();
        let expected: string = "| 16 inch rims  | Chrome paint | Make: BMW  | |";

        assert.strictEqual(actual, expected)
    })


    it("The specs method should only return chrome painting .", () => {
       
        let icar:IcarModification = {specs(){return ""}}
        
        let ChromePainted = new Paint(icar)
        

        let actual: string = ChromePainted.specs()
        let expected: string = " | Chrome paint  | ";

        assert.strictEqual(actual, expected)
    })


    it("The specs method should only return 16 inch rims.", () => {
       
        let icar:IcarModification = {specs(){return ""}}        
        let rims = new Rims(icar)
        
        let actual: string = rims.specs()
        let expected: string = "| 16 inch rims |";

        assert.strictEqual(actual, expected)
    })


})