var userInput = function() {
    var userChoice = prompt("Rock, paper or scissors?");
if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
    compare(userChoice,computerChoice);
} else {
    confirm("Your input" + ", " + userChoice + ", " + "is invalid.");
    userInput();
}
};

var computerChoice = Math.random();
if (0 < computerChoice <= 0.33) {
    computerChoice = "rock";
} else if(0.33 < computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
    
if (choice1=='rock') {
      if (choice1==choice2) {
        var userChoice = prompt("The result is a tie! Make a new choice.");
        compare(userChoice,computerChoice);
    } else if (choice2=='scissors') {
    return "rock wins";
    
    } else {
      return "paper wins";
    }
 }
 
 if (choice1=='paper') {
      if (choice1==choice2) {
        return "The result is a tie!";
        
    } else if (choice2=='rock') {
    return "paper wins";
    
    } else {
      return "scissors wins";
    }
 }
 
 if (choice1=='scissors') {
      if (choice1==choice2) {
        return "The result is a tie!";
        
    } else if (choice2=='rock') {
    return "rock wins";
    
    } else {
      return "scissors wins";
    }
 }
 
};

compare(userChoice,computerChoice);
