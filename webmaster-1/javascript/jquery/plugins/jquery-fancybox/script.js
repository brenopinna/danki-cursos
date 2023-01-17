$(() => {
   const sources = ['../images/img1.jpg', '../images/img2.jpg', '../images/img3.jpg'];

   createHTMLGalleryOne(sources);
   createCarouselGalerry();

   // Comentei pq é um saco carregando toda vez q a pag recarrega.
   // createJSGalleryTwo(sources);

   function createHTMLGalleryOne(sources){
      sources.forEach(source => {
         const a = document.createElement('a');
         a.href = source;
         a.setAttribute('data-fancybox', 'galeria-1');
         a.setAttribute('data-caption', `Imagem ${sources.indexOf(source) + 1}`)
         const img = document.createElement('img');
         img.src = source;
         a.appendChild(img);
         $('#galeria-1').append(a)
      })
   }

   //estudar mais esse método
   function createJSGalleryTwo(sources){
      var gallery = [
         {
            src: "https://lipsum.app/id/2/800x600",
            thumb: "https://lipsum.app/id/2/80x80",
            caption: "First image",
         },
         {
            src: "https://lipsum.app/id/3/800x600",
            thumb: "https://lipsum.app/id/3/80x80",
            caption: "Second image",
         },
         {
            src: "https://lipsum.app/id/4/800x600",
            thumb: "https://lipsum.app/id/4/80x80",
            caption: "Third image",
         }
      ];

      Fancybox.show(gallery, {
      // Your options go here
      });
   }

   function createCarouselGalerry(){
      const myCarousel = new Carousel(document.querySelector(".carousel"), {
         //options here
         center: true,
         slidesPerPage: 1,
      });

      // "autoplay" improvisado
      setInterval(() => {
         myCarousel.slideNext()
      }, 3000);
   }
})