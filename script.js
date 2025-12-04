function gameBoardFactory() {
    const board = [];
    const getBoard = () => board;
    const playMove = (player, cell) => board[cell] = player;

    return {getBoard, playMove};
}
const game = gameBoardFactory();
console.log(game.getBoard());
game.playMove("X", 0);
game.playMove("0", 4);
console.log(game.getBoard());

function createPlayer(name, marker) {
    return {
        name: name,
        marker: marker,
        score: 0,
    };
}

const gameController = (function() {
    const board = gameBoardFactory();
    const playerOne = createPlayer("Jeppe", "0");
    const playerTwo = createPlayer("Jørgen", "0");
    let currentPlayer = playerOne;
    let gameOver = false;
       
    const checkWinner = function() {
            let winningCombinations = [
                [0,1,2], // Rows
                [3,4,5], // Rows
                [6,7,8], // Rows
                [0,3,6], // Columns
                [1,4,7], // Columns
                [2,5,8], // Diagonals
                [0,4,8], // Diagonals
                [2,4,6], // Diagonals
            ];
          
            const currentBoard = board.getBoard();
            for (let i = 0; i < winningCombinations.length; i++ ) {
                const combo = winningCombinations[i]; 
                 let a = currentBoard[combo[0]];
                 let b = currentBoard[combo[1]];
                 let c = currentBoard[combo[2]];
                 
                 if (a !== "" && a === b && a === c ) {
                    return gameOver = true;

                 }
                 
            }         
    }
                  
return {
    playRound: function(cellIndex) {
        board.playMove(currentPlayer.marker, cellIndex);
        if (checkWinner()) {
            currentPlayer.score++;
            return console.log(currentPlayer.name + "Won" + currentPlayer.score);
        }
        if (currentPlayer === playerOne) {
            currentPlayer = playerTwo;
        } else {
            currentPlayer = playerOne;
        }
        },
        getBoard: board.getBoard


}
  })();

console.log("round 1");
gameController.playRound(0);
console.log(gameController.getBoard());

console.log("round 2");
gameController.playRound(3);
console.log(game.getBoard());





