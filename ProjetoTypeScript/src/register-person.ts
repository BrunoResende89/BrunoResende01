import { createDatePicker } from './DatePicker.js'

const nome = document.querySelector<HTMLInputElement>('#nome')!
const nascimento = createDatePicker('#nascimento')!
const sexo = document.querySelector<HTMLSelectElement>('#sexo')!
const formulario = document.querySelector<HTMLFormElement>('form')!

nome.focus()

formulario.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  nome.className = nascimento.className = sexo.className = ''

  const valorNome = nome.value.trim()

  if (!valorNome) {
    resposta.innerText = 'O campo Nome é obrigatório!'
    resposta.className = 'negative'
    nome.className = 'negative'
    nome.focus()
    return
  }

  const regexNome = /\w+\s\w+/g

  if (!regexNome.test(valorNome)) {
    resposta.innerText = 'Informe seu nome completo!'
    resposta.className = 'negative'
    nome.className = 'negative'
    nome.focus()
    return
  }

  if (!nascimento.value) {
    resposta.innerText = 'O campo Nascimento é obrigatório!'
    resposta.className = 'negative'
    nascimento.className = 'negative'
    nascimento.focus()
    return
  }

  const dataNascimento = new Date(`${nascimento.value}T00:00:00`)
  console.log(nascimento.value)

  if (Date.now() - Number(dataNascimento) < 0) {
    resposta.innerText = 'O nascimento deve ter ocorrido no passado!'
    resposta.className = 'negative'
    nascimento.className = 'negative'
    nascimento.focus()
    return
  }

  if (!sexo.value) {
    resposta.innerText = 'O campo Sexo é obrigatório!'
    resposta.className = 'negative'
    sexo.className = 'negative'
    sexo.focus()
    return
  }

 
}