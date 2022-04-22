const box = document.querySelector('.box');
const playButton = document.getElementById('start-game');

function selectDifficulty(){
  let difficulty = document.getElementById('difficulty').value
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

    // number.classList.add('');
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
      this.classList.add('blue');
    })
  }
}

playButton.addEventListener('click', function(){
  box.innerHTML = '';
  let diff = selectDifficulty();
  squareGenerator(diff);
})
