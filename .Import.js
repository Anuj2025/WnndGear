const api_key = "ffc88a036cbad32b19cc969493b4d8e4";
const api_url = "https://api.openweathermap.org/data/2.5/weather"


async function Wheather() {
  const city = input.value;
  const url = api_url + `?q=${city}&appid=` + api_key;


  const Whe = await fetch(`${url}`).then(res => res.json());
  document.querySelector(".temp").innerHTML = `Temp: ${Math.round(Whe.main.temp - 273)}°c`;
  document.querySelector(".Wheather").innerHTML = 
  `Wheather: ${Whe.weather[0].main}`;
  console.log(Whe);
  
  document.querySelector(".Header").innerHTML = input.value;
  
  document.querySelector("#speed").innerHTML = `WindSpeed: ${Whe.wind.speed}Km/h & humidity: ${Whe.main.humidity}`;

}
