//EVENT HANDLER
const p3 = document.querySelector(".p3");

function ubahBackgroundp2() {
  p2.style.backgroundColor = "lightGreen";
}
function ubahBackgroundp3() {
  p3.style.backgroundColor = "lightBlue";
}

// Using method
const p2 = document.querySelector(".p2");

p2.onclick = ubahBackgroundp2;

//addEventListener
let addNewLi = function () {
  const ul = document.querySelector("section#b ul");

  const newLi = document.createElement("li");
  const teksLi = document.createTextNode("New List");

  newLi.appendChild(teksLi);

  ul.appendChild(newLi);
};
addNewLi();

const p4 = document.querySelector("section#b p");

p4.addEventListener("dblclick", addNewLi);

const judul = document.getElementById("judul");

judul.addEventListener("mouseenter", function () {
  judul.innerHTML = "Happy Learning";
});

judul.addEventListener("mouseleave", function () {
  judul.innerHTML = "Hello World";
});