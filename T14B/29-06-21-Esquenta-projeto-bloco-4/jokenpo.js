//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando. 

//Escreva seu código abaixo

let game = ['pedra', 'papel', 'tesoura'];
let robotMove = Math.round(Math.random() * 2);
let robotPlay = game[robotMove];
let robotMove2 = Math.round(Math.random() * 2);
let robotPlay2 = game[robotMove2];

console.log(robotPlay);
console.log(robotPlay2);

function jokenpo(p1, p2){
    if (p1 == 'pedra' && p2 == 'tesoura' 
    || p1 == 'tesoura' && p2 == 'papel' 
    || p1 == 'papel' && p2 == 'pedra') {
        return 'Player 1 wins';
    }else if(p1 === p2) {
        return 'Draw!';
    }else{
        return 'Player 2 wins';
    }
}

console.log(jokenpo(robotPlay, robotPlay2));