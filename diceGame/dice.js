let btn=document.querySelector("#start");
let player=document.querySelector("#p");
let computer=document.querySelector("#c");
let para=document.querySelector("p");

btn.addEventListener("click",(e)=>{
    let score1=1;
let score2=1;
    score1=Math.ceil((Math.random()*6));
    player.innerHTML=score1;
    //console.log(score1);
    score2=Math.ceil((Math.random()*6));
    //console.log(score2);
    computer.innerHTML=score2;
   


if(score1<score2){
    para.innerHTML=`computer win the game`;
    player.innerHTML=score1;
    computer.innerHTML=score2;
}
else if(score1>score2){
    para.innerHTML=`palyer win the game`;
    player.innerHTML=score1;
    computer.innerHTML=score2;
}
else{
    para.innerHTML=`match drow`;
    player.innerHTML=score1;
    computer.innerHTML=score2;
}

})
