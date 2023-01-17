$(() => {
   $('a[goto]').click(function(e){
      e.preventDefault();
      const target = $(`.${$(this).attr('goto')}`);
      $('html, body').animate({scrollTop: $(target).offset().top})
   })
})