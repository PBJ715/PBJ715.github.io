function darkMode(){
    document.body.style.backgroundColor="#2c2f33";
    document.body.style.color="#ffffff";
    document.body.style.transition="background-color 2s, color 2s";
    document.getElementById("linkedIn").style.color="#3f83e1";
    document.getElementById("gitHub").style.color="#3f83e1";
    document.getElementById("misc").style.color="#3f83e1";
}

function lightMode(){
    document.body.style.backgroundColor="#ffffff";
    document.body.style.color="#000000";
    document.body.style.transition="background-color 2s, color 2s";
    document.getElementById("linkedIn").style.color="#0000EE";
    document.getElementById("gitHub").style.color="#0000EE";
    document.getElementById("misc").style.color="#0000EE";
}

function rickroll(){
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ','_blank');
}