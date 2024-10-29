let parola = 'GATTO';
let currentRow = 0;
let currentRowKey = 0;
let currentCol = 0;
let allRow = 6;
let allCol = 5;

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

function showKey(valore) {

    const button = document.getElementById('R' + currentRowKey + 'C' + currentCol);


    button.innerText = valore;

    button.disabled = false;

    if (valore == parola[currentCol]) {

        button.style.backgroundColor = 'green';
        return;

    } else if (parola.includes(valore)) {

        button.style.backgroundColor = 'yellow';
        return;

    } else {

        button.style.backgroundColor = 'gray';
        return;

    }

}

function checkWinKey() {
    
    for (let i = 0; i < allCol; i++){

        if (!document.getElementById('R' + currentRowKey + 'C' + i).textContent == parola[i]) {
            
            return false;
        } 
    }

    return true;
}

function keyboardKey(valore) {

    let key = document.getElementsByClassName('key');


    for (let i = 0; i < key.length; i++) {

        if (key.item(i).id == ('key' + valore)) {

            console.log('Elemento premuto: ' + valore);

            if (currentCol >= allCol) {

                if (checkWinKey()) {
                    
                    alert('HAI VINTO');
                }
                
                currentCol = 0;

                currentRowKey++;
            }

            if (currentRowKey >= allRow) {
                
                alert('Hai perso! La parola era: ' + parola);

                initPage();
            }

            showKey(valore);

            currentCol++;


        }
    }
}
