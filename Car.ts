import IcarModification from "./IcarModification"

export class Car implements IcarModification{
    specs(): string {
        return `| Make: BMW `
    }
}
