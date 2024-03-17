
console.log ('snacks');

// cheiedere all'utente 10 numeri

// const num1 = parseInt (prompt ('inserisci qui un numero'))
// const num2 = parseInt (prompt ('inserisci qui un altro numero'))
// const num3 = parseInt (prompt ('inserisci qui un altro numero'))
// const num4 = parseInt (prompt ('inserisci qui un altro numero'))
// const num5 = parseInt (prompt ('inserisci qui un altro numero'))
// const num6 = parseInt (prompt ('inserisci qui un altro numero'))
// const num7 = parseInt (prompt ('inserisci qui un altro numero'))
// const num8 = parseInt (prompt ('inserisci qui un altro numero'))
// const num9 = parseInt (prompt ('inserisci qui un altro numero'))
// const num10 = parseInt (prompt ('inserisci qui lultimo numero'))

// // stampare il risultato 
// const result = (num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10)
// console.log ('questo è il risultato dei tuoi numeri ' + result)

//nuovo ragionamento con somma dentro l'array

let arraynumber = []; // array vuoto

//variabile per la somma
let result = 0;

//ciclo for con pusching in array
for (let i = 0; i<10; i++) {

    //chiedere 10 num all'utente e metterli nell'array,
    const numeri = parseInt (prompt ("insetrire qui il tuo numero")); //number

    //pusciarli nell'array
    arraynumber.push(numeri);

    result += arraynumber[i];
}

console.log ("la somma dei tuoi numeri è: " + result)


