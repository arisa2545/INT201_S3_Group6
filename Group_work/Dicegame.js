
let person1 = {name: "Ice", scoreEachRound: [], result: []} ;
let person2 = {name: "Spy", scoreEachRound: [], result: []} ;
let person3 = {name: "Chit", scoreEachRound: [], result: []} ;
let person4 = {name: "So", scoreEachRound: [], result: []} ;
let person5 = {name: "Tee", scoreEachRound: [], result: []} ;

let dice = {roll: function(){return Math.floor(Math.random() * 6) + 1}}

function diceGame(player1, player2, total_Round){
    player1["scoreEachRound"] = [];
    player2.scoreEachRound = [];
    player1.result = [];
    player2.result = [];

    let total_dice_p1 = 0;
    let total_dice_p2 = 0;
    for(let round = 1; round <= total_Round; round++){
        let diceForP1 = dice.roll();
        let diceForP2 = dice.roll();
        player1.scoreEachRound.push(diceForP1);
        player2.scoreEachRound.push(diceForP2);

        if(diceForP1 > diceForP2) {
            player1.result.push('Win');
            player2.result.push('Lose');
        }else if(diceForP2 > diceForP1) {
            player1.result.push('Lose');
            player2.result.push('Win');
        }else {
            player1.result.push('Draw');
            player2.result.push('Draw');
        }
        total_dice_p1 += diceForP1; //total_dice_p1 = total_dice_p1 + diceForP1
        total_dice_p2 += diceForP2;   
    }

    if(total_dice_p1 > total_dice_p2) {
        return player1.name;
    }else if(total_dice_p2 > total_dice_p1) {
        return player2.name;
    }else {
        return 'Draw';
    }   
}

// console.log(`Winner is ${diceGame(person1, person2, 10)}`)
// console.log(`Winner is ${diceGame(person3, person4, 5)}`)
console.log(`Winner is ${diceGame(person5, person1, 5)}`)
