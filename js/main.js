var $grid = $('.grid').isotope({
    itemSelector: '.color-shape'
});

// store filter for each group
var filters = {};


$(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    var carouselGalleryCount = $('.carousel-gallery-2 .swiper-container .swiper-slide').length;

    new Swiper('.carousel-gallery-2 .swiper-container', {
        speed: 900,
        slidesPerView: carouselGalleryCount < 5 ? carouselGalleryCount : 5,
        spaceBetween: 20,
        loop: false,
        simulateTouch: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        pagination: {
            el: '.carousel-gallery-2 .swiper-pagination',
            clickable: true
        },
        breakpoints: {
            600: {
                slidesPerView: carouselGalleryCount < 3 ? carouselGalleryCount : 1,
                spaceBetween: 1,
            },
            800: {
                slidesPerView: carouselGalleryCount < 3 ? carouselGalleryCount : 2,
                spaceBetween: 5,
            },
            1200: {
                slidesPerView: carouselGalleryCount < 3 ? carouselGalleryCount : 3,
                spaceBetween: 8,
            },
            1500: {
                slidesPerView: carouselGalleryCount < 5 ? carouselGalleryCount : 5,
                spaceBetween: 8,
            },
        }
    });


    var carouselGalleryCount = $('.carousel-gallery-5 .swiper-container .swiper-slide').length;

    new Swiper('.carousel-gallery-5 .swiper-container', {
        speed: 900,
        slidesPerView: 2,
        spaceBetween: 8,
        loop: false,
        simulateTouch: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        pagination: {
            el: '.carousel-gallery-5 .swiper-pagination',
            clickable: true
        },
        breakpoints: {
            600: {
                slidesPerView: 1,
                spaceBetween: 1,
            },
            800: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 8,
            },
            1500: {
                slidesPerView: 2,
                spaceBetween: 8,
            },
        }
    });


    new Swiper('.slider-h .swiper-container', {
        // Optional parameters
        effect: 'fade',
        speed: 1000,
        slidesPerView: 1,
        direction: 'horizontal',
        loop: false,
        simulateTouch: true,
        autoplay: {
            delay: 4000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },

        // If we need pagination
        pagination: {
            el: '.slider-h .swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.slider-h .swiper-button-next',
            prevEl: '.slider-h .swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.slider-h .swiper-scrollbar',
        },
    });


	 var carouselGalleryCount = $('.carousel-gallery-e .swiper-container').length;

    new Swiper('.carousel-gallery-e .swiper-container', {
        speed: 900,
        slidesPerView: 4,
        loop: true,
        simulateTouch: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        pagination: {
            el: '.carousel-gallery-e .swiper-pagination',
            clickable: true
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
				spaceBetween: 1,
            },
			600: {
                slidesPerView: 2,
                spaceBetween: 1,
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 8,
            },
            1500: {
                slidesPerView: 4,
                spaceBetween: 8,
            },
        }
    });

	$('.owl-carousel').owlCarousel({
    loop:false,
    responsiveClass:true,
	nav:true,
    responsive:{
        0:{
            items:2
        },
		900:{
            items:3
        },
		1200:{
            items:4
        },
        1660:{
            items:6
        }
    }
})



    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated__animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    });
    wow.init();


    $("#test-circle7").circliful({
        animationStep: 1,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        percent: $(this).data('percent'),
        animateInView: true,
        textSize: 28,
        textStyle: 'font-size: 8px;',
        textColor: '#888',
        text: $(this).data('text'),
        textY: '125px',
        textBelow: false
    });

    var delay = 500;
    $(".progress-bar").each(function (i) {
        $(this).delay(delay * i).animate({ width: $(this).attr('aria-valuenow') + '%' }, delay);

        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: delay,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now) + '%');
            }
        });
    });

    var filterTorGroup = $("#filterTor");
    var filterDispGroup = $("#filterDisp");
    var filterTipoGroup = $("#filterTipos");

    filterTorGroup.on('click', 'button', function(e){
        var button = $(e.currentTarget);
        var buttonGroup = filterTorGroup.attr('data-filter-group');

        filterTorGroup
            .find('.is-checked')
            .removeClass('is-checked');

        button.addClass('is-checked');

        filterTipoGroup.find('option')
            .removeClass('is-checked')
            .removeClass('d-none')
            .first()
            .addClass('is-checked')
            .prop('selected', true);

        checkFilters();

        hideTipoFilters(buttonGroup);

        setDeptosCounter();
    });

    filterDispGroup.on('click', 'button', function(e){
        var button = $(e.currentTarget);
        var buttonGroup = filterDispGroup.attr('data-filter-group');

        filterDispGroup
            .find('.is-checked')
            .removeClass('is-checked');

        button.addClass('is-checked');

        filterTipoGroup.find('option')
            .removeClass('is-checked')
            .removeClass('d-none')
            .first()
            .addClass('is-checked')
            .prop('selected', true);

        checkFilters();

        hideTipoFilters(buttonGroup);

        setDeptosCounter();
    });

    filterTipoGroup.on('change', function(e){
        var optionSelected = $("option:selected", this);

        filterTipoGroup
            .find('.is-checked')
            .removeClass('is-checked');

        optionSelected.addClass('is-checked');

        checkFilters();
        setDeptosCounter();
    });

    $("button.dispFilter.is-checked").trigger('click');

    initLazyLoad();
    initReCaptcha();
});

