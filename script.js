minimumLoading = () =>{
  setTimeout(() => {
    console.log('page is fully loaded');
  document.getElementById('loading').classList.add('removeLoader');
  }, 4000);
}

remoevLoader = () =>{
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
  },5000 );
}

window.onload = (event) => {

  minimumLoading();
  remoevLoader();
  
};


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


$('textarea').each(function () {
  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input', function () {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});