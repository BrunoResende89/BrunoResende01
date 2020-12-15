import Person from './entities/Person.js'
import Book from './entities/Book.js'
import Periodical from './entities/Periodical.js'
import Gender from './entities/Gender.js'

const Person1 = new Person("Bruno", new Date(1989-12-2), Gender.Male)
const Person2 = new Person("Erika", new Date(1988-22-6), Gender.Female)
const Person3 = new Person("Isabela", new Date(2009-30-11), Gender.Male)

const Book1 = new Book( "A espera de um Milagre", "A sala da Esperança", new Date(2000-6-15), Person1, 1, 1, 1)
const Book2 = new Book( "Senhor dos Aneis", "A sociedade do Anel", new Date(2000-12-2), Person2, 2, 2, 2)
const Book3 = new Book( "O chamado", "A descoberta do poço", 2010-9-5, Person3, 3, 3, 3)

const Periodical1 = new Periodical(615-1812, 1, 2000, Book1.title, Book1.subtitle, Book1.publishedAt, Book1.author)
const Periodical2 = new Periodical(122-1511, 1, 2000, Book2.title, Book2.subtitle, Book2.publishedAt, Book2.author)
const Periodical3 = new Periodical(95-1911, 1, 2010, Book3.title, Book3.subtitle, Book3.publishedAt, Book3.author)

console.log(Person1)
console.log(Person2)
console.log(Person3)

console.log(Book1)
console.log(Book2)
console.log(Book3)

console.log(Periodical1)
console.log(Periodical2)
console.log(Periodical3)