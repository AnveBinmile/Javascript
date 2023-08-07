const start = document.getElementById("start");
const stop = document.getElementById("stop");
const pause = document.getElementById("pause");

let time = 0;
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
});

pause.addEventListener("click", () => {
  clearInterval(on);
});

stop.addEventListener("click", () => {
  clearInterval(on);
  h = 0;
  m = 0;
  s = 0;
  hr.innerText = h;
  mn.innerText = m;
  sec.innerText = s;
});

// pause.addEventListener('click',())
