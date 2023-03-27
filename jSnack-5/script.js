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

for (let i = 0; i < 6; i++) {
  const number = parseInt(prompt('inserisci il numero'));
  if (number%2){
    oddNum.push(number);
  }  
}
console.log(oddNum);