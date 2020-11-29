  import Gender from './entities/Gender.js'
  import Person from './entities/Person.js'

  const name = document.querySelector<HTMLInputElement>('#name')!
  const birth = document.querySelector<HTMLInputElement>('#birth')!
  const gender = document.querySelector<HTMLSelectElement>('#gender')!
  const message = document.querySelector<HTMLParagraphElement>('#message')!
  const form = document.querySelector('form')!

  const person: Person[] = []

  name.focus()

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

  try {
    const person = new Person (
      name.value,
      birth.value,
      gender.value === 'f' ? Gender.Female : Gender.Male,
    )
    
    person.push(person)
  } catch (error: any) {
    console.error(error)
    message.innerText = 'Faltou preencher todos os campos.'
  }
    console.log(person)
})
