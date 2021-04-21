$('.card').addClass('card-move')
$('.card').click(function () {
  $('.card').addClass('card-on')
  setTimeout(function () {
    $('.bar').addClass('bar-on')
  }, 1000)
})

$('.login-button').click(function () {
  $('.bar').css({ visibility: 'hidden', transition: '0.5s' })
  setTimeout(function () {
    $('.card').addClass('login-button-click')
    $('h2').css({ visibility: 'visible' })
    $('body').css({ backgroundColor: 'rgb(255,81,0)' })

    let name = $('.name').val()
    $('h2').text('Hi! ' + name)
  }, 500)
})
