$(() => {
   // RegEx
   /*
      const email = 'brenopinna1008@gmail.com';
      const match = email.match(/^(.*?)@(.*?)$/)
      console.log(match)
   */
   //   Validação formulario
   const $name = jQuery('#name');
   const $email = jQuery('#email');
   const $tel = jQuery('#tel');

   const namePattern = /^[a-zA-z\s]{2,40}$/gi
   const emailPattern = /^(.*?)@(.*?)$/gi
   const telPattern = /^\(?[1-9]{2}\)?9?[0-9]{4}\-?[0-9]{4}$/gi

   $('#form').submit(() => {
      const matches = [
         {input: $name, pattern: namePattern},
         {input: $email, pattern: emailPattern},
         {input: $tel, pattern: telPattern}
      ];
      for(let match of matches){
         const foundMatch = returnMatch(match.input.val(), match.pattern);
         if(foundMatch === null) {
            const input = match.input;
            makesInputInvalid(input);
            return false;
         };
      }
   })

   function returnMatch(input, pattern){
      return (
         input.replace(/\s/gi, '') !== '' ? input.match(pattern) : null
      );
   }

   function makesInputInvalid(input){
      input
         .focus()
         .attr('invalid', true)
         .blur(() => input.attr('invalid', false))
   }
})