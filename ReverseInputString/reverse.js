let input=document.querySelector("#input");

let para=document.querySelector("p");

console.log(input,para);

input.addEventListener("input",(e)=>{
    let reversedtext=(input.value).split('').reverse().join('');
    para.innerHTML=reversedtext;
    
})