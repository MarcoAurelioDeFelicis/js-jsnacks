console.log ('snacks');

// creare un array con i nomi in list per il party
const arraynames = [ "Marco", "Vaiva", "Mick", "Nastya", "Fabio","Gaya", "Riccardo", "Austeya", "Martyna" ];

// chiedere all'utente il proprio nome
const username = prompt ('inserisci il tuo nome') //string or nun

let trovato = false

for (let i = 0; i < arraynames.length; i++) {
    const currentname = arraynames [i]
    if (currentname === username) {
        trovato = true
    }
    console.log (currentname, username, trovato)

}

if (trovato) {
    console.log ('puoi')
} else {
    console.log ('non puoi')
}
