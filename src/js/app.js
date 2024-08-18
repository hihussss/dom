import {BoardGame} from '../class/boardgame.js';
const board  = new BoardGame(4);




setInterval(() => {
    for (let i in board.cells) {
        let index=Math.floor(Math.random()*i);
        board.cells[index].classList.toggle('goblin');
        
    }
           
}, 1000);

     


