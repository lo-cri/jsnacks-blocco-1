// L'utente inserisce due numeri in succession, con due prompt. Il software stampa il maggiore.

let num1 = prompt("Inserisci il primo numero");
let num2 = prompt("Inserisci il secondo numero");

if (num1 > num2) {
  document.write("Il numero maggiore è: " + num1);
} else if (num1 < num2) {
  document.write("Il numero maggiore è: " + num2);
} else {
  document.write("I numeri sono uguali");
}