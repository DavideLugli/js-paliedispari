
//
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

// utente sceglie pari o dispari
var scelta = prompt('scegli pari o dispari');
console.log('hai scelto ' + scelta);
// utente sceglie un numero da 1 a 5
var numUtente = parseInt(prompt('scegli un numero da 1 a 5'));
console.log('hai giocato ' + numUtente);
// il pc genera un numero random da 1 a 5
var numPc = getRandomNumber(1, 5);
console.log('il pc ha giocato ' + numPc);

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}

// sommiamo i due numeri
var somma = numUtente + numPc;
console.log(somma);
// controlliamo chi ha vinto

if (scelta == 'pari' && somma % 2 == 0) {
  console.log('hai vinto');
} else if (scelta == 'pari' && somma % 2 != 0) {
  console.log('hai perso');
} else if (scelta == 'dispari' && somma % 2 == 0) {
  console.log('hai perso');
} else if (scelta == 'dispari' && somma % 2 != 0) {
  console.log('hai vinto');
}
