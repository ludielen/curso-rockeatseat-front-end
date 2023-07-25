const cardForest = document.querySelector('.card-forest')
const cardRain = document.querySelector('.card-rain')
const cardCafeteria = document.querySelector('.card-cafeteria')
const cardFire = document.querySelector('.card-fire')

const audioForest = new Audio('assets/audio/Floresta.wav')
const audioRain = new Audio('assets/audio/Chuva.wav')
const audioCafeteria = new Audio('assets/audio/cafeteria.wav')
const audioFire = new Audio('assets/audio/lareira.wav')

const buttonPlay = document.querySelector('.buttonPlay')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonStop = document.querySelector('.buttonStop')
const buttonIncrease = document.querySelector('.buttonPositive')
const buttonDecrease = document.querySelector('.buttonNegative')


let minutes = Number(minutesDisplay.textContent)
let seconds
let timerTimeOut
let currentAudio = null;

function playAudio(audio,card, color) {
    if (currentAudio !== null && currentAudio !== audio) {
        currentAudio.pause();
        card.style.backgroundColor = '#E1E1E6'
       
    }

    if (currentAudio === audio && !audio.paused) {
        audio.pause();

        if(audio != audioRain) {
            card.style.backgroundColor = '#E1E1E6'
        }
    } else {
        currentAudio = audio;
        audio.play();
        card.style.backgroundColor = color
       
    }
}

cardForest.addEventListener('click', function(){

 playAudio(audioForest, cardForest, 'green')

})

cardRain.addEventListener('click', function(){

   playAudio(audioRain,cardRain, '#02799D')
    
})

cardCafeteria.addEventListener('click', function () {
    playAudio(audioCafeteria, cardCafeteria, '#D2B48C')
})

cardFire.addEventListener('click', function() {
  playAudio(audioFire, cardFire, '#FF4500')
})



buttonPlay.addEventListener('click', function(){
    countdown()
})

function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

function countdown(){
    timerTimeOut = setTimeout(function() {
      seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
  
      updateDisplay(minutes, 0)

      if( isFinished) {
        resetControls()
        updateDisplay()
        Sounds().timeEnd()
        return
      }
  
      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
  
      updateDisplay(minutes, String(seconds - 1))
  
      countdown()
    }, 1000)
  }

  buttonStop.addEventListener('click', function(){
      reset()
  })

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }



  buttonIncrease.addEventListener('click', function() {
    increaseMinutes()
  })

  function increaseMinutes() {
    minutes = minutes + 5
    updateDisplay(minutes, String(seconds - 1))
  }

 

  buttonDecrease.addEventListener('click', function(){
    decreaseMinutes()
  })

  function decreaseMinutes(){
    minutes = minutes - 5
    updateDisplay(minutes, String(seconds - 1))
  }



