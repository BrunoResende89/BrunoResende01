import Book from "./Book.js"


const tipo = document.querySelector<HTMLSelectElement>('#tipo')!
const formulario = document.querySelector<HTMLFormElement>('#form')!
const titleDocument = document.querySelector<HTMLInputElement>('#titleDocument')!
const subtitleDocument = document.querySelector<HTMLInputElement>('#subtitleDocument')!
const publicDocument = document.querySelector<HTMLInputElement>('#publicDocument')!
const authorDocument = document.querySelector<HTMLInputElement>('#authorDocument')!
const titleBook = document.querySelector<HTMLInputElement>('#titleBook')!
const subtitleBook = document.querySelector<HTMLInputElement>('#subtitleBook')!
const publicBook = document.querySelector<HTMLDataElement>('#publicBook')!
const authorBook = document.querySelector<HTMLInputElement>('#authorBook')!
const isbn = document.querySelector<HTMLInputElement>('#isbnBook')!
const editionBook = document.querySelector<HTMLInputElement>('#editionBook')!
const volumeBook = document.querySelector<HTMLInputElement>('#volumeBook')!
const labelDocument = document.querySelector<HTMLLabelElement>('#documents')!
const labelBook = document.querySelector<HTMLLabelElement>('#books')!
const resposta = document.querySelector<HTMLDivElement>('#resposta')!

const documentsInstance: Document[] = []
const booksInstance: Book[] = []

function limpar() {
    resposta.innerText = ''
}

tipo.addEventListener('charge', (e: Event) => {
    e.preventDefault()
    limpar()
    tipo.focus()

    if(tipo.value == 'i') {
        labelBook.hidden = false
        labelDocument.hidden = true
    } else if(tipo.value == 'p') {
        
    }
}





