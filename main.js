// Elementos del DOM
const hero = document.getElementById('hero')

// Cambio de fondo del Hero
let i = 0;
let x = 5;
let img = [];

img.push('images/image1.jpg', 'images/image2.jpg', 'images/image4.jpg');


function cambioBg() {
    document.hero.src = img[i]
    i < img.length-1 ? i++ : i=0;
    setTimeout("cambioBg()", x*1000);
}

window.onload = cambioBg;