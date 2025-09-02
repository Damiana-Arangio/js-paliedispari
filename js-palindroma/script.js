/* 

  Palindroma
  Chiedere all’utente di inserire una parola
  Creare una funzione per capire se la parola inserita è palindroma

*/

// INPUT: richiesta inserimento parola
const parola = prompt("Inserisci una parola");

// Chiamata funzione che controlla se parola è palindroma
const ispalindroma = checkPalindroma(parola);

// OUTPUT
if(ispalindroma) {
  console.log("La parola " + parola + " è palindroma");
}

else {
  console.log("La parola " + parola + " non è palindroma");
}



// FUNZIONE 
function checkPalindroma(stringa) {
  stringa = stringa.toLowerCase();
  let reverseStringa = stringa.split("").reverse().join(""); /* 
                                                                - Trasformo stringa in array con split 
                                                                - La inverto con reverse
                                                                - Ricompongo la stringa con join
                                                              */
  return stringa === reverseStringa;
}