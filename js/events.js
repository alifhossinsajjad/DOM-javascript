/**  option 2 for event handler  */

function nowMyTurn() {
  document.body.style.backgroundColor = "red";
}

function youCan() {
  document.body.style.fontSize = "30px";
}

// option 3 : get Element by id and then set onclick
const makeIt = document.getElementById("make-it");

makeIt.onclick = function makeIt() {
  document.body.style.backgroundColor = "green";
};

// option 4 :

document
  .getElementById("network-engineer")
  .addEventListener("click", function engineer() {
    document.body.style.backgroundColor = "purple";
  });

document
  .getElementById("software-engineer")
  .addEventListener("click", function software() {
    document.body.style.fontSize = "40px";
  });

// input event handler
document.getElementById("btn-update").addEventListener("click", function () {
  const nameInput = document.getElementById("input-name");

  const name = nameInput.value;

  const nameP = document.getElementById("name");

  nameP.innerText = name;
});
