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
    };
}
const playerOne = createPlayer("Jeppe", "0");
const playerTwo = createPlayer("Jørgen", "X");


const gameController = (function(board, playerOne, playerTwo) {
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

            ]
    checkWinner();


    console.log(winningCombinations);     
    }
    
    
                


return {
    playRound: function(cellIndex) {
        board.playMove(currentPlayer.marker, cellIndex);
        if (currentPlayer === playerOne) {
            currentPlayer = playerTwo;
        } else {
            currentPlayer = playerOne;
        }
        },

}
  })(game, playerOne, playerTwo);

  gameController.playRound(0);
  console.log(game.getBoard());
  gameController.playRound(4);
  console.log(game.getBoard());

