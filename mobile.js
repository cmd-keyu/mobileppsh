const menu = document.querySelector("#checkbox")
const ul = document.querySelector("ul")
const closes = document.querySelector(".close")
const opens = document.querySelector(".open")
const search = document.querySelector(".search")
const search1 = document.querySelector(".search1")
menu.addEventListener("click", () =>{
    if(menu.checked){
        closes.style.display = "inherit";
        opens.style.display= "none";
        ul.style.display = "inline-flex";
        search.style.display = "none"
        search1.style.display = "none"
    }else{
        closes.style.display = "none";
        opens.style.display= "inherit";
        ul.style.display = "none";
        search.style.display = "inherit"
        search1.style.display = "inherit"
    }
});