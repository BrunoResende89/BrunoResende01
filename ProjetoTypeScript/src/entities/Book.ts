import Document from './Document.js'

export class Book extends Document{
    isbn: Number
    edition: Number
    volume: Number

    constructor (isbn: Number, edition: Number, volume: Number) {
        super(this.title, this.subtitle, this.publishedAt, this.author)
        this.isbn = isbn
        this.edition = edition
        this.volume = volume
        
    }
} 

export default Book