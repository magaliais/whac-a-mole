const hole = document.querySelectorAll(".hole");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

const startButton = document.querySelector("#start")
startButton.addEventListener("click", startGame)

const resetButton = document.querySelector("#reset")
resetButton.addEventListener("click", resetGame)

function randomHole() {
  hole.forEach(className => {
    className.classList.remove('mole')
  })

  let randomPosition = hole[Math.floor(Math.random() * 9)]

  randomPosition.classList.add("mole")

  hitPosition = randomPosition.id
}

// score count
hole.forEach(id => {
  id.addEventListener("mouseup", () => {
    if(id.id === hitPosition) {
      result += 1
      score.textContent = result
      console.log(score)
    }
  })
})

function moveMole() {
  let timeId = null;
  timerId = setInterval(randomHole, 1000)
}

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime
  
  console.log(currentTime)
  if(currentTime == 0) {

    console.log("entrei")

    clearInterval(timerId)
    resetGame()
    alert(`Game Over! Your final score is ${ result }`)
  }
}

function startGame() {
  let timerId = setInterval(countDown, 1000)
  moveMole()
}

function resetGame() {
  location.reload();
}