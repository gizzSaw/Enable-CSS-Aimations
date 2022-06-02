const square = document.querySelector('.square');
const circle = document.querySelector('.circle');
const btnHideSquare = document.querySelector('.btn-hide-square');
const btnPulseCircle = document.querySelector('.btn-pulse-circle');

btnHideSquare.addEventListener('click', () => {
    square.classList.toggle('hidden')
})

btnPulseCircle.addEventListener('click', () => {
    circle.classList.toggle('pulse')
})


//https://www.youtube.com/watch?v=kgqMcFrT51o&t=741s