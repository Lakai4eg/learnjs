// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
console.log(new Date(2012, 1, 20, 3, 12))

//--------------------------------------
/* Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС». */
let date = new Date()

function getWeekDay(date){
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  return days[date.getDay()]
}
console.log(getWeekDay(date))


//-------------------------------------
/* В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date. */
let date = new Date(2021, 8, 26)

function getLocalDay(date){
  return date.getDay() == 0 ? 7 : date.getDay()
}
console.log(getLocalDay(date))

//----------------------------------------
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:

date = new Date()
days = 366

function getDateAgo(date, days){
  let dateCopy = new Date(date)
  return new Date(date.setDate(dateCopy.getDate() - days)).toString()
}
console.log(getDateAgo(date, days))

//----------------------------------------
/* Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль). */

year = 2012
month = 1

function getLastDayOfMonth(year, month){
  return new Date(year, month + 1, 0).getDate().toString()
}
console.log(getLastDayOfMonth(year, month))

//----------------------------------------
/* Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то: */
function getSecondsToday(){
  let now = new Date()
  let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
  return Math.round((now - startOfDay) / 1000).toString()
}

console.log(getSecondsToday())

//----------------------------------------
/* Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты. todo  */

function getSecondsToTomorrow(){
  let now = new Date()
  let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0, 0)
  //ответ
  let answer = Math.round((endOfDay - now) / 1000).toString()
  let hoursBeforeEnd = Math.trunc(answer/3600)
  let minutesBeforeEnd = Math.trunc((answer - hoursBeforeEnd * 3600) / 60)
  let secondsBeforeEnd = answer % 60
  return `До конца дня осталось ${hoursBeforeEnd} часов, ${minutesBeforeEnd} минут, ${secondsBeforeEnd} секунд`
}

console.log(getSecondsToTomorrow())

//---------------------------------------
/* Напишите функцию formatDate(date), форматирующую date по следующему принципу:
Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00. */

let date = new Date(2021, 8, 22, 16, 52, 0)

function format(date){
  let currDate = new Date();
  let timePassed = (currDate - date) / 1000;
  if (timePassed < 1) console.log('прямо сейчас')
  else if	(timePassed < 60) console.log(`${Math.trunc(timePassed % 60)} сек. назад`)
  else if (timePassed < 3600) console.log(`${Math.trunc(timePassed / 60)} мин. назад`)
  else console.log(`${currDate.getDate()}.${currDate.getMonth() + 1}.${currDate.getFullYear()} ${currDate.getHours()}:${currDate.getMinutes()}`)
}

format(date)