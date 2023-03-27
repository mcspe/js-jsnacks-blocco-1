/* JSnack 8
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
OPERATIONS
- chiedi all'utente di inserire un numero di 4 cifre
- controlla che il dato inserito rispetti i parametri richiesti, altrimenti chiedi di inserire un dato corretto
- tramite *split* creo un'array dalla stringa di numeri inserita dall'utente
- con un ciclo for per la lunghezza dell'array sommo gli elementi dell'array
- visualizzo il risultato */

let num = prompt('inserisci un numero di 4 cifre');
let checkNum;
let checked = false;
let result = 0;

while (!(checked)){

  checkNum = parseInt(num);

  if ((num.length === 4) && !(isNaN(checkNum))){
    checked = true;
  }else{
    num = prompt('Il numero inserito non rispetta i parametri richiesti, per favore inserisci un numero di 4 cifre');
  }
  
}

const arr = num.split('');

for(let i = 0; i < arr.length; i++){
  const add = parseInt(arr[i]);
  console.log(add);
  result += add;
}

console.log('la somma delle cifre del numero inserito', num, 'è uguale a', result);