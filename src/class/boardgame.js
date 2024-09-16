export class BoardGame {
    constructor (fieldsize){

        this.fieldsize = fieldsize;
        this.board = document.body;
        this.arr = []
       

    }

    addBoard() {
        console.log(this.fieldsize);
        for ( let i = 0; i < this.fieldsize * 4; i +=1 ){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            this.board.appendChild(cell);
        }
    }


    clickCell(event){
        event.target.classList.remove('goblin');
    }

    lastCell() {
        let  index = this.arr.pop();
        return index;
    }

    nowCell() {
        let index = Math.floor(Math.random()*this.fieldsize*4)
        this.arr.unshift(index);
        return this.arr[0] ;
    }

    goblinActive(cell, cells) {
        cells[cell].classList.remove('goblin');
    }

    

    

}