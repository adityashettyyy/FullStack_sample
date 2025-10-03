let game = confirm("Shall we play a game ?");
if (game) {
  let userAnswer = prompt("Enter rock,paper or scissors");
  if (userAnswer) {
    let userAnswerLower = userAnswer.toLowerCase();
    let computerAnswer = Math.random();
    if (computerAnswer < 0.34) {
      computerAnswer = "rock";
    } else if (computerAnswer <= 0.67) {
      computerAnswer = "paper";
    } else {
      computerAnswer = "scissors";
    }
    let compareAnswers = (user, computer) => {
      if (user === computer) {
        return "The result is a tie!";
      } else if (user === "rock") {
        if (computer === "paper") {
          return "The computer won!";
        } else {
          return "You won!";
        }
      } else if (user === "paper") {
        if (computer === "scissors") {
          return "The computer won!";
        } else {
          return "You won!";
        }
      } else if (user === "scissors") {
        if (computer === "rock") {
          return "The computer won!";
        } else {
          return "You won!";
        }
      } else {
        return "Please enter a valid input";
      }
    };
    let results = compareAnswers(userAnswerLower, computerAnswer);
    alert(
      "You chose " +
        userAnswerLower +
        " and the computer chose " +
        computerAnswer +
        "\n" +
        results
    );
  } else {
    alert("Please enter a valid input");
  }
} else {
  alert("OK maybe next time");
}
