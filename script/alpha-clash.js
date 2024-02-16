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

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText
  const expectedAlphabet = currentAlphabet.toLowerCase()
  if(playerPress === expectedAlphabet){
    // Update score
    // get the current score
    const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentAlphabetElement.innerText
    console.log(currentScoreText)
    // increase the score by 1
    //  show the update score 

// start a new round 
    removeBackgroundColorById(expectedAlphabet)
    continueGame();
  }else{
    console.log('You press wrong key')
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
  showElementById("playGround-section");
  continueGame();
 
}
