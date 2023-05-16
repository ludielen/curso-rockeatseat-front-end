
const nameInput = document.getElementById('name')

const emailInput = document.getElementById('email')

const textarea = document.getElementById('myTextarea')

nameInput.addEventListener('input', function(){
    handleInput(this)
})

emailInput.addEventListener('input', function() {
    handleInput(this)
})

function handleInput(input) {
    const placeholder = input.getAttribute('placeholder')

    if(input.value !== '') {
        input.setAttribute('placeholder', '')
    } else {
        input.setAttribute('placeholder', placeholder)
    }
}

textarea.addEventListener('input', function() {
  if (this.value !== '') {
    this.removeAttribute('placeholder')
  } else {
    this.setAttribute('placeholder', 'Escreva sua mensagem...')
  }
})