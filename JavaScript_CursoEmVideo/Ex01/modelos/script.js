let data = new Date().getHours;

let div1 = document.getElementsByClassName("div1");
let div2 = document.getElementsByClassName("div1");

if (data > 6){
    div1.style.background = orange;
}
else if (data > 12){
    div1.style.background = red;
}

else{
    div1.style.background = blue;
}
