console.log('DOM')

const input = document.querySelector('#first')
const button = document.querySelector('#submit-button')
const ul = document.querySelector('#todo-list')

button.addEventListener('click', function(eval){
  console.log(eval.target)
  let newLI = document.createElement('li')
  newLI.textContent = input.value 
  input.value = ''
  ul.appendChild(newLI)

})
