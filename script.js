var modal = document.getElementById("popup");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.classList.add('show');
  document.body.style.overflow = "hidden";
}

span.onclick = function() {
  modal.classList.remove('show');
  document.body.style.overflow = "scroll";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('show');
    document.body.style.overflow = "scroll";
  }
}

function loads(){
  document.getElementById('loading').style.display = "none";
  document.getElementById('nav').style.display = "block";
}

window.setTimeout(loads, 3000);