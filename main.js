// Elementos del DOM
const hero = document.getElementById('hero')
const experience = document.getElementById('experience')
const about = document.getElementById('about')
const skills = document.getElementById('skills-section')

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

let jsonSkills = '{"skills": ['+ '{"python":"70%"},' + '{"Java": "60%"},' + ' {"HTML":"70%"},'+'{"CSS":"40%"},'+'{"JavaScript":"20%"}]}';
let json = JSON.parse(jsonSkills);

document.getElementById("skill1").innerHTML = "Python:" + '' + json.jsonSkills[0].python;
document.getElementById("skill2").innerHTML = "Java:" + '' + json.jsonSkills[1].Java;
document.getElementById("skill3").innerHTML = "HTML:" + '' + json.jsonSkills[2].HTML;
document.getElementById("skill4").innerHTML = "CSS:" + '' + json.jsonSkills[3].CSS;
document.getElementById("skill5").innerHTML = "JavaScript:" + '' + json.jsonSkills[4].JavaScript;

