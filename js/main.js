$(document).ready(function(){





    const items = document.querySelectorAll(".item");

    items.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("open");
        });
    });

    //Переход на секцию
    document.querySelector('.down').addEventListener('click', function () {
        document.getElementById('villages').scrollIntoView({ behavior: 'smooth' });
    });

    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.mt-mobile');
    const body = document.querySelector('body');
  
    burger.addEventListener('click', () => {
        navbar.classList.toggle('nav-open');
        body.classList.toggle('body-open');
        burger.classList.toggle('burger-open');
        
    });

    $( document ).ready(function(){
        jQuery('.scroll').onePgaeNav({
          wrapper : '#onePgaeNav'
        });
      });  

    (function( $ ) {
    
    $.fn.onePgaeNav = function( options ){

        var settings = $.extend({
            activeClass     : 'active',
            wrapper         : '',       // Nav wrapper selector for scroll effect
            speed           : 900,      // animation speed
            navStop         : 100,      // stop before top
            navStart        : 200,      // change class before navstart pixel

        }, options ),
        $that = $(this);

        $(this).on( 'click' , clickScroll );

        if (settings.wrapper) {
            $(window).on('scroll',function(){
                var sectionTop  = [],
                windowTop   = $(window).scrollTop();

                $that.each(function(){
                    var hash = $(this).attr('href'),
                        hashOffset = $( hash ).offset();
                    if (typeof hashOffset !== 'undefined' ) {
                        sectionTop.push( hashOffset.top);
                    };
                });

                $.each( sectionTop, function(index){
                    if ( windowTop > sectionTop[index] - settings.navStart ){
                        $that.removeClass(settings.activeClass)
                            .eq(index).addClass(settings.activeClass);
                    }
                });
            });
        };

        function clickScroll(event){
            event.preventDefault();

            var hash        = $(this).attr('href'),
                hashOffset  = $(hash).offset(),
                hashTop     = hashOffset.top;

            $('html, body').animate({
                scrollTop: hashTop - settings.navStop
            }, settings.speed);
        }

    };

    }(jQuery));

    let triggersModal = document.querySelectorAll(".js-show-modal");
    let modals = document.querySelectorAll(".js-modal");

    function closeModal() {
    modals.forEach(modal => {
        if (modal.classList.contains("is-open")) {
        modal.classList.remove("is-open");
        }
    });
    }


    modals.forEach(modal => {
    modal.addEventListener("click", function (event) {
        const isOutside = !event.target.closest(".modal__inner");
        const isCloseButton = event.target.matches(".js-close-modal");
        if (isCloseButton || isOutside) {
        closeModal();
        }
    });
    });

    triggersModal.forEach((button) =>
    button.addEventListener("click", function (e) {
    e.preventDefault();
    let modalID = this.dataset.modal;
    console.log(modalID);
    modals.forEach(function (modal) {
        if (modal.dataset.modal == modalID) {
        modal.classList.add("is-open");
        }
    });
    }));

    const btnUp = {
        el: document.querySelector('.btn-up'),
        show() {
          // удалим у кнопки класс btn-up_hide
          this.el.classList.remove('btn-up_hide');
        },
        hide() {
          // добавим к кнопке класс btn-up_hide
          this.el.classList.add('btn-up_hide');
        },
        addEventListener() {
          // при прокрутке содержимого страницы
          window.addEventListener('scroll', () => {
            // определяем величину прокрутки
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
            scrollY > 400 ? this.show() : this.hide();
          });
          // при нажатии на кнопку .btn-up
          document.querySelector('.btn-up').onclick = () => {
            // переместим в начало страницы
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }
        }
      }
      
      btnUp.addEventListener();

});