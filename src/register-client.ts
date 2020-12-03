import Gender from './entities/Gender.js'
import Person from './entities/Person.js'

const name = document.querySelector<HTMLInputElement>('#name')!
const birth = document.querySelector<HTMLInputElement>('#birth')!
const gender = document.querySelector<HTMLSelectElement>('#gender')!
const form = document.querySelector('form')!
const resposta = document.querySelector<HTMLDivElement>('#resposta')!

const persons: Person[] = []

showClients()
name.focus()

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

    name.className = birth.className = gender.className = ''

    const valorName = name.value.trim()

    if (!valorName) {
      resposta.innerText = 'O campo Nome é obrigatório!'
      resposta.className = 'negative'
      name.className = 'negative'
      name.focus()
      return
    }

    const regexNome = /\w+\s\w+/g

  if (!regexNome.test(valorName)) {
    resposta.innerText = 'Informe seu nome completo!'
    resposta.className = 'negative'
    name.className = 'negative'
    name.focus()
    return
  }

  if (!birth.value) {
    resposta.innerText = 'O campo Nascimento é obrigatório!'
    resposta.className = 'negative'
    birth.className = 'negative'
    birth.focus()
    return
  }

  const dataBirth = new Date(`${birth.value}T00:00:00`)
  console.log(birth.value)

  if (Date.now() - Number(dataBirth) < 0) {
    resposta.innerText = 'O nascimento deve ter ocorrido no passado!'
    resposta.className = 'negative'
    birth.className = 'negative'
    birth.focus()
    return
  }

  if (!gender.value) {
    resposta.innerText = 'O campo Sexo é obrigatório!'
    resposta.className = 'negative'
    gender.className = 'negative'
    gender.focus()
    return
  }

  setTimeout(() => {
    try {
      const person = new Person(
        name.value,
        birth.valueAsNumber,
        gender.value === 'f' ? Gender.Female : Gender.Male,
      )

      persons.push(person)

      // Serialização no JS ocorre em forma de JSON
      localStorage.setItem('clients', JSON.stringify(persons))
      showClients()
    } catch (error: any) {
      console.error(error)
      resposta.innerText = 'Atualize sua página e tente novamente.'
      resposta.className = 'negative'
    } finally {
      form.style.display = 'flex'
    }
  }, 3000)
})

  resposta.innerText = 'Cadastro Finalizado com sucesso!!'
  resposta.className = 'positive'

  
function showClients() {
  if (localStorage.getItem('clients')) {
    const data = JSON.parse(localStorage.getItem('clients')!)

    persons.splice(0)

    for (const item of data) {
      persons.push(new Person(
        item.name,
        item.birth,
        item.gender,
      ))
    }
  }
}