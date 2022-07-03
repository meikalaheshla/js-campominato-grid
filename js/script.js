/*Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Procediamo milestone per milestone senza invertire l'ordine.
Cerchiamo di fare almeno un commit per ogni milestone!
# MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Note:
- questo bonus richiederà una riflessione extra per quel che riguarda il calcolo della larghezza delle celle ;)
Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento*/

// Prendiamo gli elementi html 

const playBtn = document.getElementById('play-button');
const grid = document.getElementById('grid');

let rows;
let rowCells;


// FUNZIONe per crare una cella

function createCell(cellNumber) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerText = cellNumber;

    // GESTISCO LA GRANDEZZA DELLE CELLE A SECONDA DELLA DIFFICOLTA

    const cellSize = `calc(100% / ${rowCells})`
    cell.style.height = cell.style.width = cellSize;



    return cell;
}


// AL CLICK COMPAIONO LE CELLE 

playBtn.addEventListener('click', function () {

    // PRENDO IL VALORE DELLO SWITCH

    const difficulty = document.getElementById('difficulty-select').value

    // RESETTO LA GRIGLIA NEL CASO CE NE FOSSE GIA UNA

    grid.innerHTML = ''

    // CAMBIO IL NUMERO DI CELLE A SECONDA DELLA DIFFICOLTA

    switch (difficulty) {
        case 'easy':
        default:
            rows = rowCells = 10
            break;
        case 'medium':
            rows = rowCells = 9
            break;
        case 'hard':
            rows = rowCells = 7
            break;
    }


    const cellsTotal = rows * rowCells;

    // CREIAMO LE CELLE CHE CI SERVONO 

    for (let i = 1; i <= cellsTotal; i++) {
        const cell = createCell(i);

        // AGGIUNGO AZIONI AL CLICK DLLE CELLE
        cell.addEventListener('click', function () {

            // IMPEDISCE DI CLICKARE PIU VOLTE 

            if (cell.classList.contains('clicked')) {
                return
            }
            this.classList.add('clicked')
            console.log(this.innertext)



        })
        grid.appendChild(cell)

    }

})











