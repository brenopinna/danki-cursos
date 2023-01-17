const minInput = document.getElementById('min');
const secInput = document.getElementById('sec');
const startButton = document.querySelector('button.start');
const stopButton = document.querySelector('button.stop');
let timer;

const alarm = new Audio('./alarm.mp3');
alarm.volume = 0.1;

startButton.addEventListener('click', () => {
   let min = +minInput.value;
   let sec = +secInput.value;
   let time = sec + (min * 60);
   showFormattedTime(time);
   if(time > 0){
      toggleTimerState();
      timer = setInterval(() => {
         time--;
         showFormattedTime(time);
         if(time === 0) {
            stopTimer(timer);
            alarm.play();
         };
      }, 1000);
   }else{
      alert('TEMPO INVÁLIDO!');
   }
})

stopButton.addEventListener('click', () => {
   stopTimer(timer);
})

function formatNumber(number){
   let formattedNumber = number.toString();
   if(formattedNumber.length < 2) formattedNumber = '0' + formattedNumber;
   return formattedNumber;
}

function showFormattedTime(time){
   minInput.value = formatNumber(Math.floor(time/60))
   secInput.value = formatNumber(time%60);
}

function toggleTimerState(){
   [startButton, stopButton].forEach(element => element.toggleAttribute('disabled'));
   [secInput, minInput].forEach(element => element.toggleAttribute('readonly'));
}

function stopTimer(timer){
   toggleTimerState();
   clearInterval(timer);
}