JSnack Blocco 1
===
### JSnack 5
 Crea un array vuoto.

 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array

### JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

### JSnack 7
 Stampa le potenze di 2 fino a 1000.
 Questo snack cela un trabocchetto:  1000 non è una potenza di 2, perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
 perché altrimenti il controllo viene fatto dopo e si sfora
## BONUS
### JSnack 8
 Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.

 ---
## OPERATIONS
### JSnack 5
- Creo un array vuoto.
- con un ciclo *for* che si ripete per 6 volte:
  - chiedo all'utente di inserire un numero
  - trasformo il valore inserito in valore numerico
  - attraverso l'operatore *%* controllo che sia divisibile per due, quindi pari
  - se falso, quindi dispari, aggiungo il valore inserito al mio array
- stampo l'array con i dati inseriti
### JSnack 6
- Chiedo all'utente di inserire un numero
- creo un array vuoto
- creo un ciclo *for* che si ripeta tante volte quanto il numero inserito dall'utente:
  - per ogni ciclo calcolo il cubo del valore del contatore (moltiplico il valore del contatore per se stesso due volte)
  - aggiungo il risultato ottenuto al mio array
- stampo l'array con i dati inseriti
### JSnack 7
- creo una costante *base potenza* con valore `2`
- creo una variabile *risultato* con valore `1` (la potenza di un numero alla `0` è uguale a `1`)
- con un ciclo do while:
  - stampo il valore di risultato
  - assegno a *risultato* il valore di sè stesso per *base potenza*
  - controllo che *risultato* si inferiore al valore `1000`, condizione per la quale si chiude il ciclo
