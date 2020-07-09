/**
 *  类
*/
// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greet() {
//     return 'welcome to the world of ' + this.greeting
//   }
// }
// const myGreet = new Greeter('typeScript')
// console.log(myGreet.greet())


/** 
 * 继承
*/

// class Animal {
//   move(distanceInMeters: number = 0) {
//     console.log(`Animal moved ${distanceInMeters}m.`)

//   }
// }
// class Dog extends Animal {
//   bark() {
//     console.log('woof! woof!')
//   }
// }
// const dog = new Dog();
// dog.bark()
// dog.move(10)
// dog.bark()
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`)
  }
}
class Snake extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    console.log(super.move(distanceInMeters),'123')
  }
}
const smallSnake = new Snake('小🐍')
smallSnake.move(12)
console.log(smallSnake.name)