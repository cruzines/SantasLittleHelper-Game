//CANVAS
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.style.border = '4px solid white';

//DOM PAGES
let startPage = document.querySelector('#start-page');
let gamePage = document.querySelector('#game');
let gameOverPage = document.querySelector('#gameover-page')

//DOM START AND RESTART BUTTONS
let startBtn = document.querySelector('#start-btn');
let restartBtn = document.querySelector('#restart');

//IMAGES
let background = new Image();
background.src = './images/bg.jpg';

let santaEmptyL = new Image();
santaEmptyL.src = './images/santaemptyL-140x200.png';
let santaEmptyR = new Image();
santaEmptyR.src = './images/santaemptyR-140x200.png';
let santaL = new Image();
santaL.src = './images/santa-140x200lft.png';
let santaR = new Image();
santaR.src = './images/santa-140x200right.png';

let present1 = new Image();
present1.src = './images/p1.png';
let present2 = new Image();
present2.src = './images/p2.png';
let present3 = new Image();
present3.src = './images/p3.png';
let present4 = new Image();
present4.src = './images/p4.png';
let present5 = new Image();
present5.src = './images/p5.png';
let present6 = new Image();
present6.src = './images/p6.png';
let present7 = new Image();
present7.src = './images/p7.png';
let present8 = new Image();
present8.src = './images/p8.png';
let present9 = new Image();
present9.src = './images/p9.png';
let present10 = new Image();
present10.src = './images/p10.png';
let present11 = new Image();
present11.src = './images/p11.png';
let bonus = new Image();
bonus.src = './images/pbonus.png';

let rock = new Image();
rock.src = './images/rock-50x50.png';
let log = new Image();
log.src = './images/log1.png';
let pinha = new Image();
pinha.src = './images/pinha.png'

let allPresents = [present1, present2, present3, present4, present5, present6, present7, present8, present9, present10, present11];
let present = allPresents[Math.floor(Math.random()*allPresents.length)];
let allNoPresents = [rock, log, pinha];
let noPresent = allNoPresents[Math.floor(Math.random()*allNoPresents.length)];

//VARIABLES
let intervalId = 0;
let gameOver = false;
let isLeft = false, isRight = false;
let santaX = 400, santaY = 360, incX = 5;

//GAME PAGE
function handleStart() {
    startBtn.style.display = 'none';
    startPage.style.display = 'none';
    gamePage.style.display = 'block';
    draw();
    animateSanta();

     //GAMEOVER
    if (gameOver) {
        cancelAnimationFrame(intervalId);
        gameOver = false;
       }
       else {
        intervalId = requestAnimationFrame(handleStart)
       }
}

function draw() {
    ctx.drawImage (background, 0, 0);
    ctx.drawImage (santaEmptyR, santaX, santaY);
}

//ANIMATE SANTA
function animateSanta() {
    if (isLeft && santaX > 0) {
      //ctx.clearRect (santaX, santaY, santaEmptyR.width, santaEmptyR.height)
        ctx.drawImage(santaEmptyL, santaX, santaY)
        santaX = santaX - incX;
    }
    if (isRight && santaX < canvas.width-santaEmptyR.width) {
        ctx.drawImage(santaEmptyR, santaX, santaY)
        santaX = santaX + incX;
    }
}

//FALLING OBJECTS
/*function () {
if(fallingObj.type =='present'){
    ctx.drawImage(present, present.x, present.y)        
}  
if(fallingObj.type=='noPresent'){
    ctx.drawImage(noPresent, noPresent.x, noPresent.y)        
}  
}
*/




window.addEventListener('load', () => {
    gamePage.style.display = 'none'; 
    restartBtn.style.display = 'none';
    startPage.style.display = 'block';   

    startBtn.addEventListener('click', () => {
        handleStart()
    })

    restartBtn.addEventListener('click', () => {
        restart()
    })

    //KEYS
    document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowLeft') {
        isLeft = true;
        isRight = false;
    }
    if (event.key == 'ArrowRight') {
        isRight = true;
        isLeft = false;
    }
    })
    document.addEventListener('keyup', (event) => {
    if (event.key == 'ArrowRight') {
        isRight = false;
    }
   else if (event.key == 'ArrowLeft') {
       isLeft = false
   }
   })
})
