/*
CREER DES FONCTIONS MATHEMATIQUE PLUS COMPLEXES
*/


// Etape 1: fonction puissance

// refaire la fonction puissance () sans utiliser Math, mais juste le "*"

console.log('ALaPuissance(2, 1): ', ALaPuissance(2, 1)) // retourne 2
console.log('ALaPuissance(2, 4): ', ALaPuissance(2, 4)) // retourne 16
console.log('ALaPuissance(5, 2): ', ALaPuissance(5, 2)) // retourne 25


// Etape 2: fonction de division avec reste
// renvoie un objet avec comme clé
// - rawValue: qui contient le résultat avec le chiffre derrière la virgule
// - value: qui contient le résultat arondie à 3 chiffres après la virgule
// - integer: l'entier de la division
// - Modulus : le reste de la division

// NOTE: l'opérateur pour récupérer les reste d'une division est le pourcentage "%"

console.log('divisionAvecReste(5, 3): ', divisionAvecReste(5, 3)) // retourne {rawValue: 1.66666, value: 1.666, integer: 1, modulus: 2}
console.log('divisionAvecReste(6, 3): ', divisionAvecReste(6, 3)) // retourne {rawValue: 2, value: 2, integer: 2, modulus: 0}
console.log('divisionAvecReste(80, 7): ', divisionAvecReste(80, 7)) // retourne {rawValue: 11.4285714286, value: 11.429, integer: 11, modulus: 3}


// Etape 3: affichage des informations de la division (basé sur l'étape 2)
// la fonction "afficheResultatDivision" vas appeler la fonction "divisionAvecReste) et utiliser l'objet reçu pour afficher un texte

console.log('afficheResultatDivision(5, 3): ', afficheResultatDivision(5, 3))
// affiche "Le résultat de la division de 5 par 3, donne 1 avec le reste 2"
console.log('afficheResultatDivision(6, 3): ', afficheResultatDivision(6, 3))
// retourne "Le résultat de la division de 6 par 3, donne 2 avec le reste 0"
console.log('afficheResultatDivision(80, 7): ', afficheResultatDivision(80, 7))
// retourne "Le résultat de la division de 80 par 7, donne 11 avec le reste 23"
