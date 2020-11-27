{
  const nome = document.querySelector<HTMLInputElement>('#nome')!
  const nascimento = document.querySelector<HTMLDataListElement>('#nascimento')!
  const sexo = document.querySelector<HTMLSelectElement>('#sexo')!
  const formulario = document.querySelector<HTMLFormElement>('form')!
  const resposta = document.querySelector<HTMLInputElement>('#resposta')!


  nome.focus()

  formulario.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    

  })

}