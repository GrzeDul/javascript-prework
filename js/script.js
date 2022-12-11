const printMessage = function (msg) {
  const div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
};

const clearMessages = function () {
  document.getElementById("messages").innerHTML = "";
};

const getMoveName = function (argMoveId) {
  if (argMoveId == 1) {
    return "kamień";
  } else if (argMoveId == 2) {
    return "papier";
  } else if (argMoveId == 3) {
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
  } else {
    if (argPlayerMove == "papier") {
      if (argComputerMove == "nożyce") {
        printMessage("przegrałeś");
      } else {
        printMessage("wygrałeś");
      }
    }

    if (argPlayerMove == "kamień") {
      if (argComputerMove == "papier") {
        printMessage("przegrałeś");
      } else {
        printMessage("wygrałeś");
      }
    }
    if (argPlayerMove == "nożyce") {
      if (argComputerMove == "kamień") {
        printMessage("przegrałeś");
      } else {
        printMessage("wygrałeś");
      }
    }
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
  playGame(1);
});
document.getElementById("play-paper").addEventListener("click", function () {
  playGame(2);
});
document.getElementById("play-scissors").addEventListener("click", function () {
  playGame(3);
});
