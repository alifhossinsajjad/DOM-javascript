
/**  option 2 for event handler  */



function nowMyTurn() {
  document.body.style.backgroundColor = "red";
}

function youCan() {
  document.body.style.fontSize = "30px";
}


// option 3 : get Element by id and then set onclick
   const makeIt = document.getElementById('make-it')

            makeIt.onclick = function makeIt(){
                document.body.style.backgroundColor = 'green'
            }
            