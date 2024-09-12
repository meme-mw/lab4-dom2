let first =document.querySelector('#first');
let second =document.querySelector('#second');
let third =document.querySelector('#third');
let firstp =document.querySelector('.first');
let secondp =document.querySelector('.second');
let thirdp =document.querySelector('.third');
function l(){
    if (first.checked){
        console.log("red");
        firstp.style="opacity:0";
    }
    if(second.checked){
        secondp.style="opacity:0";
    } 
    if(third.checked){
        thirdp.style="opacity:0";
    }
}

setInterval(l,100);