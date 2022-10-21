/*Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale 
del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando 
esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. La risposta finale 
(o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante 
allora realizzeremo un form in pagina in cui l’utente potrà 
inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi 
stampati in pagina (il prezzo dovrà essere formattato con massimo 
due decimali, per indicare i centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.*/

const buttonGenerator = document.getElementById("button-generator");

const buttonReset = document.getElementById("button-reset");

let showTicket = document.getElementById("show-ticket");


buttonGenerator.addEventListener("click", function(){
    const fullName = document.getElementById("full-name-input").value;
    let kmToDo = Number(document.getElementById("km-to-do").value);
    let selectBody = document.getElementById("select-body");

    //Comando che fa aprire o chiudere il biglietto generato
    if ( fullName === ""){
        alert("Attenzione! Il campo 'Nome Cognome' non può essere lasciato vuoto.");
    } else if ( kmToDo === 0){
        alert("Attenzione! Il campo 'Km da percorrere' non può essere lasciato vuoto.");
    } else if (selectBody.value === "default"){
        alert("Attenzione! Seleziona una fascia di età.");
    } else {
        showTicket.classList.remove("ticket-d-none");
    }
    //Comando che fa aprire o chiudere il biglietto generato

    document.getElementById("customer-name").innerHTML = (fullName);

    // Funzione che Controlla la fascia età selezionata e applica le varie tariffe
    offertaType(selectBody);

    // Funzione che genera un numero random da 0 a 10 e lo stampa nella voce carrozza
    document.getElementById("carrozza-number").innerHTML = numCarrozzaGenerator();

    // Funzione che genera il Codice CP tra 90000 e 99999
    document.getElementById("cp-code").innerHTML = cpCodeGenerator();

    // Funzione che calcola il prezzo finale in base alla fascia d'età e i km scelti
    document.getElementById("final-cost").innerHTML = `${totalCost(kmToDo, selectBody)} €`;
});

buttonReset.addEventListener("click", function(){
    //Comando che fa chiudere il biglietto generato al reset
    showTicket.classList.add("ticket-d-none");
});

function offertaType(selectBody){
    if ( selectBody.value === "maggiorenne" ) {
        document.getElementById("offerta-type").innerHTML = `Tariffa Standard`; 
    } else if ( selectBody.value === "minorenne" ) {
        document.getElementById("offerta-type").innerHTML = `Tariffa Young - 20%`;
    } else {
        document.getElementById("offerta-type").innerHTML = `Tariffa Over65 - 40%`;
    }
}

function numCarrozzaGenerator(){
    let x = Math.floor(Math.random() * 10) + 1;
    return x;
}

function cpCodeGenerator(){
    let x = Math.floor(Math.random() * 9999) + 90000;
    return x;
}

function totalCost(kmToDo, selectBody){
    let price;
    if ( selectBody.value === "maggiorenne" ) {
        price = 0.21 * kmToDo;
        return parseFloat(price).toFixed(2);
    } else if ( selectBody.value === "minorenne" ) {
        price = (0.21 * kmToDo) - (0.21 * kmToDo * 0.2);
        return parseFloat(price).toFixed(2);
    } else {
        price = (0.21 * kmToDo) - (0.21 * kmToDo * 0.4);
        return parseFloat(price).toFixed(2);
    } 
}