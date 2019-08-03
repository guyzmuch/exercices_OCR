/*
  CREER UN FONCTION QUI DONNE A CHAQUE FOIS UN TEMPS DIFFERENT
  EN DONNANT UNE VALEUR DIFFERENTE D'UN TABLEAU (INCREMENTATION)
*/


// ////////////////////////////
// A faire avec l'étudiant
let weatherOptions = [
    "soleil", "pluie",  "nuageux", "neige",
]

let weatherIndex = 0

function predicWeather() {
    // Good way
    console.log("La météo aujourd'hui est "+weatherOptions[weatherIndex])
    weatherIndex++
    if (weatherIndex === weatherOptions.length) {
        weatherIndex = 0
    }

    /*
    // WRONG way
    if (weatherIndex === weatherOptions.length) {
        weatherIndex = 0
    }
    else {
        weatherIndex++
    }
    console.log("La météo aujourd'hui est "+weatherOptions[weatherIndex])
    */
}


predicWeather()
predicWeather()
predicWeather()
predicWeather()


