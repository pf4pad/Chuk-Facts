const factsEl = document.getElementById('facts')
const factsBtn = document.getElementById('factsBtn')


factsBtn.addEventListener('click', generateFacts)

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

