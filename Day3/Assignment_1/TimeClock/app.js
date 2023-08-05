const start = document.getElementById("start");
const stop = document.getElementById("stop");
const pause = document.getElementById("pause");

const time = document.getElementById('time');
const value = document.getElementById('value')



let currtime = 0;
let h = 0,
  m = 0,
  s = 0;
let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let sec = document.getElementById("sec");

let on = false;

// let on = false;

h = 0;
m = 0;
s = 0;
const incValue = () => {
  s++;
  if (s === 60) {
    m++;
    s = 0;
  }

  if (m === 60) {
    h++;
    m = 0;
  }

  hr.innerText = h;
  mn.innerText = m;
  sec.innerText = s;
};

start.addEventListener("click", () => {
  if (on) {
    clearInterval(on);
  }
  on = setInterval(incValue, 1000);
  time.style.border="10px solid salmon";
  time.style.backgroundColor = "#f5f5dc"
  value.style.color='#ffc0cb'
});

pause.addEventListener("click", () => {
  clearInterval(on);
  value.style.color='#c9c92c'
});

stop.addEventListener("click", () => {
  clearInterval(on);
  h = 0;
  m = 0;
  s = 0;
  hr.innerText = h;
  mn.innerText = m;
  sec.innerText = s;
  time.style.border="none";
  time.style.backgroundColor = "#ffc0cb"
  value.style.color='#e25a5a'
});

// pause.addEventListener('click',())
