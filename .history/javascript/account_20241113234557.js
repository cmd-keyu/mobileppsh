const menu = document.querySelector("#checkbox")
const ul = document.querySelector("ul")
const closes = document.querySelector(".close")
const opens = document.querySelector(".open")
const search = document.querySelector(".search")
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
const account_sidebar = document.querySelector(".account-sidebar")
const whole_account = document.querySelector(".whole_account")
const body = document.querySelector("body")
const bkgclr1 = document.querySelector(".bkgclr1")
const ongoingbtn = document.querySelector(".ongoingbtn")
const recent_cancelled_btn = document.querySelector(".recent_cancelled_btn")
const recent_cancelled = document.querySelector(".recent_cancelled")
const ongoing = document.querySelector(".ongoing")
const ordertime = document.querySelector(".ordertime")
const ordertime1 = document.querySelector(".ordertime1")
const ordertime2 = document.querySelector(".ordertime2")
const ordertime3 = document.querySelector(".ordertime3")
const ordertime4 = document.querySelector(".ordertime4")
const product_containerdisp1 = document.querySelector(".product_containerdisp1")
const product_containerdisp2 = document.querySelector(".product_containerdisp2")
const product_containerdisp3 = document.querySelector(".product_containerdisp3")
const product_containerdisp4 = document.querySelector(".product_containerdisp4")
const product_container = document.querySelector(".product-container")
menu.addEventListener("click", () => {

  if (menu.checked) {
    closes.style.display = "inherit";
    opens.style.display = "none";
    ul.style.display = "inline-flex";
    search.style.display = "none"
    account_sidebar.style.display = "block"
    body.style.background = "radial-gradient(circle, gray, black), no-repeat";
    bkgclr1.style.display = "none"
  } else {
    closes.style.display = "none";
    opens.style.display = "inherit";
    ul.style.display = "none";
    search.style.display = "inherit"
    account_sidebar.style.display = "none"
    body.style.background = "inherit";
    bkgclr1.style.display = "inherit"
    body.style.background = "radial-gradient(circle, gray, black), no-repeat";
  }
})

window.onload = () => {
  whole_account.style.display = "block";
}

ongoingbtn.addEventListener("click", () => {
  recent_cancelled.style.display = "none"
  ongoing.style.display = "block"
})

recent_cancelled_btn.addEventListener("click", () => {
  ongoing.style.display = "none"
  recent_cancelled.style.display = "block"
})

ordertime1.addEventListener("click", () => {
  product_containerdisp1.style.display = "flex"
  product_containerdisp2.style.display = "none"
  product_containerdisp3.style.display = "none"
  product_containerdisp4.style.display = "none"
  ordertime.focus();
})

ordertime2.addEventListener("click", () => {
  product_containerdisp1.style.display = "none"
  product_containerdisp2.style.display = "flex"
  product_containerdisp3.style.display = "none"
  product_containerdisp4.style.display = "none"
  ordertime.focus();
})

ordertime3.addEventListener("click", ( )=> {
  product_containerdisp1.style.display = "none"
  product_containerdisp2.style.display = "none"
  product_containerdisp3.style.display = "flex"
  product_containerdisp4.style.display = "none"
  ordertime.focus();
})

ordertime4.addEventListener("click", () => {
  product_containerdisp1.style.display = "none"
  product_containerdisp2.style.display = "none"
  product_containerdisp3.style.display = "none"
  product_containerdisp4.style.display = "flex"
  ordertime.focus();
})

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

function makeEditable(label, input, saveButton) {
  let originalValue = input.value;

  label.addEventListener("click", function () {
    label.style.display = "none";
    input.disabled = false;
    input.focus();
  });

  input.addEventListener("input", function () {
    if (input.value !== originalValue) {
      saveButton.style.display = "inline-block";
    } else {
      saveButton.style.display = "none";
    }
  });

  saveButton.addEventListener("click", function () {
    originalValue = input.value;
    input.disabled = true;
    saveButton.style.display = "none";
    label.style.display = "inline-block";
  });

  input.addEventListener("blur", function () {
    setTimeout(() => {
      if (document.activeElement !== saveButton) {
        input.value = originalValue;
        input.disabled = true;
        saveButton.style.display = "none";
        label.style.display = "inline-block";
      }
    }, 0);
  });
}

document.querySelectorAll(".editable-input").forEach((div) => {
  const label = div.querySelector("label");
  const input = div.querySelector("input");
  const saveButton = div.querySelector("button");
  makeEditable(label, input, saveButton);
});


function closeSidebar() {
  menu.checked = false;
  closes.style.display = "none";
  opens.style.display = "inherit";
  ul.style.display = "none";
  search.style.display = "inherit";
  account_sidebar.style.display = "none";
  body.style.background = "linear-gradient(white, black) no-repeat;";
  bkgclr1.style.display = "inherit";
}


document.querySelectorAll(".sidebar_opens").forEach((item) => {
  item.addEventListener("click", closeSidebar);
});
