abstract class Animal {
  
}

class Dog {
  constructor(name: string) {
    this.name = name
  }
  name: string
  private pri() {}
  protected pro() {}
  readonly legs: number = 4
  static food: string = 'bones'
  run() { }
}
console.log(Dog.prototype)
// 内部属性在实例上，不在原型上
let dog = new Dog('lulu')
console.log(dog)
// dog.pri()

// 继承
class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name)
    this.color = color
  }
  color: string
}

// 修饰符
