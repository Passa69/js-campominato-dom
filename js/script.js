// ...PRIMA PARTE
// 1. chiedo all'utenete che livello di difficoltÃ  desidera => prompt
// 2. a seconda della scelta modulo il layout => if
    // 2.1 creo un ciclo per ogni scelta => for
// 3. l'utente deve essere in grado di selezionare le celle per rendere selezionate => click + classList
// ...SECONDA PARTE
// 4. generare 16 numeri casuali
    // 4.1 se uguali a numeri esistenti negli square dare loro la classe "boom"
// 5. tenere il conto del numero dei quadrati cliccati
// 6. game over
    // 6.1 se si clicca su una bomba, mostrare tutte le altre
    // 6.2 se si clicca su tutti i quadrati senza bombe

// richiesta all'utente
const userChoice = parseInt(prompt("Scegli il livello di difficoltÃ  tra: 1, 2 o 3"));
console.log(userChoice);

// costante del contenitore
const squareContainer = document.getElementById("container");

// variabile per layout di scelta dell'utente
let levels;

// array vuoto per i 16 numeri casuali
let bomba = [];
console.log(bomba);

// punti
let points = 0;


if (userChoice == 1) {
    levels = 100;

}

if (userChoice == 2) {
    levels = 81;

}

if (userChoice == 3) {
    levels = 49;

}

//  ciclo per numeri casuali array
while (bomba.length < 16) {
    let univ = Math.floor(Math.random() * levels) + 1;

    // controllo per numeri univoci
    if (bomba.indexOf(univ) == -1) { 
        bomba.push(univ);
    }   
}

// ciclo per la ripetizione degli square
for (let i = 1; i <= levels; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.append(i);
    squareContainer.append(square);

    // marcatore per game over
    if (bomba.includes(i)) {
        square.classList.add('bomb');
    }
    
    // aggiunta click
    square.addEventListener ('click', function() {
        square.classList.add("selection");
        ++points;
        console.log("punteggio momentaneo: ", points);

        // mostro tutte le bombe
        if (bomba.includes(i)) {
            let bombs = document.getElementsByClassName("bomb");
            for (let j = 0; j < bombs.length; j++){
                bombs[j].classList.add("boom");
            }
            alert("hai perso! hai totalizzato questi punti: ", points);
        }

        // ...
        // metodo piÃ¹ complicato per l'aggiunta della classe per le bombe:
        // if (bomba.indexOf(i) == -1) {
        //     square.addEventListener ('click', function() {
        //         console.log('hai cliccato!', this)
        //         square.classList.add("selection");
        //     });
        // } else {
        //     square.addEventListener ('click', function() {
        //         console.log('hai cliccato!', this)
        //         square.classList.add("boom");
        //     });
        // }
        // ...
    });
    
}


