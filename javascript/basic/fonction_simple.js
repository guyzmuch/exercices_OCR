/*
Skip to content
Using Gmail with screen readers
4 of 60
(no subject)
Inbox

const BASE_NUMBER = 7


// ////////////////////////////
// Etape 1:

console.log("addByBase(4): ",addByBase(4)) // égale 11
console.log("addByBase(42): ",addByBase(42)) // égale 49

console.log("substractByBase(10): ",substractByBase(10)) // égale 3
console.log("substractByBase(42): ",substractByBase(42)) // égale 35


// Cette fonction divise le paramêtre par la base
console.log("divideByBase(70): ",divideByBase(70)) // égale 10
console.log("divideByBase(45): ",divideByBase(45)) // égale 6,428571429

// Cette fonction divise la base par le paramêtre
console.log("baseDividedBy(70): ",baseDividedBy(70)) // égale 0.1


console.log("multiplyByBase(11): ",multiplyByBase(11)) // égale 71
console.log("multiplyByBase(42): ",multiplyByBase(42)) // égale 294


// ////////////////////////////
// Etape 2: on peut passer des tableaux
console.log("baseDividedBy([7, 2, 1, 2]): ",baseDividedBy([7, 2, 1, 2])) // égale à 0.25

console.log("multiplyByBase([10, 4, 2, 8]): ",multiplyByBase([10, 4, 2, 8])) // égale 4480
console.log("multiplyByBase([42]): ",multiplyByBase([42])) // égale 294
console.log("multiplyByBase([1, 2, 3, 5, 8, 13]): ",multiplyByBase([1, 2, 3, 5, 8, 13])) // égale 21840



// ////////////////////////////
// Etape 2 bonus: on passe soit un tableau soit une valeur simple
console.log("baseDividedBy([7, 2]): ",baseDividedBy([7, 2])) // égale à 0.5
console.log("baseDividedBy(3): ",baseDividedBy(3)) // égale à 2.3333333

console.log("multiplyByBase([10, 4, 2, 8]): ",multiplyByBase([10, 4, 2, 8])) // égale 4480
console.log("multiplyByBase(42): ",multiplyByBase(42)) // égale 294



// ////////////////////////////
// Etape 3: securité (chiffre non négatif, division par zero), pas de résultat, mais des messages
console.log("baseDividedBy(0): ",baseDividedBy(0)) // égale "division par 0 interdite"

console.log("substractByBase(2): ",substractByBase(2)) // égale (-5) "le résultat ne peut pas être négatif"
console.log("multiplyByBase(0): ",multiplyByBase(0)) // égale "on ne peut pas multiplier par 0"



// ////////////////////////////
// Etape 3 bonus; arondir la division à 2 chiffre après la virgule (au plus proche)
console.log("divideByBase(45): ",divideByBase(45)) // égale 6,43 (original 6,428571429)
console.log("divideByBase(3): ",divideByBase(3)) // égale à 2.33 (original 2.3333333)



// ////////////////////////////
// Etape 4: la base peut être donnée dans la fonction

console.log("addByBase(4): ",addByBase(4)) // égale 11
console.log("addByBase(4, 42): ",addByBase(4, 42)) // égale 46

console.log("substractByBase(10): ",substractByBase(10)) // égale 3
console.log("substractByBase(10, 2): ",substractByBase(10, 2)) // égale 8

console.log("divideByBase(70): ",divideByBase(70)) // égale 10
console.log("divideByBase(70, 2): ",divideByBase(70, 2)) // égale 35

console.log("baseDividedBy(70): ",baseDividedBy(70)) // égale 0.1
console.log("baseDividedBy(70, 140): ",baseDividedBy(70, 140)) // égale 2

console.log("multiplyByBase(11): ",multiplyByBase(11)) // égale 71
console.log("multiplyByBase(11, 42): ",multiplyByBase(11, 42)) // égale 462


// ////////////////////////////
// Etape 5: object de course (ajout/suppréssion {pomme: 3, sucre: 5}, avec des fonctions. créer une clé si non existante)
let monPanier = {
    pomme: 2,
    banane: 0
}
console.log("addItem('pomme', 2): ",addItem('pomme', 2)) // monPanier = {pomme: 4,banane: 0}
console.log("addItem('banane', 7): ",addItem('banane', 7)) // monPanier = {pomme: 4,banane: 7}
console.log("addItem('fraise', 4): ",addItem('fraise', 4)) // monPanier = {pomme: 4,banane: 7, fraise: 4}


console.log("removeItem('pomme', 3): ",removeItem('pomme', 3)) // monPanier = {pomme: 1,banane: 7, fraise: 4}
console.log("removeItem('banane', 1): ",removeItem('banane', 1)) // monPanier = {pomme: 1,banane: 6, fraise: 4}


// ////////////////////////////
// Etape 5 bonus: résultat ne peut pas être négatif et la clé doit exister (répond un message)
let monPanier2 = {
    sucre: 2,
    cafe: 0
}
console.log("removeItem('sucre', 3): ",removeItem('sucre', 3)) // égale "pas assez de sucre pour en enlever 3"
console.log("removeItem('thé', 1): ",removeItem('thé', 1)) // égale "l'élement "thé" n'existe pas et ne peut pas être enlevé"
