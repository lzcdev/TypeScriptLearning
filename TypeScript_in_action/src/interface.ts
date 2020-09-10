import { type } from "jquery"

interface List {
  readonly id: number,
  name: string,
  age?: number
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
  })
}

let result = {
  data: [
    { id: 1, name: 'A' },
    { id: 2, name: 'B', age: 20 }
  ]
}
render(result)


interface StringArray {
  [index: number]: string
}
let chars: StringArray = ['A', 'B']

interface Names {
  [x: string]: string
}


// let add: (x: number, y: number) => number
// interface Add {
//   (x: number, y: number): number
// }
// 类型别名
type Add = (x: number, y: number) => number
let add: Add = (a, b) => a + b

// 混合类型
interface Lib {
  (): void;
  version: string;
  doSomething(): void
}
function getLib() {
  let lib: Lib = (() => { }) as Lib;
  lib.version = '1.0';
  lib.doSomething = () => { }
  return lib
}

let lib1 = getLib()
lib1();
lib1.doSomething()
let lib2 = getLib()
