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

