
loadBgColor();

const thistle = document.querySelector('#Thistle');
const peachPuff = document.querySelector('#PeachPuff');
const paleGoldenrod = document.querySelector('#PaleGoldenrod');
const tan = document.querySelector('#Tan');
const reset = document.querySelector('#reset')

thistle.addEventListener('click', changeBgColor);
peachPuff.addEventListener('click', changeBgColor);
paleGoldenrod.addEventListener('click', changeBgColor);
tan.addEventListener('click', changeBgColor);

reset.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    localStorage.removeItem('bgcolor')
})

function changeBgColor(event) {
    let color = event.target.id;
    console.log(color);
    document.body.style.backgroundColor = color;
    localStorage.setItem('bgcolor', `${color}`);
      
}

function loadBgColor() {
    let localColor = decodeURIComponent(localStorage.getItem('bgcolor'));
    document.body.style.backgroundColor = localColor;
}

