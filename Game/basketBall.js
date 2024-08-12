//accessing TeamA
let count=0;
var teamA=0;

let h1A=document.querySelector("#teamA");
let btnAdd2a=document.querySelector("#btn2a");
let btnAdd3a=document.querySelector("#btn3a");
let btnSubmitA=document.querySelector("#btna");

//console.log(h1A,btnAdd2a,btnAdd3a,btnSubmitA);

btnAdd2a.addEventListener("click",(e)=>{
    count +=2;
    h1A.innerHTML=count;

})

btnAdd3a.addEventListener("click",(e)=>{
    count+=3;
    h1A.innerHTML=count;
})

btnSubmitA.addEventListener("click",(e)=>{
   teamA=count;
   count=0;
   //console.log(teamA);
})

//accessing TeamB
let count1=0;
var teamB=0;

let h1B=document.querySelector("#teamB");
let btnAdd2b=document.querySelector("#btn2b");
let btnAdd3b=document.querySelector("#btn3b");
let btnSubmitB=document.querySelector("#btnb");



btnAdd2b.addEventListener("click",(e)=>{
    count1+=2;
    h1B.innerHTML=count1;
})

btnAdd3b.addEventListener("click",(e)=>{
    count1+=3;
    h1B.innerHTML=count1;
})

btnSubmitB.addEventListener("click",vTB)
   function vTB(){//seprately creating fun and pass to the event
    teamB=count1;
    count1=0;
   }
   
console.log(h1B,btnAdd2b,btnAdd3b,btnSubmitB);

//accessing h4 /paragraph

let fbtn=document.querySelector("#btn");
let para=document.querySelector("p");

fbtn.addEventListener("click",winner)
function winner(){
    let tA=teamA;
    let tB=teamB;
    if(tA!=0 && tB!=0){
    if(tA>tB){
      para.innerHTML=`Team A score ${tA} and Team B score ${tB} so Team A is win the game.`
    }
    else if(tA<tB){
        para.innerHTML=`Team B score ${tB} and Team A score ${tA} so Team B is win the game.`
    }
    else{
        para.innerHTML=`match is drow.`
    }
    
   h1A.innerHTML=0;
   h1B.innerHTML=0;
}
}


