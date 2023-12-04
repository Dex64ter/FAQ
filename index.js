// Here we go, below is the code to handle the answers with click in the question.
var sections = document.querySelectorAll(".ask-question")

function handleButton(index){
  var plusIcon = document.querySelector(`#handleButton${index}`);
  console.log(plusIcon)
  if (plusIcon.getAttribute('src').includes('plus')) {
    plusIcon.setAttribute('src', './assets/images/icon-minus.svg');
  } else {
    plusIcon.setAttribute('src', './assets/images/icon-plus.svg');
  }
}

sections[0].addEventListener('click', () => {
  handleButton(0)
  var span = document.getElementsByTagName('span');
  span[0].classList.toggle('toggleSpan')
})

sections[1].addEventListener('click', () => {
  handleButton(1)
  var span = document.getElementsByTagName('span');
  span[1].classList.toggle('toggleSpan')
})

sections[2].addEventListener('click', () => {
  handleButton(2)
  var span = document.getElementsByTagName('span');
  span[2].classList.toggle('toggleSpan')
})

sections[3].addEventListener('click', () => {
  handleButton(3)
  var span = document.getElementsByTagName('span');
  span[3].classList.toggle('toggleSpan')
})
