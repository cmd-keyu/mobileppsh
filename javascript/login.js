
const sign_up = document.querySelector('.sign-up')
const sign_up_btn = document.querySelector('.sign-up-btn')
const sign_in_btn = document.querySelector('.sign-in-btn')
const sign_in_btn_hide = document.querySelector('.sign-in-btn-hide')
const sign_up_btn_hide = document.querySelector('.sign-up-btn-hide')
const sign_in_text_hide = document.querySelector('.sign-in-text-hide')
const sign_up_text_hide = document.querySelector('.sign-up-text-hide')
const disabled_btn = document.querySelector('.disabled-btn')

sign_up_btn.addEventListener("click", () => {

  sign_up.style.display = 'block'
  sign_in_btn_hide.style.display = 'none'
  sign_up_btn_hide.style.display = 'block'
  sign_in_text_hide.style.display = 'block'
  sign_up_text_hide.style.display = 'none'
  disabled_btn.setAttribute('required', true)
  
})

sign_in_btn.addEventListener("click", () => {

  sign_up.style.display = 'none'
  sign_in_btn_hide.style.display = 'block'
  sign_up_btn_hide.style.display = 'none'
  sign_in_text_hide.style.display = 'none'
  sign_up_text_hide.style.display = 'block'
  disabled_btn.setAttribute('required', false)

})