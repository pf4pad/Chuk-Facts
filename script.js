const factsEl = document.getElementById('facts')
const factsBtn = document.getElementById('factsBtn')
const chukFoto = document.getElementById('foto')
const mute = document.getElementById('volume')
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

  return n
}
function generateEffects() {


  let r = random(0, 255)
  let g = random(0, 255)
  let b = random(0, 255)

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
  factsEl.style.color = `rgb(${b}, ${g}, ${r})`
  factsBtn.style.backgroundColor = `rgb(${g}, ${r}, ${b}`
  chukFoto.classList.add('chuk-foto-active');

  let myGreeting = setTimeout(function () {
    chukFoto.classList.remove('chuk-foto-active');

  }, 1000)

}

let isMute = false; // флаг отключения звука
const myAudio = new Audio;
myAudio.src = "./Gong.mp3";
function myAudioPlay() {
  myAudio.play();
}

function myAudioMute() {
  if (!isMute) {
    myAudio.muted = true;
    mute.innerText = "Sound";
  } else {
    myAudio.muted = false;
    mute.innerText = "Mute";
  }
  isMute = !isMute
}


factsBtn.addEventListener('click', myAudioPlay)
factsBtn.addEventListener('click', generateFacts)
factsBtn.addEventListener('click', generateEffects)

mute.addEventListener('click', myAudioMute)






