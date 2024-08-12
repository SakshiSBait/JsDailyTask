let h1=document.querySelector("h1");
let btnAdd=document.querySelectorAll("button")[0];
let btnSub=document.querySelectorAll("button")[1];
let para=document.querySelector("p");
console.log(h1 ,btnAdd,btnSub,para);

let count=0;
btnAdd.addEventListener("click",(e)=>{
    count=count+1;
    // console.log(count);
    h1.innerHTML=count;
})

btnSub.addEventListener("click",(e)=>{
    para.innerHTML+=` ${count} `;
    count=0;
    h1.innerHTML=count;
})