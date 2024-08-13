const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

const tempratureImg = document.querySelectorAll("TempratureImg");

window.addEventListener('load', () => {
  setInterval(update, 125);
  document.querySelector("#TempratureImg").style.display = 'none';
});

function Validation() {
  if (input.value.length >= 1) {
btn.style.display = 'block';
  } else {
btn.style.display = 'none';
  }
}

function update() {
  Validation();
}

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


btn.addEventListener('click', ()=> {
  document.querySelector(".Lod").innerHTML = "Lodding";
  document.querySelector(".Con").style.display = 'none';
  
  
  Wheather();
  setTimeout(()=> {
    input.value = "";
document.querySelector("#TempratureImg").style.display = 'flex';
  }, 1000);
  setTimeout(() => {
    document.querySelector(".Con").style.display = 'block';
    document.querySelector(".Lod").innerHTML = "";
  }, 2000);
})

