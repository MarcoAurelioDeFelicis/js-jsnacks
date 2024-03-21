console.log ('snacks');

// creare un array con i nomi in list per il party
const arraynames = [ "Marco", "Vaiva", "Mick", "Nastya", "Fabio","Gaya", "Riccardo", "Austeya", "Martyna" ];

// chiedere all'utente il proprio nome
const username = prompt ('inserisci il tuo nome') //string or nun

//variabile true di nome inserito
let trovato = false

// ciclo for per controllare scorrendo l'array della lista invitati
for (let i = 0; i < arraynames.length; i++) {
    const currentname = arraynames [i]
    //se il nome nell'array e uguale al nome utente allora è true
    if (currentname === username) {
        trovato = true
    }
    // console.log (currentname, username, trovato)

}

//se l'utente è true 
if (trovato) {
    //allora può entrare
    console.log ('ciao ' + username + ' puoi partecipare al party')
    //altrimenti
} else {
    //non può entrare
    console.log ('ciao ' + username + ' non puoi partecipare al party')
}
