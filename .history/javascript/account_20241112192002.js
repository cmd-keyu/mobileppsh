
const menu = document.querySelector("#checkbox")
const ul = document.querySelector("ul")
const closes = document.querySelector(".close")
const opens = document.querySelector(".open")
const search = document.querySelector(".search")
const account_sidebar = document.querySelector(".account-sidebar")
menu.addEventListener("click", () =>{
    if(menu.checked){
        closes.style.display = "inherit";
        opens.style.display= "none";
        ul.style.display = "inline-flex";
        search.style.display = "none"
        account_sidebar.style.display = "block"
    }else{
        closes.style.display = "none";
        opens.style.display= "inherit";
        ul.style.display = "none";
        search.style.display = "inherit"
        account_sidebar.style.display = "none"
    }
})

const dispbtn1 = document.querySelector(".dispbtn1")
const dispbtn2 = document.querySelector(".dispbtn2")
const dispbtn3 = document.querySelector(".dispbtn3")
const dispbtn4 = document.querySelector(".dispbtn4")
const dispbtn5 = document.querySelector(".dispbtn5")
const dispbtn6 = document.querySelector(".dispbtn6")
const dispbtn7 = document.querySelector(".dispbtn7")
const dispbtn8 = document.querySelector(".dispbtn8")
const dispdiv1 = document.querySelector(".dispdiv1")
const dispdiv2 = document.querySelector(".dispdiv2")
const dispdiv3 = document.querySelector(".dispdiv3")
const dispdiv4 = document.querySelector(".dispdiv4")
const dispdiv5 = document.querySelector(".dispdiv5")
const dispdiv6 = document.querySelector(".dispdiv6")
const dispdiv7 = document.querySelector(".dispdiv7")
const dispdiv8 = document.querySelector(".dispdiv8")

dispbtn1.addEventListener("click", () => {
  dispdiv1.style.display = 'block'
  dispdiv2.style.display = 'none'
  dispdiv3.style.display = 'none'
  dispdiv4.style.display = 'none'
  dispdiv5.style.display = 'none'
  dispdiv6.style.display = 'none'
  dispdiv7.style.display = 'none'
  dispdiv8.style.display = 'none'
})

dispbtn2.addEventListener("click", () => {
  dispdiv1.style.display = 'none'
  dispdiv2.style.display = 'block'
  dispdiv3.style.display = 'none'
  dispdiv4.style.display = 'none'
  dispdiv5.style.display = 'none'
  dispdiv6.style.display = 'none'
  dispdiv7.style.display = 'none'
  dispdiv8.style.display = 'none'
})

dispbtn3.addEventListener("click", () => {
  dispdiv1.style.display = 'none'
  dispdiv2.style.display = 'none'
  dispdiv3.style.display = 'block'
  dispdiv4.style.display = 'none'
  dispdiv5.style.display = 'none'
  dispdiv6.style.display = 'none'
  dispdiv7.style.display = 'none'
  dispdiv8.style.display = 'none'
})

dispbtn4.addEventListener("click", () => {
  dispdiv1.style.display = 'none'
  dispdiv2.style.display = 'none'
  dispdiv3.style.display = 'none'
  dispdiv4.style.display = 'block'
  dispdiv5.style.display = 'none'
  dispdiv6.style.display = 'none'
  dispdiv7.style.display = 'none'
  dispdiv8.style.display = 'none'
})

dispbtn5.addEventListener("click", () => {
  dispdiv1.style.display = 'none'
  dispdiv2.style.display = 'none'
  dispdiv3.style.display = 'none'
  dispdiv4.style.display = 'none'
  dispdiv5.style.display = 'block'
  dispdiv6.style.display = 'none'
  dispdiv7.style.display = 'none'
  dispdiv8.style.display = 'none'
})

dispbtn6.addEventListener("click", () => {
  dispdiv1.style.display = 'none'
  dispdiv2.style.display = 'none'
  dispdiv3.style.display = 'none'
  dispdiv4.style.display = 'none'
  dispdiv5.style.display = 'none'
  dispdiv6.style.display = 'block'
  dispdiv7.style.display = 'none'
  dispdiv8.style.display = 'none'
})

dispbtn7.addEventListener("click", () => {
  dispdiv1.style.display = 'none'
  dispdiv2.style.display = 'none'
  dispdiv3.style.display = 'none'
  dispdiv4.style.display = 'none'
  dispdiv5.style.display = 'none'
  dispdiv6.style.display = 'none'
  dispdiv7.style.display = 'block'
  dispdiv8.style.display = 'none'
})

dispbtn8.addEventListener("click", () => {
  dispdiv1.style.display = 'none'
  dispdiv2.style.display = 'none'
  dispdiv3.style.display = 'none'
  dispdiv4.style.display = 'none'
  dispdiv5.style.display = 'none'
  dispdiv6.style.display = 'none'
  dispdiv7.style.display = 'none'
  dispdiv8.style.display = 'block'
})