   const name = document.querySelector<HTMLInputElement>('#name')!
  const email = document.querySelector<HTMLInputElement>('#email')!
  const birth = document.querySelector<HTMLInputElement>('#birth')!
  const gender = document.querySelector<HTMLSelectElement>('#gender')!
  const form = document.querySelector('form')!
  const resposta = document.querySelector<HTMLDivElement>('#resposta')!

  name.focus()

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    name.className = email.className = birth.className = gender.className = ''

    const valorName = name.value.trim()
    
    if (!valorName) {
      resposta.innerText = 'O campo Nome é obrigatório!'
      resposta.className = 'negative'
      name.className = 'negative'
      name.focus()
      return
    }
  
    const regexName = /\w+\s\w+/g
  
    if (!regexName.test(valorName)) {
      resposta.innerText = 'Informe seu nome completo!'
      resposta.className = 'negative'
      name.className = 'negative'
      name.focus()
      return
    }
  
    if (!email.value) {
      resposta.innerText = 'O campo E-mail é obrigatório!'
      resposta.className = 'negative'
      email.className = 'negative'
      email.focus()
      return
    }
  
    const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  
    if (!regexEmail.test(email.value)) {
      resposta.innerText = 'Formato de E-mail inválido!'
      resposta.className = 'negative'
      email.className = 'negative'
      email.focus()
      return
    }
  
    if (!birth.value) {
      resposta.innerText = 'O campo Nascimento é obrigatório!'
      resposta.className = 'negative'
      birth.className = 'negative'
      birth.focus()
      return
    }
  
    const dateBirth = new Date(`${birth.value}T00:00:00`)
    console.log(birth.value)
  
    if (Date.now() - Number(dateBirth) < 0) {
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
  }
)

export default className
