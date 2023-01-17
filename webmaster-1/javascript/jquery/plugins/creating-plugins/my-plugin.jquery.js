/*
   "Chaining" === encadeamento
   serve para tornar q nem outras funções jQuery, que retornam o objeto inicial (this).
*/
/*
   Precauções caso haja outra biblioteca q use uma variável $: encapsular com uma função 
   imediatamente invocada, com o (jQuery) como parâmetro final. de bônus, se define um
   escopo privado para a função.
*/



/*
   Não é boa prática ter mais de um $.fn... na função. Para mais de um caso,
   melhor usar parâmetros de controle e mudar a ação conforme seu valor.
*/
// (function ($){
//    $.fn.fade = function(fade){
//       if(fade === 'in'){
//          this.fadeIn();
//       }else if(fade === 'out'){
//          this.fadeOut();
//       }
//       return this;
//    }
// }(jQuery))



/*
   Em caso de uma função que vá manipular algum elemento específico,
   como por exemplo pegar posição ou algum atributo, recomenda-se usar
   o .each() para fazer um loop pelos elementos recebidos do seletor jQuery.
*/
// (function ($){
//    $.fn.teste = function(){
//       return this.each(function(){
//          console.log(this.className)
//       })
//    }
// }(jQuery))



/*
   Adicionando opções para o plugin
*/
// (function ($){
//    $.fn.mudar = function (options) {
//       //settings padrão:
//       /* esse extend faz os elementos do segundo objeto se fundirem ao primeiro,
//        e se sobrepõe caso haja keys iguais. */
//       const settings = $.extend(
//          {
//             color: 'white',
//             backgroundColor: 'black'
//          },
//          options
//       )

//       return this.css({
//          color: settings.color,
//          backgroundColor: settings.backgroundColor
//       })
//    }
// }(jQuery))


// Junção de todos os conhecimentos acima:
(function ($) {
   $.fn.showLinkLocation = function () {
      this.filter('a').each(function () {
         this.append(` (${this.href})`)
      })
      return this;
   }
}(jQuery))

//OBS: o nome do arquivo é a nomenclatura padrão de plugins.