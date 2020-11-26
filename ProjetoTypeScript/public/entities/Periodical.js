import Document from './Document.js';
export class Periodical extends Document {
    constructor(issn, volume, issue) {
        super();
        this.issn = issn;
        this.volume = volume;
        this.issue = issue;
    }
}
export default Periodical;
