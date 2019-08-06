const BASE_ATTACK = 40
const BASE_SHIELD = 10

function initiatePlayer(name) {
    return {
        name: name,
        level: 1,
        attack: BASE_ATTACK,
        defense: BASE_SHIELD,
    }
}