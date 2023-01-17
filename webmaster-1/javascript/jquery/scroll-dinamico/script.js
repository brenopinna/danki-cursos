$(() => {
   changeSelectedLink();
   let isAnimating = false;

   $(window).scroll(function(){
      if(!isAnimating) changeSelectedLink();
   })
   
   $('header nav a').click(function(){
      const duration = 300;
      const link = $(this);
      const target = $(link.attr('href'));
      $('html, body').animate({scrollTop: target.offset().top}, duration)
      isAnimating = true;
      setTimeout(() => {
         isAnimating = false;
         changeSelectedLink();
      }, duration);
   })

   function changeSelectedLink(){
      const windowScroll = $(window).scrollTop();
      const headerHeight = $('header').height();
      const contentScroll = windowScroll + headerHeight;
      $('.sessao').each(function(){
         const elementScroll = $(this).offset().top;
         const sessionId = this.id;
         if(contentScroll >= elementScroll){
            $('a.selected').removeClass('selected');
            $(`a.${sessionId}`).addClass('selected');
         }
      })
   }
})