function initLazyLoad() {
    lazyLoad();

    //window.addEventListener('scroll', _.throttle(lazyLoad, 16));
    window.addEventListener('resize', _.throttle(lazyLoad, 16));
}

function lazyLoad() {
    lazyImages = [...document.querySelectorAll('.lazy-image')];
    inAdvance = 300;

    lazyImages.forEach(image => {
        image.src    = image.dataset.src;
        image.onload = () => image.classList.add('loaded');
    });

}

function initReCaptcha() {
    var reCaptcha = document.getElementById('g-recaptcha-response');

    if (reCaptcha !== null) {
        grecaptcha.ready(function () {
            grecaptcha.execute($('meta[name=grecaptcha]').attr("content"), {
                action: 'homepage'
            })
                .then(function (token) {
                    reCaptcha.value = token;
                });
        });
    }
}

function cleanErrorsForm(form) {
    var contactResponse = $('#contactResponse');

    contactResponse.text('¡Gracias! ¡Tu mensaje se ha enviado con éxito!').addClass('d-none');

    form.find('.is-invalid').each(function () {
        $(this).removeClass('is-invalid');
    });
    form.find('.invalid-feedback').remove();
}

function setDeptosCounter(){
    var dptos = $grid.isotope('getFilteredItemElements');
    var counter = dptos.filter(function(el){
        return $(el).hasClass('dpto-desktop');
    });

    $("#cantDptosFilter").html(counter.length);

    var filterCount = 0;

    $.each(filters, function(i, val) {
        if(val != ''){
            filterCount++;
        }
    });

    if(filterCount){
        $('#cantDptosFilterCont').removeClass('d-none');
    }else{
        $('#cantDptosFilterCont').addClass('d-none');
    }
}

function hideTipoFilters(buttonType) {
    checkFilters();

    var filterGroup   = $("#filterTipos");
    var filterOptions = filterGroup.find('option');
    var tipos = [];
    //var disp = [];

    // Obtengo los datos filtrados para las tipologias
    $($grid.isotope('getFilteredItemElements')).each(function () {
        var element = $(this);

        if (element.hasClass('dpto-desktop')) {
            if (!tipos.includes('.' + element.data('tipologia'))) {
                tipos.push('.' + element.data('tipologia'));
            }
        }
    });

    filterOptions
        .addClass('d-none')
        .removeClass('is-checked');

    // Oculto los filtros
    filterOptions.each(function () {
        var option    = $(this);
        var filterVal = option.data('filter');

        if(((tipos.length > 1) && filterVal == '') || tipos.includes(filterVal)){
            option.removeClass('d-none');
        }
    });

    filterOptions
        .not(".d-none")
        .first()
        .addClass('is-checked')
        .prop('selected', true);
}

function checkFilters() {
    // Chequeo que filtros están chequeados
    $('.filters .button-group .is-checked').each(function () {
        var element = $(this);

        if (element.hasClass('torreFilter')) {
            filters.torres = element.data('filter');
        }
        if (element.hasClass('tipoFilter')) {
            filters.tipologias = element.data('filter');
        }
        if (element.hasClass('dispFilter')) {
            filters.disponibilidad = element.data('filter');
        }

    });

    $grid.isotope({
        filter: concatValues(filters)
    });
}

// flatten object by concatting values
function concatValues(obj) {
    var value = '';
    for (var prop in obj) {
        value += obj[prop];
    }
    return value;
}
