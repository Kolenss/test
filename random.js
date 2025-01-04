const button = document.getElementById("button");
const rollednum = document.getElementById("rollednum");
let min = 1;
let max = 6;
let randomnum1;
let randomnum2;
let randomnum3;

 
button.onclick = function(){
    randomnum1 = Math.floor(Math.random() * max) + min;
    randomnum2 = Math.floor(Math.random() * max) + min;
    randomnum3 = Math.floor(Math.random() * max) + min;
    rollednum.textContent = randomnum1 + randomnum2 + randomnum3;
}