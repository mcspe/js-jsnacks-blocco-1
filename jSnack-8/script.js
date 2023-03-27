/* JSnack 8
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
OPERATIONS
- chiedi all'utente di inserire un numero di 4 cifre
- controlla che il dato inserito rispetti i parametri richiesti, altrimenti chiedi di inserire un dato corretto
- tramite *split* creo un'array dalla stringa di numeri inserita dall'utente
- con un ciclo for per la lunghezza dell'array sommo gli elementi dell'array
- visualizzo il risultato */

const insertMsg = document.querySelector('.snack-container label');
const numberInput = document.querySelector('.snack-container input');
const inputBtn = document.querySelector('.snack-container button');
const result = document.querySelector('.snack-container .result');
const resultMsg = document.createElement('p');
result.append(resultMsg);

let num;
let checkNum;
let checked = false;
let sumResult = 0;

numberInput.value = '';

insertMsg.innerHTML = `Inserisci un numero di quattro cifre`;

inputBtn.addEventListener('click', function() {

  num = numberInput.value;
  checkNum = parseInt(num);
  console.log(num, checkNum);
  
  if ((num.length === 4) && !(isNaN(checkNum))){
    insertMsg.innerHTML = `Inserisci un numero di quattro cifre`;
    checked = true;
    numberInput.value = '';

    const arr = num.split('');

    for(let i = 0; i < arr.length; i++){
      const add = parseInt(arr[i]);
      console.log(add);
      sumResult += add;
    }

    result.innerHTML = `La somma delle cifre del numero inserito ${num} è uguale a ${sumResult}`;

  } else {

    insertMsg.innerHTML = 'Il numero inserito non rispetta i parametri richiesti, per favore inserisci un numero di 4 cifre';
    numberInput.focus();

    result.innerHTML = '';

  }
    

});