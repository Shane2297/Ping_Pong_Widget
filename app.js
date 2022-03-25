const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset')
const selectWinningScore = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 0;
let gameOver = false;

selectWinningScore.addEventListener('change', function () {
    winningScore = parseInt(this.value);
})

p1Button.addEventListener('click', function () {
    if (!gameOver) {
        p1Score += 1;
        p1Display.textContent = p1Score;
        if (p1Score === winningScore) {
            gameOver = true;
        }
    }
})

p2Button.addEventListener('click', function () {
    if (!gameOver) {
        p2Score += 1;
        p2Display.textContent = p2Score;
        if (p2Score === winningScore) {
            gameOver = true;
        }
    }
})

reset.addEventListener('click', function () {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
})






