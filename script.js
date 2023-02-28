const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput
    } else {
        console.log('Error! Type rock, paper, or scissors.')
    }
  }
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Tie!';
      //display custom message for a TIE
      // You both chose userChoice
    }
    if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "Computer Wins";
       //increase PC Score Var
      //say PC won in HTML
    } else {
      return "You won!";
      //increase User Score Var
      //say User won in HTML 
    }
    }
    
  
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "Computer Wins";
    } else {
      return "You won!";
    }
    }
    
  
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "Computer Wins";
    } else {
      return "You won!";
    }
    }

    // HTML elements with the scores for users and Comp
  };
  
  const playGame = (choice) => {
    const userChoice = getUserChoice(choice)
    const computerChoice = getComputerChoice();
    console.log('You chose ' + userChoice);
    console.log('AI chose ' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
