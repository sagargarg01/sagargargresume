// Loader
var loader = true

minimumLoading = () => {
  document.body.style.overflow = 'hidden'
  setTimeout(() => {
    document.getElementById('loading').classList.add('removeLoader')
  }, 4000)
}

removeLoader = () => {
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none'
    loader = false
  }, 5000)
}

window.onload = (event) => {
  minimumLoading()
  removeLoader()
  document.body.style.overflow = 'scroll'
}
// --------------------------------------------------------------------------------

// Handling Pop-Up On Mobile View
var modal = document.getElementById('popup')
var btn = document.getElementById('btn')
var span = document.getElementsByClassName('close')[0]

btn.onclick = function () {
  modal.classList.add('show')
  document.body.style.overflow = 'hidden'
}

span.onclick = function () {
  modal.classList.remove('show')
  document.body.style.overflow = 'scroll'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove('show')
    document.body.style.overflow = 'scroll'
  }
}
//---------------------------------------------------------------------------------

// increase the height of message box automatically
$('textarea')
  .each(function () {
    this.setAttribute(
      'style',
      'height:' + this.scrollHeight + 'px;overflow-y:hidden;'
    )
  })
  .on('input', function () {
    this.style.height = 'auto'
    this.style.height = this.scrollHeight + 'px'
  })
// --------------------------------------------------------------------------------

// hide the url from showing
$(function () {
  $('a').each(function (index, element) {
    var href = $(this).attr('href')
    $(this).attr('hiddenhref', href)
    $(this).removeAttr('href')
  })
  $('.social-icons a, .resume').click(function () {
    url = $(this).attr('hiddenhref')
    window.open(url, '_blank')
  })
  $('.modal-container a, .nav-menu a , .otherLinks').click(function () {
    url = $(this).attr('hiddenhref')
    window.location.href = url
  })
})
// --------------------------------------------------------------------------------

//submit form
$('form').submit(function (e) {
  e.preventDefault()
  let name = $('#SenderName').val()
  let subject = $('#SenderSubject').val()
  let message = $('#SenderMessage')
    .val()
    .replace(/(\r\n|\n|\r)/gm, '%0D%0A')

  location.href =
    'mailto:sagargupta1417@gmail.com' +
    ('?subject=' + subject) +
    ('&body=' + message)

  $('#SenderName').val('')
  $('#SenderSubject').val('')
  $('#SenderMessage').val('')
})

//auto fill skills section ----------
let skillsLoaded = false

$(window).scroll(function (event) {
  var scroll = $(window).scrollTop()
  if (
    scroll > 550 &&
    scroll < 1000 &&
    loader === false &&
    skillsLoaded === false
  ) {
    skillsLoaded = true
    $('.f85').addClass('eighty-five-percent')
    $('.f80').addClass('eighty-percent')
    $('.f70').addClass('seventy-percent')
  }

  if (scroll > 2500 && scroll < 3000 && loader === false) {
    turnOnLaptop()
  }
})

$('.skillsLoading').click(function () {
  if (skillsLoaded === false) {
    setTimeout(() => {
      $('.f85').addClass('eighty-five-percent')
      $('.f80').addClass('eighty-percent')
      $('.f70').addClass('seventy-percent')
      skillsLoaded = true
    }, 1000)
  }
})

// ----------------------------------------------------------------------
// projects
let position = document
  .getElementsByClassName('display')[0]
  .getBoundingClientRect()

$('.project').each(function () {
  const self = this

  $(self).click(function () {
    removePreviousProperty()
    addnewProperty($(this).children()[1], self)
  })
})

const addnewProperty = (children, self) => {
  $(children).removeClass('none')
  $(self).addClass('left-border')
}

const removePreviousProperty = () => {
  $('.visit').addClass('none')
  $('.project').removeClass('left-border')
}

const turnOnLaptop = () => {
  setTimeout(() => {
    $('.screen').addClass('fadeIn')
    setTimeout(() => {
      $('.icon').addClass('bounce')
      setTimeout(() => {
        $('.browser-container').addClass('b-fadeIn')
        $('.browser-container').removeClass('none')
      }, 1200)
    }, 1000)
  }, 1000)
}

setTimeout(() => {
  if (position.top > 0 && position.top < 200) {
    turnOnLaptop()
  }
}, 5000)
