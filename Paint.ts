import IcarModification from "./IcarModification"

export default class Paint implements IcarModification{

    constructor(private icarModification: IcarModification){
        
    }
      specs() {
        
          return " | Chrome paint " + this.icarModification.specs() +" | "
      }

     
      
  }     