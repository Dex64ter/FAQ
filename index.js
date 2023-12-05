// Here we go, below is the code to handle the answers with click in the question.
var sections = document.querySelectorAll(".ask-question")
var span = document.getElementsByTagName('span');

function handleButton(index){
  var plusIcon = document.querySelector(`#handleButton${index}`);
  plusIcon.src = plusIcon.src.includes('plus') ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg';
}

sections.forEach((section, index) => {
  section.addEventListener('click', () => {
    handleButton(index)
    section.classList.toggle('active')
  })
})
