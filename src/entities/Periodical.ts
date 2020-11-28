import Person from './Person.js'
import Document from './Document.js'

export class Periodical extends Document{
    issn: Number
    volume: Number
    issue: Number

    constructor (issn: Number, volume: Number, issue: Number, title: String, subtitle: String, publishedAt: Date | Number, author: Person) {
        super(title, subtitle, publishedAt, author)
        this.issn = issn
        this.volume = volume
        this.issue = issue
   }

}


export default Periodical