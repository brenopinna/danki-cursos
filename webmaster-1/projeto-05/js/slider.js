$(() => {
   const mainCarousel = new Carousel(document.querySelector('.main-carousel'), {
      Dots: false,
      infinite: false,
      slidesPerPage: 1,
   });

   const navCarousel = new Carousel(document.querySelector('.nav-carousel'), {
      Sync: {target: mainCarousel},

      Dots: false,
      infinite: false,
      slidesPerPage: 1,

      Navigation: false,
   })
})