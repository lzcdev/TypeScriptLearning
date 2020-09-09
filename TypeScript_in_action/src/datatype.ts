// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, '5']

// 元组
let tupe: [number, string] = [0, '1']
tupe.push(2) // 越界
// console.log(tupe)

// 函数
let add = (x: number, y: number): number => x + y // 返回可以省略，类型推断
// 函数类型
let compute: (x: number, y: number) => number
compute = (a, b) => a + b;

// 对象
let obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 2

// symbol 具有唯一的值
let s1: symbol = Symbol()
let s2 = Symbol()
// console.log(s1 === s2)

// undefined, null
let un: undefined = undefined
let nu: null = null

// void
let noReturn = () => { }

// any
let x

// never
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while (true) { }
}

