import IcarModification from "./IcarModification";

export default class Rims implements IcarModification{
    constructor(private icarModification: IcarModification){

    }
    specs():string {
        console.log();
        
        return "| 16 inch rims " +  this.icarModification.specs() + "|"

    }
}