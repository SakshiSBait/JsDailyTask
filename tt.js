let btn=document.querySelector("button");
let img=document.querySelector("img");
//console.log(btn,img);

btn.addEventListener("click",()=>{
    img.classList.toggle("img2");
    btn.innerHTML="Finished";
    btn.style="border-radius:60%; border:1px black solid; color:orange";
})

