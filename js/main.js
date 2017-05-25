var lastScrollOffset = 0;

var navbar = $('.navbar'),
    hero = $('.hero'),
    heroH = hero.height(),
    navH = navbar.height(),
    mobile = $(window).width() <= 723;

$(window).resize(()=>{
  mobile = $(window).width() <= 723;
})

$(window).scroll(() => {
  if (pageYOffset >= heroH) {
    navbar.css({
      position: 'fixed',
      top: '0'
    })
    hero.height(heroH + navH)
  } else if (pageYOffset < heroH) {
    navbar.css({
      position: 'static',
      top: null
    })
    hero.height(heroH)
  }
})

$('.hero').css('height', $(window).height() - navbar.height() )


// Grab the slides in .info-box, to the accordion tabs
if (mobile) {
//  for (var x = 0; x <= $('.program-headers li:last').index() ; x++) {
//    var c = x + 1;
//    $('.program-headers li:nth-child('+c+')').after($('.info-slide:nth-child('+c+')'))
//  }

  var txt = document.querySelectorAll('.info-box .info-slide')
  var ul = document.querySelectorAll('.program-headers li')
  ul.forEach(function(li, index) {
    li.after(txt[index]);
  })

  setTimeout(function() {
    $('.program-headers li:first').click()
    $('.program-headers li:first').click()
  },100)
}

$('.program-headers li').click(function() {

  if (mobile) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
        .next().css('max-height', 0)
    } else {
      $('.program-headers .info-slide').css('max-height', 0)
      $('.program-headers li').removeClass('active')
      $(this).addClass('active')
        .next().css('max-height', 200)
    }

  } else {
    $('.program-headers li').removeClass('active')
    $(this).addClass('active')

    var i = $(this).index();
    if (i<=8)
      $('.arrow').css('top', $(this).index() * 45)

    i++;
    $('.info-slide').fadeOut(200);
    setTimeout(function(){
      $('.info-slide:nth-child('+i+')').fadeIn()
    }, 200)
  }
})

var navToggled = false
$('.nav-toggle').click(function(){
  if (navToggled) {
    $(this).find('.fa')
      .removeClass('fa-times')
      .addClass('fa-bars')
    $('.nav-list').hide();
    $('.brand').fadeIn();
  } else {
    $(this).find('.fa')
      .removeClass('fa-bars')
      .addClass('fa-times')
    $('.brand').hide();
    $('.nav-list').fadeIn();
  }
  navToggled = !navToggled;
})

function contact(e) {
  alert('عذراُ, لا يمكننا استلام رسالتك الآن!');
}

//$('<span>').text('resolution').css({color: '#fff', position: 'fixed', top: 0}).appendTo('body')




//$(window).resize(function() {
//  $('.hero').css('height', $(window).height() - navbar.height() )
//  $('span').text($(window).width() + 'x' + $(window).height())
//    .css('z-index', '10')
//    .css('color', 'lime')
//});

//$(window).scroll(() => {
//  $('span').text(pageYOffset)
//})

// $('#training-programs').click(()=> {
//   alert('jquery click!')
// })

// var app = new Vue({
//   el: ".vue",
//   data: {
//     msg: 'Lol?',
//     json: 'Loading...'
//   },
//   created: function() {
//     var self = this
//     // $.getJSON('http://newtrainers.center/db/data.json', function(data) {
//     //   self.json = JSON.stringify(data);
//     // })
//   }
// })
