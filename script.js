let randomNumber=Math.floor(Math.random() * 100) + 1;
const guessSubmit=document.querySelector('#sbt');
const userInput=document.querySelector('#guessField');
const remainingGuesses=document.querySelector('.remainingGuesses');
const hint=document.querySelector('.hints');
const restart=document.querySelector('.resultLines');
const OldGuesses=document.querySelector('.oldOnes');
const p=document.createElement('p');
const restartButton=document.querySelector('#rst');
const form=document.querySelector('form');
     let playGame=true;
    let prevGuesses=[];
    let numGuesses=0;
    guessSubmit.addEventListener('click',function(event){
      guessSubmit.style.backgroundColor = '#d370bd';
    })
    guessSubmit.addEventListener('mouseenter',function(event){
      guessSubmit.style.backgroundColor = 'rgb(106, 21, 91)';
    })
    guessSubmit.addEventListener('mouseleave',function(event){
      guessSubmit.style.backgroundColor = '#559ca8';
    })
form.addEventListener('submit',function(event){
    event.preventDefault();
    const Guess=parseInt(userInput.value);

if(!playGame){
    return;
  }
  else if(isNaN(Guess) || Guess < 1 || Guess > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }
  else {
    numGuesses++;
    prevGuesses.push(Guess);
    OldGuesses.innerHTML += `${Guess}, `;
    remainingGuesses.textContent = `${10 - numGuesses}`;
    if (Guess === randomNumber) {
       hint.textContent=`Congrats! i dunno how but you got it right and the number was ${randomNumber}`;
         playGame=false;
         userInput.setAttribute('disabled', '');
         restartButton.style.display = 'inline-block'; 

    }
         else if (numGuesses >= 10) {
        hint.textContent=`Game Over! The number was ${randomNumber}.`;
        playGame=false;
        userInput.setAttribute('disabled', '');
        restartButton.style.display = 'inline-block'; 

  }
  else if(Guess < randomNumber) {
    hint.textContent=`Your guess of ${Guess} is lower than the number. Try again!`;
  }
  else if(Guess > randomNumber) {
    hint.textContent=`Your guess of ${Guess} is higher than the number. Try again!`;
  }
userInput.value = '';
  }
})
restartButton.addEventListener('click',function(event){
    event.preventDefault();
    randomNumber=Math.floor(Math.random() * 100) + 1;
    playGame=true;
    numGuesses=0;
    prevGuesses=[];
    OldGuesses.innerHTML = '';
    remainingGuesses.textContent = '10';
    hint.textContent = '';
    userInput.removeAttribute('disabled');
    userInput.value = '';
    restartButton.style.display = 'none';
});   
restartButton.addEventListener('mouseenter',function(event){
    restartButton.style.backgroundColor = 'rgb(97, 28, 28)';
})
restartButton.addEventListener('mouseleave',function(event){
    restartButton.style.backgroundColor = '#559ca8';
})

