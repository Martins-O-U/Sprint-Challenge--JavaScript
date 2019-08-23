// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakers {
    constructor(length, width,height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume(){
    let volume =  this.length * this.width * this.height;
    return volume;
    }
    surfaceArea(){
    let Area = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    return Area;
    }

}
const cuboids = new CuboidMakers(4,5,5)

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// class Person {
//     constructor(Name, Age) {
//       this.name = Name;
//       this.age = Age;
//       this.eatEdibles = true;
//       this.stomach = [];
//       this.poop = true;
//     }
//     greet() {
//         return `Hello, my name is ${this.name} and i am ${this.age} years old.`
//     }
//     pooping() {
//         if(this.poop === true) {
//             return this.stomach =[]
//           }    
//         }
//     eats(meals) {
//         if(this.eatEdibles === true){
//             return this.stomach.push(meals);
//           }else{
//             return `Can't eat that, please.`
//           };
//         };
//     }

//   const Humn = new Person("James", 40)
//   console.log("Name: "+ Humn.name);
//   console.log("Age: " + Humn.age);
//   console.log(Humn.greet());
//   console.log(Humn.eats());
//   console.log(Humn.pooping());


//   class Baby extends Person {
//     constructor(Name, Age, playWith) {
//       super(Name, Age);
//       this.favoriteToy = playWith;
//     }
//     playWithToy() {
//         return `I love playing with my ${this.favoriteToy}!`;
//       };
//   }
// const baby = new Baby("Cindy", 5, "Barbie")
// console.log(baby.playWithToy());