let today = new Date();
const hourEl = document.getElementsByClassName('hour-hand')[0];
const minEl = document.getElementsByClassName('min-hand')[0];
const secEl = document.getElementsByClassName('second-hand')[0];
setInterval(function(){  
    const hour = today.getHours();
    
    const min = today.getMinutes();
   
    const sec = today.getSeconds();

    hourEl.style.transform = `rotate(${30*hour + 1/2*min}deg)`;
    minEl.style.transform = `rotate(${6*min}deg)`;
    secEl.style.transform = `rotate(${6*sec}deg)`;

},1000);
  
    

