// les textes proviennent de "La cathédrale et le bazar"


// Exercice 1:
// Une fonction qui demande à l'utilisateur sont nom, puis affiche "bonjour" avec le prénom en console


// Exercice 2:
// Une fonction qui demande un mot de passe. Si il est bon on affiche "entrez" si il est mauvais on affiche "incorect"
// (le mot de passe peut être un mot quelconque a choisir)



// Exercice 3:
// fonction qui calcule le périmettre d'un parallélogramme. Formule : longueur plus largeur, le tout fois 2


// Exercice 4:
// fonction affiche si la lettre passé est une consonne ou une voyelle ou n'est pas reconnu



// exercice 6:
// Créer une fonction qui retourne la valeur absolue (toujours positif) d'un nombre (sans utiliser la library "Math)
// example 1 : valeurAbsoluts(4) retourne 4
// example 2 : valeurAbsoluts(-81) retourne 81



// Exercice 7:
// Créer une fonction qui retourne le chiffre le plus grand parmis les 2 passé en paramettre (sans utiliser Math.max)
// Il retourn le texte "égaux" si il sont pareil
// example 1 : max(4, 8000) retourne 8000
// example 2 : max(81, 80) retourne 81
// example 1 : max(4, 4) retourne "égaux"


// Exercice 8
// Créer la fonction calculer() qui gère les 4 opérations mathématiques de base : 
// addition, soustraction, multiplication et division.
console.log(calculer(4, "+", 6));  // 10
console.log(calculer(4, "-", 6));  // -2
console.log(calculer(2, "*", 0));  // 0
console.log(calculer(12, "/", 0)); // Infinity


// Exercice 10:
// Le code suivant retourne une erreur, rajouter ce qu'y est necessaire pour qu'il marche
let panier = { "pomme": 7}
panier.pomme = panier.pomme + 4
panier.banane = panier.banane + 2

// Exercice 11:
// créer une fonction qui fait la multiplsaction de tout les chiffre d'un tableau
// example 1: arrayMultiply([1, 2, 3, 4]) === 24
// example 2: arrayMultiply([10, 5, 2, 2.5, 4, 100]) === 100000

// Exercice 12:
// créer une fonction qui retourne le plus petit chiffre de la liste
// example 1: smallest([10, 28, 3, 4]) === 3
// example 2: smallest([10, 5, 2, 1.5, 4, 100]) === 1.5




// Exercice 40:
// Créer une fonction qui écrit tout les chiffres pair jusqu'à 20

// Exercice 41:
// créer une fonciton qui nous dis si le chiffre fais partie de la suite de Fibonicci
// (on s'arrêtera aux chiffres present dans la tableau en dessous)
// example 1: isFibonicci(4) // false
// example 2: isFibonicci(13) // true
// example 3: isFibonicci('p') // false
let fibonicciSequences  = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Exercice 42:
// fonction affiche pour chaque lettre de l'alphabet, si c'est un consonne ou une voyelle
// example : "a: voyelle"
let alphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]




// exercice 50:
// Fonction qui dis quel sera le jour après celui passé en paramêtre
// example 1: si je passe "lundi" on me renvoie "mardi"
// example 2: si je passe "vendredi" on me renvoie "samedi"
// Si joint le tableau des jours a utiliser
let weekDay = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]

let today = "lundi"



// exercice 51:
// Remplacer dans le texte les mots par ceux du dictionnaire pour retrouver le texte orignal
let dictionnaire = {
  "semaines": "années"
  "Windows": "Linux",
  "MacOS": "Unix",
  "petite": "grande",
}

let texte = "Windows a remis en cause une petite partie de ce que je croyais savoir. J'avais prêché l'évangile selon MacOS sur l'utilisation de petits outils, le prototypage rapide et la programmation évolutive, depuis des semaines"



// exercice 52:
// rajouter une majuscule sur la première lettre de chaque mot du texte
let texte = "La tradition de partage du code source du monde Unix a toujours favorisé la réutilisation de code"
