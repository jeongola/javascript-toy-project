const guess_range = document.querySelector('.guess_range');
const guess_num = document.querySelector('.guess_num');
const guess = document.querySelector('.guess');
const result = document.querySelector('.result');
const btn = document.querySelector('.play');

function handleClick() {
  const max = Number(guess_range.value) + 1;
  const random_num = Math.floor(Math.random() * max);
  guess.innerHTML = `You chose: ${guess_num.value}, the machine chose: ${random_num}.`;

  if (random_num === Number(guess_num.value)) {
    result.innerHTML = `You won!`;
  } else {
    result.innerHTML = 'You lost!';
  }
}

btn.addEventListener('click', handleClick);
