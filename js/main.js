let swiper = new Swiper('.hero__swiper', {
    loop: true,
    autoplay: {
      delay: 30000,
  },

});

let swiper1 = new Swiper('.gallery__swiper-container', {
  preloadImages: true, 
  speed: 400,
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',

  navigation: {
    prevEl: '.gallery__swiper-button-prev',
    nextEl: '.gallery__swiper-button-next',
  },

  pagination: {
    el: '.gallery__swiper_pagination',
    type: 'fraction',
  },

  keyboard: {
    enable: true,
    onlyInViewport: true,
    pageUpDown: false,
  },

  watchOverflow: true,
  slidesPerColumnFill: 'row',

  breakpoints: {
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
    },
    500: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
      spaceBetween: 32,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      spaceBetween: 0,
    },
  },
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
} else if ($(window).width() < 540 && swiper6 !== undefined) {
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


var swiper3,
swiper5 = undefined;
function initSwiper5() {
if ($(window).width() >= 321 && swiper5 === undefined) {
  swiper5 = new Swiper('.publication__swiper-container', {
    speed: 400,
    slidesPerView: 2,
    spaceBetween: 34,
    slidesPerGroup: 1,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 34,
        observer: true,
        },
      1500: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        },
      },

    pagination: {
      el: '.publication__swiper_pagination',
      type: 'fraction',
      },

    navigation: {
     prevEl: '.publication__swiper-button-prev',
     nextEl: '.publication__swiper-button-next',
    },
});

} else if ($(window).width() <= 320 && swiper5 !== undefined) {
  swiper5.destroy();
  swiper5 = undefined;
  $(".swiper-wrapper").removeAttr("style");
  $(".swiper-slide").removeAttr("style");
}
}

initSwiper5();

$(window).resize(function () {
initSwiper5();
});


let Swiper8 = new Swiper('.project__container', {

	slidesPerView: 1,
	slidesPerGroup: 1,

	breakpoints: {
		767: {
			slidesPerView: 2,
	 		spaceBetween: 34,
	 		slidesPerGroup: 2,
	 	},
	 	1540: {
	 		slidesPerView: 3,
	 		spaceBetween: 50,
	 		slidesPerGroup: 3,
	 	},
	 },

	navigation: {
		nextEl: '.project-swiper-next',
		prevEl: '.project-swiper-prev',
	},

});





const element = document.querySelector('.section-gallery__select-list');
        const choices = new Choices(element, {
            searchEnabled: false,
            shouldSort: false,
            itemSelectText: '',
        });


