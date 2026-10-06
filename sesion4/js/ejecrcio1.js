const game = {
    options : ["🪨","📄","✂️"],
    playerNames:{ 
        player1: "player1",
        player2: "computer",
    },
    scores: {
        p1score: 0,
        p2score: 0
    }
}

// Change player1 name function
game.playerNames.jugador1 = "Alex";

// Asks for player name in emerging window
const pedirNuevoNombre = () => prompt("Waht is your name?")

// Function to validate and assign player name
const changeName = function(newName){
    const regexValid = /[A-Za-z]/; // asks for at least 1 letter and can include numbers
}

if (regexValid.test(newName)) {
    // Valid name: contains letters
    game.playerNames.player1 = newName;
    console.log("Welcome" + newName + "!");
} else {
    //Invalid name: only numbers or special characters
    console.log("Invalid name, i'll call you..." + game.playerNames.player1);
}

// Generate a random number between 0 and 2 and convert into string
const generateRand = function() {
    const rand = Math.floor(Math.random() * 3); //0, 1 or 2
    return rand.toString(); //converts to string
}

// Returns a play, rock, paper or scissors according to random number generated
const printRandHand = function(){
    const number = generateRand(); // obtains number as string
    return game.options[number]; // access to icon in object
};

// Prints the endgame results
const printResult = function(p1score, p2score) {
    if (p2score > p1score) {
        console.log("Winner is : " + game.playerNames.player2 + "- Game Over.");
    }else if (p1score > p2score) {
        console.log("Winner is: " + game.playerNames.player1 + "- Game Over.");
    } else {
        console.log("Draw between: " + game.playerNames.player1 + "and" + game.playerNames.player2 + "🤝")
    }
};