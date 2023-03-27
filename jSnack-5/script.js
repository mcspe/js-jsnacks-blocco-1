/* JSnack 5
Crea un array vuoto.

Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array

OPERATIONS

- Creo un array vuoto.
- con un ciclo *for* che si ripete per 6 volte:
  - chiedo all'utente di inserire un numero
  - trasformo il valore inserito in valore numerico
  - attraverso l'operatore *%* controllo che sia divisibile per due, quindi pari
  - se falso, quindi dispari, aggiungo il valore inserito al mio array
- stampo l'array con i dati inseriti */

const oddNum = [];
const numberCount = [
  'primo',
  'secondo',
  'terzo',
  'quarto',
  'quinto',
  'sesto'
];

const insertMsg = document.querySelector('.snack-container label');
const numberInput = document.querySelector('.snack-container input');
const inputBtn = document.querySelector('.snack-container button');
const result = document.querySelector('.snack-container .result');
const resultMsg = document.createElement('p');
result.append(resultMsg);

let i = 0;
numberInput.value = '';

insertMsg.innerHTML = `Inserisci il ${numberCount[i]} numero`;

inputBtn.addEventListener('click', function() {

  const number = parseInt(numberInput.value);

  if (!isNaN(number)){
    i++;
    numberInput.value = '';
    numberInput.focus();
    insertMsg.innerHTML = `Inserisci il ${numberCount[i]} numero`;

    if (number % 2) {
      oddNum.push(number);
    } 

  } else {
    insertMsg.innerHTML = `Il valore inserito non è numerico, per favore inserisci un numero`;
    numberInput.value = '';
    numberInput.focus();
  }

  if (i === 6) {
    if (oddNum.length != 0){
      result.innerHTML = `Fatto! I numeri dispari che hai inserito sono: ${oddNum.join(' - ')}`;
    } else {
      result.innerHTML = `Fatto! Non hai inserito numeri dispari`;
    }
    
    oddNum.splice(0);
    i = 0;
    numberInput.value = '';
    numberInput.blur();
    insertMsg.innerHTML = `Inserisci il ${numberCount[i]} numero`;
  }
});



