// Elementos del DOM
const hero = document.getElementById('hero')
const experience = document.getElementById('experience')
const about = document.getElementById('about')
const skills = document.getElementById('skills-section')
const skillsjson = document.getElementById('skills')

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

let jsonSkills = {
    Python: "60%",
    Java: "50%",
    HTML: "30%",
    CSS: "30%",
    JavaScript: "20%"
}

skillsjson.innerHTML += `

`
