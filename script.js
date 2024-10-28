let parola = 'SEDIA';
let currentRow = 0;


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
