function printMessage(msg) {
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "kamień";
  } else if (argMoveId == 2) {
    return "papier";
  } else if (argMoveId == 3) {
    return "nożyce";
  }
  printMessage("Nie znam ruchu o id " + argMoveId + ".");
  return "nieznany ruch";
}

function displayResult(argComputerMove, argPlayerMove) {
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
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber);

printMessage("Mój ruch to: " + computerMove);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let playerMove = getMoveName(playerInput);

printMessage("Twój ruch to: " + playerMove);

displayResult(computerMove, playerMove);
