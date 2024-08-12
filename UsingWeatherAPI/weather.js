let button=document.querySelector("button");
let input=document.querySelector("input")
let container=document.querySelector("#con")

console.log(button,input,container);

button.addEventListener("click", async(e)=>{//we create fuction as asyncouns
    container.innerHTML="";
    let key='1d99d8c41e0bfd29973bfc6606feb1c0';//it will take form the weatherapp /copy key path(sakshi>api key)
    let dataForServer= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`);
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} 
    //origanl link

    let data=await dataForServer.json();//then only data is readable /json() 
//html element creating in js
   if(dataForServer.status==200){
    let cityName=document.createElement("h3");
    let Temp=document.createElement("h3");
    let climate=document.createElement("h3");
    let windspeed=document.createElement("h3");
    let humidity=document.createElement("h3");

    cityName.innerHTML=`City name : ${data.name}`;
    Temp.innerHTML=`Tempreture : ${(data.main.temp -273).toFixed(2)}℃`;//press (window+.)//use toFixed beacuse i want 2 digit after.
    climate.innerHTML=`Climate : ${data.weather[0].main}`
    windspeed.innerHTML=`windspeed : ${data.wind.speed}km/hr`;
    humidity.innerHTML=`humidity : ${data.main.humidity}%`

    container.append(cityName,Temp,climate,windspeed,humidity)
   console.log(dataForServer)//return tpye promise
   console.log(data);
   }
   else{
    // let error=document.createElement("h3");
    container.innerHTML="enter the valid city name"

   }
   
});

