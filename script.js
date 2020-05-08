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

// // smooth scroll section
//  var navMenuAnchorTags = document.querySelectorAll('nav a')

// for(let i =0;i<navMenuAnchorTags.length;i++){
//   navMenuAnchorTags[i].addEventListener('click', function(e){
//     e.preventDefault();
//     var targetSectionID = this.textContent.trim().toLowerCase();
//     var targetSection = document.getElementById(targetSectionID);

//     var interval = setInterval(function(){
      
//       window.scrollBy(0,50);
//     }, 50);
//   })
// }