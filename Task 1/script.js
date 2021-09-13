const game = () => {
    let playerScore = 0;
    let computerScore = 0;
  
  

    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissors');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissors']
          

        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
                const choice = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choice];

                winner(this.innerText,computerChoice)
                  
          
            })
        })
          
    }

    const winner = (playerChoice,computerChoice) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-scorecount');
        const computerScoreBoard = document.querySelector('.c-scorecount');
        playerChoice = playerChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        if(playerChoice === computerChoice){
            result.textContent = "It's a Tie. Choose another option."
        }
        else if(playerChoice == 'rock'){
            if(computerChoice == 'paper'){
                result.textContent = 'Computer has Won. Better luck next time.';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
  
            }else{
                result.textContent = 'Congrats!! You have won!!!'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(playerChoice == 'scissors'){
            if(computerChoice == 'rock'){
                result.textContent = 'Computer has Won. Better luck next time.';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Congrats!! You have won!!!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(playerChoice == 'paper'){
            if(computerChoice == 'scissors'){
                result.textContent = 'Computer has Won. Better luck next time.';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Congrats!! You have won!!!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    playGame();
      
}

game();