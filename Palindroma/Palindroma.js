
/*
Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

*/

let parola = prompt("inserisci una parola ")

console.log(` la parola e ${parola}`)
let parolaInversa = ""


function palindroma(){

    for ( let i = parola.length - 1; i >= 0; i--){
        parolaInversa += parola.charAt(i)

    }
    if( parola === parolaInversa ){
        
        console.log(`la parola ${parola} e ${parolaInversa}  : e palindroma`)
    }else{

        console.log(`la parola ${parola} e ${parolaInversa} :non e palindroma`)
    }
}

palindroma()