// les textes proviennent de "La cathédrale et le bazar"

/*

CREER LES FONCTIONS "addNewPhrase", "displayBook" ET "displayBookSize" AFIN DE CORRESPONDRE AUX RESULTATS PREVUT

SI LA FONCTION EST CORRECT, LE "VALIDATEUR" AFFICHE "REUSSI"

*/


// ////////////////////////
// étape 1: ajout de phrase

let bookText = "linux est subversif." 
// La fonction "addNewPhrase" ajoute des phraseS au "bookText" mais ne les affiches pas
// Elle rajoute un espace entre toutes phraseS
addNewPhrase("qui aurait imaginé,") // 
addNewPhrase("il y a seulement cinq ans,")


// La fonction "displayBook" affiche le contenu de la variable "bookText"
displayBook() // affiche: "linux est subversif. qui aurait imaginé, il y a seulement cinq ans,"

if (bookText === "linux est subversif. qui aurait imaginé, il y a seulement cinq ans,") {
    console.log("Etape 1: REUSSIE")
} else {
    console.log("Etape 1: RATEE")
}


// ////////////////////////
// étape 1 Bonus: ajout de la fonction displayBookSize

let bookText = "linux est subversif." 
// La fonction "addNewPhrase" ajoute des phraseS au "bookText" mais ne les affiches pas
// Elle rajoute un espace entre toutes phraseS
addNewPhrase("qui aurait imaginé,")

// La fonction donne le nombre de caractère de "bookText"
displayBookSize() // affiche: "Le livre contient 40 caractères"

addNewPhrase("il y a seulement cinq ans,")
displayBookSize() // affiche: "Le livre contient 67 caractères"

// /!\ ATTENTION /!\
// La validation ne vérifie pas la demande ici
if (bookText === "linux est subversif. qui aurait imaginé, il y a seulement cinq ans,") {
    console.log("Etape 1 Bonus: REUSSIE")
} else {
    console.log("Etape 1 Bonus: RATEE")
}




// ////////////////////////
// étape 2: on passe des tableaux à la fonction
let bookText = "linux est subversif."

// La fonction "addNewPhrase" ajoute chaque phraseS du tableau à "bookText" mais ne les affiches pas
addNewPhrase(["qui aurait imaginé, ", "il y a seulement cinq ans, ", "qu'un système d'exploitation de classe internationale"])

// La fonction "displayBook" affiche le contenu de la variable "bookText"
displayBook() // affiche: "linux est subversif. qui aurait imaginé, il y a seulement cinq ans, qu'un système d'exploitation de classe internationale"

if (bookText === "linux est subversif.qui aurait imaginé, il y a seulement cinq ans, qu'un système d'exploitation de classe internationale") {
    console.log("Etape 2: REUSSIE")
} else {
    console.log("Etape 2: RATEE")
}


// ////////////////////////
// étape 3: on passe un séparateur de phrase au tableau
let bookText = "linux est subversif."

// La fonction "addNewPhrase" ajoute chaque phraseS du tableau à "bookText" mais ne les affiches pas
// Elle rajoute un espace entre LA phrase présente, et les nouvelles entrés
// Entre chaque ajout on rajoute le séparateur
addNewPhrase(
    ["qui aurait imaginé", "il y a seulement cinq ans", "qu'un système d'exploitation de classe internationale."],
    ","
)
// La fonction "displayBook" affiche le contenu de la variable "bookText"
displayBook() // affiche: "linux est subversif. qui aurait imaginé,il y a seulement cinq ans,qu'un système d'exploitation de classe internationale."

addNewPhrase(
    ["à", "partir", "de", "bidouilles"],
    "-"
)
displayBook() // affiche: "linux est subversif. qui aurait imaginé,il y a seulement cinq ans,qu'un système d'exploitation de classe internationale. à-partir-de-bidouilles"

if (bookText === "linux est subversif. qui aurait imaginé,il y a seulement cinq ans,qu'un système d'exploitation de classe internationale. à-partir-de-bidouilles") {
    console.log("Etape 3: REUSSIE")
} else {
    console.log("Etape 3: RATEE")
}


