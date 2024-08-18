export class BoardGame {
    constructor (fieldsize){

        this.fieldsize = fieldsize;
        this.board = document.body;


        for ( let i = 0; i < this.fieldsize * 4; i +=1 ){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            this.board.appendChild(cell);
            
        }

        this.cells = Array.from(document.querySelectorAll('.cell'));

    }

    

}