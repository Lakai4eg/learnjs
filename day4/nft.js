/* Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:
counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1. */

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }
  counter.set = value => count = value;
  counter.decrease = () => count--;
  counter.show = () => console.log(count)
  return counter;
}

let cnt = makeCounter()

cnt.set(10)
cnt.decrease()
cnt.show()

//---------------------------------------------
//КОСТЫЛИ!
//Напишите функцию sum, которая бы работала следующим образом:
// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3

function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.show = function() {
    return currentSum;
  };

  return f;
}

console.log( sum(1)(2).show() ); // 3
console.log( sum(5)(-1)(2).show() ); // 6
console.log( sum(6)(-1)(-2)(-3).show() ); // 0
console.log( sum(0)(1)(2)(3)(4)(5).show() ); // 15

//---------------------------------------------