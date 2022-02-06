const factsEl = document.getElementById('facts')
const factsBtn = document.getElementById('factsBtn')

generateFacts()

async function generateFacts() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://api.chucknorris.io/jokes/random', config)

  const data = await res.json()
  factsEl.innerHTML = data.value

}

function random(min, max) {
  let n = Math.floor(min + Math.random() * (max - min))
  console.log(n)
  return n
}
function generateBackground() {
  let r = random(0, 255)
  let g = random(0, 255)
  let b = random(0, 255)

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
  factsEl.style.color = `rgb(${b}, ${g}, ${r})`
  factsBtn.style.backgroundColor = `rgb(${g}, ${r}, ${b}`
}

factsBtn.addEventListener('click', generateFacts)

factsBtn.addEventListener('click', generateBackground)




