$(document).ready(function() {
 alert(arrNum);
 var check = numUtente();
 var counter = countdown();
});

// Funzione che ritorna 5 numeri casuali in un array
var arrNum = [];
  for (i=0; i<5; i++) {
    var numGen = numRandom(1, 10);
    arrNum.push(numGen);
}

console.log(arrNum);

// Funzione per generare numero casuale dato un numero minimo e uno massimo
function numRandom(numMin, numMax) {
  var num = Math.floor(Math.random()* (numMax - numMin + 1)) + numMin;
  return num;
};

// Funzione per verificare che un numero non sia presente in un array
function validatore(array, elemento) {
  var numeroUguale = false;
  var i = 0;
    while (i < array.length && numeroUguale == false) {
      if (array[i] == elemento) {
        numeroUguale = true;
      }
    i++;
  }
  return numeroUguale;
};

// Funzione per permettere all'utente di inserire 5 numeri
function numUtente() {
  setTimeout(function () {

  var arrUtente = [];
  var arrSbagliati = [];
  var i = 0;
  while (i < 5) {
    var richiesta = parseInt(prompt("Inserisci numero:"));
   if (validatore(arrNum, richiesta) == false) {
    arrSbagliati.push(richiesta);
  } else if (validatore(arrNum, richiesta) == true) {
    arrUtente.push(richiesta);
  }
  i++;
}
  document.getElementById("quanti").innerHTML=arrUtente.length;
  document.getElementById("quali").innerHTML=arrUtente;
}, 3000);
};
