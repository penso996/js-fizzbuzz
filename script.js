//Partire chiedendo al computer di elaborare dei numeri da 1 a 100.
for (let i = 1; i <= 100; i++) {

    //Mentre il computer elabora 1 ad 1 l'output verificare man mano risultato per risultato.
    //Quando un numero è:
    //MULTIPLO DI 3 E 5: Stampare FizzBuzz al posto del numero di output.
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    //MULTIPLO DI 3: Stampare Fizz al posto del numero di output.
    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    //MULTIPLO DI 5: Stampare Buzz al posto del numero di output.
    else if (i % 5 === 0) {
        console.log("Buzz");
    }

    //ALTRIMENTI: Stampare il numero.
    else {
        console.log(i);
    }

}