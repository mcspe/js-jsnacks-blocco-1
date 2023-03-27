/*JSnack 6
Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

OPERATIONS
- Chiedo all'utente di inserire un numero
-creo un array vuoto
- creo un ciclo *for* che si ripeta tante volte quanto il numero inserito dall'utente:
  - per ogni ciclo calcolo il cubo del valore del contatore (moltiplico il valore del contatore per se stesso due volte)
  - aggiungo il risultato ottenuto al mio array
- stampo l'array con i dati inseriti */

const cycleLimit = parseInt(prompt('inserisci un numero'));

const result = [];

console.log(cycleLimit);

for(let i = 1; i <= cycleLimit; i++){
  const calc = (i * i) * i;
  result.push(calc);
}

console.log(result);