const printMessage = function (msg) {
  const div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
};

const clearMessages = function () {
  document.getElementById("messages").innerHTML = "";
};

const getMoveName = function (argMoveId) {
  if (argMoveId == "kamień") {
    return "kamień";
  } else if (argMoveId == "papier") {
    return "papier";
  } else if (argMoveId == "nożyce") {
    return "nożyce";
  }
  printMessage("Nie znam ruchu o id " + argMoveId + ".");
  return "nieznany ruch";
};

const displayResult = function (argComputerMove, argPlayerMove) {
  console.log("moves:", argComputerMove, argPlayerMove);
  if (argPlayerMove == "nieznany ruch") {
    return;
  }
  if (argPlayerMove == argComputerMove) {
    printMessage("remis");
  }
  else if(argPlayerMove == "papier" && argComputerMove == "nożyce"){
        printMessage("przegrałeś");
  }
  else if(argPlayerMove == "papier" && argComputerMove == "kamień"){
        printMessage("wygrałeś");
  }
  else if(argPlayerMove == "kamień" && argComputerMove == "papier"){
        printMessage("przegrałeś");
  }
  else if(argPlayerMove == "kamień" && argComputerMove == "nożyce"){
        printMessage("wygrałeś");
  }
  else if(argPlayerMove == "nożyce" && argComputerMove == "kamień"){
        printMessage("przegrałeś");
  }
  else if(argPlayerMove == "nożyce" && argComputerMove == "papier"){
        printMessage("wygrałeś");
  }
};

const playGame = function (playerInput) {
  clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  const computerMove = getMoveName(randomNumber);

  printMessage("Mój ruch to: " + computerMove);

  console.log("Gracz wpisał: " + playerInput);

  const playerMove = getMoveName(playerInput);

  printMessage("Twój ruch to: " + playerMove);

  displayResult(computerMove, playerMove);
};

document.getElementById("play-rock").addEventListener("click", function () {
  playGame('kamień');
});
document.getElementById("play-paper").addEventListener("click", function () {
  playGame('papier);
});
document.getElementById("play-scissors").addEventListener("click", function () {
  playGame('nożyce');
});
