export class TableRezult {
    constructor() {
        this.score = 0;
        this.mistake = 0;
        this.board = document.body;



        const table = document.createElement('div');
        table.classList.add('table');
        table.innerHTML = `<p class='score'>Счет:${this.score}</p>
        <p class='mistake'>Промахи:${this.mistake}</p>`;
        this.board.appendChild(table);
    
    }

    addScore() {
        this.score += 1;
    }

    addMistake() {
        this.mistake += 1;
    }

}