const elShowtime = document.querySelector('.showtime');
const elStart = document.querySelector('.start');
const elPause = document.querySelector('.pause');

let a = 0;
let counterInterval;
let count = true;

elStart.addEventListener('click', () => {
if(count) {
    counterInterval = setInterval(() => {
        a++;
        elShowtime.textContent = a;
    }, 1000);
    count = !count;
}


    // elShowtime.textContent = setInterval(() => {
    //     a++;
    // }, 1000);
})



elPause.addEventListener('click', () => {
    clearInterval(counterInterval);
    count = !count;
})

// elPause.addEventListener('click', () => {
//     elShowtime.textContent = clearInterval();
// })









// let a=0;
// const timer = setInterval(() => {
//     a++;
//     console.log(a);
// }, 1000);

// setTimeout(() => {
//     clearInterval(timer);
// }, 100000);