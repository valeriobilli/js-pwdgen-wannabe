let firstName = prompt("Inserisci il tuo nome")
let lastName = prompt ("Inserisci il tuo cognome")
let color = prompt ("Qual è il tuo colore preferito?")

let password = firstName + "-" + lastName + "-" + color + "2023"

console.log("La nuova password è: ", password)

document.getElementById("psw").innerText = password;