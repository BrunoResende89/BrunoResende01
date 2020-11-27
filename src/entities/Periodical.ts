import Document from './Document.js'

export class Periodical extends Document{
    issn: Number
    volume: Number
    issue: Number

   constructor(issn: Number, volume: Number, issue: Number) {
       super()
        this.issn = issn
       this.volume = volume
       this.issue = issue
   }

}


export default Periodical