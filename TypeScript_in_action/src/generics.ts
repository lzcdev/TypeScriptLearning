// function log<T>(value: T): T {
//   console.log(value)
//   return value
// }
// log<string[]>(['a', 'b'])
// log(['a', 'b'])

// type Log = <T>(value: T) => T
// let myLog: Log = log


// 泛型接口
// interface Log {
//   <T>(value: T): T
// }



// 泛型类与泛型约束
class Log<T> {
  run(value: T) {
    console.log(value)
    return value
  }
}
let log1 = new Log<number>()
log1.run(2)
let log2 = new Log()
log2.run('1')