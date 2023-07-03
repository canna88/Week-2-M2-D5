/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore 
 è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function  crazySum (a,b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        if (a === b) {
            return (a + b) * 3;
        } else {
            return (a + b);
        }

    } else {
        return "Uno dei due argomenti forniti non è un numero intero";
    }

}

console.log(crazySum(2.1,3)) 

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true 
 se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/


function boundary (a) {
    if (Number.isInteger(a)) {
        if (((a > 20) && (a < 100)) || (a === 400)) {
            return true
        } else {
            return false
        }

    } else {
        return "L'argomento fornito non è un numero intero";
    }

}

console.log(boundary(3))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString (a) {
    let reversed = ""
    for (let i = a.length -1; i >= 0; i--) {
        reversed += a[i]
    }
    return reversed
}

console.log(reverseString("Alessio"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e 
 la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst (a) {
    let words = a.split(" ");
    let modifiedWords = "";
    
    for (let i = 0; i < words.length; i++) {

        let modifiedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        if (i=== words.length-1) {
            modifiedWords = modifiedWords + modifiedWord
        } else {
            modifiedWords = modifiedWords + modifiedWord + " "
        }
    }
    return modifiedWords
}

console.log(upperFirst("alessio ha mangiato una mela"))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come 
 parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom (a) {
    let randomNumber = []
    for (let i = 0; i < a; i++) {
        randomNumber.push(Math.floor(Math.random() * 11));
    }
    return randomNumber
}

console.log(giveMeRandom(4))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) 
 e calcola l'area del rettangolo associato.
*/

function area(l1,l2) {
    if (typeof (l1) === "number" && typeof (l2) === "number" ) {
        return l1 * l2
    } else {
        return "Uno dei due argomenti forniti non è un numero";
    }
}
    
console.log(area(4,3))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(a) {
    if (typeof (l1) === "number") {
        if (a-19 > 19) {
            return (a-19) * 3
        } else {
            return a-19
        }
    } else {
        return "L'argomento fornito non è un numero"
    }
}

console.log(crazyDiff(20))
console.log(crazyDiff("prova"))


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita 
 e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" 
 allora deve ritornarla senza modifiche.
*/

function codify(a) {
    if (typeof a === "string") {
        if (a.slice(0,4) === "code") {
            return a
        } else {
            return "code" + a
        } 
    } else {
        return "L'argomento fornito non è una stringa"
    }
}

console.log(codify("prova"))
console.log(codify(2))


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, 
 e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7 (a) {
    if (typeof a === "number") {
        if ((a % 3 ===0) || (a % 7 ===0)) {
            return true
        } else {
            return false
        }
    } else {
        return "L'argomento fornito non è un numero"
    }

}

console.log(check3and7(15))
console.log(check3and7(21))
console.log(check3and7(32))
console.log(check3and7("prova"))


/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro 
 e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString (a) {
    if (typeof a === "string") {
        return a.slice(1,-1)
    } else {
        return "L'argomento fornito non è una stringa"
    }
}

console.log(cutString("prova"))
console.log(cutString(32))
