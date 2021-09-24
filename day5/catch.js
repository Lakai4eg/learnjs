let json = `{"name": "Petr", "sage": 30 }`;

class ValidationErr extends Error{
  constructor(err) {
    super();
    this.name = 'ValidationError'
    this.message = err
  }
}

function readUser(usr){
  let user = JSON.parse(usr)
  if(!user.name){
    throw new ValidationErr('Нет имени')
  }
  if (!user.age){
    throw new ValidationErr('Нет возраста')
  }
}

try {
  let myUsr = readUser(json)
}
catch (e) {
  if (e instanceof ValidationErr){
    console.log(`Ошибка данных: ${e.message}`)
  }
  else{
    throw e
  }
}


// Создайте класс FormatError, который наследует от встроенного класса SyntaxError.
//   Класс должен поддерживать свойства message, name и stack.
class FormatError extends SyntaxError{
  constructor(err) {
    super();
    this.name = 'FormatError'
    this.message = err
    this.stack = this.name + ': ' + this.message
  }
}

let err = new FormatError("ошибка форматирования");

console.log( err.message ); // ошибка форматирования
console.log( err.name ); // FormatError
console.log( err.stack ); // stack

console.log( err instanceof FormatError ); // true
console.log( err instanceof SyntaxError ); // true (потому что наследует от SyntaxError)
