//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
function sum(a){
  return function(b){
    return a + b
  }
}
console.log(sum(10)(30))

//--------------------------------------------------------
/* У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
Сделайте набор «готовых к употреблению» фильтров:
inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:
arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива */

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b){
  return function (el){
    return el > a && el < b
  }
}

function inArray(arr){
  return function(el){
    return arr.includes(el)
  }
}

console.log(arr.filter(inBetween(3, 6)))
console.log(arr.filter(inArray([1,6,2,11])))