import { BoardGame } from "../class/boardgame.js";
import { TableRezult } from "../class/tablerezult.js";
const board  = new BoardGame(4);
const tablerezult = new TableRezult();


board.addBoard();
tablerezult.addTable();

const score = document.querySelector('.score');
const mistake = document.querySelector('.mistake');
const cells = Array.from(document.querySelectorAll('.cell'));

setInterval(() => {
    setTimeout(() => {
        cells[board.nowCell()].classList.add('goblin');
        },1000)
    board.goblinActive(board.lastCell(), cells);
}, 1000)




cells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
        if (event.target.classList.contains('goblin')) {
            board.clickCell(event);
            score.textContent = Number(score.textContent) + 1;
            // tablerezult.addScore();
            if (score.textContent==10){
                alert('Вы победили');
                score.textContent=0;
                mistake.textContent=0;
                return false;
                
                
            }
            else if (mistake.textContent==5){
                alert('Вы проиграли');
                score.textContent=0;
                mistake.textContent=0;
                return false;
            }
        }else {
            // tablerezult.addMistake();
            mistake.textContent = Number(mistake.textContent) + 1;
            if (score.textContent==10){
                alert('Вы победили');
                score.textContent=0;
                mistake.textContent=0;
                return false;
                
                
            }
            else if (mistake.textContent==5){
                alert('Вы проиграли');
                score.textContent=0;
                mistake.textContent=0;
                return false;
            }
        }

    }) 
})



     


