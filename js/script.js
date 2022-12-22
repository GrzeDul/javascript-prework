function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2) {
  computerMove = 'papier';
} else if(randomNumber == 3) {
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2') {
  playerMove = 'papier';
} else if(playerInput == '3') {
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

if(playerMove == computerMove) {
	printMessage('remis');
} else if((playerMove == 'papier' && computerMove == 'nożyce') || (playerMove == 'kamień' && computerMove == 'papier') || (playerMove == 'nożyce' && computerMove == 'kamień')){
	printMessage('przegrałeś');
} else if((playerMove == 'papier' && computerMove == 'kamień') || (playerMove == 'kamień' && computerMove == 'nożyce') || (playerMove == 'nożyce' && computerMove == 'papier')){
	printMessage('wygrałeś');		
}

