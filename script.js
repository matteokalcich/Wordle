let parola = 'SEDIA';
let currentRow = 0;

window.onload = initGrid;


function sendWord() {

    
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

    if (currentRow >= 5) {

        alert('Hai perso! La parola era: ' + parola);

        insertedWord.value = '';
    }
}

function initGrid(){

    for(let row=0; row<5; row++){

        for(let col=0; col<5; col++){

            document.getElementById('R' + row + 'C' + col).disabled = true;
        
        }
    }
}

function showWord(insertedWord) {

    for (let i = 0; i < insertedWord.length; i++) {

        const button = document.getElementById('R' + currentRow + 'C' + i);

        button.innerHTML = '<p>' + insertedWord[i] + '</p';

        button.disabled = false;

        if (insertedWord[i] == parola[i]) {

            button.style.backgroundColor = 'green';

        } else if (parola.includes(insertedWord[i])) {

            button.style.backgroundColor = 'yellow';

        } else {

            button.style.backgroundColor = 'gray';

        }
    }
}


function showKeyboard(){

    let hideElement = document.getElementById('keyboard');

    if(getComputedStyle(hideElement).display == 'flex'){

        hideElement.style.display = 'none';

    } else {

        hideElement.style.display = 'flex';

    }
}