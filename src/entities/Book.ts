import Person from './Person.js'
import Document from './Document.js'

export class Book extends Document{
    isbn: Number
    edition: Number
    volume: Number

    constructor (isbn: Number, edition: Number, volume: Number, title: String | Number, subtitle: String, publishedAt: Date | Number, author: Person) {
        super(title, subtitle, publishedAt, author)
        this.isbn = isbn
        this.edition =edition
        this.volume = volume
        
    }
} 

export default Book