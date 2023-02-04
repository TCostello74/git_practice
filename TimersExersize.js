//COUNTDOWN
function countDown(num) {
    let timer = setInterval (function() {
        num--;
        if(num <= 0) {
            clearInterval (timer);
            console.log('DONE!');
        } else {
            console.log(num);
        }
    },1000)
    
}

//RANDOMGAME
function randomGame() { 
    let num;
    let times = 0;
    let timer = setInterval (function() {
        num = Math.random();
        times++
        if (num > .75) {
            clearInterval(timer);
            console.log("it took " + times + " try/tries.");
        }
    },1000)
}
