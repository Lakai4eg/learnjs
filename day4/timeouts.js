//Рекурсивный таймаут
let timer = setTimeout(function tick() {
  console.log(new Date().getSeconds())
  timer = setTimeout(tick, 1000)
}, 1000)

/* Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to. */
let timer = setTimeout(function tick(from, to) {
  if (from <= to){
    console.log(from)
    from++
    timer = setTimeout(tick, 1000, from, to)
  }
}, 1000, 10, 15)

//Функция, которая выполняется максимум один раз за секунду
function debounce(fn, delay){
  let cd = false

  return function(){
    if (cd) return
    fn.apply(this, arguments)
    cd = true
    setTimeout(() => cd = false, delay)
  }
}

function sum(a,b) {console.log(a + b)}

let a = debounce(sum, 1000)
a(10, 5)
a(15, 5)
setTimeout(a, 1000, 100, 0)
setTimeout(a, 3000, 50, 0)