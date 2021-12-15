//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
let player = Math.floor(Math.random() * 6+1);
let cpu = Math.floor(Math.random() * 6+1);



if(player>cpu){
   console.log('you win:' + player + 'cpu lose:' +cpu)
}else{
    console.log('you lose:' + player + 'cpu win:' +cpu)
}