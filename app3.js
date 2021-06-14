//---------ROCK------PAPER------SCISSORS-----------//


// Game Object 

var game = {
    'win' : 0,
    'loss': 0,
    'tie' : 0
};


//Choices Array

var choices = ['rock', 'paper', 'scissors'];


//Random number between 0-2

var random1 = Math.floor(Math.random()*3);

var random2 = Math.floor(Math.random()*3);


//Chooses random index in choice array

var bot1 = choices[random1];

var bot2 = choices[random2];


//Game Logic

// var compare = function (bot1,bot2){
//     if(bot1 === 'rock'){
//         if(bot2 === 'scissors'){
//             game.win = 1;
//         } else {
//             game.loss = 1;
//         }
//     }

//     if(bot1 === 'paper'){
//         if(bot2 === 'rock'){
//             game.win = 1;
//         } else {
//             game.loss = 1;
//         }
//     }

//     if(bot1 === 'scissors'){
//         if(bot2 === 'paper'){
//             game.win = 1;
//         } else {
//             game.loss = 1;
//         }
//     }

//     if (bot1 === bot2){
//         game.win = 1;
//         game.loss = 1;
//     }

// };

//Invoke

// compare(bot1,bot2);


//Game Logic

var compare = function (bot1,bot2){
    if(bot1 === 'rock' && bot2 === 'scissors'){
            game.win = 1;
        } else {
            game.loss = 1;
        }
    

    if(bot1 === 'paper' && bot2 === 'rock'){
            game.win = 1;
        } else {
            game.loss = 1;
        }
    

    if(bot1 === 'scissors' && bot2 === 'paper'){
            game.win = 1;
        } else {
            game.loss = 1;
        }

    if(bot1 === bot2){
        game.tie = 1;
    }
    
};

//Invoke

compare(bot1,bot2);  

//Results

var results = [];


//Pushing results to empty array
if (game.tie > 0){
    results.push('Tie Game');
}
else if(game.win > 0) {
    results.push(bot1 + ' beats ' + bot2);
}
else if (game.loss > 0){ 
    results.push(bot2 + ' beats ' + bot1);
}





//Make results appear

console.log(results);

