import Person from './entities/Person.js'
import Book from './entities/Book.js'
import Periodical from './entities/Periodical.js'
import Gender from './entities/Gender.js'

const Person1 = new Person("Bruno", new Date(1989, 12, 2), Gender.Male)
const Person2 = new Person("Erika", new Date(1988, 22, 6), Gender.Female)
const Person3 = new Person("Isabela", new Date(2009, 30, 11), Gender.Male)

const Book1 = new Book("A espera de um milagre","A ultima esperança", new Date(1998, 15, 6), Person1, 1,1, 2)
const Book2 = new Book("Senhor dos Aneis","A Sociedade do Anel", new Date(2000, 12, 2), Person2, 2, 2, 3)
const Book3 = new Book("O chamado","A descoberta do poço", new Date(2010, 9, 5), Person3, 3, 3, 1)

const Periodical1 = new Periodical(Book1.title, Book1.subtitle, new Date(5, 10, 2009), Person1, 1, 1, 3)
const Periodical2 = new Periodical(Book2.title, Book2.subtitle, new Date(5, 10, 2009), Person2, 1, 1, 3)
const Periodical3 = new Periodical(Book3.title, Book3.subtitle, new Date(5, 10, 2009), Person3, 1, 1, 3)

console.log(Person1)
console.log(Person2)
console.log(Person3)

console.log(Book1)
console.log(Book2)
console.log(Book3)

console.log(Periodical1)
console.log(Periodical2)
console.log(Periodical3)