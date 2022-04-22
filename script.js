const box = document.querySelector('.box');
const playButton = document.getElementById('start-game');
let BOMBPOSITION = [];

function selectDifficulty(){
  let difficulty = document.getElementById('difficulty').value;
  if(difficulty === 'easy'){
    return 49
  }else if (difficulty === 'hard') {
    return 81
  }else if (difficulty === 'crazy') {
    return 100 
  }
}

function squareGenerator(n){
  for (let i = 0; i < n; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    const number = document.createElement('span');
    number.classList.add('d-none');

    if(n == 49){
      square.classList.add('square-49');
    }else if(n == 81){
      square.classList.add('square-81');
    }else if(n == 100){
      square.classList.add('square-100');
    }

    box.append(square);
    number.innerText = `${(i + 1)}`;
    square.append(number);
    square.addEventListener('click', function(){
      
      number.classList.remove('d-none');
      if(BOMBPOSITION.includes(parseInt(this.innerText))){
        this.classList.add('bomb');
        this.innerHTML = '<i class="fa-solid fa-bomb"></i>';
      }else this.classList.add('blue');
    })
  }
}
// Inizia il gioco
playButton.addEventListener('click', function(){
  box.innerHTML = '';
  const diff = selectDifficulty();
  squareGenerator(diff);
  BOMBPOSITION = [];
  bombGenerator(diff);
  console.log(BOMBPOSITION)
})

function getRndInteger(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function bombGenerator(n){
  const bombNumber = 16;

  while(BOMBPOSITION.length < bombNumber){
    let posBomb = getRndInteger(1,n);

    if(!BOMBPOSITION.includes(posBomb)){
      BOMBPOSITION.push(posBomb);
    }
  }
}