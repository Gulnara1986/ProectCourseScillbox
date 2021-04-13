let swiper = new Swiper('.hero__swiper-container', {
    loop: true,

});

let swiper1 = new Swiper('.gallery__swiper-container', {
  speed: 400,
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',

  pagination: {
    el: '.gallery__swiper_pagination',
    type: 'fraction',
  },

  navigation: {
    prevEl: '.gallery__swiper-button-prev',
    nextEl: '.gallery__swiper-button-next',
  },
  breakpoints: {
    1680: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
    },
    768: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
    },
   320: {
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'row',
  },
}
});

var swiper4,
swiper6 = undefined;
function initSwiper6() {
if ($(window).width() <= 767 && swiper6 === undefined) {
  swiper6 = new Swiper('.events__container-cards', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 10,
    pagination: {
      el: ".events__pagination",
      type: "bullets",
      clickable: true,
      slideToClickedSlide: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      550: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
  });
} else if ($(window).width() > 768 && swiper6 !== undefined) {
  swiper6.destroy();
  swiper6 = undefined;
  $(".swiper-wrapper").removeAttr("style");
  $(".swiper-slide").removeAttr("style");
}
}

initSwiper6();

$(window).resize(function () {
initSwiper6();
});



const element = document.querySelector('.section-gallery__select-list');
        const choices = new Choices(element, {
            searchEnabled: false,
            shouldSort: false,
            itemSelectText: '',
        });


$(document).ready(function() {

    $('.style-item1').click(function(event) {
        $('.nav-style__item,.nav-style__item-submenu1').toggleClass('active');
    });

    $('.style-item1').click(function(event) {
      $('.nav-style__item,.nav-style__item-submenu2,.nav-style__item,.nav-style__item-submenu3,.nav-style__item,.nav-style__item-submenu4,.nav-style__item,.nav-style__item-submenu5').removeClass('active');
  });

    $('.style-item2').click(function(event) {
        $('.nav-style__item,.nav-style__item-submenu2').toggleClass('active');
    });
    $('.style-item2').click(function(event) {
      $('.nav-style__item,.nav-style__item-submenu1,.nav-style__item,.nav-style__item-submenu3,.nav-style__item,.nav-style__item-submenu4,.nav-style__item,.nav-style__item-submenu5').removeClass('active');
  });

    $('.style-item3').click(function(event) {
        $('.nav-style__item,.nav-style__item-submenu3').toggleClass('active');
    });
    $('.style-item3').click(function(event) {
      $('.nav-style__item,.nav-style__item-submenu1,.nav-style__item,.nav-style__item-submenu2,.nav-style__item,.nav-style__item-submenu4,.nav-style__item,.nav-style__item-submenu5').removeClass('active');
  });

    $('.style-item4').click(function(event) {
        $('.nav-style__item,.nav-style__item-submenu4').toggleClass('active');
    });
    $('.style-item4').click(function(event) {
      $('.nav-style__item,.nav-style__item-submenu1,.nav-style__item,.nav-style__item-submenu2,.nav-style__item,.nav-style__item-submenu3,.nav-style__item,.nav-style__item-submenu5').removeClass('active');
  });

    $('.style-item5').click(function(event) {
        $('.nav-style__item,.nav-style__item-submenu5').toggleClass('active');
    });
    $('.style-item5').click(function(event) {
      $('.nav-style__item,.nav-style__item-submenu1,.nav-style__item,.nav-style__item-submenu2,.nav-style__item,.nav-style__item-submenu3,.nav-style__item,.nav-style__item-submenu4').removeClass('active');
  });



    $('.header__container-burger').click(function(event) {
        $('.header__container-burger,.nav__menu-list').toggleClass('active');
    });



   $('.nav__search-btn').click(function(event) {
        $('.nav__search,.nav__form-search,.nav__search-btn').toggleClass('active');
    });

    $('.section-events__btn').click(function(event) {
      $('.events-cards__item:nth-child(3),.events-cards__item:nth-child(4),.events-cards__item:nth-child(5)').toggleClass('active');
  });



  });


  $(function () {
    $("#accordion").accordion({
      active: 0,
      collapsible: true,
      heightStyle: "content",
      icons: false,
    });
  });

  document.querySelectorAll(".tabs__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll(".tab-content").forEach(function (tabContent) {
        tabContent.classList.remove("active");
      });
      document.querySelector(`[data-target="${path}"]`).classList.add("active");
    });
  });

   document.querySelectorAll(".art__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
       const path = event.currentTarget.dataset.path;

     document.querySelectorAll(".tab-art").forEach(function (tabContent) {
       tabContent.classList.remove("active");
     });
     document.querySelector(`[data-target="${path}"]`).classList.add("active");
    });
   });





