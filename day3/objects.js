/* Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0. */

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
  'kek': -100
};

function sumSalaries(salaries){
  let summ = 0
  let values = Object.values(salaries)
  for (let el of values){
    summ += el
  }
  return summ
}

// function sumSalaries(salaries){
//   let summ = 0
//   Object.values(salaries).forEach(el => summ += el)
//   return summ
// }

console.log(sumSalaries(salaries))

//-----------------------------------------
//Напишите функцию count(obj), которая возвращает количество свойств объекта:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
  'kek': -100
};

function count(salaries){
  return Object.entries(salaries).length
}

console.log(count(salaries))

//------------------------------------------
/* Напишите деструктурирующее присваивание, которое:
свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства) */

let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user

console.log(name, age, isAdmin)

//-----------------------------------------------
/* Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение. */

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
  'kek': -100
};

function topSalary(salaries){
  if (Object.keys(salaries).length < 1) return null
  let max = 0
  for (let [name, value] of Object.entries(salaries)){
    if (max < value) max = value
  }
  return max
}

console.log(topSalary(salaries))

//-----------------------------------------------

