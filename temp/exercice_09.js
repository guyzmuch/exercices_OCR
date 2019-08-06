const BASE_ATTACK = 30
const BASE_SHIELD = 10
const BASE_LIFE = 100

function initiatePlayer(name) {
    return {
        name: name,
        level: 1,
        attack: BASE_ATTACK,
        defense: BASE_SHIELD,
        life: BASE_LIFE,
    }
}


function attackPlayer(attacker, receiver) {
    receiver.life = receiver.life - (attacker.attack - receiver.defense)
}


let player_1 = initiatePlayer('Pierre')

let player_2 = initiatePlayer('Paul')


attackPlayer(player_1, player_2)
attackPlayer(player_2, player_1)
attackPlayer(player_1, player_2)
attackPlayer(player_2, player_1)
attackPlayer(player_2, player_1)


let player_3 = initiatePlayer('Jacque')

attackPlayer(player_3, player_2)
