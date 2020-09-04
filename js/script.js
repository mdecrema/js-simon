// Funzione che ritorna 5 numeri casuali in un array
function fiveNum() {
  var arrNum = [];
  for (i=0; i<5; i++) {
    var numGen = numRandom(1, 10);
    arrNum.push(numGen);
  };
  return arrNum;
}

// Funzione per generare numero casuale dato un numero minimo e uno massimo
function numRandom(numMin, numMax) {
  var num = Math.floor(Math.random()* (numMax - numMin + 1)) + numMin;
  return num;
};

// Funzione per permettere all'utente di inserire 5 numeri
function numUtente() {
  var arrUtente = [];
  var arrSbagliati = [];
  var numeri = fiveNum();
  while (i<5) {
    var richiesta = parseInt(prompt("Inserisci numero:"));
    if (isNaN(richiesta) || richiesta == 0 || richiesta == "") {
    var richiesta = parseInt(prompt("Inserisci numero:"));
    i--;
  } else if (validatore(numeri, richiesta) == false) {
    arrSbagliati.push(richiesta);
  } else if (validatore(numeri, richiesta) == true) {
    arrUtente.push(richiesta);
  }
  i++;
}
  return arrUtente;
};



function risultato() {
  var computer = fiveNum();
  var utente = numUtente();
  for (i=0; i<5; i++) {
    if ()
  }
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
  ret

// Prova
var check = console.log(fiveNum());
var check2 = console.log(numUtente());
