alert("hey");
const vallWeath = document.querySelector(".weath");
const vallTemp = document.querySelector(".temp");
const vallPop = document.querySelector(".pop");
const vallWind = document.querySelector(".wind");
const vallWeath2 = document.querySelector(".weath2");
const vallTemp2 = document.querySelector(".temp2");
const vallPop2 = document.querySelector(".pop2");
const vallWind2 = document.querySelector(".wind2");


async function getData() {
const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=41.3753400&lon=1.9242300&exclude=hourly,daily&units=metric&lang=es&appid=4aaf56cfb2ff43c6946d246291be031e", {mode: 'cors'})
const data = await response.json();

console.log(data)
vallWeath.textContent = data.list[0].weather[0].description;
vallTemp.textContent = data.list[0].main.temp;
vallPop.textContent = data.list[0].pop;
vallWind.textContent = data.list[0].wind.speed;

vallWeath2.textContent = data.list[8].weather[0].description;
vallTemp2.textContent = data.list[8].main.temp;
vallPop2.textContent = data.list[8].pop;
vallWind2.textContent = data.list[8].wind.speed;


}
getData();

