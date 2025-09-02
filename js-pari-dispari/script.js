/* 

  Pari e Dispari
  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  Sommiamo i due numeri
  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  Dichiariamo chi ha vinto.

*/

// INPUT

  // Scelta utente -> pari/dispari
  let sceltaPariDispariUtente = (prompt("SCEGLI: \n Pari \n Dispari "));
  console.log("Scelta utente: ", sceltaPariDispariUtente);

  // Scelta utente -> numero
    const numUtente = parseInt(prompt("Scegli un intero tra 1 e 5"));

// Generazione numero random per computer
const numComputer = Math.floor(Math.random() * 5) +1;

// Chiamata funzione per verifica somma pari/dispari
const sommaIsPari = sommaPariDispari(numUtente, numComputer);
console.log("Somma is pari: ", sommaIsPari);

// OUTPUT: vincitore
if ( (sommaIsPari && sceltaPariDispariUtente === "pari") || 
     (!sommaIsPari && sceltaPariDispariUtente === "dispari") ) {

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