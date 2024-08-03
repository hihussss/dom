const place  =  document.querySelector('.goblin');
const game  =  document.querySelector('.game');




setInterval(() => {
    for (let i of game.children) {
        let index=Math.floor(Math.random()*4);
        i.children[index].append(place);
        if (i.children[index] === i.lastElementChild){
            i[0].children[index].append(place);
        } 
    }
      
     
}, 1000);

     


