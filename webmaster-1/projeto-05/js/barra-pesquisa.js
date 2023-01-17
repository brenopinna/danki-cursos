$(() => {
   let currentValue = 0;
   let isDrag = false;

   $('.pointer').mousedown(() => {
      isDrag = true;
      $('body').css('user-select', 'none');
      $('body').css('-webkit-user-select', 'none');
   })

   $(document).mouseup(() => {
      isDrag = false;
      // esse trecho é pq o navegador tem conflito em saber se ta arrastando o pointer ou o texto.
      $('body').css('user-select', 'auto');
      $('body').css('-webkit-user-select', 'auto');
   })

   $(document).mousemove(function(e){
      if(isDrag){
         const barraPreco = $('.barra-preco');
         const barraWidth = barraPreco.width();
         let mouseX = e.pageX - barraPreco.offset().left;
         if(mouseX < 0) mouseX = 0;
         if(mouseX >= barraWidth) mouseX = barraWidth;
         const percentual = (mouseX / barraWidth) * 100;
         $('.fill').width(mouseX)
         currentValue = (700 * percentual).toFixed(2);
         currentValue = currentValue.replace('.', ',');
         if(currentValue.length === 7) currentValue = `${currentValue.slice(0, 1)}.${currentValue.slice(1)}`
         else if(currentValue.length === 8) currentValue = `${currentValue.slice(0, 2)}.${currentValue.slice(2)}`
         $('#preco-atual').html(currentValue);
      }
   })
})