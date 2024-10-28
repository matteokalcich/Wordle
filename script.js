var parola = 'SEDIA';


function sendWord(){

    var t = document.getElementById('wordToSend');

    if(t.value.length != 5){

        alert('ERRORE parola troppo corta');
    }

    if(t.value.toUpperCase() == parola.toUpperCase()){

        alert('HAI VINTO!');
        t.innerHTML = "";
        
    } else{

        
    }
}