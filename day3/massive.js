//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

myStr = 'qqqqq-wwww-eee'

function camelize(str){
  arr = str.split('-')
  res = arr.map((el, idx) =>{
    return idx === 0 ? el : el[0].toUpperCase() + el.slice(1)
  })
  return res.join('')
}
console.log(camelize(myStr))

//----------------------------------------
/* Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
Функция должна возвращать новый массив и не изменять исходный. */

arr = [5, 3, 8, 1]
a = 1
b = 4

function filterRange(arr, a, b){
  return arr.filter(el => {
    if (el >= a && el <= b) {
      return el
    }
  })
}

console.log(filterRange(arr, a, b))

//----------------------------------------
/* Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все
значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. */
arr = [5, 3, 8, 1]
a = 1
b = 4

function filterRangeInPlace(arr, a, b){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < a || arr[i] > b){
      arr.splice(i, 1)
      i--
    }
  }
}

filterRangeInPlace(arr, a, b)

console.log(arr)

//----------------------------------------
/* Сортировать в порядке по убыванию */
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a)
console.log(arr)


//----------------------------------------
/* У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию. */

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
  return [...arr].sort()
}

let sorted = copySorted(arr)

console.log(arr)
console.log(sorted)

//----------------------------------------
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате
// «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:

function Calculator(){
  this.methods = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
  }

  this.calculate = function(string){
    let arr = string.split(' ')
    let a = +arr[0]
    let b = +arr[2]
    let operation = arr[1]
    if (this.methods.hasOwnProperty(operation)){
      console.log(this.methods[operation](a, b))
    }
    else{
      console.error('Данная операция не зарегистрирована')
    }
  }

  this.addMethod = function(name, func){
    this.methods[name] = func
  }
}

myCalc = new Calculator()

myCalc.calculate('11 * 3')
myCalc.addMethod('*', (a, b) => a * b)
myCalc.addMethod("/", (a, b) => a / b);
myCalc.addMethod("**", (a, b) => a ** b);
myCalc.calculate('11 * 3')
myCalc.calculate('33 / 3')

//----------------------------------------
/* У вас есть массив объектов user, и в каждом из них есть user.name.
Напишите код, который преобразует их в массив имён. */

let users = [
  { name: "Вася", age: 25 },
  { name: "Петя", age: 30 },
  { name: "Маша", age: 28 },
]

let names = users.map(el => el.name)
console.log(names)


//---------------------------------------
/* У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName,
где fullName – состоит из name и surname. */

let user = [
  { name: "Вася", surname: 'Пупкин', id: 25 },
  { name: "Петя", surname: 'Пипкин', id: 30 },
  { name: "Маша", surname: 'Липкин', id: 28 },
]

let newUser = user.map(el => {
  return {
    'fullName': el.name + ' ' + el.surname,
    'id': el.id
  }
})

console.log(newUser)

//---------------------------------------
/* Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и
сортирует их по нему. */

let users = [
  { name: "Вася", age: 25 },
  { name: "Петя", age: 30 },
  { name: "Маша", age: 28 },
  { name: "Миша", age: 18 },
]

function sortByAge(users){
  users.sort((a, b) => {
    return a.age > b.age ? 1 : -1
  })
}

console.log(users)
sortByAge(users)
console.log(users)

//---------------------------------------
/* Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
Многократные прогоны через shuffle могут привести к разным последовательностям элементов. */
let arr = [1, 2, 3, 4, 5]

function shuffle(arr){
  arr.sort((a, b) => Math.floor(Math.random() * 3 -1))
}

console.log(arr)
shuffle(arr)
console.log(arr)

//---------------------------------------
/* Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст. */

let users = [
  { name: "Вася", age: 10 },
  { name: "Петя", age: 20 },
  { name: "Маша", age: 30 },
  { name: "Петя", age: 40 },
  { name: "Петя", age: 50 },
]

function getAverageAge(users){
  let ageSumm = users.reduce((acc, curr) => acc += curr.age, 0)
  return ageSumm / users.length
}

console.log(getAverageAge(users))

//----------------------------------------
/* Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr. */

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
  newArr = []
  arr.forEach(el => {
    if (!newArr.includes(el)){
      newArr.push(el)
    }
  })
  return newArr
}

console.log(unique(strings))