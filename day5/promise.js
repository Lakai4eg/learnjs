//Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд,
// так чтобы мы могли добавить к нему .then:
function delay(sec){
  let ms = sec * 1000
  return new Promise(resolve => {
    setTimeout(()=>console.log(`Выполнено через ${sec} сек`), ms)
  })
}

delay(3)