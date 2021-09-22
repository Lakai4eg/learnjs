//-----------------------------------------------------
//Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(Array.from(new Set(values)))

//-----------------------------------------------------
//Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

let sorted = new Map()
arr.map(el => {
  let sortedWord = el.toLowerCase().split('').sort().join('')
  sorted.set(sortedWord, el)
})
console.log(Array.from(sorted.values()))

//-----------------------------------------------------