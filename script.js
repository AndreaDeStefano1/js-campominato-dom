const box = document.querySelector('.box');
const playButton = document.getElementById('start-game');
const bombPositions = [];
let score = document.getElementById('score-number');
console.log(score);
let scorePoint= 0;
score.innerText = scorePoint;


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
    number.innerText = `${(i + 1)}`;
    square.append(number);

    if(n == 49){
      square.classList.add('square-49');
    }else if(n == 81){
      square.classList.add('square-81');
    }else if(n == 100){
      square.classList.add('square-100');
    }

    box.append(square);

    square.addEventListener('click', function(){
      
      number.classList.remove('d-none');
      if(bombPositions.includes(parseInt(this.innerText))){
        this.classList.add('bomb');
        this.innerHTML = '<i class="fa-solid fa-bomb"></i>';
        const allSquare = document.querySelectorAll('.d-none');
        console.log(allSquare);
        for (let i = 0; i < allSquare.length; i++) {
          const actualPos = allSquare[i].innerText;
          console.log(actualPos);
          for (let k = 0; k < bombPositions.length; k++) {
            if (actualPos == bombPositions[k]) {
              console.log(allSquare[i].outerHTML);
              allSquare[i].classList.add('bomb');
              allSquare[i].classList.remove('d-none');
              allSquare[i].innerHTML = '<i class="fa-solid fa-bomb"></i>';
            }
            
          }
          
        }
        
      }else if((!this.className.includes('blue')) && (!this.className.includes('bomb'))){
        this.classList.add('blue');
        scorePoint++;
        score.innerText = scorePoint;
      }

    })
  }
}
// Inizia il gioco
playButton.addEventListener('click', function(){
  
  box.innerHTML = '';
  scorePoint = 0;
  score.innerText = scorePoint;
  const diff = selectDifficulty();
  squareGenerator(diff);
  bombPositions.length = 0;
  bombGenerator(diff);
  console.log(bombPositions)
})

function getRndInteger(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function bombGenerator(n){
  const bombNumber = 16;

  while(bombPositions.length < bombNumber){
    let posBomb = getRndInteger(1,n);

    if(!bombPositions.includes(posBomb)){
      bombPositions.push(posBomb);
    }
  }
}

function endGame(){

}