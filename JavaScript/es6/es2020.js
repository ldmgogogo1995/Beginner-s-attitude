class Dog {
  #name = 'dogming'
  getName() {
    console.log(this.#name)
  }
}
const dog = new Dog();
class exDog extends Dog { }