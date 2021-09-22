/* Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
Сделайте три варианта решения:
- С использованием цикла.
- Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
- С использованием формулы арифметической прогрессии. */

//Цикл
/* function sumTo(n){
  summ = 0
  for (i = 0; i <= n; i++){
    summ += i
  }
  return summ
} */

//Через рекурсию
/* function sumTo(n){
  if (n == 0) return 0
  return n + sumTo(n-1)
} */

//Арифметическая прогрессия
function sumTo(n){
  return n * (n + 1) / 2;
}

console.log(sumTo(5))

//---------------------------------------
//Вычислить факториал

function fact(n){
  if (n == 1) return 1
  return n * fact(n - 1)
}

console.log(fact(3))
console.log(fact(4))
console.log(fact(5))

//---------------------------------------
/* Напишите функцию fib(n) которая возвращает n-е число Фибоначчи. */
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fib(3))
console.log(fib(7))
console.log(fib(77))

//---------------------------------------
//Напишите функцию printList(list), которая выводит элементы списка по одному.
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list){
  console.log(list.value)
  if (list.next) printList(list.next)
}

printList(list)

//---------------------------------------
//Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

function printList(list){
  if (list.next) printList(list.next)
  console.log(list.value)
}