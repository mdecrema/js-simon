

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

// Funzione per permettere all'utente di inserire 5 numeri
function numUtente() {
  var arrUtente = [];
  var arrSbagliati = [];
  var i = 0;
  while (i < 5) {
    var richiesta = parseInt(prompt("Inserisci numero:"));
    if (isNaN(richiesta) || richiesta == 0 || richiesta == "") {
    alert("Devi inserire un valore numerico. Riprova:");
    i--;
  } else if (validatore(arrNum, richiesta) == false) {
    arrSbagliati.push(richiesta);
  } else if (validatore(arrNum, richiesta) == true) {
    arrUtente.push(richiesta);
  }
  i++;
}
  return arrUtente;
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


console.log(numUtente());
