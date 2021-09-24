function go() {
  let cb = function(){
    let circleText = document.createElement('div')
    circleText.innerText = 'Text in circle'
    circleText.classList.add('circle-text')
    circle.append(circleText)
    console.log(circle.innerText)
  }

  const container = document.querySelector('#circle-container')
  let circle = document.createElement('div')
  circle.classList.add('circle')
  container.append(circle)
  setTimeout(()=>{
    circle.style.width = '100%'
    circle.style.height = '100%'
  }, 0)
  circle.addEventListener('transitionend', () => {
    circle.removeEventListener('transitionend', () => console.log('removed'))
    cb.apply(go)
  })
}

