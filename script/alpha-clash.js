// function play (){
//     // step-1 hide the home screen .to hide the screen add the hidden class to home section

//     const homeSection = document.getElementById('home-section')
//     homeSection.classList.add('hidden')

//     // step-2 show the play ground
//     const playgroundSection = document.getElementById("playGround-section")
//     playgroundSection.classList.remove('hidden')
// }

function continueGame() {
  // step-1 generate a random alphabet.
  const alphabet = getRandomAAlphabet();
  // set randomly  generated alphabet to the screen (show it )

  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
}

function play() {
  hideElementById("home-section");
  showElementById("playGround-section");
  continueGame();
}
