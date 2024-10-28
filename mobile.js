const menu = document.querySelector("#checkbox")
const ul = document.querySelector("ul")
const closes = document.querySelector(".close")
const opens = document.querySelector(".open")
menu.addEventListener("change", () =>{
    if(menu.checked){
        closes.style.display = "inherit";
        opens.style.display= "none";
        ul.style.display = "inline-flex";
    }else{
        closes.style.display = "none";
        opens.style.display= "inherit";
        ul.style.display = "none";
    }
});