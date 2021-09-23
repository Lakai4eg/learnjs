//Изменить последнюю строку чтоб не терялся контекст

function askPassword(ok, fail) {
  let password = 'rockstar'
  if (password === "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//Передача параметров в bind
function askPassword(ok, fail) {
  let password = 'rocks2tar';
  if (password === "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    console.log( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false))