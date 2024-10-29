let parola = 'SEDIA';
let currentRow = 0;
let allRow = 6;

window.onload = initPage;


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

    if (currentRow >= allRow) {

        alert('Hai perso! La parola era: ' + parola);

        insertedWord.value = '';
    }
}

function initPage() {



    for (let row = 0; row < allRow; row++) {

        for (let col = 0; col < 5; col++) {

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


function showKeyboard() {

    let keyboard = document.getElementById('keyboard');

    let inputArea = document.getElementById('inputArea');

    let textButton = document.getElementById('showKeyboardTextArea');

    if (getComputedStyle(keyboard).display == 'flex') {

        keyboard.style.display = 'none';

        inputArea.style.display = 'flex';

        textButton.innerHTML = '<p>' + 'Mostra tasiera' + '</p>';

    } else {

        keyboard.style.display = 'flex';
        inputArea.style.display = 'none';

        textButton.innerHTML = '<p>' + 'Mostra text area' + '</p>';

    }
}

function keyboardKey() {



}
