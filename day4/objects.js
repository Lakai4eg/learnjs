//Object properties
let obj = {}

Object.defineProperty(obj, 'prop', {
  value: 15,
  configurable: true
})

console.log(obj.prop)
console.log(Object.getOwnPropertyDescriptor(obj, 'prop'))


//Сделать свойство неперечисляемым
let obj = {
  name: 'Alex',
  sayHi: () => {console.log(`Hi, ${name}`)}
}

Object.defineProperty(obj, 'sayHi', {
  enumerable: false
})

for (let i in obj){
  console.log(i)
}