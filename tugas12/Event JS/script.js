let inputButton = document.querySelector("#input button");

function klik() {
    alert("OK");
}

inputButton.onclick = klik;

function gantiRed(){
    inputButton.style.backgroundColor = "red";
}

function gantiBlack(){
    inputButton.style.color = "black";
}

inputButton.addEventListener("mouseover", gantiRed);
inputButton.addEventListener("mouseover", gantiBlack);