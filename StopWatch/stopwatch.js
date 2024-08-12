let start=document.querySelector("#start");
let stop1=document.querySelector("#stop")
let restart=document.querySelector("#Restart");
let h1=document.querySelector("h1");
let time=0;
let interval;

start.addEventListener("click",(e)=>{
     interval=setInterval((e)=>{ 
        time+=1;
        h1.innerHTML=time;
    });
   
});

stop1.addEventListener("click",(e)=>{
    clearInterval(interval);
})

restart.addEventListener("click",(e)=>{
    time=0;
    h1.innerHTML=time
})

