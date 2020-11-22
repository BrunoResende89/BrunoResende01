import Document from './Document.js'

export class Book {
    isbn: Number
    edition: Number
    volume: Number

    constructor (isbn: Number, edition: Number,
     volume: Number) {
         this.isbn = isbn
         this.edition = edition
         this.volume = volume
     }
}

export default Book