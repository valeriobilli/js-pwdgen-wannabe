let firstName = prompt("Inserisci il tuo nome")
let lastName = prompt ("Inserisci il tuo cognome")
let color = prompt ("Qual è il tuo colore preferito?")

let firstNameOk = false;
let lastNameOk = false;
let colorOk = false;

if (firstName == null || firstName == "") {
    alert("Non hai inserito il nome");
} else if (firstName.length < 2) {
    alert("Il nome è troppo corto");
} else {
    console.log("L'utente ha inserito un nome valido");
    firstNameOk = true;
}

if (lastName == null || lastName == "") {
    alert("Non hai inserito il cognome");
} else if (lastName.length < 2) {
    alert("Il nome è troppo corto");
} else {
    console.log("L'utente ha inserito un cognome valido");
    lastNameOk = true;
}

if (color == null || color == "") {
    alert("Non hai inserito il colore");
} else {
    console.log("L'utente ha inserito un colore valido");
    colorOk = true;
}

let password = firstName + "-" + lastName + "-" + color + "-2023";

if (firstNameOk && lastNameOk && colorOk ) {
    console.log("La nuova password è: ", password);
} else {
    console.error ("Impossibile creare una password, dati mancanti")
}

document.getElementById("psw").innerText = password;





