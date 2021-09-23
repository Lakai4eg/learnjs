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