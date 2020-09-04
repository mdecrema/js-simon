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

// Prova 
var check = alert(fiveNum());
