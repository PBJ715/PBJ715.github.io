document.getElementById("bgcolor").addEventListener("click", changeColor);

function changeColor(){
    if (document.body.className == "dark-mode"){
        document.body.className = "light-mode";
    } else if (document.body.className == "light-mode"){
        document.body.className = "dark-mode";
    }
}

function rickroll(){
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ','_blank');
}