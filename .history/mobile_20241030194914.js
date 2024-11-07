const menu = document.querySelector("#checkbox")
const ul = document.querySelector("ul")
const closes = document.querySelector(".close")
const opens = document.querySelector(".open")
const search = document.querySelector(".search")
menu.addEventListener("click", () =>{
    if(menu.checked){
        closes.style.display = "inherit";
        opens.style.display= "none";
        ul.style.display = "inline-flex";
        search.style.display = "none"
    }else{
        closes.style.display = "none";
        opens.style.display= "inherit";
        ul.style.display = "none";
        search.style.display = "inherit"
    }
})

const menu2 = document.querySelector("#checkbox2")
const ul2 = document.querySelector(".ul2")
const closes2 = document.querySelector(".closes")
const opens2 = document.querySelector(".opens")
const search2 = document.querySelector(".search2")
menu2.addEventListener("click", () => {
    if(menu2.checked){
        closes2.style.display = "inherit";
        opens2.style.display= "none";
        ul2.style.display = "inline-block";
        search2.style.display = "none"
    }else{
        closes2.style.display = "none";
        opens2.style.display= "inherit";
        ul2.style.display = "none";
        search2.style.display = "inherit"
    }
})