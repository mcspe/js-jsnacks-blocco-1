/*JSnack 6
Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

OPERATIONS
- Chiedo all'utente di inserire un numero
-creo un array vuoto
- creo un ciclo *for* che si ripeta tante volte quanto il numero inserito dall'utente:
  - per ogni ciclo calcolo il cubo del valore del contatore (moltiplico il valore del contatore per se stesso due volte)
  - aggiungo il risultato ottenuto al mio array
- stampo l'array con i dati inseriti */

const insertMsg = document.querySelector('.snack-container label');
const cycleLimit = document.querySelector('.snack-container input');
const inputBtn = document.querySelector('.snack-container button');
const result = document.querySelector('.snack-container .result');
const resultMsg = document.createElement('p');
result.append(resultMsg);
const resultMsgTitle = document.createElement('h3');
resultMsg.append(resultMsgTitle);
const resultMsgList = document.createElement('ul');
resultMsg.append(resultMsgList);
console.log(result);

insertMsg.innerHTML = `Inserisci un numero`;

inputBtn.addEventListener('click', function() {
  const cycleLimitValue = parseInt(cycleLimit.value);
  
  if (!isNaN(cycleLimitValue)){

    resultMsgTitle.innerHTML = ``;
    resultMsgList.innerHTML = ``;
    cycleLimit.value = '';
    insertMsg.innerHTML = `Inserisci un numero`;
    resultMsgTitle.innerHTML = `Hai chiesto di calcolare il cubo dei numeri da 0 a ${cycleLimitValue}`;

    for(let i = 0; i <= cycleLimitValue; i++){
      const calc = (i * i) * i;
      const resultMsgListItem = document.createElement('li');
      resultMsgListItem.innerHTML = `Il cubo di ${i} è uguale a ${calc}`;
      resultMsgList.append(resultMsgListItem);
    }

  } else {

    insertMsg.innerHTML = `Il valore inserito non è numerico, per favore inserisci un numero`;
    cycleLimit.value = '';
    cycleLimit.focus();
    resultMsgTitle.innerHTML = ``;
    resultMsgList.innerHTML = ``;
  }

});