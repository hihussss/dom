import { BoardGame } from "../class/boardgame.js";
import { TableRezult } from "../class/tablerezult.js";
const board  = new BoardGame(4);
const tablerezult = new TableRezult();

// const itog = document.getElementsByClassName('.score');
// const mistake = document.getElementsByClassName('.mistake');

setInterval(() => {
    setTimeout(() => {
        board.cells[board.nowCell()].classList.add('goblin');
        },1000)
    board.goblinActive(board.lastCell());
}, 2000)




board.cells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
        if (event.target.classList.contains('goblin')) {
            tablerezult.addScore();
        }else {
            tablerezult.addMistake();
        }

    }) 
})



     


