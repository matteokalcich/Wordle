let parola = 'CORDA';
let currentRow = 0;
let currentRowKey = 0;
let currentCol = 0;
let allRow = 6;
let allCol = 5;

window.onload = initPage;

function applyFlip() {
    var tiles = document.getElementsByClassName('cellaBtn');
    var tilesArray = Array.from(tiles);
    tilesArray.map(function (tile, i) {
      tile.classList.add('flip');
      tile.style.animationDelay = `${i * 100}ms`;
    });
}

  function rotazione(){

    var tiles = insertedWord;
    var tilesArray = Array.from(tiles);
    tilesArray.map(function (tile, i) {
      tile.classList.add('flip');
      tile.style.animationDelay = `${i * 100}ms`;
    });
  }


function sendWord() {

    //rotazione();

    let insertedWord = document.getElementById('wordToSend');

    if (insertedWord.value.length != 5) {

        alert('ERRORE: inserire una parola con 5 lettere');

        insertedWord.value = '';

        return;
    }

    showWord(insertedWord.value.toUpperCase());

    if (insertedWord.value.toUpperCase() == parola) {

        alert('HAI VINTO!');

        insertedWord.value = '';

        document.getElementById('wordToSend').disabled = true;

        return;
    }

    currentRow++;

    if (currentRow >= allRow) {

        alert('Hai perso! La parola era: ' + parola);

        insertedWord.value = '';
    }
}

function initPage() {




    for (let row = 0; row < allRow; row++) {

        for (let col = 0; col < allCol; col++) {

            document.getElementById('R' + row + 'C' + col).disabled = true;
            document.getElementById('R' + row + 'C' + col).innerText = '';
            document.getElementById('R' + row + 'C' + col).style.backgroundColor = 'white';

        }
    }
}

function showWord(insertedWord) {


    for (let i = 0; i < insertedWord.length; i++) {

        const button = document.getElementById('R' + currentRow + 'C' + i);

        button.innerText = insertedWord[i];

        button.disabled = false;

        if (insertedWord[i] == parola[i]) {

            button.style.backgroundColor = 'green';

        } else if (parola.includes(insertedWord[i])) {

            button.style.backgroundColor = 'yellow';

            for(let j=0; j<insertedWord.length; j++){

                if(insertedWord[i] == insertedWord[j]){

                    button.style.backgroundColor = 'gray';
                    
                }
            }

        } else {

            button.style.backgroundColor = 'gray';

        }
    }

    
}
