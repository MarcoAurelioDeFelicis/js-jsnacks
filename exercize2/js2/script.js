console.log ('snacks')

//chiedere all'ìutente due parole in prompt separati
const word1 = (prompt ('inserisci la tua parola')) //string or null
console.log (word1 + ' questa è la tua prima parola')

const word2 = (prompt('inserisci un altra parola')) //string or null
console.log (word2 + ' questa è la tua seconda parola')

//stampare in console solo la parola più lunga digitata dall'utente
if (word1.length > word2.length) {
    console.log ('questa è la frase più lunga ' + word1) 
    
} 
else if (word1.length === word2.length) {
    console.log ('le due parole sono uguali')
}

else {
    console.log ('questa è la frase più lunga ' + word2)
}