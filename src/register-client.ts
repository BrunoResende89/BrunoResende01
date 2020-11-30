import Gender from './entities/Gender.js'
import Client from './entities/Client.js'

const name = document.querySelector<HTMLInputElement>('#name')!
const email = document.querySelector<HTMLInputElement>('#email')!
const birth = document.querySelector<HTMLInputElement>('#birth')!
const gender = document.querySelector<HTMLSelectElement>('#gender')!
const form = document.querySelector('form')!
const table = document.querySelector('table')!
const resposta = document.querySelector<HTMLDivElement>('#resposta')!

const clients: Client[] = []

showClients()
name.focus()

const intervalId = setInterval(() => {
  if (document.body.style.background === 'rgb(102, 0, 102)') {
    document.body.style.background = 'rgb(21, 21, 21)'
  } else {
    document.body.style.background = 'rgb(102, 0, 102)'
  }
}, 1000)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  clearInterval(intervalId)

  document.body.style.background = 'rgb(21, 21, 21)'
  resposta.innerText = ''
  form.style.display = 'none'

  // TODO: Construir validações dos campos.

  setTimeout(() => {
    try {
      const student = new Client(
        name.value,
        email.value,
        gender.value === 'f' ? Gender.Female : Gender.Male,
        birth.value
      )

      clients.push(client)

      // Serialização no JS ocorre em forma de JSON
      localStorage.setItem('clients', JSON.stringify(clients))
      showClients()
    } catch (error: any) {
      console.error(error)
      resposta.innerText = 'Opa, ocorreu um erro aqui.'
      resposta.className = 'negative'
    } finally {
      form.style.display = 'flex'
      loading.style.display = 'none'
    }
  }, 3000)
})

function showClients() {
  if (localStorage.getItem('clients')) {
    const data = JSON.parse(localStorage.getItem('clients')!)

    clients.splice(0)

    for (const item of data) {
      clients.push(new Client(
        item.name,
        item.email,
        item.birth,
        item.gender
      ))
    }
  }

  let lines = ''

  for (const client of clients) {
    // Impossível usar tipagem para acessar métodos adicionados por Decorator.
    // Por isso, a convesão forçada do objeto para any.
    console.log((clients as any).getVersion())

    lines += `
      <tr>
        <td>${ (client as IShowYourself).name }</td>
        <td>${ (client as IShowYourself).showYourself() }</td>
      </tr>
    `
  }

  table.style.display = 'table'
  table.innerHTML = `
    <thead>
      <tr>
        <th>Nome</th>
        <th>Auto-Apresentação</th>
      </tr>
    </thead>
    <tbody>
      ${lines}
    </tbody>
  `
}