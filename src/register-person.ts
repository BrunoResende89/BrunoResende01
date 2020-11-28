{
  const name = document.querySelector<HTMLInputElement>('#name')!
  const birth = document.querySelector<HTMLDataListElement>('#birth')!
  const gender = document.querySelector<HTMLSelectElement>('#gender')!
  const form = document.querySelector<HTMLFormElement>('form')!
  const answer = document.querySelector<HTMLInputElement>('#answer')!


  name.focus()

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    

  })

}