$(document).ready(function() {

    $('.realism').click(function(event) {
        $('.realism, .nav-style__item, .submenu-realism').toggleClass('active');
    });
    $('.realism').click(function(event) {
        $('.submenu-impressionism,.submenu-postimpressionism,.submenu-avangard,.submenu-futurism').removeClass('active');
    });

    $('.impressionism').click(function(event) {
        $('.impressionism, .submenu-impressionism').toggleClass('active');
     });
    $('.impressionism').click(function(event) {
        $('.submenu-realism, .submenu-postimpressionism,.submenu-avangard,.submenu-futurism').removeClass('active');
    });

    $('.postimpressionism').click(function(event) {
        $('.postimpressionism, .submenu-postimpressionism').toggleClass('active');
    });
    $('.postimpressionism').click(function(event) {
        $('.submenu-realism,.submenu-impressionism,.submenu-avangard,.submenu-futurism').removeClass('active');
   });

    $('.avangard').click(function(event) {
        $('.avangard,.submenu-avangard').toggleClass('active');
    });
    $('.avangard').click(function(event) {
        $('.submenu-realism,.submenu-impressionism,.submenu-postimpressionism,.submenu-futurism').removeClass('active');
    });

   $('.futurism').click(function(event) {
       $('.futurism, .submenu-futurism').toggleClass('active');
   });
   $('.futurism').click(function(event) {
      $('.submenu-realism,.submenu-impressionism,.submenu-postimpressionism,.submenu-avangard').removeClass('active');
  
    }); 


    $(document).ready(function () {
      $('.section-hero').click(function (event) {
        $('.nav-style__link, .nav-style__item').removeClass('active');
      });
    });
 



    $('.header__container-burger').click(function(event) {
        $('.header__container-burger,.nav__menu,.nav__menu-list').toggleClass('active');
    });



   $('.nav__search-btn').click(function(event) {
        $('.nav__search,.header__container__form-search,.nav__search-btn, .nav__search-span').toggleClass('active');
    });

    $('.nav__search-span').click(function(event) {
      $('.nav__search,.header__container__form-search,.nav__search-btn, .nav__search-span').removeClass('active');
  })



    $('.section-events__btn').click(function(event) {
      $('.events-cards__item:nth-child(3),.events-cards__item:nth-child(4),.events-cards__item:nth-child(5)').toggleClass('active');
  });

  });



  $(document).ready(function () {
    $('.checkbox-subtitle-btn').click(function (event) {
      $('.checkbox-subtitle-btn').toggleClass('active');
    });
    $('.checkbox-subtitle-btn').click(function (event) {
      $('.checkbox-content__label').toggleClass('active');
    });
    $('.checkbox-content__label').click(function (event) {
      $('.checkbox-content__label').removeClass('active');
    });
    $('.checkbox-content__label').click(function (event) {
      $('checkbox-subtitle-btn').removeClass('.checkbox-subtitle-btn--active');
    });
    $('#checkbox-1, #checkbox-2, #checkbox-3, #checkbox-4, #checkbox-5, #checkbox-6, #checkbox-7, #checkbox-8, #checkbox-9, #checkbox-10, #checkbox-11, #checkbox-12').click(function (event) {
      $('.checkbox-selected').removeClass('checkbox-selected');
    });
    $('#checkbox-1').click(function (event) {
      $('#checkbox-1').addClass('checkbox-selected');
    });
    $('#checkbox-2').click(function (event) {
      $('#checkbox-2').addClass('checkbox-selected');
    });
    $('#checkbox-3').click(function (event) {
      $('#checkbox-3').addClass('checkbox-selected');
    });
    $('#checkbox-4').click(function (event) {
      $('#checkbox-4').addClass('checkbox-selected');
    });
    $('#checkbox-5').click(function (event) {
      $('#checkbox-5').addClass('checkbox-selected');
    });
    $('#checkbox-6').click(function (event) {
      $('#checkbox-6').addClass('checkbox-selected');
    });
    $('#checkbox-7').click(function (event) {
      $('#checkbox-7').addClass('checkbox-selected');
    });
    $('#checkbox-8').click(function (event) {
      $('#checkbox-8').addClass('checkbox-selected');
    });
    $('#checkbox-9').click(function (event) {
      $('#checkbox-9').addClass('checkbox-selected');
    });
    $('#checkbox-10').click(function (event) {
      $('#checkbox-10').addClass('checkbox-selected');
    });
    $('#checkbox-11').click(function (event) {
      $('#checkbox-11').addClass('checkbox-selected');
    });
    $('#checkbox-12').click(function (event) {
      $('#checkbox-12').addClass('checkbox-selected');
    });
    $('.checkbox-selected').click(function (event) {
      $('.checkbox-content__label').addClass('active');
    });
  });



  $(function () {
    $("#accordion").accordion({
      collapsible: true,
      heightStyle: "content",
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.catalog-flag__btn').forEach(function (tabsBtn) {
      tabsBtn.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path
  
        document.querySelectorAll('.catalog-flag__btn').forEach(function (workStep) {
          workStep.classList.remove('catalog-flag__btn-active');
        });
        document.querySelector(`.catalog-flag__btn[data-path="${path}"]`).classList.add('catalog-flag__btn-active');
  
    
        document.querySelectorAll('.accordion__list').forEach(function (accordList) {
          accordList.classList.remove('accordion__list-active');
        });
  
        document.querySelectorAll(`.accordion__list[data-target="${path}"]`).forEach(el => {
          el.classList.add('accordion__list-active');
        });
  
      });
    });
  
    document.querySelectorAll('.accordion__item-btn').forEach(function (tabsCont) {
      tabsCont.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path
  
        document.querySelectorAll('.accordion__item-btn').forEach(function (workStep) {
          workStep.classList.remove('accordion__item-btn-active');
        });
        document.querySelector(`.accordion__item-btn[data-path="${path}"]`).classList.add('accordion__item-btn-active');
  
        document.querySelectorAll('.art-content').forEach(function (artContent) {
          artContent.classList.remove('art-content-active');
        });
        document.querySelector(`.art-content[data-target="${path}"]`).classList.add('art-content-active');
  
      });
    });
  });

   
  //  map

  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.750497,37.615821],
      zoom: 14
    });
    var myGeoObject = new ymaps.GeoObject({
     
    });

    var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/Ellipse.png',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });


    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
  }


  document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.gallery__img-btn').forEach(function (modal) {
      modal.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path

        document.querySelector(`.gallery__modal[data-target="${path}"]`).classList.add('active');
      });
    });

    document.querySelectorAll('.modal-content__closed').forEach(function (modal) {
      modal.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.gallery__modal').forEach(function (modalClosed) {
          modalClosed.classList.remove('active');
        });
      });
    });


      document.querySelectorAll('.gallery__modal').forEach(function (modalClosedBg) {
         modalClosedBg.classList.remove('gallery__modal-active');
      });
    });
  

