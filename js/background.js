const body = document.body;
const firstDiv = document.getElementById("first-div");
const secondDiv = document.getElementById("second-div");
const form = document.querySelector("#login-form");
const line = document.getElementById("line");
const h2 = document.querySelector("h2");
const list = document.getElementById("todo-list");
const img = document.querySelector("img");

const image = ["img/jangdo.png", "img/chohyung.png"];
const num = Math.floor(Math.random() * 2);

function paintJangdo() {
  firstDiv.classList.add("jangdo_black");
  body.classList.add("jangdo_yellow");
  secondDiv.classList.add("jangdo_black");
  line.classList.add("jangdo_white");
  h2.classList.add("jangdo_clock");
  list.classList.add("jangdo_black");
  img.src = image[0];
}

function paintChohyung() {
  firstDiv.classList.add("chohyung_white");
  body.classList.add("chohyung_blue");
  secondDiv.classList.add("chohyung_white");
  line.classList.add("chohyung_red");
  h2.classList.add("chohyung_clock");
  list.classList.add("chohyung_withe");
  img.src = image[1];
}

function paintBackground() {
  if (num === 0) {
    paintJangdo();
  }
  else {
    paintChohyung();
  }
}

paintBackground();