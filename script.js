let hours = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')


let modal = document.getElementById('modal')

let soat = 0
let minut = 0
let sekund = 0

let count = 0 

 minut++
second.style.display = 'none'

setInterval(() =>{
    
    sekund++
    if (sekund == 59 ) {
        minut = 0;
        soat++;
    }
    minut++
    if (minute == 59) {
        minut = 0;
        soat++;
    }
   
    
    hours.textContent = 'minut ' + soat
    minute.textContent = 'sekund ' +  minut
    sekond.textContent =    secund
} ,1000)