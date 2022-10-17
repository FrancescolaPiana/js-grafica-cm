


// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// pressione bottone play
const buttonplay = document.getElementById('playbtn');


function play() {
    console.log('inizio del gioco')
    
    NumeroCelle = 100
    GrigliaGen();
}

// evento click al play
buttonplay.addEventListener('click' , play );



/* <div    class="griglia">
        <div    class="quadrato">
            <span>1</span>
        </div>
    </div> 
*/


// FUNZIONI 

    function GrigliaGen() {
            const campodagioco = document.getElementById('campo_gioco');
            griglia = document.createElement('div');
            griglia.className = 'griglia';

                // contatore creazione celle
            for (let i = 1; i <= NumeroCelle; i++) {
                const Quadrato = QuadratoGen(i)
                griglia.appendChild(Quadrato)
            }
    campodagioco.appendChild(griglia)
    }    

    function QuadratoGen(NumQuadrato) {
        Quadrato = document.createElement('div')
        Quadrato.className = 'quadrato'
        Quadrato.innerHTML = `
            <span> ${NumQuadrato} </span>
        `
        griglia.appendChild(Quadrato) 
        return Quadrato;
    }    


    // NOTA BENE LE VARIABILI DELLE FUNZIONI CHE DEVI RIUTILIZZARE IN ALTRE FUNZIONI SCRIVERE SENZA LET E CONST COSI DA TROVARLE NELLO SCOOP GLOBALE.