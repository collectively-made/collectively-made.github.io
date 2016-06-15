$(document).ready(function(){
  $('.carousel').slick({
  dots:true,
  lazyLoad: 'ondemand',  
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 900,
      settings: {
      slidesToShow: 1,
      dots: true,
      prevArrow: false,
      nextArrow: false
    }
  }
  ]
  });
  $('.carousel-single').slick({
  dots:true,  
  lazyLoad: 'ondemand', 
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 900,
      settings: {
      slidesToShow: 1,
      dots: true,
      prevArrow: false,
      nextArrow: false
    }
  }
  ]
  });
  $('.carousel-three').slick({
  dots:true,  
  lazyLoad: 'ondemand', 
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 900,
      settings: {
      slidesToShow: 2,
      dots: true,
      prevArrow: false,
      nextArrow: false
    }
  }
  ]
  });
});