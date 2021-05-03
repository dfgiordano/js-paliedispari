/* 1 - Palindroma
Chiedere all'utente di inserire una parola */
var parolaUtente = prompt("Inserisci una parola");
console.log(parolaUtente);
var parolaRovesciata;
/* Creare una funzione per capire se la parola inserita è palindroma */

function parolaAlContrario (parola) {
    var risultato = "";
    var len = parola.length;
    /*
    parola = "topo"
    i parte da 3
    i>=0
    */
    for(var i = len-1; i >= 0; i--) {
        risultato += parola[i];
    }
    return risultato;
}

parolaRovesciata = parolaAlContrario(parolaUtente);

if (parolaUtente == parolaRovesciata) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}

/* 2 - Pari e Dispari 
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5. */
var sceltaUtente = prompt("Scegli pari o dispari");
console.log(sceltaUtente);
var numero = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(numero);

/* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). */

/* Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */