'use strict'
/*serch*/
$('.search-btn').click(function(){
  $('.searchbox').toggleClass('d-none')
})
$('.close').click(function(){
  $('.searchbox').toggleClass('d-none')
})
/*SideMenu*/
/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  /*go top*/
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#top-btn').fadeIn();
    }else{
      $('#top-btn').fadeOut();
    }
  });
  $("#top-btn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});
  /* accordion*/
  var accordion = function(){
    var data=$(".accordion").attr(".data-accordion");
    $(".accordion-header").on("click",function(){
        if(data === "close"){
            $(".accordion-body").slideUp();
            if($(this).hasClass("active")){
                $(this).toggleClass("active");
            }
            else{
                $(".accordion-header").removeClass("active");
                $(this).toggleClass("active");
            }
        }
        else{
            $(this).toggleClass("active");
        }
        $(this).next(".accordion-body").not(":animated").slideToggle();
    })
}
accordion();
/*go top*/
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#top-btn').fadeIn();
    }else{
      $('#top-btn').fadeOut();
    }
  });
  $("#top-btn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});
/*tabmenu*/
$(document).ready(function(){
  $('.menu-btns button').click(function(){
      $(this).addClass("selected").siblings().removeClass("selected");
      $('.tab-content >div').hide();
      $($(this).data("value")).fadeIn();
  })
})