// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più unga.

let word1 = prompt("Inserisci una parola");
let word2 = prompt("Inserisci una seconda parola, diversa dalla prima");

if (word1.length < word2.length) {
    document.write(word1);
    document.write(word2);
  } else if (word1.length > word2.length) {
    document.write(word2);
    document.write(word1);
  } else {
    document.write("Le parole hanno la stessa lunghezza");
  }