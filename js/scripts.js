$( document ).ready(function() {

  
  // Filtro portfólio

  $('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'bebidas-btn') {
      eachBoxes('bebidas', boxes);
    } else if(type == 'burguer-btn') {
      eachBoxes('burguer', boxes);
    } else if(type == 'sobre-btn') {
      eachBoxes('sobre', boxes);
    } else {
      eachBoxes('all', boxes);
    }

  });

  function eachBoxes(type, boxes) {

    if(type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }
 
  // scroll para as seções

  let navBtn = $('.nav-item');

  let bannerSection = $('#mainSlider');
  let aboutSection = $('#about-area');
  let servicesSection = $('#services-area');
  let portfolioSection = $('#portfolio-area');
  let teamSection = $('#team-area');
  let contactSection = $('#contact-area');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'about-menu') {
      scrollTo = aboutSection;
    }  else if(btnId == 'team-menu') {
      scrollTo = teamSection;
    } else if(btnId == 'services-menu') {
      scrollTo = portfolioSection;
    } else if(btnId == 'contact-menu') {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  });

});