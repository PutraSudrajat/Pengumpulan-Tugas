let judul = document.querySelector("p");
judul.innerHTML = "My To Do List";

let list = document.getElementById("list");
list.innerHTML = `
<div class="row">
  <div class="col-8">
    <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
       <label class="form-check-label" for="flexCheckDefault">
         Tugas Baru
        </label>
    </div>
    </div>
<div class="col-auto">
<div class="btn"><i class="bi bi-trash"></i></div>
  </div>
</div>`;

let container = document.querySelector(".container");
container.style.margin = "135px auto";
container.style.maxWidth = "550px";
container.style.background = "#fff";
container.style.borderRadius = "7px";
container.style.padding = "30px ";

document.body.style.backgroundImage = "linear-gradient(to right,grey,lightgreen,lightblue,lightyellow)";

const title = document.getElementsByTagName("h1")[0];
title.setAttribute("names", "faissal");

const setPlace = document.querySelector("#input input").setAttribute("placeholder", "Masukan tugas baru");

const classlist = document.querySelector(".row");

///EVENT JS

// --membuat event handling
function klick() {
  alert("oke");
}

//--dengan method js
const inputButton = container.getElementsByTagName("button")[0];
inputButton.onclick = klick;

//event dengan event listener
function gantiRed() {
  inputButton.style.backgroundColor = "red";
}
function gantiBlack() {
  inputButton.style.Color = "black";
}
inputButton.addEventListener("mouseover", gantiRed);
inputButton.addEventListener("mouseover", gantiBlack);

//EVENT CLICK
// const inputButton = container.getElementsByTagName("button")[0];
// // inputButton.addEventListener("click", btnAktif);

// // function btnAktif() {
// //   console.log("button aktif");
// // }

//EVENT SUBMIT
document.getElementById("input").addEventListener("submit", submitAktif);
function submitAktif(event) {
  event.preventDefault();
  if (input.value == "javascript") {
    console.log("data dikirim ke server");
  } else {
    console.log("data gagal dikirim");
  }
}

//CREATE ELEMENT AND CREATE TEXTNODE

inputButton.addEventListener("click", tambahTugas);

function tambahTugas() {
  let list = document.getElementById("list");

  let divRow = document.createElement("div");
  divRow.classList.add("row", "mb-2");

  let divCol = document.createElement("div");
  divCol.classList.add("col-8");

  let divAuto = document.createElement("div");
  divAuto.classList.add("col-auto");

  let divForm = document.createElement("div");
  divAuto.classList.add("form-check", "mt-2");

  let divBtn = document.createElement("div");
  divBtn.className = "btn";

  let inputTugas = document.createElement("input");
  inputTugas.setAttribute("type", "checkbox");
  inputTugas.classList.add("form-check-input", "input");

  let label = document.createElement("label");
  label.className = "form-check-label";

  let namaTugas = document.createTextNode(`${input.value}`);
  label.appendChild(namaTugas);
  let icon = document.createElement("i");
  icon.classList.add("bi", "bi-trash3", "delete");

  //APPEND CHILD & APPEND
  list.appendChild(divRow);

  divRow.append(divCol, divAuto);

  divCol.appendChild(divForm);
  divForm.appendChild(inputTugas, label);
  divAuto.appendChild(divBtn);
  divBtn.appendChild(icon);
}