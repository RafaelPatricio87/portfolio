const containerHamburger = document.querySelector('#container-hamburger')
const iconHumburger = document.querySelector('#icon-hamburger')
const close = document.querySelector('#close')


iconHumburger.addEventListener('click', () => {
 containerHamburger.classList.toggle('flex')

})
close.addEventListener('click', () => {
  containerHamburger.classList.toggle('flex')
 
})