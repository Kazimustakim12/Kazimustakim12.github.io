

  $(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  $(".spcl").owlCarousel({
    margin: 10,
    padding:5,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 5,
        nav: false,
      },
    },
  });

// $('.carousel').owlCarousel({
//     autoplayHoverPause: true,
//     autoplay: true,
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:false
//         },
//         600:{
//             items:2,
//             nav:false
//         },
//         1000:{
//             items:4,
//             loop:false
//         }
//     }
// })