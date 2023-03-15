const mainString = 'Circle Line'
const firstWord = document.querySelector('.firstWord')
const secondWord = document.querySelector('.secondWord')
const subHeadline = document.querySelector('.subheadline')
const words = mainString.split(' ')
console.log(words)
const firstWordContent = words[0].split('')
const secondWordContent = words[1].split('')

// function changeType() that will be called every 2 seconds.
// It will delete the content of the firstWord and secondWord divs
// It will create a span for each character in the firstWordContent array
// and a span for each character in the secondWordContent array
// It will add the class font-bold and text-[7rem] to each span
// It will add a random font to each span
// It will append each span to the firstWord and secondWord divs

function changeType() {
  firstWord.innerHTML = ''
  secondWord.innerHTML = ''
  firstWordContent.forEach((char) => {
    const span = document.createElement('span')
    span.innerHTML = char
    span.classList.add(
      'font-bold',
      'md:text-[7rem]',
      'text-[3rem]',
      'leading-none'
    )
    span.style.fontFamily = randomFont()
    firstWord.appendChild(span)
  })

  secondWordContent.forEach((char) => {
    const span = document.createElement('span')
    span.innerHTML = char
    span.classList.add(
      'font-bold',
      'md:text-[7rem]',
      'text-[3rem]',
      'leading-none'
    )
    span.style.fontFamily = randomFont()
    secondWord.appendChild(span)
  })

  subHeadline.style.fontFamily = randomFont()
}

// Call the changeType function every 1 second
setInterval(changeType, 500)

// const fonts = [ 'Pacifico', 'Comic Neue', 'Cinzel' ]
function randomFont() {
  const fonts = [
    'Pacifico',
    'Comic Neue',
    'Cinzel',
    'Degular',
    'Papyrus',
    'Rampart One',
    'Climate Crisis',
    'Rubik Iso',
  ]
  return fonts[Math.floor(Math.random() * fonts.length)]
}
