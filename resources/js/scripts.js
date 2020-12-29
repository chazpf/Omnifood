/*global $*/
/*global document*/


$(document).ready(function () {
    'use strict';

    /* For the sticky nav */
    $('.js--section-features').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse animate__repeat-2');
    }, {
        offset: '50%'
    });

    /* Mobile navigation */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = document.getElementById('mobile-nav');

        nav.slideToggle(200);

        if (icon.innerHTML === '<ion-icon name="close-outline" role="img" class="md hydrated" aria-label="menu outline"></ion-icon>') {
            icon.innerHTML = '<ion-icon name="menu-outline" role="img" class="md hydrated" aria-label="menu outline"></ion-icon>';
        } else {
            icon.innerHTML = '<ion-icon name="close-outline" role="img" class="md hydrated" aria-label="menu outline"></ion-icon>';
        }
    });

});