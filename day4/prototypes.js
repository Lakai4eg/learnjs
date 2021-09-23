// Задайте прототипы так, чтобы поиск любого свойства выполнялся
// по следующему пути: pockets → bed → table → head.
// Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses?
// При необходимости составьте цепочки поиска и сравните их.

let head = { glasses: 1 };
let table = { pen: 3 };
let bed = {
  sheet: 1,
  pillow: 2
};
let pockets = { money: 2000 };

Object.setPrototypeOf(pockets, bed)
Object.setPrototypeOf(bed, table)
Object.setPrototypeOf(table, head)

console.log(pockets.pen)
console.log(bed.glasses)


//Исправить ошибку
let hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [], //ДОБАВИТЬ!
  __proto__: hamster
};

let lazy = {
  stomach: [], //ДОБАВИТЬ!
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log( lazy.stomach ); // apple


// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
// После этого должен работать такой код:

Function.prototype.defer = function (ms) {
  setTimeout(this, ms)
}

function f() {
  console.log("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду

// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
// После этого должен работать такой код:

Function.prototype.defer = function (ms) {
  let func = this
  return function(...args){
    setTimeout(() => func.apply(func, args), ms)
  }
}

function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

//-----------------------------
//Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками».
// Установите значение в 1000 (1 секунда) по умолчанию.
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock{
  constructor(args, delay) {
    super(args);
    this.delay = delay || 1000
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.delay)
  }
}

let a = new ExtendedClock({template: 'h:m:s'}, 2000);
a.start()
