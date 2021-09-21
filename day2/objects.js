/* Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. */

let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

// ----------------------------------
//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj){
  return !Object.keys(obj).length
}

// ----------------------------------
//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  Issue: 'tt',
  QQ: 10
}

function summSalaries(obj){
  let summ = 0;
  for (let key in obj){
    if (typeof(obj[key]) === 'number') {
      summ += obj[key]
    }
  }
  return summ
}

// ----------------------------------
//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
let objectToMultiply = {
  A: 1100,
  B: 160,
  C: 130,
  D: 'tt',
  E: 10
}

function multiplyNumeric(obj){
  for (let key in obj){
    if (typeof(obj[key]) === "number"){
      obj[key] *= 2
    }
  }
  return obj
}

// ----------------------------------
//Глубокое копирование объекта
let firstObj = {
  A: 100,
  B: 160,
  C: 130,
  D: 'tt',
  E: {
    f: 11,
    g: 12,
    h: {
      i: 13,
      j: 14
    }
  }
}
//Обычное копирование
let clone = {...firstObj}

function deepClone(obj){
  let newObj = {}
  for (let key in obj){
    if(typeof(obj[key]) === 'object'){
      newObj[key] = deepClone(obj[key])
    }
    else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}


let secClone = deepClone(firstObj)
firstObj.E.f = 1
console.log(firstObj)
console.log(secClone)

// ----------------------------------
/* Создайте объект calculator (калькулятор) с тремя методами:
read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат. */

let calculator = {
  read(x, y){
    typeof(x) === 'number' ? this.firstItem = x : console.log('Значение не является числом');
    typeof(y) === 'number' ? this.firstItem = y : console.log('Значение не является числом');
  },
  sum(){
    if (this.firstItem && this.secItem){
      console.log(this.firstItem + this.secItem)
    }
    else{
      console.log('Сначала нужно задать значения для сложения')
    }
  },
  mul(){
    if (this.firstItem && this.secItem){
      console.log(this.firstItem * this.secItem)
    }
    else{
      console.log('Сначала нужно задать значения для умножения')
    }
  }
}

calculator.read(10,'231')
calculator.sum()
calculator.mul()


// ----------------------------------
//Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке.
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { // показывает текущую ступеньку
    console.log( this.step );
    return this
  }
};

ladder.up().up().down().showStep()

// ----------------------------------
//Создание объектов с помощью конструктора
function CreateUser(name, age){
  this.name = name
  this.age = age

  this.showUser = function(){
    console.log(`Возраст пользователя ${this.name}, равен ${this.age}`)
  }
}

alex = new CreateUser('Алексей', 10)
alex.showUser()


// ----------------------------------
// Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?
// function A() { ... }
// function B() { ... }
// let a = new A;
// let b = new B;
// alert( a == b );

const object = {}
function A() { return object}
function B() { return object }
let a = new A;
let b = new B;
console.log( a == b );


// ----------------------------------
/* Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств. */

function Calculator(){
  this.read = function(x, y){
    typeof(x) === 'number' ? this.x = x : console.log('Введено не число')
    typeof(y) === 'number' ? this.y = y : console.log('Введено не число')
  },
    this.sum = function(){
      (this.x && this.y) ? console.log(this.x + this.y) : console.log('Не установлены значения X или Y')
    }
  this.mul = function(){
    (this.x && this.y) ? console.log(this.x * this.y) : console.log('Не установлены значения X или Y')
  }

}

let calc = new Calculator()
let newCalc = new Calculator()

calc.read(10, 2)
calc.sum()
calc.mul()

// ----------------------------------
/* Напишите функцию-конструктор Accumulator(startingValue).
Объект, который она создаёт, должен уметь следующее:
Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value. */

function Accumulator(startValue){
  typeof(startValue) === 'number' ? this.value = startValue : console.error('Введено не число')
  this.read = function(curr){
    typeof(curr) === 'number' ? this.value += curr : console.error('Введено не число')
  }
}

let myAcc = new Accumulator(11)
myAcc.read(33)
myAcc.read(-11)
console.log(myAcc.value)


//------------------------------------------
/* Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка. */

const myString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

function truncate(str, maxlength){
  return (str.length > maxlength) ? str.slice(0, maxlength) + '...' : str
}

console.log(truncate(myString, 10))

//--------------------------------------------
/* Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его. */

function extractCurrencyValue(str){
  return +str.slice(1)
}
console.log(extractCurrencyValue('$120'))

//--------------------------------------------
/* Давайте произведём 5 операций с массивом.
Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива. */


let styles = ['Джаз', 'Блюз']
styles.push('Рок-н-ролл')
styles[(Math.round((styles.length - 1) / 2))] = 'Классика'
console.log(styles)
styles.shift()
console.log(styles)
styles.unshift('Рэп', 'Рэгги')
console.log(styles)

//--------------------------------------------
/* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму. */

arr = [1, -2, 3, 4, -9, 6]

function getMaxSubSum(arr){
  let summ = 0;
  let max = 0;

  for (let el of arr){
    summ += el;
    max = Math.max(summ, max);
    if (summ < 0) summ = 0
  }
  return max
}

console.log(getMaxSubSum([-1, 2, 3, -9]))
console.log(getMaxSubSum([2, -1, 2, 3, -9]))
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
console.log(getMaxSubSum([-2, -1, 1, 2]))
console.log(getMaxSubSum([100, -9, 2, -3, 5]))
console.log(getMaxSubSum([1, 2, 3]))

//--------------------------------------------