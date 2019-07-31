/* eslint-disable no-undef */
/* eslint-disable max-statements */
(function ($) {
  let $navbar = $('#header-navbar');
  let $btnBack2Top = $('#back2top');

  const back2topOffset = 700;
  const back2topAnimationDuration = 500;
  const back2topAnimationFunction = 'swing';
  const headerClassOnScroll = 'header-navbar--scrolled';
  const headerScrollTrigger = 100;

  const back2top = (pos) => pos >= back2topOffset
    ? $btnBack2Top.fadeIn(500)
    : $btnBack2Top.fadeOut(500);

  $btnBack2Top.on('click', () => {
    $('html').animate(
      {scrollTop: 0},
      back2topAnimationDuration,
      back2topAnimationFunction
    );

    return false;
  });

  $(window).on('scroll', () => {
    $(window).scrollTop() > headerScrollTrigger
      ? $navbar.addClass(headerClassOnScroll)
      : $navbar.removeClass(headerClassOnScroll);
    back2top($(window).scrollTop());
  });

  let windowWidth = $(window).width();

  $(window).on('resize', () => {
    windowWidth = $(window).width();
  });

  let $navbarLink = $('#header-navbar-collapse a');
  let $navbarToggler = $('navbar-toggler');
  let $headerNavbarCollapse = $('#header-navbar-collapse');

  $navbarLink.on('click', () => {
    if (windowWidth < 992) {
      $navbarToggler.addClass('collapsed');
      $headerNavbarCollapse.removeClass('show');
    }
  });

  $navbar.onePageNav({
    currentClass: 'active',
    easing: 'swing',
    filter: ':not(.navbar-brand)',
    scrollSpeed: 750
  });

  AOS.init({
    disable: 'mobile',
    duration: 600,
    easing: 'ease-in-sine'
  });
}(jQuery));