// function play (){
//     // step-1 hide the home screen .to hide the screen add the hidden class to home section

//     const homeSection = document.getElementById('home-section')
//     homeSection.classList.add('hidden')

//     // step-2 show the play ground
//     const playgroundSection = document.getElementById("playGround-section")
//     playgroundSection.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event){
  const playerPress = event.key;
  if(playerPress === 'escape'){
    gameOver()
  }

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText
  const expectedAlphabet = currentAlphabet.toLowerCase()
  if(playerPress === expectedAlphabet){

    const currentScore = getTextElementByValue('current-score')
    const updatedScore = currentScore +1
    setTextElementByValue('current-score', updatedScore)
    // Update score
    // get the current score
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText
    // const currentScore = parseInt(currentScoreText)

    // console.log(currentScore)
    // // increase the score by 1
    // const newScore = currentScore + 1
    // //  show the update score 
    // currentScoreElement.innerText =newScore

// start a new round 
    removeBackgroundColorById(expectedAlphabet)
    continueGame();
  }else{
    console.log('You press wrong key')
    const currentLife = getTextElementByValue('current-life')
    const updatedLife = currentLife - 1
    setTextElementByValue('current-life', updatedLife)
    if(updatedLife === 0){
      gameOver()
    }
    //  step -1 get the current life number
    // const currentLifeElement = document.getElementById('current-life')
    // const currentLifeText = currentLifeElement.innerText
    // const currentLife = parseInt(currentLifeText)
    // // step -2 reduce the life count
    // const newLife = currentLife -1
    // // step -3 display the updated life count 
    // currentLifeElement.innerText = newLife
   
  }

}

document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame() {
  // step-1 generate a random alphabet.
  const alphabet = getRandomAAlphabet();
   
  // set randomly  generated alphabet to the screen (show it )

  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColorById(alphabet)
 
}

function play() {
  hideElementById("home-section");
  hideElementById('final-score')
  showElementById("playGround-section");
  setTextElementByValue('current-life', 5)
  setTextElementByValue('current-score',0)
  continueGame();
 
}

function gameOver(){
  hideElementById('playGround-section')
  showElementById('final-score')

  const lastScore = getTextElementByValue('current-score')
  // console.log(lastScore)
  setTextElementByValue ('last-score',lastScore)

  const currentAlphabet = getElementTextById('current-alphabet')
  console.log(currentAlphabet)
  removeBackgroundColorById(currentAlphabet)
}
