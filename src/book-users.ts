import Book from "./entities/Book.js"
import Document from "./entities/Document.js"
import Person from "./entities/Person.js"
import Gender from "./entities/Gender.js"
import {capitalize, slugify, trimAll} from "./Functions.js"

 
const tipo = document.querySelector<HTMLSelectElement>('#tipo')!
const form = document.querySelector<HTMLFormElement>('#form')!
const titleDocument = document.querySelector<HTMLInputElement>('#titleDocument')!
const subtitleDocument = document.querySelector<HTMLInputElement>('#subtitleDocument')!
const publicDocument = document.querySelector<HTMLInputElement>('#publicDocument')!
const author = document.querySelector<HTMLSelectElement>('#author')!
const titleBook = document.querySelector<HTMLInputElement>('#titleBook')!
const subtitleBook = document.querySelector<HTMLInputElement>('#subtitleBook')!
const publicBook = document.querySelector<HTMLInputElement>('#publicBook')!
const isbnBook = document.querySelector<HTMLInputElement>('#isbnBook')!
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

    if(tipo.value == 'l') {
        labelBook.hidden = false
        labelDocument.hidden = true
    
    } else if(tipo.value == 'p') {
        labelDocument.hidden = false
        labelBook.hidden = true
    
    } else {
        labelDocument.hidden = true
        labelBook.hidden = false
    }

})

form.addEventListener('submit', (e2: Event) => {
    e2.preventDefault()

    if (tipo.value == 'l') {
        let valorTitleBook = titleBook.value.trim()
        if (!valorTitleBook) {
            resposta.innerText = 'O campo titulo é obrigatório'
            resposta.className = 'negative'
            titleBook.focus()
            return
        }

        if (!subtitleBook.value) {
            resposta.innerText = 'Necessario informar o subtitulo'
            resposta.className = 'negative'
            subtitleBook.focus()
            return
        }

        if (!publicBook.value) {
            resposta.innerText = 'Por favor, informe a data de publicação'
            resposta.className = 'negative'
            publicBook.focus()
            return
        }

        if (!author.value) {
            resposta.innerText = 'Informe o nome do Autor'
            resposta.className = 'negative'
            author.focus()
            return
        }

        const regexAuthor = /\w+\s\w+/g
        if (!regexAuthor.test(author.value)) {
            resposta.innerText = 'Preencha com seu nome !'
            resposta.className = 'negative'
            author.focus()
            return
        }

        if (!isbnBook.value) {
            resposta.innerText = 'Numero de registro obrigatório'
            resposta.className = 'negative'
            isbnBook.focus()
            return
        }

        if (!editionBook.value) {
            resposta.innerText = 'Informe a edição do livro'
            resposta.className = 'negative'
            editionBook.focus()
            return
        }

        if (!volumeBook.value) {
            resposta.innerText = 'Qual o volume do livro ?'
            resposta.className = 'negative'
            volumeBook.focus()
            return
        }

        try {
            const person = persons[parseInt(author.value, 10)]

            let book = new Book(slugify(capitalize(trimAll(titleB.value))), slugify(capitalize(trimAll(subTituloB.value))), publicB.valueAsDate!, person, isbn.valueAsNumber, editionB.valueAsNumber, volumB.valueAsNumber)

            booksInstance.push(book)

            localStorage.setItem('Book', JSON.stringify(booksInstance))

        } catch (error: any) {
            console.error(error)
            resposta.innerText = "Opa, tivemos um problema. :("
        }

        } else {

            if (!titleDocument.value) {
            resposta.innerText = 'Informe o titulo do documento !'
            resposta.className = 'negative'
            titleDocument.focus()
            return
        }

        if (!subtitleDocument.value) {
            resposta.innerText = 'O Sub-titulo deve ser informado'
            resposta.className = 'negative'
            subtitleDocument.focus()
            return
        }

        if (!author.value) {
            resposta.innerText = 'Por gentileza informar o nome do autor ?'
            resposta.className = 'negative'
            author.focus()
            return
        }

        try {
            const person = persons[parseInt(author.value, 10)]
            let periodic = new Document(titleDocument.value, subtitleDocument.value, publicDocument.valueAsNumber, author.value) 
    
            documentsInstance.push(periodic)

            localStorage.setItem('Document', JSON.stringify(documentsInstance))

            showDocument()

        } catch (error: any) {
            console.error(error)
            resposta.innerText = "Falha no carregamento, atualize a página! "
        }
    }   

        resposta.innerText = 'Cadastro realizado com sucesso!!'
        resposta.className = 'positive'

    })

        let persons: Array<Person> = JSON.parse(localStorage.getItem('Persons')!)

        
const sortAutores = (a:{name: string, birth: Date, gender: Gender}, b:{name: string, birth: Date, gender: Gender}) => a.name.localeCompare(b.name)

    let newArray1 = persons.sort(sortAutores)
    let i = 0

for (const person of newArray1){
    const option = document.createElement('option')
    option.value = i.toString()
    option.innerText = person.name
    author.append(option)
    i++
}


function showBooks() {
    
    let table = document.querySelector('table')

    if (!table) {
        table = document.createElement('table')
        document.body.append(table)
    }

    let lines = ''
    const sortBooks = (a:Book, b:Book) => a.title.localeCompare(b.title)

    let newArray2 = [...booksInstance].sort(sortBooks)
    console.log(`Array original: ${booksInstance}`)
    console.log(`Array ordenado R${newArray2}`)
 
    for (const books of newArray2){
        lines += `
        <tr>
            <td>${ books.title }</td>
            <td>${ books.subtitle }</td>
            <td>${ books.publishedAt }</td>
            <td>${ books.author.name }</td>
            <td>${ books.edition }</td>
            <td>${ books.volume }</td>
        </tr>
        `
    }

    table.innerHTML = `
    <thead>
        <tr>
            <th>Titulo</th>
            <th>SubTitulo</th>
            <th>Ano_publicação</th>
            <th>Autor</th>
            <th>Edição</th>
            <th>Volume</th>
        </tr>
    </thead>
    <tbody>
        ${lines}
    </tbody>
    `
}


function showDocuments() {
    
    let table2 = document.querySelector('table')

    if (!table2) {
        table2 = document.createElement('table')
        document.body.append(table2)
    }

    let lines2 = ''
    const sortDocuments = (a:Document, b:Document) => a.title.localeCompare(b.title)

    let newArray3 = [...documentsInstance].sort(sortDocuments)
    console.log(`Array original: ${documentsInstance}`)
    console.log(`Array ordenado R${newArray3}`)
 
    for (const docs of newArray3){
        lines2 += `
        <tr>
            <td>${ docs.title }</td>
            <td>${ docs.subtitle }</td>
            <td>${ docs.publishedAt }</td>
            <td>${ docs.author.name }</td>
        </tr>
        `
    }

    table2.innerHTML = `
    <thead>
        <tr>
            <th>Titulo</th>
            <th>SubTitulo</th>
            <th>Ano_publicação</th>
            <th>Autor</th>
        </tr>
    </thead>
    <tbody>
        ${lines2}
    </tbody>
    `
}