const img = document.querySelector('img');
const container = document.querySelector('.container');
const times = document.querySelector('.times');

let clickTime = 0;
let timesClicked = 0;

img.addEventListener('click', (e) => {
    if (clickTime == 0) {
        clickTime = new Date().getTime();
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            clickTime = 0;
            createHeart(e);
            updateTimesClicked();
        } else {
            clickTime = new Date().getTime();
        }
    }
});

function createHeart(e) {
    const x = e.offsetX;
    const y = e.offsetY;

    const i = document.createElement('i');
    i.classList.add('fa-solid', 'fa-heart');
    
    
    i.style.top = `${y}px`;
    i.style.left = `${x}px`;
    
    container.appendChild(i);

    setTimeout(() => i.remove(),600);
}

function updateTimesClicked() {
    times.innerText = ++timesClicked;
}