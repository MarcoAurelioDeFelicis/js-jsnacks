console.log ('snacks')

//chiedere all'ìutente due numeri in prompt separati
const num1 = parseInt (prompt ('inserisci il tuo numero')) //number
console.log (num1 + ' questo è il tuo primo numero')

const num2 = parseInt (prompt('inserisci un altro numero')) //number
console.log (num2 + ' questo è il tuo secondo numero')

//stampare in console solo il numero maggiore digitati dall'utente
if (num1 > num2) {
    console.log ('questo è il numero maggiore ' + num1)
    
} 
else {
    console.log ('questpo è il numero maggiore ' + num2)
}