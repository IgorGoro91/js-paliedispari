
/*
Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/


let numeroGiocattore = Math.floor(Math.random() *5) +1
let numeroPc = Math.floor(Math.random() *5) +1

console.log(numeroGiocattore, numeroPc)

function sommaNumeri( numeroGiocattore, numeroPc){
   
    if( numeroGiocattore + numeroPc){

        somma = numeroGiocattore + numeroPc
        console.log(somma )
    }

       if( somma % 2 ==0){

        console.log("Somma e pari")
       } else{
        console.log("Somma e dispasi")
       }



}