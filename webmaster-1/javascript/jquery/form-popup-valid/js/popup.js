$(() => {
   // Janela Modal
   const $popup = jQuery('#popup');

   jQuery('#close-icon, #background, #contact').click(() => $popup.fadeToggle(200));
})