import Gender from './entities/Gender.js'
import Person from './entities/Person.js'
import { capitalize, trimAll, slugify } from './Functions.js'

const name = document.querySelector<HTMLInputElement>('#name')!
const birth = document.querySelector<HTMLInputElement>('#birth')!
const gender = document.querySelector<HTMLSelectElement>('#gender')!
const form = document.querySelector('form')!
const resposta = document.querySelector<HTMLDivElement>('#resposta')!

const nameFilter = document.querySelector<HTMLInputElement>('#filter')!
const form2 = document.querySelector<HTMLFormElement>('#form2')!

const persons: Person[] = []

showPersons()

function isFormValid (...elements: (HTMLInputElement | HTMLSelectElement)[]) {
  for (const element of elements) {
    if (element.value) {
      element.className = ''
    } else {
      resposta.innerText = element.getAttribute('data-message')!
      resposta.className = element.className = 'negative'
      element.focus()
      return false
    }
  }

  return true
}

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let valorName = name.value.trim()  
  
    if (!valorName) {
      resposta.innerText = 'O campo Nome é obrigatório!'
      resposta.className = 'negative'
      name.className = 'negative'
      name.focus()
      return
    }

    const regexName = /\w+\s\w+/g
    console.log(name.value)

  if (!regexName.test(valorName)) {
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

  console.log(gender.value)

  try {
      let person = new Person(slugify(capitalize(trimAll(name.value))),
        birth ,
        gender.value === "f" ?
        Gender.Female : Gender.Male)

      persons.push(person)

      // Serialização no JS ocorre em forma de JSON
      localStorage.setItem('persons', JSON.stringify(persons))
      
      resposta.innerText = 'Cadastro Finalizado com sucesso!!'
      resposta.className = 'positive'

      showPersons()

      } catch (error: any) {
            console.error(error)
            resposta.innerText = 'Atualize sua página e tente novamente.'
      }
    
    
  })

  function showPersons() {

    let table = document.querySelector('table')

    if (!table) {
        table = document.createElement('table')
        document.body.append(table)
    }

    let lines = ''
    const sortPersons = (a: { name: string, birth: Date, gender: Gender },
        b: { name: string, birth: Date, gender: Gender }) => a.name.localeCompare(b.name)

    let newArray = [...persons].sort(sortPersons)
    console.log(newArray)


    for (const person of newArray) {

        lines += `
        <tr>
            <td>${person.name}</td>
            <td>(${person.birth}</td>
            <td>${person.gender}</td>
        </tr>
        `
    }

    table.innerHTML = `
    <thead>
        <tr>
            <th>Nome</th>
            <th>Data Nascimento</th>
            <th>Sexo</th>
        </tr>
    </thead>
    <tbody>
        ${lines}
    </tbody>
    `
}

formulario2.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    // let filtro = (Object: Person) => Object.name.toLowerCase() === nameFilter.value.toLowerCase()

    function filter(obj: Person) {
        if ('name' in obj && obj.name === nameFilter.value) {
          return true;
        } else {
          return false;
        }
      }
      
      
    console.log(persons.filter(filter))

    let table = document.querySelector('table')

    if (!table) {
        table = document.createElement('table')
        document.body.append(table)
    }

    let lines = ''

    lines += `
        <tr>
            <td>${persons.filter(filter)}</td>
        </tr>
        `
    table.innerHTML = `
<thead>
    <tr>
        <th>Nome</th>
    </tr>
</thead>
<tbody>
    ${lines}
</tbody>
`
})

