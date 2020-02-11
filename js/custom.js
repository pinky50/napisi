

jQuery(document).ready(function($){
    var contentSections = $('.cd-section'),
        navigationItems = $('#side-nav a');

    updateNavigation();
    $(window).on('scroll', function(){
        updateNavigation();
    });

    //smooth scroll to the section
    navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    function updateNavigation() {
        contentSections.each(function(){
            $this = $(this);
            var activeSection = $('#side-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
            if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
                navigationItems.eq(activeSection).addClass('is-selected');
            }else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }
        });
    }

    function smoothScroll(target) {
        $('body,html').animate(
            {'scrollTop':target.offset().top},
            600
        );
    }

});

//preloader
var prealoaderOption = $(window);
prealoaderOption.on("load", function () {
    var preloader = jQuery('.preloader');
    var preloaderArea = jQuery('.preloader-area');
    preloader.fadeOut();
    preloaderArea.delay(350).fadeOut('slow');
});

// mobile toggle
jQuery(document).ready(function () {
    $('.header-toggle').on('click', function() {
        $('header .header-items').toggleClass('on');
    });
    $('.nav-menu a').on('click',function() {
        if($('.header-items.on').length) {
            $('.header-items').removeClass('on');
        }
    });
});

//owlCarousel js
if ($('.owl-carousel').length > 0) {
    $('#testimonial .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 15,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 500
    });

}

//wow js
new WOW().init();

//portfolio js
if ($('.grid').length > 0) {
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function (itemElem) {
                var weight = $(itemElem).find('.weight').text();
                return parseFloat(weight.replace(/[\(\)]/g, ''));
            }
        }
    });

    //FILTER FUNCTIONS
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('#filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({filter: filterValue});
    });

    // bind sort button click
    $('#sorts').on('click', 'button', function () {
        var sortByValue = $(this).attr('data-sort-by');
        $grid.isotope({sortBy: sortByValue});
    });

    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });
}

//lightbox js
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

//Color Options js
$('.color-options .toggle-btn').on('click', function() {
    $('.color-options').toggleClass('active');
});
$('.brown').on("click", function () {
    $('#theme-color').attr("href", "css/brown.css");
});
$('.blue').on("click", function () {
    $('#theme-color').attr("href", "css/blue.css");
});
$('.green').on("click", function () {
    $('#theme-color').attr("href", "css/green.css");
});
$('.pink').on("click", function () {
    $('#theme-color').attr("href", "css/pink.css");
});
$('.purple').on("click", function () {
    $('#theme-color').attr("href", "css/purple.css");
});
$('.orange').on("click", function () {
    $('#theme-color').attr("href", "css/orange.css");
});


