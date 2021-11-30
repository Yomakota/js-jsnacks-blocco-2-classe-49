// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari;

// Crea un array di numeri interi che si riempie coi numeri chiesti all'utente;
let numbers = [];
let sum = 0;

for (let i = 0; i < 10; i++) {

    let number = parseInt(prompt(`insert number`));
    numbers.push(number); //per riempire array vuoto;

   
    if (i % 2 == 0) {

        console.log('even position', numbers[i]);
    } 

    else {
        //  la somma di tutti i numeri che sono in posizione dispari;
        sum += numbers[i];

        console.log('odd position', numbers[i]);
    }
}

const h1 = document.querySelector('h1');
h1.innerHTML ='The sum is: ' + sum;
console.log('odd position numbers sum is: ' + sum);
