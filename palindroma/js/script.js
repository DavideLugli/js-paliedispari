// Scrivi una funzione per capire se la parola è palindroma

var parola = prompt('inserisci una parola');
console.log(parola);

var parolaGirata = rovesciaParola(parola);

if (parola == parolaGirata) {
  console.log(parola + ' ' + 'è una parola palindroma');
} else {
  console.log(parola + ' ' + 'non è una parola palindroma');
}

function rovesciaParola(parolaUtente) {
  var parolaRovesciata = '';
  for (var i = parolaUtente.length - 1; i >= 0; i--) {
    parolaRovesciata += parolaUtente[i];
  }
  return parolaRovesciata;
}

// con function reverse
// function palindromo(parola) {
//   // Uso split() per un nuovo array
//   var splitParola = parola.split("");
//   console.log(splitParola);
//   // reverse() per creare l'opposto del nuovo array
//   var reverseParola = splitParola.reverse();
//   console.log(reverseParola);
//   //  join() per unire gli elementi dell'array in un unica stringa
//   var joinArray = reverseParola.join("");
//   // return la nuova stringa
//   return joinArray;
// }
//
// console.log(palindromo(parola));
//
// var controlloParola = false;
//
// if (parola == palindromo(parola)) {
//   controlloParola = true;
//   console.log(controlloParola + ' ' + parola + ' ' + 'è una parola palindroma');
// } else {
//   console.log(controlloParola + ' ' + parola + ' ' + ' non è una parola palindroma');
// }
