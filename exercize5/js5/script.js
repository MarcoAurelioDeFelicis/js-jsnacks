console.log ('snacks');

//Crea un array vuoto.
let numeri = []; //array vuoto

for(let i = 0; i<6; i++) {

    //Chiedi per 6 volte all’utente di inserire un numero,
    const numero = parseInt (prompt ("insetrire qui il tuo numero")); //number

    //se num è dispari
    //pushare il numero nell'array 
    if (numero % 2 === 1) {
        numeri.push(numero)   
    } else {
        
    }
}

//alla fine stampa l'arrray in console 
console.log(numeri)

