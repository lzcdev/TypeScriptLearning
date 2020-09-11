
interface Human {
  name: string;
  eat(): void;
}
// 接口只能约束类的功能成员
class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string
  eat() { }
}

interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

interface Boy extends Man, Child { }

let box: Boy = {
  name: '',
  run() { },
  eat() { },
  cry() { }
}

class Auto {
  state = 1
}
interface AutoInterface extends Auto {

}
class C implements AutoInterface {
  state = 1
}