var config = {
  lobbyFooter : {
    items : 5
  }
};
//main function
$('.opennew a').bind('click', function () {
	if ($(this).attr('target') == "_parent") return;
    CenterPopup($(this).data('href'), '', 830, 690, 'Tab');
});

$('a.opennew').bind('click', function (e) {
  // e.preventDefault();
  if ($(this).attr('target') == "_parent") return;
    CenterPopup($(this).data('href'), '', 830, 690, 'Tab');
});

$('.opennewbig a').bind('click', function () {
  if ($(this).attr('target') == "_parent") return;
    CenterPopup($(this).data('href'), '', 1024, 725, 'Banking');
});

$('a.opennewbig').bind('click', function () {
  if ($(this).attr('target') == "_parent") return;
    CenterPopup($(this).data('href'), '', 1024, 725, 'Banking');
});

$('.openlobby').bind('click', function () {
  if ($(this).attr('target') == "_parent") return;
    CenterPopup($(this).data('href'), '', 1060, 665, '');
});

//Terms & Conditions and Rules & Regulations. open new window
$('#reg-main td:last').parent().prev().on('click', 'a', function () {
    if ($(this).attr('target') == "_parent") return;
    CenterPopup($(this).data('href'), '', 830, 690, 'Tab');
});

// Centering popup for casino lobby
function CenterPopup(url, params, width, height, name) {
  var screenLeft=0, screenTop=0;

  if(!name) name = 'Live Casino';
  if(!width) width = 1060;
  if(!height) height = 665;

  var defaultParams = { }

  if(typeof window.screenLeft !== 'undefined') {
      screenLeft = window.screenLeft;
      screenTop = window.screenTop;
  } else if(typeof window.screenX !== 'undefined') {
      screenLeft = window.screenX;
      screenTop = window.screenY;
  }

  var features_dict = {
      toolbar: 'no',
      location: 'no',
      directories: 'no',
      left: screenLeft + ($(window).width() - width) / 2,
      top: screenTop + ($(window).height() - height) / 2,
      status: 'yes',
      menubar: 'no',
      scrollbars: 'yes',
      resizable: 'no',
      width: width,
      height: height
  };
  features_arr = [];
  for(var k in features_dict) {
      features_arr.push(k+'='+features_dict[k]);
  }
  features_str = features_arr.join(',')

  // var qs = '?'+$.param($.extend({}, defaultParams, params));
  var win = window.open(url, name, features_str);
  win.focus();
  return false;
}

function openNewWindow(url, name, width, height, left, top, scrollbars) {
    window.open(url, name, 'left=' + left + ', top=' + top + ', width=' + width + ', height=' + height + ', scrollbars=' + scrollbars + ', location=no, menubar=no, titlebar=no, hotkeys=no, toolbars=no, status =no, resizable=yes');
}

function SetMainContent() {
    var bodyHeight = parent.window.document.documentElement.clientHeight;
    var hdHeight = $('.header').height();
    var ftHeight = $('.footer').height();
    var mainHeight = bodyHeight - hdHeight - ftHeight;
    //$('.main').css('min-height', mainHeight);
}

////start subnavbar
$(function () {
   var subnavtimeout = 0;
   $('.nav li.sub').hover(function () {
       $('.nav li.sub a').removeClass('hover');
       $(this).find('a').addClass('hover');
       var page = $(this).attr('data-page');
       $('.subnavbar .pagetype').hide();
       $('.subnavbar .pagetype[data-page=' + page + ']').show();
       $('.subnavbar').stop(true, true).slideDown();
       //setTimeout(function () { $('.subnavbar').stop(true, true).slideDown(); }, 600);

       clearTimeout(subnavtimeout);
   });

   $('.nav li:not(".sub")').hover(function () {
       $('.nav li.sub a').removeClass('hover');
       $('.subnavbar').stop(true, true).slideUp();
   });

   $('.subnavbar').hover(function () {
       clearTimeout(subnavtimeout);
   });

   $('.navbar,.subnavbar').on('mouseleave', function () {
       //$('.nav li.sub a').removeClass('hover');
       subnavtimeout = setTimeout(function () {
           $('.nav li.sub a').removeClass('hover');
           $(".subnavbar").stop(true, true).slideUp();
       }, 800);
   });

});
////end subnavbar

//start marquee
$('.marquee').marquee({
    //speed in milliseconds of the marquee
    duration: 20000,
    //gap in pixels between the tickers
    gap: 50,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 100,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true,
    pauseOnHover: true
});
//end marquee

//start sroll to top
$(function () {
    $('.rollto a.scrolltop').on('click', function () {
        scrollTo('', 500);
    });
    $('.rollto a.scrollbottom').on('click', function () {
        scrollTo('.footer');
    });
    $(window).scroll(function () {
        var scroller = $('.rollto');
        document.documentElement.scrollTop + document.body.scrollTop > 150 ? scroller.fadeIn() : scroller.fadeOut();
    });
});

function scrollTo(name, speed) {
    if (!speed) speed = 300;
    if (!name) {
        $('html,body').animate({
            scrollTop: 0
        }, speed);
    } else {
        if ($(name).length > 0) {
            $('html,body').animate({
                scrollTop: $(name).offset().top
            }, speed);
        }
    }
}
//end sroll to top

// reload captcha 
$(function()
{
  $('#captcha-login, #re-captcha-login').click(function(){
      $('#captcha-login').attr('src','/captcha/login?'+Math.random());
  });

  $('#re-captcha-login-popup').click(function(){
      $('#captcha-login-popup').attr('src','/captcha/login?'+Math.random());
  });
})
// end of reload captcha

// achor function
$(function () {
    $('a[href^="#"]').attr('onclick', 'return false');
});
// end achor function

// hover effect on casino page
$('.studio1').hover(function(){
  $('.studio1').addClass('studio-hover');
  $('.std1').addClass('std-hover');
  $('.std-play-btn1').addClass('std-play-btn-hover');
},
function(){
  $('.studio1').removeClass('studio1-hover');
  $('.std1').removeClass('std-hover');
  $('.std-play-btn1').removeClass('std-play-btn-hover');
});

$('.studio2').hover(function(){
  $('.studio2').addClass('studio-hover');
  $('.std2').addClass('std-hover');
  $('.std-play-btn2').addClass('std-play-btn-hover');
},
function(){
  $('.studio2').removeClass('studio-hover');
  $('.std2').removeClass('std-hover');
  $('.std-play-btn2').removeClass('std-play-btn-hover');
});
// end hover effect on casino page

// balance popover
// var popOverSettings = {
//   placement: 'bottom',
//   trigger: 'hover',
//   container: 'body',
//   html: true,
//   selector: '[rel="popover"]',
//   content: function () {
//     return $('#popover-content').html();
//   }
// }
// $('body').popover(popOverSettings);
// end balance popover

$('[rel="popover"]').each(function() {
    // console.log($(this).attr('id'));
    var $pElem= $(this);
    $pElem.popover(
        {
            placement: 'bottom',
            trigger: 'hover',
            container: 'body',
            html: true,
            // selector: '[rel="popover"]',
            content: getPopoverContent($pElem.attr("id"))
        }
    );
});
    
function getPopoverContent(target) {
    return $("#" + target + "-content").html();
};

// loader
$("#loader").delay(300).fadeOut(8000);
$(".mask").delay(500).fadeOut(8000);