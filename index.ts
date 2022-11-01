interface IcarModification {
    specs(): string;
}

export class Car implements IcarModification{
    specs(): string {
        return `Make: BMW`
    }
}


// class Pain 


// class Modify implements IcarModification{
    
//     constructor(private icarModification:IcarModification){
    

//     }

//     specs(): string {
//         return `out ${this.icarModification.specs()}\n`
//     }
// }


class Paint implements IcarModification{
//   private  icarModification: IcarModification

  constructor(private icarModification: IcarModification){
      

  }
    specs() {
    //    console.log( this.icarModification.specs());       
        return " Chrome paint " + this.icarModification.specs()
    }
    
}

class Rims implements IcarModification{
    constructor(private icarModification: IcarModification){

    }
    specs():string {
        console.log();
        
        return " 16 inch rims " +  this.icarModification.specs()

    }
}

let bmw = new Car();
let paint = new Paint(bmw);
let rims = new Rims(paint)


// console.log(bmw.specs());
console.log(rims.specs());

