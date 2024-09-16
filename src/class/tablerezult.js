export class TableRezult {
    constructor() {
        this.score = 0;
        this.mistake = 0;
        this.board = document.body;
    
    }

    addTable() {
        const table = document.createElement('div');
        table.classList.add('table');
        const score = document.createElement('p');
        // score.innerHTML = `Счет: ${this.score}`
        score.classList.add('score');
        // score.textContent = `Счет:${this.score}`;
        table.appendChild(score);
        const mistake = document.createElement('p');
        mistake.classList.add('mistake');
        // mistake.innerHTML = `Промахи: ${this.mistake}`
        // mistake.textContent = `Промахи:${this.mistake}`;
        table.appendChild(mistake);
        this.board.appendChild(table);    
    }

    addScore() {
        this.score += 1;
    }

    addMistake() {
        this.mistake += 1;
    }

}