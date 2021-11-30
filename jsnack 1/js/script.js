// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

let names = ['matteo', 'lorenzo', 'giuseppe', 'franco', 'pippo', 'pluto', 'ignazio', 'gaspare', 'tommaso', 'giulio'];
let lastName = ['rossi', 'verdi', 'bianchi', 'buffon', 'licata', 'delpiero', 'totti', 'ronaldo', 'platini', 'alighieri'];
let listGuest = [];

//ciclo for

for (let i = 0; i < 20; i++){

    let newListguest = names[Math.floor(Math.random() * 9)] +' '+ lastName[Math.floor(Math.random() * 9)];
    listGuest.push(newListguest);
}
console.log(listGuest);


const ul = document.querySelector('.list');

for (let i = 0; i < listGuest.length; i++) {
    let list_item;
    
    list_item = `<li>${listGuest[i]}</li>`;

    ul.innerHTML += list_item;
}
