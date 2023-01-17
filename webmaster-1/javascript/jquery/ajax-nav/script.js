$(() => {
   $('a').click(function(){
      const link = this.href;

      $.ajax({
         'url': link,
         'timeout': 1000,
         'success': (data) => $('#container').html(data),
         'error' : ({statusText}) => console.log(statusText)
      })
      return false
   })
})