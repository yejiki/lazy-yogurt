$(document).ready(function(){
  AOS.init();

  //메뉴
  $(".depth2").hide();

  $(".gnb>li").mouseenter(function () {
      $(".depth2_bg").stop().fadeIn();
      $(this).children(".depth2").stop().fadeIn();
  });
  $(".gnb>li").mouseleave(function () {
      $(".depth2_bg").stop().fadeOut();
      $(this).children(".depth2").stop().fadeOut();
  });

  //검색
  $(".btn-search").click(function () {
    $(".search").toggleClass("active");
  });

  //모바일메뉴
  $(".mgnb-modal").hide();

  $(".mgnb-btn").click(function () {
    $(".mgnb-modal").fadeIn();

  $(".mgnb-wrap").animate({"right":"0"}); 
  });

   $(".close").click(function () {
    $(".mgnb-modal").fadeOut();
    $(".mgnb-wrap").animate({"right":"-100%"});
    
  });


  $(".mgnb > li").click(function(){
    if($(this).children(".mdepth2").css("display") == "none"){
      $(this).children(".mdepth2").slideDown();
      $(this).siblings().children(".mdepth2").slideUp();
    }else{
      $(this).children(".mdepth2").slideUp();
    }
  })


  //메인비주얼 스와이퍼
  const mv_swiper = new Swiper('.mv-swiper', {
    effect: "fade",
    loop: true,
    autoplay: {
    delay: 4500,
  },

    pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  });

  $(".mv-play").hide();

  $(".mv-pause").click(function(){
    mv_swiper.autoplay.stop();
    $(".mv-play").show();
    $(".mv-pause").hide();
  });
  $(".mv-play").click(function(){
    mv_swiper.autoplay.start();
    $(".mv-pause").show();
    $(".mv-play").hide();
  });


  // 탭메뉴
  function createSwiper(selector) {
  return new Swiper(selector, {
    spaceBetween: 16,
    slidesPerView: 1.5,
    breakpoints: {
      765: {
        slidesPerView: 1.5,
      },
      1200: {
        slidesPerView: 2.5,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
}

const tabcon_a = createSwiper('.tabcon-a');
const tabcon_b = createSwiper('.tabcon-b');
const tabcon_c = createSwiper('.tabcon-c');

  $(".tab-content").not(":first").hide();

  $(".tab-gnb li").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      let ta = $(this).index();
      $(".tab-content").eq(ta).fadeIn().siblings().hide();
  });

  // 페이지 상단으로 올라가는 동작 방지
  $(".tab-gnb a").click(function (e) {
    e.preventDefault();
  });


//서브페이지
//offline
//store1
$(function () {
    $('.sub-tab li:nth-child(1)').click(function () {
        $('html, body').animate({scrollTop: $('.store1').offset().top}, 300);
    });
});
//store2
$(function () {
    $('.sub-tab li:nth-child(2)').click(function () {
        $('html, body').animate({scrollTop: $('.store2').offset().top}, 300);
    });
});
//store3
$(function () {
    $('.sub-tab li:nth-child(3)').click(function () {
        $('html, body').animate({scrollTop: $('.store3').offset().top}, 300);
    });
});


// cs
$("#cs > div").not(":first").hide();

  $(".sub-tab li").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      let csTab = $(this).index();
      $("#cs > div").eq(csTab).fadeIn().siblings("div").hide();
  });

//QnA
$(".q-depth2").hide();
$(".q-gnb li .bi-dash-lg").hide();

$(".q-gnb li").click(function () {
  const $this = $(this);

  const hideQna = $(this).children(".q-depth2").css("display") == "none";

  if (hideQna) {
    $(this).children(".q-depth2").slideDown();
    $(this).siblings().children(".q-depth2").slideUp();

    $(this).find(".bi-plus-lg").hide();
    $(this).find(".bi-dash-lg").show();

    $(this).siblings().find(".bi-plus-lg").show();
    $(this).siblings().find(".bi-dash-lg").hide();

  } else {
    $(this).children(".q-depth2").slideUp();
    $(this).find(".bi-plus-lg").show();
    $(this).find(".bi-dash-lg").hide();
  }
});


// a태그 상단 방지
$('a.top-x').click(function(e)
{
	e.preventDefault();   
});

  //끝
});




