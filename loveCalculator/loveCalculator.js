let form=document.querySelector("#form");
let yourName=document.querySelectorAll("input")[0]
let partnerName=document.querySelectorAll("input")[1]
let para=document.querySelector("p");
console.log(form,yourName,partnerName,para);

form.addEventListener("submit",(e)=>{
    e.preventDefault();//problem
    if(yourName.value && partnerName.value){

    let random=Math.round((Math.random()*100));
    console.log(random);
    para.innerHTML=`${yourName.value} and ${partnerName.value} love percentage is ${random}`;
   }
})