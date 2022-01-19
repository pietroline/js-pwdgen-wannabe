// Chiedo all'utente di inserire un nome
let nome = prompt('Inserisci il tuo nome');
console.log(`Il nome inserito è: ${nome}`);

// Chiedo all'utente di inserire un cognome
let cognome = prompt('Inserisci il tuo cognome');
console.log(`Il cognome inserito è: ${cognome}`);

// Chiedo all'utente di inserire il colore preferito
let colore = prompt('Inserisci il tuo colore preferito');
console.log(`Il colore preferito inserito è: ${colore}`);

// Genero password
let unione = nome + cognome + colore;
const numero = 21;
let pwd = unione + numero;
console.log("Ho generato la password!");

document.getElementById("pwd").innerHTML = pwd;