// Navigation

let navigation = document.querySelector('#navigation')
let nav = document.querySelector('nav')
let logo = document.querySelector('.logo')
let logoWhite = document.querySelector('.logo-white')
let open = document.querySelector('.open')
let close = document.querySelector('.close')

const openNav = () => {
  navigation.classList.toggle('collapse')
  nav.classList.toggle('mobile-navbar')
  logo.classList.toggle('collapse')
  logoWhite.classList.toggle('nav-toggle')
  close.classList.toggle('nav-toggle')
  open.classList.toggle('collapse')
}

//Tab Section

// Working with Tabs
let control = document.querySelectorAll('.tab-btn')
let sections = document.querySelectorAll('.tab-change-con')

control.forEach((el) => {
  el.addEventListener('click', openSections)
})

function openSections(el) {
  let btnTarget = el.currentTarget
  let section = btnTarget.dataset.section

  control.forEach((el) => {
    el.classList.remove('active-btn')
  })

  sections.forEach((el) => {
    el.classList.remove('active')
  })

  document.querySelector('#' + section).classList.add('active')

  btnTarget.classList.add('active-btn')
}
// defaultOpen button
document.getElementById('defaultOpen').click()

// Question Accordion

const openQuestionArrow = (answer, arrow) => {
  let answers = document.querySelector(answer)
  let arrows = document.querySelector(arrow)
  if(answers.className.indexOf('answer') == 0){
    arrows.src = '/images/icon-arrow-up.svg'
  }else{
    arrows.src = '/images/icon-arrow.svg'
  }
  answers.classList.toggle('answer')
}