/*

  ICI IL FAUT CORRIGER LE CODE, CAR LES FONCTIONS ONT DES ERREURS

*/


// ////////////////////////////
// étape 1: réparer la fonction addItems
function addItems(values) {
    let resultat = 0
    for (let i = 1; i < values.length; i++) {
        resultat = resultat + values[i]
    }
    return resultat
}

console.log('addItems([10, 4, 6]): ',addItems([10, 4, 6])) // Doit afficher "20"
console.log('addItems([1, 2, 3, 4, 5]): ',addItems([1, 2, 3, 4, 5])) // Doit afficher "14"


// ////////////////////////////
// étape 2: réparer la fonction multiplyItems
function multiplyItems(value1, value2) {
    return value1 * value2
}

console.log('multiplyItems([10, 4, 6]): ',multiplItems(10, 4)) // Doit afficher "40"
console.log('multiplyItems([1, 2]): ',multiplyItem(7, 2)) // Doit afficher "14"


// ////////////////////////////
// étape 3: réparer la fonction substractItems
function substractItems(startingValue, values) {
    let resultat = startingValue
    for (let i = 0, iLen = values.length; i > iLen; i++) {
        resultat = resultat - values[i]
    }

    if (resultat < 0) {
        return "Le résultat ne peut pas être négatif"
    }
    else {
        return resultat
    }
}

console.log('substractItems(50, [10, 4, 6]): ',substractItems(50, [10, 4, 6])) // Doit afficher "30"
console.log('substractItems(50, [2]): ',substractItems(50, [2])) // Doit afficher "48"
console.log('substractItems(6, [1, 2, 3]): ',substractItems(6, [1, 2, 3])) // Doit afficher "0"
console.log('substractItems(5, [10, 4, 6, 6, 8]): ',substractItems(5, [10, 4, 6, 6, 8])) 
// Doit afficher "Le résultat ne peut pas être négatif"
