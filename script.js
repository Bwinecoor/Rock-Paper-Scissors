let userScore= 0;
let computerScore = 0;


const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
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
      return document.getElementById("p1").innerHTML = "You both equally suck!";
    }
    if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerScore ++;
      document.getElementById("computerScore").innerHTML = computerScore;
      return document.getElementById("p1").innerHTML = "Wow, you're almost as bad as Mustafa!";
    } else {
      userScore ++;
      document.getElementById("userScore").innerHTML = userScore;
      return document.getElementById("p1").innerHTML = "You suck just a tad bit less than the Computer!";
    }
    }
    

  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      computerScore++;
      document.getElementById("computerScore").innerHTML = computerScore;
      return document.getElementById("p1").innerHTML = "Wow, you're almost as bad as Mustafa!";
    } else {
      userScore++;
      document.getElementById("userScore").innerHTML = userScore;
      return document.getElementById("p1").innerHTML = "You suck just a tad bit less than the Computer!";
    }
    }
    
  
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      computerScore++;
      document.getElementById("computerScore").innerHTML = computerScore;
      return document.getElementById("p1").innerHTML = "Wow, you're almost as bad as Mustafa!";
    } else {
      userScore++;
      document.getElementById("userScore").innerHTML = userScore;
      return document.getElementById("p1").innerHTML = "You suck just a tad bit less than the Computer!";
    }
    }
    // HTML elements with the scores for users and Comp
  };
  


  const playGame = (choice) => {
    const userChoice = getUserChoice(choice)
    const computerChoice = getComputerChoice();
  
    console.log(determineWinner(userChoice, computerChoice));
  };

function resetGame () {
    userScore = 0;
    computerScore = 0;
    result = "";
  document.getElementById("userScore").innerHTML = userScore;
  document.getElementById("computerScore").innerHTML = computerScore;
  document.getElementById("result").innerHTML = result;
}