// ////////////////////////
// étape 4: Comme l'étape 3 mais avec un espace après le séparateur
let bookText = "linux est subversif."

// La fonction "addNewPhrase" ajoute chaque phrase du tableau à "bookText" mais ne les affiches pas
// Elle rajoute un espace entre LA phrase présente, et les nouvelles entrés
// Entre chaque ajout on rajoute le séparateur et un espace
addNewPhrase(
    ["qui aurait imaginé", "il y a seulement cinq ans", "qu'un système d'exploitation de classe internationale."],
    ","
)

// La fonction "displayBook" affiche le contenu de la variable "bookText"
displayBook() // affiche: "linux est subversif. qui aurait imaginé, il y a seulement cinq ans, qu'un système d'exploitation de classe internationale."

if (bookText === "linux est subversif. qui aurait imaginé, il y a seulement cinq ans, qu'un système d'exploitation de classe internationale.") {
    console.log("Etape 4: REUSSIE")
} else {
    console.log("Etape 4: RATEE")
}


// ////////////////////////
// étape 5: Comme l'étape 4 mais avec un point à la fin d'un ensemble de phrase
let bookText = "linux est subversif."

// La fonction "addNewPhrase" ajoute chaque phrase du tableau à "bookText" mais ne les affiches pas
// Elle rajoute un espace entre LA phrase présente, et les nouvelles entrés
// Entre chaque ajout on rajoute le séparateur et un espace
// rajoute un point à la fin
addNewPhrase(
    ["qui aurait imaginé", "qu'un système d'exploitation de classe internationale"],
    ","
)

// La fonction "displayBook" affiche le contenu de la variable "bookText"
displayBook() // affiche: "linux est subversif. qui aurait imaginé, qu'un système d'exploitation de classe internationale."

addNewPhrase(
    ["Quand", "début 1993", "Linux est apparu pour la première fois sur mon écran radar"],
    ","
)
displayBook() // affiche: "linux est subversif. qui aurait imaginé, qu'un système d'exploitation de classe internationale. Quand, début 1993, Linux est apparu pour la première fois sur mon écran radar."

if (bookText === "linux est subversif. qui aurait imaginé, qu'un système d'exploitation de classe internationale. Quand, début 1993, Linux est apparu pour la première fois sur mon écran radar.") {
    console.log("Etape 5: REUSSIE")
} else {
    console.log("Etape 5: RATEE")
}



// ////////////////////////
// étape 6: Il y a un séparateur par défault égale à ","
let bookText = "linux est subversif."

// La fonction "addNewPhrase" ajoute chaque phrase du tableau à "bookText" mais ne les affiches pas
// Elle rajoute un espace entre LA phrase présente, et les nouvelles entrés
// Entre chaque ajout on rajoute le séparateur et un espace
// rajoute un point à la fin
addNewPhrase(
    ["qui aurait imaginé", "qu'un système d'exploitation de classe internationale"],
    ";"
)

// La fonction "displayBook" affiche le contenu de la variable "bookText"
displayBook() // affiche: "linux est subversif. qui aurait imaginé, qu'un système d'exploitation de classe internationale."

// Cette fois on utilise le séparateur par défault
addNewPhrase(
    ["Quand", "début 1993", "Linux est apparu pour la première fois sur mon écran radar"],
)
displayBook() // affiche: "linux est subversif. qui aurait imaginé; qu'un système d'exploitation de classe internationale. Quand, début 1993, Linux est apparu pour la première fois sur mon écran radar."

if (bookText === "linux est subversif. qui aurait imaginé; qu'un système d'exploitation de classe internationale. Quand, début 1993, Linux est apparu pour la première fois sur mon écran radar.") {
    console.log("Etape 6: REUSSIE")
} else {
    console.log("Etape 6: RATEE")
}






// ////////////////////////
// étape Bonus: displayBook rajoute une majuscule en début de texte
let bookText = "linux est subversif."

// Rajout d'une majuscue sur la première lettre lors de l'affichage
displayBook() // affiche: "Linux est subversif."

if (bookText === "Linux est subversif.") {
    console.log("Etape Bonus: REUSSIE")
} else {
    console.log("Etape Bonus: RATEE")
}
