/* 

  Pari e Dispari
  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  Sommiamo i due numeri
  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  Dichiariamo chi ha vinto.

*/

// INPUT

  // SCELTA UTENTE -> pari/dispari
  let sceltaUtente;
  let sceltaPariDispariUtente;

  // Ciclo per validazione scelta 0 (pari) o 1 (dispari)
  do {
    sceltaUtente = parseInt(prompt("SCEGLI: \n 0 = Pari \n 1 = Dispari' "));
  }
  while (sceltaUtente != 0 && sceltaUtente != 1);

  if (sceltaUtente === 0) {
    sceltaPariDispariUtente = "pari";
    }
  else {
  sceltaPariDispariUtente = "dispari";
  }

console.log("Scelta: " + sceltaUtente + " -> " + sceltaPariDispariUtente);

    // SCELTA UTENTE -> numero
    let numUtente;
    let inputValido; // flag per controllare se il numero scelto rientra nel range

    // Ciclo per validazione numero (intero tra 1 e 5)
    do {
      numUtente = parseInt(prompt("Scegli un intero tra 1 e 5"));

      if (Number.isNaN(numUtente) || numUtente < 1 || numUtente > 5) {
        inputValido = false;
      }
      else {
        inputValido = true;
      }
    }
    while (!inputValido);


// ELABORAZIONE

  // Generazione numero random per computer
  const numComputer = Math.floor(Math.random() * 5) + 1;

  // Chiamata funzione per verifica somma pari/dispari
  const sommaIsPari = sommaPariDispari(numUtente, numComputer);
  console.log("Somma is pari: ", sommaIsPari);

// OUTPUT: vincitore
  if ((sommaIsPari && sceltaPariDispariUtente === "pari") || (!sommaIsPari && sceltaPariDispariUtente === "dispari")) {
    console.log("Hai vinto!");
  }
  else {
    console.log("Hai perso!");
  }


// FUNZIONE
function sommaPariDispari(numeroUtente, numeroComputer) {

  const somma = numeroUtente + numeroComputer;
  console.log("Somma = " + numeroUtente + " + " + numeroComputer + " = " + somma);

  return somma % 2 === 0;

}