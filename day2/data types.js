/* Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму. */

let x = '10'
let y = '33'
let sum = +x + +y
console.log(sum)

//Как правильно округлить 6.35?
let a = 6.35
console.log((a * 1000).toFixed(3)/1000)

/* Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max). */

function random(min, max) {
  return min + Math.random() * (max - min);}

console.log(random(10,20))

//-------
//Strings
//-------

//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
myString = 'lorem'
function ucFirst(str){
  if (str) return (str[0].toUpperCase() + str.slice(1))
}
console.log(ucFirst(myString))

//--------------------------
//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
let str1 = 'asdkfhsdh viagra asdk'
let str2 = 'eiojweirj2i34jjk XXX'
let str3 = 'jkdgsfhkasdjkflviagrjasdkfh231'

function checkSpam(str){
  return (str.includes('viagra') || str.includes('XXX')) ? true : false
}

console.log(checkSpam(str1))
console.log(checkSpam(str2))
console.log(checkSpam(str3))

//--------------------------