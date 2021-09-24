//Создаем класс, тестируем защищенные и приватные переменные
class CofeeMachine {
  #waterAmount = 0
  constructor(power) {
    this.power = power
    console.log(`Создана кофеварка с мощностью ${power} ватт.`)
  }

  get waterAmount() {
    return this.#waterAmount
  }

  set waterAmount(val) {
    if (val < 0) throw new Error('Отрицательное количесво воды')
    this.#waterAmount = val
  }
}

const myCM = new CofeeMachine(500)
myCM.waterAmount = 10

console.log(myCM.waterAmount)


//Создаем класс на основе Array с новым методом, который проверяет не пустой ли массив.
class PowerArray extends Array{
  constructor(arr) {
    super();
    this.arr = arr
  }
  isEmpty(){
    return this.arr.length === 0 ? 'пустой' : 'полный'
  }
}

let arr = new PowerArray([])
console.log(typeof arr.isEmpty())



