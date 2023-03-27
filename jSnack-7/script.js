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
const inputBtn = document.querySelector('.snack-container button');
const result = document.querySelector('.snack-container .result');
const resultMsg = document.createElement('p');
result.append(resultMsg);
const resultMsgTitle = document.createElement('h3');
resultMsg.append(resultMsgTitle);
const resultMsgList = document.createElement('ul');
resultMsg.append(resultMsgList);

let printed = false;

inputBtn.addEventListener('click', function() {
  
  resultMsgList.innerHTML = '';
  const powerBase = 2;
  let powerResult = 1;
  let nthPower = 0;


  if (!printed) {

    do{
      const resultMsgListItem = document.createElement('li');
      resultMsgListItem.innerHTML = `${powerBase} alla ${nthPower} uguale a ${powerResult}`;
      resultMsgList.append(resultMsgListItem);
  
      nthPower++;
      powerResult *= powerBase;
  
    }while(powerResult <= 1000)

    inputBtn.innerHTML = 'Cancella';
    printed = !printed;

  } else {
    printed = !printed;
    inputBtn.innerHTML = 'Stampa';
    resultMsgList.innerHTML = '';
  }

});