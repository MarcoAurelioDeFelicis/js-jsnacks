console.log ('snacks');

//Fate generare un numero random da 0 a 10 al computer, 
 let randomfloat = Math.floor(Math.random() *10) +1; //number 1 - 10

//e chiedete all'utente di inserire un suo numero.
const usernumber = parseInt( prompt ('inserisci un numero da 1 a 10')); //number
console.log ('questo è il tuo numero ' + usernumber);
console.log ('questo è il numero casuale ' + randomfloat);

//Se il numero scelto dall'utente è uguale al numero del computer 
if (usernumber === randomfloat ) {
    //informate l'utente che ha vinto,
    console.log ('HAI VINTO')
   
//altrimenti 
} else {
    //ha perso.
    console.log ('CI DISPIACE HAI PERSO')
};
 

