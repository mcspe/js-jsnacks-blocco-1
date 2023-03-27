/* JSnack 7
Stampa le potenze di 2 fino a 1000.
Questo snack cela un trabocchetto:  1000 non è una potenza di 2, perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
perché altrimenti il controllo viene fatto dopo e si sfora
OPERATIONS
- creo una costante *base potenza* con valore `2`
- creo una variabile *risultato* con valore `1` (la potenza di un numero alla `0` è uguale a `1`)
- con un ciclo do while:
  - stampo il valore di risultato
  - assegno a *risultato* il valore di sè stesso per *base potenza*
  - controllo che *risultato* si inferiore al valore `1000`, condizione per la quale si chiude il ciclo
*/

const basePotenza = 2;
let result = 1;
let elevatore = 0;

do{
  console.log(basePotenza, 'alla', elevatore, 'uguale a', result);
  elevatore++;
  result *= basePotenza;
}while(result <= 1000)