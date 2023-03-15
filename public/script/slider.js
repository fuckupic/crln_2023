const firstHalf = document.querySelector('.firstHalf')
const secondHalf = document.querySelector('.secondHalf')
const leftPart = document.querySelector('.leftPart')
const rightPart = document.querySelector('.rightPart')
const sliderLine = document.querySelector('.sliderLine')
const sliderButton = document.querySelector('.sliderButton')
const slider = document.querySelector('.slider')

// import sound
var chaos = new Howl({
  src: ['/sounds/chaos.mp3'],
  volume: 0.001,
  loop: true,
  autoplay: true,
})

var calm = new Howl({
  src: ['/sounds/calm.wav'],
  volume: 0.001,
  loop: true,
  autoplay: true,
})

chaos.play()
calm.play()

intro()

// slider changes value from 50 to 60, 40 and back to 50, ease in and out
function simulateSound(value) {
  firstHalf.style.width = `${value}%`
  sliderButton.style.left = `${value}%`
  sliderLine.style.left = `${value}%`

  if (value > 50) {
    chaos.volume(`${((value - 50) * 2) / 300}`)
    calm.volume(0.001)
  }

  if (value < 50) {
    chaos.volume(0.001)
    calm.volume(`${((50 - value) * 2) / 300}`)
  }
}

function intro() {
  values = [50, 40, 60, 10]
  for (let i = 0; i < values.length; i++) {
    setTimeout(() => {
      simulateSound(values[i])
    }, i * 500)
  }
}

slider.addEventListener('input', (e) => {
  const value = e.target.value
  firstHalf.style.width = `${value}%`
  sliderButton.style.left = `${value}%`
  sliderLine.style.left = `${value}%`

  if (value > 50) {
    chaos.volume(`${((value - 50) * 2) / 300}`)
    calm.volume(0.001)
  }

  if (value < 50) {
    chaos.volume(0.001)
    calm.volume(`${((50 - value) * 2) / 300}`)
  }

  // leftPart.style.width = `${value}%`
  // secondHalf.style.width = `${100 - value}%`
})
