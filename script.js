// Loader 
minimumLoading = () =>{
  setTimeout(() => {
    console.log('page is fully loaded');
  document.getElementById('loading').classList.add('removeLoader');
  }, 4000);
}

removeLoader = () =>{
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
  },5000 );
}

window.onload = (event) => {

  minimumLoading();
  removeLoader();
  
};
// --------------------------------------------------------------------------------

// Handling Pop-Up On Mobile View
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
//---------------------------------------------------------------------------------

// increase the height of message box automatically
$('textarea').each(function () {
  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input', function () {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});
// --------------------------------------------------------------------------------

// hide the url from showing
$(function(){
  
  $("a").each(function (index, element){
      var href = $(this).attr("href");
      $(this).attr("hiddenhref", href);
      $(this).removeAttr("href");
  });
  $(".social-icons a").click(function(){
      url = $(this).attr("hiddenhref");
      window.open(url, '_blank');
  })
  $(".modal-container a, .nav-menu a , .otherLinks").click(function(){
    url = $(this).attr("hiddenhref");
    window.location.href = url;
  })
});
// --------------------------------------------------------------------------------

//submit form
$('form').submit(function(e){
  e.preventDefault();
  let name = $('#SenderName').val();
  let subject = $('#SenderSubject').val();
  let message = $('#SenderMessage').val().replace(/(\r\n|\n|\r)/gm, '%0D%0A');
 
  location.href = "mailto:sagargupta1417@gmail.com" +
    ("?subject=" + subject) + 
    ("&body=" + message);

    $('#SenderName').val('');
    $('#SenderSubject').val('');
    $('#SenderMessage').val('');
})