import Person from './Person.js'

export class Document {
    title: String
    subtitle: String
    publishedAt : Date | Number
    author: Person 

    constructor ( title: String, subtitle: String, publishedAt: Date | Number, author: Person ) {
        this.title = title
        this.subtitle = subtitle
        this.publishedAt = publishedAt
        this.author = author
    }
}

export default Document