[![Node.js CI](https://github.com/V203/decorator-pattern/actions/workflows/node.js.yml/badge.svg)](https://github.com/V203/decorator-pattern/actions/workflows/node.js.yml)

# Decorator pattern


## What is a decorator pattern?

Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors. The decorator pattern has the ability to alter code with minimal code adjustment effects as possible in which we discuss in depth shortly.

## Advatages of the decorator pattern
Since changes are made by coding new classes, it improves the object's extensibility. Instead of incorporating all of the behavior into the object's code, it allows you to create a series of functionalities from specific classes, which simplifies the coding process.


## Example

Imagine a decorator pattern as a villain who absorbs superheroes and gains their powers. We'll make an example of this below. The villain class will have two methods called useSuperPower() that will allow him to use both his standard attack, the spin kick, and the superhero abilities of those he has absorbed.

```
let villain = new Villain()

console.log(villain.useSuperPower())/prints : spin kick

let spiderman = new Spider();

spiderman.userSuperPower()// prints web shoot 

villain.absorb(spiderman)//and now the villain can use a combo of spin kick and shoot spider webs

villain.useSuperPower();// prints : spin kick | shoot webs

let superman = new Superman();

super.useSuperPower();//prints ice breath and laser eyes

villain.absorb(superman);

villain.useSuperPower();// prints : spin kick | shoot webs | ice breath and laser eyes|

```




