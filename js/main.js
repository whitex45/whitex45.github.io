jQuery(function ($) {

    "use strict";

    var siteMenuClone = function () {
        $('.js-clone-nav').each(function () {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });

        setTimeout(function () {

            var counter = 0;
            $('.site-mobile-menu .has-children').each(function () {
                var $this = $(this);

                $this.prepend('<span class="arrow-collapse collapsed">');

                $this.find('.arrow-collapse').attr({
                    'data-toggle': 'collapse',
                    'data-target': '#collapseItem' + counter,
                });

                $this.find('> ul').attr({
                    'class': 'collapse',
                    'id': 'collapseItem' + counter,
                });

                counter++;

            });

        }, 1000);

        $('body').on('click', '.arrow-collapse', function (e) {
            var $this = $(this);
            if ($this.closest('li').find('.collapse').hasClass('show')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
            e.preventDefault();

        });

        $(window).resize(function () {
            var $this = $(this),
                w = $this.width();

            if (w > 768) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        })

        $('body').on('click', '.js-menu-toggle', function (e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
				
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');

				
            } else {

                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
            }
			
        })

		$('body').on('click', '.site-mobile-menu .link-menu-toggle', function (e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
				
                $('body').removeClass('offcanvas-menu');
                $('.js-menu-toggle').removeClass('active');

				
            } else {

                $('body').addClass('offcanvas-menu');
                $('.js-menu-toggle').addClass('active');
            }
			
			var url = $(this).attr('href');
			window.location = url;
			e.preventDefault();

        })

        
    };
    siteMenuClone();

    // navigation
    var OnePageNavigation = function () {
        var navToggler = $('.site-menu-toggle');
        $("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function (e) {
            e.preventDefault();

            var hash = this.hash;
        
            $('html, body').animate({
                'scrollTop': $(hash).offset().top
            }, 600, 'easeInOutCirc', function () {
                window.location.hash = hash;
            });
        });
    };
    //OnePageNavigation();


});

