let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');

const redLightTimer = setTimeout(redLight,6000);
const yellowLightTimer = setTimeout(yellowLight,3000);
const greenLightTimer = setTimeout(greenLight,13000);

function redLight(){
    red.style.opacity = '1';
}

function yellowLight(){
    yellow.style.opacity = '1';
}

function greenLight(){
    green.style.opacity = '1';
}